import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Search = ({ getQuery }) => {
  const [text, setText] = useState('')

  const handleChange = (value) => {
    setText(value)
    getQuery(value)
  }

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search characters"
          autoFocus
          value={text}
          onChange={(e) => handleChange(e.target.value)}
        />
      </form>
    </section>
  )
}

Search.propTypes = {
  getQuery: PropTypes.func
}

export default Search
