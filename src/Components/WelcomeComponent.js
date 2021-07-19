import React, { Component } from 'react'; 

export default class WelcomeComponent extends Component {
  render() {
    return (
      <div className="welcome" id="wel">
        <h1> Welcome to Enterprise Solutions!</h1>
        <p>Welcome to Enterprise Solutions, where you can find all of your ideal enterpise solutions and future assets!
          Here we offer three main enterprise solutions: Proprietary in-house Software, Enterprise Database Installations,
           and Local Networking! Select and customize the solutions you are interested in, then contact us with your 
           selection, and we'll make a deal that's right for you! Please use the navigation bar, found at the top of each 
           page to navigate the site. 
        </p>
      </div>
    );
  }
}