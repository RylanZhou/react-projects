import React, { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'
import io from 'socket.io-client'

const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'

export const Context = createContext()

let socket = null

const initState = {
  generalTopic: [
    {
      from: 'Victoria',
      msg: 'Voluptas necessitatibus quasi facere ut.'
    },
    {
      from: 'Devonte',
      msg: 'Doloribus iste ipsam pariatur est non provident.'
    },
    {
      from: 'Agnes',
      msg: 'Explicabo vel totam ipsa et incidunt vitae tenetur aut.'
    }
  ],
  anotherTopic: [
    {
      from: 'Athena',
      msg: 'Eveniet nesciunt sed nulla atque alias.'
    },
    {
      from: 'Lavina',
      msg: 'Sit iste rerum maiores atque odio qui est.'
    },
    {
      from: 'Selmer',
      msg: 'Dolorem cupiditate aperiam autem.'
    }
  ]
}

const reducer = (state, action) => {
  const { from, msg, topic } = action.payload

  switch (action.type) {
    case RECEIVE_MESSAGE:
      return {
        ...state,
        // Overwrite a specific topic
        [topic]: [
          // Keep previous messages
          ...state[topic],
          // New message
          { from, msg }
        ]
      }
    default:
      return new Error()
  }
}

function sendMessageAction(messageObj) {
  socket.emit('chat-message', JSON.stringify(messageObj))
}

export default function Store(props) {
  const [allTopics, dispatch] = useReducer(reducer, initState)

  if (!socket) {
    socket = io(':3001')
    socket.on('chat-message', messageStr => {
      dispatch({
        type: RECEIVE_MESSAGE,
        payload: JSON.parse(messageStr)
      })
    })
  }
  return (
    <Context.Provider value={{ allTopics, sendMessageAction }}>
      {props.children}
    </Context.Provider>
  )
}

Store.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}
