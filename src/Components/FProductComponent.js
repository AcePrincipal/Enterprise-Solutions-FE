import React, { Component } from 'react'; 
import {connect} from 'react-redux';
import {fetchProducts} from '../actions/fetchProducts';
import ProductComponent from './ProductComponent';

class FProductComponent extends Component {

  componentDidMount(){
    this.props.fetchProducts()
  }

  renderProducts(){
    if (!this.props.products.length){
      return <div>Loading...</div>
    }
    return this.props.products.map(product => <ProductComponent product={product}/>)
  }

  render() {
    return (
      <div className="fproduct" id="fprod">
        {this.renderProducts()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.products 
  }
}

export default connect(mapStateToProps, {fetchProducts})(FProductComponent)