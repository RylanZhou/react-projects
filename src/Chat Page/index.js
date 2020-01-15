import React, { Component } from 'react'

import { ChatkitProvider, TokenProvider, withChatkit } from '@pusher/chatkit-client-react'

import Login from './Login'
import RoomList from './RoomList'
import MessageList from './MessageList'
import NewRoomForm from './NewRoomForm'
import SendMessageForm from './SendMessageForm'

import { tokenUrl, instanceLocator, userId } from './config'
import './style.scss'

const tokenProvider = new TokenProvider({
  url: tokenUrl
})

export default class ChatApp extends Component {
  render() {
    return (
      <Login />
      // <div>
      //   <ChatkitProvider
      //     instanceLocator={instanceLocator}
      //     tokenProvider={tokenProvider}
      //     userId={userId}>
      //     <WelcomeMessage />
      //     <RoomList />
      //     <MessageList />
      //     <NewRoomForm />
      //     <SendMessageForm />
      //   </ChatkitProvider>
      // </div>
    )
  }
}

const WelcomeMessage = withChatkit(props => (
  <div>
    {props.chatkit.isLoading
      ? 'Connecting to Chatkit...'
      : `Hello ${props.chatkit.currentUser.name}`
    }
  </div>
))
