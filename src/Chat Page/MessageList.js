import React from 'react'
import PropTypes from 'prop-types'

import Message from './Message'

export default function MessageList({ messages }) {
  return (
    <div className="message-list">
      {
        messages && messages.map((each, index) => (
          <Message
            {...each}
            key={index}
          />
        ))
      }
    </div>
  )
}

MessageList.propTypes = {
  messages: PropTypes.array
}
