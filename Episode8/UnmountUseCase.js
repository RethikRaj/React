import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count : 0,
      time: new Date().toLocaleTimeString(),
    };
  }

  componentDidMount() {
    // Start an interval to update the time every second
    this.intervalId = setInterval(() => {
        console.log("SetInterval Executed");
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    // Older Way of Updating UI based on dependencies
    if(this.state.count !== prevState.count){
      console.log("Count Updated");
    }

  }

  componentWillUnmount() {
    // Clear the interval when the component is about to unmount
    console.log("Unmount Use Case Component Will Unmount and interval is cleared");
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div>
        <h1>Current Time</h1>
        <p>{this.state.time}</p>
        <p>{`Count : ${this.state.count}`} <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button></p>
      </div>
    );
  }
}

export default Clock;
