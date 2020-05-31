import React, { useState, useEffect } from 'react'
import uuid from 'uuid/v4'

import { Card } from '@material-ui/core'

import ExpenseList from './components/ExpenseList'
import ExpenseForm from './components/ExpenseForm'

// import mockExpensesData from './mock'

import './style.scss'

const initExpenses = localStorage.getItem('expenses')
  ? JSON.parse(localStorage.getItem('expenses'))
  : []

function calculateTotal(expenses) {
  return expenses.reduce(
    (accumulate, currentItem) => accumulate + parseInt(currentItem.amount),
    0
  )
}

export default function BudgetCalculator() {
  // React.useState(initState)
  // Returns an array containing two elements: [Origin, Update Function]
  const [expenses, setExpenses] = useState(initExpenses)
  const [pendingExpense, setPendingExpense] = useState({
    id: '',
    charge: '',
    amount: ''
  })
  const [editMode, setEditMode] = useState(false)

  // React.useEffect(callback, array)
  // callback function is triggered each time when the component is rendered.
  // array is to let react know when to re-render the component.
  // [expenses] tells react to re-render the component when expenses change.
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses])

  const handleSubmit = () => {
    if (!editMode) {
      const singleExpense = {
        ...pendingExpense,
        id: uuid()
      }
      setExpenses([...expenses, singleExpense])
    } else {
      const resultExpenses = expenses.map(each =>
        each.id === pendingExpense.id ? { ...each, ...pendingExpense } : each
      )
      setExpenses(resultExpenses)
    }
    setEditMode(false)
    setPendingExpense({ id: '', charge: '', amount: '' })
  }

  const handleEdit = id => {
    const target = expenses.find(each => each.id === id)
    setPendingExpense({ ...target })
    setEditMode(true)
  }

  const handleChange = ({ name, value }) => {
    setPendingExpense({ ...pendingExpense, [name]: value })
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
