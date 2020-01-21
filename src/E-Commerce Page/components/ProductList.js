import React from 'react'

import { ProductConsumer } from '../Context'
import Product from './Product'

export default function ProductList() {
  return (
    <div className="product-list">
      <h1 className="title">Our Products</h1>
      <div className="list">
        <ProductConsumer>
          {value =>
            value.products.map(each => <Product key={each.id} product={each} />)
          }
        </ProductConsumer>
      </div>
    </div>
  )
}
