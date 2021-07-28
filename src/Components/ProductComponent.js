import React, { Component } from 'react'; 
import {changeTotal} from '../actions/changeTotal'
import {connect} from 'react-redux';

class ProductComponent extends Component {

  handleButton = event => {
    event.preventDefault()
    this.props.changeTotal(this.props.product.total)
    document.getElementById(this.props.product.id).remove()
  }

  render() {
    return (
      <div className="product" id="prod">
        <img src={this.props.product.pic} alt="Product" width="90" height="60"></img>
        <h2>{this.props.product.name}</h2>
        <h4>{this.props.product.description}</h4>
        <p>{this.props.product.option1}</p>
        <p>{this.props.product.option2}</p>
        <p>{this.props.product.option3}</p>
        <h4>Total: ${this.props.product.total}k</h4>
        <button id={this.props.product.id} onClick={this.handleButton}>Add to Cart!</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    total: state.products.total
  }
}

export default connect(mapStateToProps, {changeTotal})(ProductComponent)