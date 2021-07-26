import React, { Component } from 'react';
import './App.css';
import WelcomeComponent from './Components/WelcomeComponent';
import AboutUsComponent from './Components/AboutUsComponent';
import ContactUsComponent from './Components/ContactUsComponent';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './Components/NavBar';
import ProductsComponent from './Components/ProductsComponent'
import ReviewsComponent from './Components/ReviewsComponent'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <NavBar/> 
        <Route exact path="/" render={() => <WelcomeComponent/>} />
        <Route exact path="/AboutUs" render={() => <AboutUsComponent/>} />
        <Route exact path="/ContactUs" render={() => <ContactUsComponent/>} />
        <Route exact path="/Products" render={() => <ProductsComponent/>} />
        <Route exact path="/Reviews" render={() => <ReviewsComponent/>} />
      </div>
      </Router>
    );
  }
};

export default App;
