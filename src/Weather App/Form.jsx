import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { fetchWeather } from './apis'

// import getMockWeatherData from './mock'

const Form = ({ onDataLoaded }) => {
  const [city, setCity] = useState('London')
  const [country, setCountry] = useState('GB')

  const getWeatherInfo = async (e) => {
    if (!e || e.key === 'Enter') {
      try {
        if (!city) {
          alert('You have to specify a city!')
          return
        }
        const data = await fetchWeather(
          `${city}${country ? ',' + country : ''}`
        )
        onDataLoaded(data)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div className="form">
      <input
        type="text"
        name="city"
        placeholder="City"
        value={city}
        onChange={({ target }) => setCity(target.value)}
        onKeyPress={getWeatherInfo}
      />
      <input
        type="text"
        name="country"
        placeholder="Country"
        value={country}
        onChange={({ target }) => setCountry(target.value)}
        onKeyPress={getWeatherInfo}
      />
      <button onClick={() => getWeatherInfo()}>Search</button>
    </div>
  )
}

export default Form

Form.propTypes = {
  onDataLoaded: PropTypes.func
}
