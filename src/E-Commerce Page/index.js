import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Detail from './components/Detail'
import Cart from './components/Cart'
import NotFound404 from './components/404'
import ProductList from './components/ProductList'

import './style.scss'

export default function ECommerce() {
  return (
    <div className="page-container">
      <Navbar />
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/detail" exact component={Detail} />
        <Route path="/cart" exact component={Cart} />
        <Route component={NotFound404} />
      </Switch>
    </div>
  )
}
