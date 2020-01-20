import React from 'react'
import PropTypes from 'prop-types'

import { Button } from '@material-ui/core'
import { FaPencilAlt, FaTrash } from 'react-icons/fa'

export default function ExpenseItem({ id, charge, amount, handleDelete, handleEdit }) {
  return (
    <li className="expense-item">
      <span className="charge">{charge}</span>
      <span className="amount">$ {amount}</span>
      <Button color="primary" onClick={() => handleEdit(id)}>
        <FaPencilAlt />
      </Button>
      <Button color="secondary" onClick={() => handleDelete(id)} >
        <FaTrash />
      </Button>
    </li>
  )
}

ExpenseItem.propTypes = {
  id: PropTypes.string,
  charge: PropTypes.string,
  amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleDelete: PropTypes.func,
  handleEdit: PropTypes.func
}
