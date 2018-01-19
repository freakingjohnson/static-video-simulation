import React, { Component } from 'react';
import Videos from './components/Videos';
import './css/app.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1 className="header">
          sup
        </h1>
        <div>
          <div>
            <Videos />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
