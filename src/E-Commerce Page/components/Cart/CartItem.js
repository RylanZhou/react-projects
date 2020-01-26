import React from 'react'
import PropTypes from 'prop-types'

import { TableRow, TableCell, ButtonGroup, Button } from '@material-ui/core'
import { MdDelete, MdExposureNeg1, MdExposurePlus1 } from 'react-icons/md'

import { ProductConsumer } from '../../Context'

export default function CartItem({ item }) {
  const { id, title, img, price, total, count } = item
  return (
    <ProductConsumer>
      {(value) => (
        <TableRow>
          <TableCell>
            <img className="img" src={img} alt="product" />
          </TableCell>
          <TableCell className="name">{title}</TableCell>
          <TableCell className="price">$ {price}</TableCell>
          <TableCell>
            <ButtonGroup size="large">
              <Button onClick={() => value.handleIncrement(id, -1)}>
                <MdExposureNeg1 />
              </Button>
              <Button disabled>{count}</Button>
              <Button onClick={() => value.handleIncrement(id, 1)}>
                <MdExposurePlus1 />
              </Button>
            </ButtonGroup>
          </TableCell>
          <TableCell>
            <Button
              className="delete-btn"
              variant="text"
              size="large"
              onClick={() => value.handleRemove(id)}
            >
              <MdDelete />
            </Button>
          </TableCell>
          <TableCell>$ {total}</TableCell>
        </TableRow>
      )}
    </ProductConsumer>
  )
}

CartItem.propTypes = {
  item: PropTypes.object
}
