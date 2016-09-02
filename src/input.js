import React, { Component } from 'react';
import Converted from './converted'

class Input extends Component {
  constructor() {
    super();
    this.state = {userInput: ""}
  }

  handleUserInput(event) {
    this.setState({userInput: event.target.value});
  };

  render() {
    return(
      <div id="container">
        <input type="text"
               onChange={this.handleUserInput.bind(this)}
               value={this.state.userInput}
               maxLength="5" />
        <Converted userInput={this.state.userInput} />
      </div>
    )
  }
}

export default Input
