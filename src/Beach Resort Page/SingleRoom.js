import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import defaultBackground from './images/room-1.jpeg'
import StyledHero from './components/StyledHero'
import Banner from './components/Banner'
import { RoomContext } from './Context'

export default class SingleRoom extends Component {
  constructor(props) {
    super(props)
    // Get the params in the url through props
    this.state = {
      slug: props.match.params.slug,
      defaultBackground
    }
  }

  static contextType = RoomContext

  render() {
    const { getRoom } = this.context
    const room = getRoom(this.state.slug)
    if (!room) {
      return (
        <div className="error">
          <h3>no such room could be found.</h3>
          <Link to="/rooms"
            className="btn-primary">Back to rooms</Link>
        </div>
      )
    }

    const { name, description, capacity, size, price, extras, breakfast, pets, images } = room

    const [mainImg, ...restImages] = images

    return (
      <React.Fragment>
        <StyledHero img={mainImg || this.state.defaultBackground}>
          <Banner title={`${name} room`}>
            <Link to="/rooms"
              className="btn-primary">Back to rooms</Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {restImages.map((each, index) => (
              <img
                key={index}
                src={each}
                alt=""
              />
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price: ${price}</h6>
              <h6>size: {size} SQFT</h6>
              <h6>max capacity: {capacity} {capacity > 1 ? 'people' : 'person'}</h6>
              <h6>{pets || 'no'} pets allowed</h6>
              <h6>{breakfast && 'free breakfast included'}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((each, index) => (
              <li key={index}>
                - {each}
              </li>
            ))}
          </ul>
        </section>
      </React.Fragment>
    )
  }
}

SingleRoom.propTypes = {
  match: PropTypes.object
}
