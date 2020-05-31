import React from 'react'
import { AppBar, Typography, Toolbar } from '@material-ui/core'

export default function Confirm() {
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Success</Typography>
        </Toolbar>
      </AppBar>
      <div className="form">
        <h1>Thank you for submitting.</h1>
        <p>You will get an email with further instructions.</p>
      </div>
    </React.Fragment>
  )
}
