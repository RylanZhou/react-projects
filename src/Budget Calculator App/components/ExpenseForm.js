import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { TextField, Button } from '@material-ui/core'
import { FaPaperPlane } from 'react-icons/fa'

import Message from './Message'

const ERROR_TYPE = 'error'
const SUCCESS_TYPE = 'success'

export default function ExpenseForm({ expense, handleChange, editMode, handleSubmit }) {
  const [alert, setAlert] = useState({ show: false, text: ERROR_TYPE })

  const checkSubmit = (e) => {
    e.preventDefault()
    if (!expense.charge || expense.amount <= 0) {
      setAlert({ show: true, type: ERROR_TYPE })
    } else {
      setAlert({ show: true, type: SUCCESS_TYPE })
      handleSubmit(expense)
    }
  }

  const handleMessageClose = () => {
    setAlert({ ...alert, show: false })
  }

  return (
    <form className="expense-form" onSubmit={checkSubmit}>
      <TextField
        label="Charge"
        name="charge"
        value={expense.charge}
        onChange={(e) => handleChange(e.target)}
        placeholder="e.g. Rent" />
      <TextField
        label="Amount"
        name="amount"
        type="number"
        value={expense.amount}
        onChange={(e) => handleChange(e.target)}
        placeholder="e.g. 100" />
      <Button
        color="primary"
        variant="contained"
        disableElevation
        type="submit">
        { editMode ? 'Save' : 'Add' } &nbsp;
        <FaPaperPlane />
      </Button>
      <Message {...alert} handleClose={handleMessageClose} />
    </form>
  )
}

ExpenseForm.propTypes = {
  expense: PropTypes.object,
  editMode: PropTypes.bool,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func
}
