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
        <h1 className='footer'>
          <button>
            random thing
          </button>
        </h1>
      </div>
    );
  }
}

export default App;
