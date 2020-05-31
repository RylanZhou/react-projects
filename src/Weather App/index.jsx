import React, { useState } from 'react'
import Form from './Form'
import Info from './Info'

import './style.scss'

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null)

  return (
    <div className="page-container">
      <Form onDataLoaded={(data) => setWeatherData(data)} />
      <Info data={weatherData} />
    </div>
  )
}

export default WeatherApp
