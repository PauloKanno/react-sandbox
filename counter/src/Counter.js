import React from 'react';

export default class Counter extends React.Component{
    constructor(){
        super();
        this.state = {
            value: 0
        };
    }

    decrement = () => {
        this.setState({
            'value': this.state.value - 1
        });
    }

    increment = () => {
        this.setState({
            'value': this.state.value + 1
        });
    }

    render() {
        return (
          <div className="Counter">
            <div className="Counter-value">
                <h1>{this.state.value}</h1>
            </div>
            <div className="Counter-button">
                <button onClick={(e) => this.decrement()}>-</button>
                <button onClick={(e) => this.increment()}>+</button>
            </div>
          </div>
        );
      }
}
