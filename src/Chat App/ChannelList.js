import React from 'react'
import PropTypes from 'prop-types'
import { ListItem } from '@material-ui/core'

export default function ChannelList({ allTopics, changeActiveTopic }) {
  const topicListItems = allTopics.map((each, index) => (
    <ListItem
      button
      onClick={e => changeActiveTopic(e.target.innerText)}
      key={index}
    >
      {each}
    </ListItem>
  ))

  return (
    <div className="channel-list">
      {topicListItems}
    </div>
  )
}

ChannelList.propTypes = {
  allTopics: PropTypes.array,
  changeActiveTopic: PropTypes.func
}
