import React, { Component } from 'react';

class CanvasTwo extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <canvas width="500" height="500" style={{ border: '1px solid red', width: '500px', height: '500px' }}>
        Your browser does not support a canvas tag
      </canvas>
    );
  }
}

export default CanvasTwo;
