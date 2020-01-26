import React from 'react'
import PropTypes from 'prop-types'

import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from '@material-ui/core'
import CartItem from './CartItem'

export default function CartTable({ data }) {
  return (
    <Table>
      <TableHead className="table-head">
        <TableRow>
          <TableCell>Product</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Quantity</TableCell>
          <TableCell>Remove</TableCell>
          <TableCell>Total</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((each) => (
          <CartItem key={each.id} item={each} />
        ))}
      </TableBody>
    </Table>
  )
}

CartTable.propTypes = {
  data: PropTypes.array
}
