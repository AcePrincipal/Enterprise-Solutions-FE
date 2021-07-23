import React, { Component } from 'react'; 

export default class FProductComponent extends Component {
  state = { products: []}

  componentDidMount(){
    fetch("http://localhost:3000/products")
    .then(res => res.json())
    .then(productData => {
      this.setState({
        products: productData.map(product => product.attributes)
      })
    })
  }

  render() {
    return (
      <div className="fproduct" id="fprod">
        <p> {this.state.products} </p>
        <h3> PRODUCT 2 </h3>
        <h3> PRODUCT 3 </h3>
        
      </div>
    );
  }
}