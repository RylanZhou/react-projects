import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  AppBar,
  TextField,
  Button,
  Typography,
  Toolbar
} from '@material-ui/core'

export default class FormUserDetail extends Component {
  static propTypes = {
    nextStep: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    values: PropTypes.object
  }

  continue = (e) => {
    e.preventDefault()
    this.props.nextStep()
  }

  render() {
    const { values, handleChange } = this.props

    return (
      <React.Fragment>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Enter User Details</Typography>
          </Toolbar>
        </AppBar>
        <div className="form">
          <TextField
            className="input"
            label="First Name"
            defaultValue={values.firstName}
            onChange={handleChange('firstName')}
          />
          <br />
          <TextField
            className="input"
            label="Last Name"
            defaultValue={values.lastName}
            onChange={handleChange('lastName')}
          />
          <br />
          <TextField
            className="input"
            label="Email"
            defaultValue={values.email}
            onChange={handleChange('email')}
          />
          <div className="button-group">
            <Button
              size="large"
              variant="contained"
              color="primary"
              onClick={this.continue}
            >
              Next
            </Button>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
