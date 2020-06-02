import React, {Component} from 'react';
import './Timer.css';

class TimerConfig extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            hours: props.timer.hours,
            minutes: props.timer.minutes,
            seconds: props.timer.seconds
        };
    }

    render() { 
        return (
            <div className="TimerConfig">
                <div  className="TimeInput">
                    <label htmlFor="hours">Horas</label>
                    <input type="text" name="hours" id="HoursConfig" value={this.state.hours} onChange={(e) => this.setState({hours: e.target.value})}></input>
                </div>
                <div className="TimeInput">
                    <label htmlFor="minutes">Minutos</label>
                    <input type="text" name="minutes" id="MinutesConfig" value={this.state.minutes} onChange={(e) => this.setState({minutes: e.target.value})}></input>
                </div>
                <div className="TimeInput">
                    <label htmlFor="seconds">Segundos</label>
                    <input type="text" name="seconds" id="SecondsConfig" value={this.state.seconds} onChange={(e) => this.setState({seconds: e.target.value})}></input>
                </div>
                <input type="button" className="startTimer" onClick={() => this.props.startTimer(this.state)} value="Iniciar"></input>
            </div>
        );
    }
}

 
export default TimerConfig;