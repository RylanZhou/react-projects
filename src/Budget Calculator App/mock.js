import uuid from 'uuid/v4'

const expensesData = [
  {
    id: uuid(),
    charge: 'rent',
    amount: 1600
  },
  {
    id: uuid(),
    charge: 'car payment',
    amount: 400
  },
  {
    id: uuid(),
    charge: 'credit card bill',
    amount: 1200
  }
]

export default expensesData
