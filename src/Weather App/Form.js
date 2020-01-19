import React, { Component } from 'react'
import PropTypes from 'prop-types'

// import getMockWeatherData from './mock'

const API_KEY = 'b30d675fb6d8f083652b1320d18ec6b3'
const API_BASE = 'http://api.openweathermap.org/data/2.5/weather'

export default class Form extends Component {
  state = {
    city: 'London',
    country: 'GB'
  }

  handleInputChange = ({ target }) => {
    const { name, value } = target
    this.setState({
      [name]: value
    })
  }

  getWeatherInfo = async () => {
    try {
      const { city, country } = this.state
      if (!city) {
        alert('You have to specify a city!')
        return
      }
      const response = await fetch(
        `${API_BASE}?q=${city},${country}&appid=${API_KEY}`
      )
      const data = await response.json()
      this.props.onDataLoaded(data)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className="form">
        <input
          type="text"
          name="city"
          placeholder="City"
          value={this.state.city}
          onChange={this.handleInputChange} />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={this.state.country}
          onChange={this.handleInputChange} />
        <button onClick={this.getWeatherInfo}>
          Search
        </button>
      </div>
    )
  }
}

Form.propTypes = {
  onDataLoaded: PropTypes.func
}
