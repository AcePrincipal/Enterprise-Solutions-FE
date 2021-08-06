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
      <div className="product card mb-3" id="prod">
        <div class="row g-0">
          <div class="col-md-4 image">
            <img class="img-fluid rounded-start" src={this.props.product.pic} alt="Product" ></img>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{this.props.product.name}</h5>
              <p class="card-text">{this.props.product.description}</p>
              <p class="card-text"><small class="text-muted">{this.props.product.option1}</small></p>
              <p class="card-text"><small class="text-muted">{this.props.product.option2}</small></p>
              <p class="card-text"><small class="text-muted">{this.props.product.option3}</small></p>
              <h4>Total: ${this.props.product.total}k</h4>
              <button id={this.props.product.id} className="btn btn-dark" onClick={this.handleButton}>Add to Cart!</button>
            </div>
          </div>
          
        </div>
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