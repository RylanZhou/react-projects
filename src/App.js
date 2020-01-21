import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

// import Quiz from './Quiz App/index'
// import BeachResort from './Beach Resort Page/index'
// import { RoomProvider } from './Beach Resort Page/Context'
// import ChatApp from './Chat App'
// import WeatherApp from './Weather App'
// import BudgetCalculator from './Budget Calculator App'
import ECommerce from './E-Commerce Page'
import { ProductProvider } from './E-Commerce Page/Context'

function App() {
  return (
    <ProductProvider>
      <Router>
        <ECommerce />
      </Router>
    </ProductProvider>
  )
}

export default App
