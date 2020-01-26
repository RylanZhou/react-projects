import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { getProductList } from './mock'

const TAX_RATE = 0.07

const ProductContext = React.createContext()

class ProductProvider extends Component {
  state = {
    products: [],
    cart: [],
    detail: {},
    itemDialogOpen: false,
    subTotalPrice: 0,
    tax: TAX_RATE,
    totalPrice: 0
  }

  async componentDidMount() {
    try {
      // Deep clone
      const products = (await getProductList()).map((each) => ({ ...each }))
      // const detail = await getProductDetail()
      this.setState({
        products,
        cart: products.filter((each) => each.inCart)
        // detail
      })
    } catch (error) {
      console.log(error)
    }
  }

  addToCart = (id) => {
    const targetIndex = this.state.products.findIndex((each) => each.id === id)
    const stateProductsCopy = [...this.state.products]
    const targetProduct = stateProductsCopy[targetIndex]
    targetProduct.inCart = true
    targetProduct.count = 1
    targetProduct.total = targetProduct.count * targetProduct.price
    this.setState(
      () => ({
        products: stateProductsCopy,
        cart: [...this.state.cart, targetProduct]
      }),
      // Callback
      () => {
        this.calculateBalance()
      }
    )
  }

  handleRemove = (id) => {
    if (!id) {
      this.setState(
        () => ({
          cart: []
        }),
        () => {
          this.calculateBalance()
          this.componentDidMount()
        }
      )
    } else {
      const productsCopy = [...this.state.products]
      const targetProductIndex = productsCopy.findIndex(
        (each) => each.id === id
      )
      const targetProduct = productsCopy[targetProductIndex]
      targetProduct.inCart = false
      targetProduct.total = 0
      targetProduct.count = 0
      this.setState(
        () => ({
          cart: [...this.state.cart].filter((each) => each.id !== id),
          products: productsCopy
        }),
        () => {
          this.calculateBalance()
        }
      )
    }
  }

  getProductDetail = (id) => {
    this.setState({
      detail: this.state.products.find((each) => each.id === id)
    })
  }

  openItemDialog = (id) => {
    this.getProductDetail(id)
    this.setState({
      itemDialogOpen: true
    })
  }

  closeItemDialog = () => {
    this.setState({
      itemDialogOpen: false
    })
  }

  handleIncrement = (id, direction) => {
    const cartCopy = [...this.state.cart]
    const targetCartItem = cartCopy.find((each) => each.id === id)
    if (targetCartItem.count + direction <= 0) {
      return
    }
    targetCartItem.count += direction
    targetCartItem.total = targetCartItem.price * targetCartItem.count
    this.setState(
      () => ({
        cart: cartCopy
      }),
      () => {
        this.calculateBalance()
      }
    )
  }

  calculateBalance = () => {
    const subTotalPrice = this.state.cart.reduce(
      (total, each) => total + each.total,
      0
    )
    const totalPrice = parseFloat(
      (subTotalPrice * (1 + this.state.tax)).toFixed(2)
    )
    this.setState({
      subTotalPrice,
      totalPrice
    })
  }

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          getProductDetail: this.getProductDetail,
          openItemDialog: this.openItemDialog,
          closeItemDialog: this.closeItemDialog,
          handleIncrement: this.handleIncrement,
          handleRemove: this.handleRemove
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
