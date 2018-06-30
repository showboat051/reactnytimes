import React, { Component } from 'react';

import './App.css';
// import Results from './components/Results/Results';
//API KEY af55c8fb84794b3b99d16b87b583a79b

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the New York TImes... for Scrubs!</h1>
          <p>Click below to read new news</p>
        </header>
        <h1>Results are here</h1>
        {/* <p> {Results} </p> */}
      </div>
    );
  }
}

export default App;
