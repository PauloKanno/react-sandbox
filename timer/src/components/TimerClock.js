import React from 'react';
import './Timer.css';

function TimerClock(props) { 
    return (
        <div> 
            <h1>{props.runningTimer}</h1>
            <input type="button" className="stopTimer" onClick={() => props.stopTimer()} value="Parar"></input>
            {
                props.status === 'PAUSE' 
                ? <input type="button" className="unpauseTimer" onClick={() => props.unpauseTimer()} value="Continuar"></input>
                : <input type="button" className="pauseTimer" onClick={() => props.pauseTimer()} value="Pausar"></input>
            }
            
            <input type="button" className="restartTimer" onClick={() => props.restartTimer()} value="Reiniciar"></input>
        </div>
    );
    
}

 
export default TimerClock;