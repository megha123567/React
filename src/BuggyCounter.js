import React from 'react';

class BuggyCounter extends React.Component {

  state = {
    counter: 0,
  };

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    if (this.state.counter === 2) {
      // Simulate an error!
      throw new Error('Error.');
    }
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default BuggyCounter;

