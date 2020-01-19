import React, { useState, useContext } from 'react'
import { Paper } from '@material-ui/core'

import MessageList from './MessageList'
import Editor from './Editor'
import ChannelList from './ChannelList'

import { Context } from './Store'

import './style.scss'

export default function Main() {
  const { allTopics, sendMessageAction } = useContext(Context)
  const [activeTopic, changeActiveTopic] = useState('')

  return (
    <div className="page-container">
      <Paper>
        <header>
          <h1>CHAT APP</h1>
          <h3>{ activeTopic || 'Choose a topic and continue chatting!' }</h3>
        </header>
        <div className="app-container">
          <MessageList messages={allTopics[activeTopic]} />
          <Editor sendMessageAction={msg => sendMessageAction({ ...msg, topic: activeTopic })} />
          <ChannelList
            allTopics={Object.keys(allTopics)}
            changeActiveTopic={changeActiveTopic} />
        </div>
      </Paper>
    </div>
  )
}
