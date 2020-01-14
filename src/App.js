import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

// import Quiz from './Quiz Page/index'
import BeachResort from './Beach Resort Page/index'
import { RoomProvider } from './Beach Resort Page/Context'

// function App() {
//   return (
//     <Quiz />
//   )
// }

function App() {
  return (
    <RoomProvider value="hello">
      <Router>
        <BeachResort />
      </Router>
    </RoomProvider>
  )
}

export default App
