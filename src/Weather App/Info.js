import React from 'react'
import PropTypes from 'prop-types'

import {
  WiThunderstorm,
  WiSprinkle,
  WiRain,
  WiSnow,
  WiDaySunny,
  WiCloudy,
  WiFog
} from 'react-icons/wi'

const ICON_MAP = {
  Thunderstorm: <WiThunderstorm />,
  Drizzle: <WiSprinkle />,
  Rain: <WiRain />,
  Snow: <WiSnow />,
  Clear: <WiDaySunny />,
  Clouds: <WiCloudy />,
  Others: <WiFog />
}

function toCelsius(temperature) {
  return Math.floor(temperature - 273.15)
}

function WeatherIcon(props) {
  return (
    <React.Fragment>
      {ICON_MAP[props.name] || ICON_MAP['Others']}
    </React.Fragment>
  )
}

export default function Info(props) {
  const { data } = props

  return (
    <div className="info">
      {data ? (
        <React.Fragment>
          <h1 className="location">
            {data.name}, {data.sys.country}
          </h1>
          <div className="weather-icon">
            <WeatherIcon name={data.weather[0].main} />
          </div>
          <h1 className="temperature">{toCelsius(data.main.temp)}&deg;C</h1>
          <div className="min-max">
            <span>Min: {toCelsius(data.main.temp_min)}&deg;C</span>
            <span>Max: {toCelsius(data.main.temp_max)}&deg;C</span>
          </div>
          <h4 className="description">{data.weather[0].description}</h4>
        </React.Fragment>
      ) : (
        <h1 className="prompt">Search a city!</h1>
      )}
    </div>
  )
}

WeatherIcon.propTypes = {
  name: PropTypes.string
}

Info.propTypes = {
  data: PropTypes.object
}
