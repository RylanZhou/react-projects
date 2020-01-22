import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { getProductDetail, getProductList } from './mock'

const ProductContext = React.createContext()

class ProductProvider extends Component {
  state = {
    products: [],
    cart: [],
    detail: {}
  }

  async componentDidMount() {
    try {
      // Deep clone
      const products = (await getProductList()).map(each => ({ ...each }))
      const detail = await getProductDetail()
      this.setState({
        products,
        detail
      })
    } catch (error) {
      console.log(error)
    }
  }

  addToCart = id => {
    const targetIndex = this.state.products.findIndex(each => each.id === id)
    const stateProductsCopy = [...this.state.products]
    stateProductsCopy[targetIndex].inCart = true
    stateProductsCopy[targetIndex].count = 1
    this.setState({
      products: stateProductsCopy,
      cart: [...this.state.cart, stateProductsCopy[targetIndex]]
    })
  }

  getProductDetail = id => {
    this.setState({
      detail: this.state.products.find(each => each.id === id)
    })
  }

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          getProductDetail: this.getProductDetail
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
