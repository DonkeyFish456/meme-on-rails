import React, { Component } from 'react';
import Main from './components/Main';

const defaultStyles = {
  main: {
    overflow: 'hidden',
    position: 'relative',
    padding: '0px',
    boxSizing: 'border-box',
    width: '100%',
    height: '100%'
  }
};

class App extends Component {
  render() {
    return (
      <div style={defaultStyles.main}>
        <Main />
      </div>
    );
  }
}

export default App;
