import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WelcomeComponent from './WelcomeComponent';
import AboutUsComponent from './AboutUsComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WelcomeComponent/>
        <AboutUsComponent/>
      </div>
    );
  }
};

export default App;
