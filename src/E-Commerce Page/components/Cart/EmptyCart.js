import React from 'react'

import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

export default function EmptyCart() {
  return (
    <div className="empty-cart">
      <h1>Your Cart is Currently Empty.</h1>
      <Link to="/">
        <Button variant="contained" color="primary">
          Product List
        </Button>
      </Link>
    </div>
  )
}
