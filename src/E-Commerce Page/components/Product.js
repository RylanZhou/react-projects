import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { Card, CardContent, CardActions, Button } from '@material-ui/core'
import { MdAddShoppingCart } from 'react-icons/md'

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product
    return (
      <Card className="product">
        <CardContent>
          <div className="img-container">
            <img src={`./${img}`} alt="product" />
            {inCart ? (
              <Button className="button" variant="contained" disabled>
                In Cart
              </Button>
            ) : (
              <Button className="button" variant="contained" color="primary">
                <MdAddShoppingCart />
              </Button>
            )}
          </div>
          <div className="basic-info">
            <span className="name">{title}</span>
            <span className="price">$ {price}</span>
          </div>
        </CardContent>
        <CardActions>View more</CardActions>
      </Card>
    )
  }
}

Product.propTypes = {
  product: PropTypes.object
}
