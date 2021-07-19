import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WelcomeComponent from './Components/WelcomeComponent';
import AboutUsComponent from './Components/AboutUsComponent';
import ContactUsComponent from './Components/ContactUsComponent';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './Components/NavBar';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <NavBar/> 
        <Route exact path="/" render={() => <WelcomeComponent/>} />
        <Route exact path="/AboutUs" render={() => <AboutUsComponent/>} />
        <Route exact path="/ContactUs" render={() => <ContactUsComponent/>} />
        {/* <Route path='/AboutUs' render={routerProps => <WelcomeComponent {...routerProps} movies={this.state.movies}/>} /> */}
        {/* <WelcomeComponent/>
        <AboutUsComponent/>
        <ContactUsComponent/> */}
      </div>
      </Router>
    );
  }
};

export default App;
