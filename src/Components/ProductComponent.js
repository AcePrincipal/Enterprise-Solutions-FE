import React, { Component } from 'react'; 

export default class ProductComponent extends Component {

  render() {
    return (
      <div className="product" id="prod">
        <h2>{this.props.product.name}</h2>
        <img src={this.props.product.url} alt="Product" width="500" height="600"></img>
        <h4>{this.props.product.description}</h4>
        <p>{this.props.product.option1}</p>
        <p>{this.props.product.option2}</p>
        <p>{this.props.product.option3}</p>
      </div>
    );
  }
}