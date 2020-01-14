import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Create a context so that grandparent Node could pass props directly to grandson or great-grandson Node.

// From here, we would like to get all room data and pass them down directly to certain components.
import fetchItems from './mock'

const RoomContext = React.createContext()

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true
  }

  async componentDidMount() {
    try {
      const data = await fetchItems()
      const rooms = this.formatData(data)
      const featuredRooms = rooms.filter(room => room.featured)
      this.setState({
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        loading: false
      })
    } catch (error) {
      console.log(error)
    }
  }

  formatData(data) {
    const tempData = data.map(each => {
      const id = each.sys.id
      const images = each.fields.images.map(image => image.fields.file.url)
      const room = { ...each.fields, images, id }
      return room
    })
    return tempData
  }

  getRoom = (slug) => {
    return this.state.rooms.find(room => room.slug === slug)
  }

  render() {
    return (
      // value is the prop that could be passed across levels
      <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom }}>
        {this.props.children}
      </RoomContext.Provider>
    )
  }
}

RoomProvider.propTypes = {
  children: PropTypes.object
}

const RoomConsumer = RoomContext.Consumer

export function withRoomConsumer(Component) {
  return function ConsumerWrapper (props) {
    return (
      <RoomConsumer>
        {value => <Component {...props}
          context={value} />}
      </RoomConsumer>
    )
  }
}

export { RoomProvider, RoomConsumer, RoomContext }
