import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  AppBar,
  Button,
  Typography,
  Toolbar,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core'

export default class Confirm extends Component {
  static propTypes = {
    nextStep: PropTypes.func.isRequired,
    prevStep: PropTypes.func.isRequired,
    values: PropTypes.object
  }

  continue = (e) => {
    e.preventDefault()
    // SEND DATA
    this.props.nextStep()
  }

  back = (e) => {
    e.preventDefault()
    this.props.prevStep()
  }

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio }
    } = this.props

    return (
      <React.Fragment>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Confirm</Typography>
          </Toolbar>
        </AppBar>
        <div className="form">
          <List>
            <ListItem>
              <ListItemText primary="First Name" secondary={firstName} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Last Name" secondary={lastName} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Email" secondary={email} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Occupation" secondary={occupation} />
            </ListItem>
            <ListItem>
              <ListItemText primary="City" secondary={city} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Bio" secondary={bio} />
            </ListItem>
          </List>
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
              Confirm
            </Button>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
