import React, { Component } from 'react';
import moment from 'moment';
import './Timer.css';
import TimerClock from './TimerClock';
import TimerConfig from './TimerConfig';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showConfig: true,
            status: 'STOP',
            timer: {
                hours: 0,
                minutes: 0,
                seconds: 0
            },
            runningTimer: '00:00:00'
        }
    }

    startTimer(timer){
        const time = {hour: timer.hours, minute: timer.minutes, second: timer.seconds}
        const runningTimer = moment(time).format('HH:mm:ss');

        this.setState({
            timer,
            showConfig: false, 
            status: 'START',
            runningTimer: runningTimer
        });

        this.countdown();
    }

    countdown(){
        this.timeout = setTimeout(() => { 
            if(this.state.runningTimer !== '00:00:00'){
                if(this.state.status === 'START'){
                    let runningTimer = moment(this.state.runningTimer, 'HH:mm:ss').subtract(1, 'seconds').format('HH:mm:ss');
                    this.setState({
                        runningTimer: runningTimer
                    });
                    this.countdown();
                }
            } else {
                this.setState({
                    status: 'STOP'
                })
            }
        }, 1000);
    }


    pauseTimer(){
        clearTimeout(this.timeout);
        this.setState({status: 'PAUSE'});
    }
    unpauseTimer(){
        this.setState({status: 'START'});
        this.countdown();
    }
    stopTimer(){
        clearTimeout(this.timeout);
        this.setState({status: 'STOP'});
    }
    restartTimer(){
        clearTimeout(this.timeout);
        this.startTimer(this.state.timer);
    }

    render() { 
        return (
            <div>
                {this.state.showConfig
                    ? <TimerConfig timer={this.state.timer} startTimer={(timer)=>this.startTimer(timer)}/>
                    : <TimerClock 
                        runningTimer={this.state.runningTimer} 
                        status={this.state.status}
                        startTimer={()=>this.startTimer()}
                        pauseTimer={()=>this.pauseTimer()}
                        unpauseTimer={()=>this.unpauseTimer()}
                        stopTimer={()=>this.stopTimer()}
                        restartTimer={()=>this.restartTimer()}
                    />
                }
            </div>
        )
        
    }
}
 
export default Timer;