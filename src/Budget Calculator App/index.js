import React, { useState } from 'react'
import uuid from 'uuid/v4'

import { Card } from '@material-ui/core'

import ExpenseList from './components/ExpenseList'
import ExpenseForm from './components/ExpenseForm'

import mockExpensesData from './mock'

import './style.scss'

function calculateTotal(expenses) {
  return expenses.reduce(
    (accumulate, currentItem) => accumulate + parseInt(currentItem.amount),
    0
  )
}

export default function BudgetCalculator() {
  // React.useState(initState)
  // Returns an array containing two elements: [Origin, Update Function]
  const [expenses, setExpenses] = useState(mockExpensesData)
  const [pendingExpense, setPendingExpense] = useState({ id: '', charge: '', amount: '' })
  const [editMode, setEditMode] = useState(false)

  const handleSubmit = () => {
    if (!editMode) {
      const singleExpense = {
        ...pendingExpense,
        id: uuid()
      }
      setExpenses([...expenses, singleExpense])
    } else {
      // TODO
    }
    setEditMode(false)
  }

  const handleEdit = id => {
    const target = expenses.find(each => each.id === id)
    setPendingExpense({ ...target })
    setEditMode(true)
  }

  const handleChange = (target) => {
    setPendingExpense({ ...pendingExpense, [target.name]: target.value })
  }

  const handleClearAll = () => {
    setExpenses([])
  }

  const handleDeleteSingle = id => {
    setExpenses(expenses.filter(each => each.id !== id))
  }

  return (
    <div className="page-container">
      <h1 className="title">Budget Calculator</h1>

      <Card className="card">
        <ExpenseForm
          expense={pendingExpense}
          editMode={editMode}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </Card>
      {expenses.length ? (
        <Card className="card">
          <ExpenseList
            expenses={expenses}
            handleEdit={handleEdit}
            handleClearAll={handleClearAll}
            handleDeleteSingle={handleDeleteSingle}
          />
        </Card>
      ) : (
        <React.Fragment />
      )}
      <Card className="card">
        <h1 className="total">
          Total Spending: &nbsp; <span>$ {calculateTotal(expenses)}</span>
        </h1>
      </Card>
    </div>
  )
}
