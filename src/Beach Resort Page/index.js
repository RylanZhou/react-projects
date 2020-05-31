import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './Home'
import SingleRoom from './SingleRoom'
import Rooms from './Rooms'
import Error from './Error'

import Navbar from './components/Navbar'

import './style.scss'

export default function BeachResort() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          component={Home}
        />
        <Route
          exact
          path="/rooms/"
          component={Rooms}
        />
        <Route
          exact
          path="/rooms/:slug"
          component={SingleRoom}
        />
        {/* If the path matches none of the paths above */}
        <Route component={Error} />
      </Switch>
    </div>
  )
}
