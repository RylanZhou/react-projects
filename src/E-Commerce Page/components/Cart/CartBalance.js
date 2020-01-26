import React from 'react'
import PropTypes from 'prop-types'

import { Button } from '@material-ui/core'

export default function CartBalance({ subTotal, tax, total, handleRemove }) {
  return (
    <div className="cart-balance">
      <Button
        variant="contained"
        color="secondary"
        onClick={() => handleRemove()}
      >
        Clear All
      </Button>
      <h3 className="balance">
        Subtotal: <strong>$ {subTotal}</strong>
        <br />
        Tax: <strong>{(tax * 100).toFixed(2)} %</strong>
        <br />
        Total: <strong>$ {total}</strong>
      </h3>
    </div>
  )
}

CartBalance.propTypes = {
  subTotal: PropTypes.number,
  tax: PropTypes.number,
  total: PropTypes.number,
  handleRemove: PropTypes.func
}
