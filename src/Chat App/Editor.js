import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@material-ui/core'

export default function Editor({ sendMessageAction }) {
  const [pendingMessage, changePendingMessage] = useState('')

  const generateUser = () => {
    const BASE = 'Rylan'
    return `${BASE}_${(Math.random() * 100).toFixed(0)}`
  }

  const handleOnKeyUp = (keyCode) => {
    if (keyCode === 13) {
      // Enter is pressed
      sendMessageAction({ from: generateUser(), msg: pendingMessage })
      // Clear input field
      changePendingMessage('')
    }
  }

  return (
    <div className="editor">
      <TextField
        className="text"
        label="Type Messages Here!"
        value={pendingMessage}
        onChange={(e) => changePendingMessage(e.target.value)}
        onKeyUp={(e) => handleOnKeyUp(e.keyCode)}
      />
    </div>
  )
}

Editor.propTypes = {
  sendMessageAction: PropTypes.func
}
