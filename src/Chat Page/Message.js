import React from 'react'
import PropTypes from 'prop-types'

export default function Message({ from, msg }) {
  return (
    <div className="message">
      <div className="user">
        {from}
      </div>
      <div className="text">
        {msg}
      </div>
    </div>
  )
}

Message.propTypes = {
  from: PropTypes.string,
  msg: PropTypes.string
}
