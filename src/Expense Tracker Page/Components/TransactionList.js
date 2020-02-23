import React, { useContext } from 'react'

import { GlobalContext } from '../Context/GlobalState'
import Transaction from './Transaction'

export default function TransactionList() {
  const { transactions } = useContext(GlobalContext)

  return (
    <div className="transaction-list">
      <h3>History</h3>
      {transactions.map((transaction) => (
        <Transaction transaction={transaction} key={transaction.id} />
      ))}
    </div>
  )
}
