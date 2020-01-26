import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../Context'
import { Dialog, Button, DialogContent } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

export default class ItemDialog extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { closeItemDialog, itemDialogOpen } = value
          const { title, price, img } = value.detail
          if (!itemDialogOpen) return null
          return (
            <Dialog
              className="item-dialog"
              open={itemDialogOpen}
              onClose={closeItemDialog}
            >
              <DialogContent>
                <Alert severity="success">Item Added to Cart!</Alert>
                <div className="dialog-container">
                  <img src={img} alt="product" />
                  <h3>{title}</h3>
                  <h3>Price: $ {price}</h3>
                  <Button
                    className="btn"
                    variant="contained"
                    color="primary"
                    onClick={closeItemDialog}
                  >
                    Continue Shopping
                  </Button>
                  <br />
                  <Link to="/cart">
                    <Button
                      className="btn"
                      variant="contained"
                      onClick={closeItemDialog}
                    >
                      Go to Cart
                    </Button>
                  </Link>
                </div>
              </DialogContent>
            </Dialog>
          )
        }}
      </ProductConsumer>
    )
  }
}
