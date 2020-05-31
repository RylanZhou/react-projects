import React, { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'

import reducer from './reducer'

const initialState = {
  transactions: [
    { id: '19059', text: 'Flower', amount: -20 },
    { id: '58992', text: 'Salary', amount: 300 },
    { id: '41229', text: 'Book', amount: -10 },
    { id: '87535', text: 'Camera', amount: -200 }
  ]
}

export const GlobalContext = createContext(initialState)

export default function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  // Actions
  const deleteTransaction = (id) => {
    dispatch({ type: 'DELETE_TRANSACTION', payload: id })
  }

  const addTransaction = (transaction) => {
    console.log(transaction)
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

GlobalProvider.propTypes = {
  children: PropTypes.node
}
