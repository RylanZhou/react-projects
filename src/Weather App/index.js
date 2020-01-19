import React, { Component } from 'react'
import Form from './Form'
import Info from './Info'

import './style.scss'

export default class WeatherApp extends Component {
  state = {
    weatherData: null
  }

  handleDataLoaded = (data) => {
    this.setState({
      weatherData: data
    })
  }

  render() {
    return (
      <div className="page-container">
        <Form onDataLoaded={this.handleDataLoaded} />
        <Info data={this.state.weatherData} />
      </div>
    )
  }
}
