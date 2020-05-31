import React from 'react'
import PropTypes from 'prop-types'

import { Snackbar } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

const TYPE_TEXT = {
  error: 'Charge cannot be empty and amount has to be greater than zero.',
  success: 'Item added.'
}

export default function Message({ type, show, handleClose }) {
  return (
    <Snackbar
      open={show}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert severity={type} variant="filled" onClose={handleClose}>
        {TYPE_TEXT[type]}
      </Alert>
    </Snackbar>
  )
}

Message.propTypes = {
  type: PropTypes.oneOf(['error', 'success']),
  show: PropTypes.bool,
  handleClose: PropTypes.func
}
