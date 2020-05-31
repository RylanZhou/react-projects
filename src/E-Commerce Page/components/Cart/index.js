import React from 'react'

import { ProductConsumer } from '../../Context'
import CartTable from './CartTable'
import EmptyCart from './EmptyCart'
import CartBalance from './CartBalance'

export default function Cart() {
  return (
    <ProductConsumer>
      {(value) => {
        const { cart } = value
        if (!cart.length) {
          return <EmptyCart />
        }
        return (
          <React.Fragment>
            <div className="cart">
              <h1 className="title">Your Cart</h1>
              <CartTable data={cart} />
              <CartBalance
                subTotal={value.subTotalPrice}
                tax={value.tax}
                total={value.totalPrice}
                handleRemove={value.handleRemove}
              />
            </div>
          </React.Fragment>
        )
      }}
    </ProductConsumer>
  )
}
