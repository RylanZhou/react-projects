import React, { Component } from 'react'
import { RoomContext } from '../Context'
import Title from './Title'
import Loading from './Loading'
import Room from './Room'

export default class FeaturedRooms extends Component {
  static contextType = RoomContext

  render() {
    const { loading, featuredRooms: rooms } = this.context
    const roomsElements = rooms.map(room => (
      <Room key={room.id}
        room={room} />
    ))

    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          { loading ? <Loading /> : roomsElements}
        </div>
      </section>
    )
  }
}
