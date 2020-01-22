import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { Card, CardContent, CardActions, Button } from '@material-ui/core'
import { MdAddShoppingCart } from 'react-icons/md'

import { ProductConsumer } from '../Context'

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
              <ProductConsumer>
                {value => (
                  <Button
                    className="button"
                    variant="contained"
                    color="primary"
                    onClick={() => value.addToCart(id)}
                  >
                    <MdAddShoppingCart />
                  </Button>
                )}
              </ProductConsumer>
            )}
          </div>
          <div className="basic-info">
            <span className="name">{title}</span>
            <span className="price">$ {price}</span>
          </div>
        </CardContent>
        <CardActions className="action">
          <ProductConsumer>
            {value => (
              <Link to="/detail">
                <Button
                  color="primary"
                  onClick={() => value.getProductDetail(id)}
                >
                  View more
                </Button>
              </Link>
            )}
          </ProductConsumer>
        </CardActions>
      </Card>
    )
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
}
