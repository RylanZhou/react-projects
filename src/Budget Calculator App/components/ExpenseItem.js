import React from 'react'
import PropTypes from 'prop-types'

import { Button } from '@material-ui/core'
import { FaPencilAlt, FaTrash } from 'react-icons/fa'

export default function ExpenseItem({ charge, amount }) {
  return (
    <li className="expense-item">
      <span className="charge">{charge}</span>
      <span className="amount">$ {amount}</span>
      <Button color="primary">
        <FaPencilAlt />
      </Button>
      <Button color="secondary">
        <FaTrash />
      </Button>
    </li>
  )
}

ExpenseItem.propTypes = {
  charge: PropTypes.string,
  amount: PropTypes.number
}
