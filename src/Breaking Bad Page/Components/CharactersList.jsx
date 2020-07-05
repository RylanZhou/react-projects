import React from 'react'
import PropTypes from 'prop-types'
import { CharacterTile, Spinner } from './index'

const CharactersList = ({ isLoading, items }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((each) => (
        <CharacterTile key={each.character_id} item={each}>
          {each.name}
        </CharacterTile>
      ))}
    </section>
  )
}

CharactersList.propTypes = {
  isLoading: PropTypes.bool,
  items: PropTypes.array
}

export default CharactersList
