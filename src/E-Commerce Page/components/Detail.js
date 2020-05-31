import React from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@material-ui/core'
import { ProductConsumer } from '../Context'

export default function Detail() {
  return (
    <ProductConsumer>
      {value => {
        const { id, company, img, info, price, title, inCart } = value.detail
        return (
          <div className="product-detail">
            <h1 className="title">{title}</h1>
            <div className="row">
              <div className="left">
                <img src={img} alt="product" />
              </div>
              <div className="right">
                <h2>Model: {title}</h2>
                <h4>Made By: {company}</h4>
                <h4 className="price">Price: $ {price}</h4>
                <h5>some info about the product:</h5>
                <p>{info}</p>
                <div className="button-group">
                  <Link to="/">
                    <Button variant="contained" color="primary">
                      Back to products
                    </Button>
                  </Link>
                  {!inCart && (
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => value.addToCart(id)}
                    >
                      Add to cart
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )
      }}
    </ProductConsumer>
  )
}
