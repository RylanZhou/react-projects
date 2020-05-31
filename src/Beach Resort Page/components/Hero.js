import React from 'react'
import PropTypes from 'prop-types'

export default function Hero({ children, hero }) {
  return (
    <header className={hero}>
      {children}
    </header>
  )
}

Hero.propTypes = {
  hero: PropTypes.string,
  children: PropTypes.object
}

Hero.defaultProps = {
  hero: 'default-hero'
}

