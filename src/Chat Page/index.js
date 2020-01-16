import React from 'react'
import { Paper } from '@material-ui/core'

import MessageList from './MessageList'
import Editor from './Editor'
import ChannelList from './ChannelList'

import './style.scss'

export default function ChatApp() {
  return (
    <div className="page-container">
      <Paper>
        <header>
          <h1>CHAT APP</h1>
          <h3>Topic Placeholder</h3>
        </header>
        <div className="app-container">
          <MessageList />
          <Editor />
          <ChannelList />
        </div>
      </Paper>
    </div>
  )
}
