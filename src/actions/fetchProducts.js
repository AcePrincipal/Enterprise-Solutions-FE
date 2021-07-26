import axios from 'axios';

export const fetchProducts = () => async(dispatch) => {
    const response = await axios.get("http://localhost:3000/products")
    //   this.setState({
    //     products: productData.map(product => product.attributes)
    //   })
    dispatch({type: "FETCH_PRODUCTS", payload: response.data})
}