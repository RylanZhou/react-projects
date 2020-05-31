import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  AppBar,
  TextField,
  Button,
  Typography,
  Toolbar
} from '@material-ui/core'

export default class FormPersonalDetail extends Component {
  static propTypes = {
    nextStep: PropTypes.func.isRequired,
    prevStep: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    values: PropTypes.object
  }

  continue = (e) => {
    e.preventDefault()
    this.props.nextStep()
  }

  back = (e) => {
    e.preventDefault()
    this.props.prevStep()
  }

  render() {
    const { values, handleChange } = this.props

    return (
      <React.Fragment>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Enter Personal Details</Typography>
          </Toolbar>
        </AppBar>
        <div className="form">
          <TextField
            className="input"
            label="Occupation"
            defaultValue={values.occupation}
            onChange={handleChange('occupation')}
          />
          <br />
          <TextField
            className="input"
            label="City"
            defaultValue={values.city}
            onChange={handleChange('city')}
          />
          <br />
          <TextField
            className="input"
            label="Bio"
            defaultValue={values.bio}
            onChange={handleChange('bio')}
          />
          <div className="button-group">
            <Button size="large" variant="contained" onClick={this.back}>
              Back
            </Button>
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
