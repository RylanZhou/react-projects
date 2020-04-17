import React, { Component } from 'react'
import { Cards, Chart, CountryPicker } from './Components'
import './style.scss'
import { fetchData } from './apis'

export default class COVID19Tracker extends Component {
  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const fetchedData = await fetchData()
    this.setState({ data: fetchedData })
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)
    this.setState({ data: fetchedData, country })
  }

  render() {
    const { data, country } = this.state

    return (
      <div className="main-container">
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    )
  }
}
