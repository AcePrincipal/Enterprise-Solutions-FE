import React, { Component } from 'react'; 
import FProductComponent from './FProductComponent';

export default class ProductComponent extends FProductComponent {
  state = { product: []}

  render() {
    return (
      <div className="welcome" id="wel">
        
      </div>
    );
  }
}