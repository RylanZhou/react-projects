import React, { Component } from 'react'
import fetchData from './mock'

export default class MessageList extends Component {
  state = {
    chatData: []
  }

  async componentDidMount() {
    try {
      const response = await fetchData()
      this.setState({
        chatData: response
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const messagesElements = this.state.chatData.map((each, index) => (
      <div
        className="message"
        key={`${each.senderId}-${index}`}>
        <div className="sender">{each.senderId}</div>
        <div className="text">{each.text}</div>
      </div>
    ))

    return (
      <div className="message-list">
        {messagesElements}
      </div>
    )
  }
}
