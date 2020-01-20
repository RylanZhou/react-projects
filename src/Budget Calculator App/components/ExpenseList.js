import React from 'react'
import PropTypes from 'prop-types'

import { Button } from '@material-ui/core'
import { FaTrash } from 'react-icons/fa'

import ExpenseItem from './ExpenseItem'

export default function ExpenseList({ expenses, handleEdit, handleClearAll, handleDeleteSingle }) {
  return (
    <div className="expense-list">
      <ul className="list">
        {expenses.map(each => (
          <ExpenseItem
            key={each.id}
            {...each}
            handleDelete={handleDeleteSingle}
            handleEdit={handleEdit} />
        ))}
      </ul>
      {expenses.length && (
        <Button
          color="secondary"
          variant="contained"
          disableElevation
          onClick={handleClearAll}>
          Clear&nbsp;<FaTrash />
        </Button>
      )}
    </div>
  )
}

ExpenseList.propTypes = {
  expenses: PropTypes.array,
  handleEdit: PropTypes.func,
  handleClearAll: PropTypes.func,
  handleDeleteSingle: PropTypes.func
}
