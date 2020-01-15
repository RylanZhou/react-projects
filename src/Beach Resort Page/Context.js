import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Create a context so that grandparent Node could pass props directly to grandson or great-grandson Node.

// From here, we would like to get all room data and pass them down directly to certain components.
import fetchItems from './mock'

const RoomContext = React.createContext()

const DEFAULT_TYPE = 'all'
const DEFAULT_CAPACITY = 1
const DEFAULT_PRICE = 0
const DEFAULT_MIN_PRICE = 0
const DEFAULT_MAX_PRICE = 0
const DEFAULT_MIN_SIZE = 0
const DEFAULT_MAX_SIZE = 0
const DEFAULT_BREAKFAST = false
const DEFAULT_PETS = false

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    /* For filters */
    type: DEFAULT_TYPE,
    capacity: DEFAULT_CAPACITY,
    price: DEFAULT_PRICE,
    minPrice: DEFAULT_MIN_PRICE,
    maxPrice: DEFAULT_MAX_PRICE,
    minSize: DEFAULT_MIN_SIZE,
    maxSize: DEFAULT_MAX_SIZE,
    breakfast: DEFAULT_BREAKFAST,
    pets: DEFAULT_PETS
  }

  async componentDidMount() {
    try {
      const data = await fetchItems()
      const rooms = this.formatData(data)
      const featuredRooms = rooms.filter(room => room.featured)
      const maxPrice = Math.max(...rooms.map(each => each.price))
      const maxSize = Math.max(...rooms.map(each => each.size))
      this.setState({
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        loading: false,
        price: maxPrice,
        maxPrice,
        maxSize
      })
      console.log(this.state)
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

  handleChange = (event) => {
    const { target } = event
    const { type, name } = target
    const value = type === 'checkbox' ? target.checked : target.value
    this.setState({
      [name]: value
    }, /* Callback */ this.filterRooms)
  }

  filterRooms = () => {
    /* eslint-disable-next-line prefer-const */
    let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets } = this.state

    capacity = parseInt(capacity)
    price = parseInt(price)

    const sortedRooms = [...rooms].filter(each => {
      const filterType = type === 'all' || each.type === type
      const filterCapacity = capacity === 1 || each.capacity >= capacity
      const filterBreakfast = !breakfast || each.breakfast === breakfast
      const filterPets = !pets || each.pets === pets
      const filterPrice = each.price <= price
      const filterSize = minSize <= each.size && each.size <= maxSize
      return filterType && filterCapacity && filterBreakfast && filterPets && filterPrice && filterSize
    })

    this.setState({
      sortedRooms
    })
  }

  render() {
    return (
      // value is the prop that could be passed across levels
      <RoomContext.Provider value={{
        ...this.state,
        getRoom: this.getRoom,
        handleChange: this.handleChange
      }}>
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
