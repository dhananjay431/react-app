import React, { Component } from 'react';
import { render } from 'react-dom';

export default class App2 extends Component {
  constructor() {
    super();
    this.state = {
      name: 'R3'
    };
  }

  render() {
    return (
      <div>
        <p>
          Start editing to see some magic happen :) { this.state.name}
        </p>
      </div>
    );
  }
}