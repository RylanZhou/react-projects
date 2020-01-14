import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'
import Title from './Title'

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'free cocktails',
        info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, accusantium!'
      }, {
        icon: <FaHiking />,
        title: 'endless hiking',
        info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, accusantium!'
      }, {
        icon: <FaShuttleVan />,
        title: 'free shuttle',
        info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, accusantium!'
      }, {
        icon: <FaBeer />,
        title: 'strongest beer',
        info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, accusantium!'
      }
    ]
  }
  render() {
    const servicesElements = this.state.services.map((each, index) => (
      <article key={index}
        className="service">
        <span>{each.icon}</span>
        <h6>{each.title}</h6>
        <p>{each.info}</p>
      </article>
    ))
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {servicesElements}
        </div>
      </section>
    )
  }
}
