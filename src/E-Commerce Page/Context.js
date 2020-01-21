import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { getProductDetail, getProductList } from './mock'

const ProductContext = React.createContext()

class ProductProvider extends Component {
  state = {
    products: [],
    detail: {}
  }

  handleDetail = () => {}

  addToCart = () => {}

  async componentDidMount() {
    try {
      const products = await getProductList()
      this.setState({
        products
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

ProductProvider.propTypes = {
  children: PropTypes.object
}

const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer }
