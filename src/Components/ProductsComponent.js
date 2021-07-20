import React, { Component } from 'react'; 
import FProductComponent from './FProductComponent';

export default class ProductsComponent extends Component {
  render() {
    return (
      <div className="products" id="prod">
        <h1> PRODUCTS </h1>
        <FProductComponent/>
      </div>
    );
  }
}