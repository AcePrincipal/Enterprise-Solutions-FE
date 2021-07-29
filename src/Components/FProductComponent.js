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

  renderTotal(){
    if(this.props.total !== 0){ 
    return <>
      <h2>Total: *${this.props.total}k</h2>
      <p>*Contact us to get a more accurate quote based on your company.</p>
      </>
  }

  }

  render() {
    return (
      <div className="fproduct" id="fprod">
          {this.renderProducts()}
          {this.renderTotal()}
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

export default connect(mapStateToProps, {fetchProducts})(FProductComponent)