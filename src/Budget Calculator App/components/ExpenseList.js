import React from 'react'
import PropTypes from 'prop-types'

import { Button } from '@material-ui/core'
import { FaTrash } from 'react-icons/fa'

import ExpenseItem from './ExpenseItem'

export default function ExpenseList({ expenses }) {
  return (
    <div className="expense-list">
      <ul className="list">
        {expenses.map(each => (
          <ExpenseItem key={each.id} {...each} />
        ))}
      </ul>
      {expenses.length && (
        <Button color="secondary" variant="contained" disableElevation>
          Clear&nbsp;<FaTrash />
        </Button>
      )}
    </div>
  )
}

ExpenseList.propTypes = {
  expenses: PropTypes.array
}
