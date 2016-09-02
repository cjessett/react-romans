import React, { Component } from 'react';
import toRoman from './roman'

class Converted extends Component {
  render() {
    return (
      <div>
        <h2>Roman Numeral</h2>
        <h1>{toRoman(this.props.userInput)}</h1>
      </div>
    )
  }
}

export default Converted
