import React, { useState } from 'react'

import { Card } from '@material-ui/core'

import Alert from './components/Alert'
import ExpenseList from './components/ExpenseList'
import ExpenseForm from './components/ExpenseForm'

import mockExpensesData from './mock'

import './style.scss'

function calculateTotal(expenses) {
  return expenses.reduce(
    (accumulate, currentItem) => accumulate + currentItem.amount, 0
  )
}

export default function BudgetCalculator() {
  // React.useState(initState)
  // Returns an array containing two elements: [Origin, Update Function]
  const [expenses, setExpenses] = useState(mockExpensesData)
  const [pendingExpense, setPendingExpense] = useState()

  const handleSubmit = (charge, amount) => {
    console.log(charge, amount)
  }

  return (
    <div className="page-container">
      <Alert />
      <Card className="card">
        <ExpenseForm
          expense={pendingExpense || {}}
          handleSubmit={handleSubmit}
        />
      </Card>
      <Card className="card">
        <ExpenseList expenses={expenses} />
      </Card>
      <Card className="card">
        <h1 className="total">
          Total Spending: &nbsp; <span>$ {calculateTotal(expenses)}</span>
        </h1>
      </Card>
    </div>
  )
}
