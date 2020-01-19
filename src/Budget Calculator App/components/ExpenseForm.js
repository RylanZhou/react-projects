import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { TextField, Button } from '@material-ui/core'
import { FaPaperPlane } from 'react-icons/fa'

export default function ExpenseForm(props) {
  const [charge, setCharge] = useState(props.expense.charge || '')
  const [amount, setAmount] = useState(props.expense.amount || '')

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleSubmit(charge, amount)
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <TextField
        label="Charge"
        name="charge"
        value={charge}
        onChange={(e) => setCharge(e.target.value)}
        placeholder="e.g. Rent" />
      <TextField
        label="Amount"
        name="amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="e.g. 100" />
      <Button
        color="primary"
        variant="contained"
        disableElevation
        type="submit">
        Submit &nbsp;
        <FaPaperPlane />
      </Button>
    </form>
  )
}

ExpenseForm.propTypes = {
  expense: PropTypes.object,
  handleSubmit: PropTypes.func
}
