import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { RoomContext } from '../Context'
import Title from './Title'

/**
 * @param {Array} rooms The array to be filtered
 * @param {String} prop The key
 * @returns {Array}
 */
function getUniqueProps(rooms, prop) {
  return [...new Set(rooms.map(each => each[prop]))]
}

export default function RoomFilter({ rooms }) {
  const context = useContext(RoomContext)
  const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = context

  const typeOptionsElements = [
    'all',
    ...getUniqueProps(rooms, 'type')
  ].map((each, index) => (
    <option
      value={each}
      key={index}>
      {each}
    </option>
  ))

  const guestOptionsElements = getUniqueProps(rooms, 'capacity').map((each, index) => (
    <option
      value={each}
      key={index}>
      {each}
    </option>
  ))
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            className="form-control"
            onChange={handleChange}
            name="type"
            value={type}
            id="type">
            {typeOptionsElements}
          </select>
        </div>
        {/* guests */}
        <div className="form-group">
          <label htmlFor="capacity">guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            onChange={handleChange}
            className="form-control">
            {guestOptionsElements}
          </select>
        </div>
        {/* price */}
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input
            className="form-control"
            type="range"
            name="price"
            id="price"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={handleChange}/>
        </div>
        {/* size */}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input
              className="size-input"
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}/>
            <input
              className="size-input"
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}/>
          </div>
        </div>
        {/* extra */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange} />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange} />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
      </form>
    </section>
  )
}

RoomFilter.propTypes = {
  rooms: PropTypes.array
}
