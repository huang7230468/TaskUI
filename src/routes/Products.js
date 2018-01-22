import React , { Component } from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';

@connect(
  state => ({
    products : state.products,
  })
)

 export default class Products extends Component{

   state = {
    loading :true ,
   }

  componentDidMount() {
    this.props.dispatch({
      type: 'products/list',
    }).then(() => this.setState({ loading: false }));
  }

  handleDelete (id){
     const { dispatch } = this.props;
      dispatch({
        type: 'products/delete',
          payload: id,
      });
  }

  render(){
    const { products } = this.props ;
    const {productList} = products ;
     return (
      <div>
        <h2>List of Products</h2>
        <ProductList onDelete={this.handleDelete} products={productList.data ?  productList.data : productList} loading={this.state.loading}/>
      </div>
      );
  }
  


}

