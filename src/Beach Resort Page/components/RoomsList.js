import React from 'react'
import PropTypes from 'prop-types'
import Room from './Room'

export default function RoomsList({ rooms }) {
  if (!rooms.length) {
    return (
      <div className="empty-search">
        <h3>Unfortunately no rooms matched your search parameters.</h3>
      </div>
    )
  }
  const roomsElements = rooms.map(each => (
    <Room key={each.id}
      room={each} />
  ))
  return (
    <section className="rooms-list">
      <div className="rooms-list-center">
        {roomsElements}
      </div>
    </section>
  )
}

RoomsList.propTypes = {
  rooms: PropTypes.array
}
