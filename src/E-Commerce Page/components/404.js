import React from 'react'
import PropTypes from 'prop-types'

export default function NotFound404(props) {
  return (
    <div className="default">
      <h1>
        The requested URL <span>{props.location.pathname}</span> was not found.
      </h1>
    </div>
  )
}

NotFound404.propTypes = {
  location: PropTypes.object
}
