import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { AppBar, Toolbar, IconButton } from '@material-ui/core'
import { MdDevices, MdShoppingCart } from 'react-icons/md'

export default class Navbar extends Component {
  render() {
    return (
      <AppBar className="navbar" position="static">
        <Toolbar className="toolbar">
          <div className="logo">
            <Link to="/">
              <IconButton edge="start" disableRipple>
                <MdDevices />
                <span className="logo-text">ECOM</span>
              </IconButton>
            </Link>
          </div>
          <div className="product">
            <Link to="/">Products</Link>
          </div>
          <div className="cart">
            <Link to="/cart">
              <IconButton edge="end">
                <MdShoppingCart />
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    )
  }
}
