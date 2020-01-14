// import React from 'react'
// import RoomsFilter from './RoomFilter'
// import RoomsList from './RoomsList'
// import { RoomConsumer } from '../Context'
// import Loading from './Loading'

// export default function RoomContainer() {
//   const useConsumer = (value) => {
//     const { loading, sortedRooms, rooms } = value
//     if (loading) {
//       return <Loading />
//     }
//     return (
//       <div>
//         Hello from RoomContainer
//         <RoomsFilter rooms={rooms} />
//         <RoomsList rooms={sortedRooms} />
//       </div>
//     )
//   }

//   return (
//     <RoomConsumer>
//       { useConsumer }
//     </RoomConsumer>
//   )
// }

// A more highly ordered way to write code

import React from 'react'
import PropTypes from 'prop-types'
import RoomsFilter from './RoomFilter'
import RoomsList from './RoomsList'
import { withRoomConsumer } from '../Context'
import Loading from './Loading'

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context
  if (loading) {
    return <Loading />
  }
  return (
    <div>
      Hello from RoomContainer
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </div>
  )
}

RoomContainer.propTypes = {
  context: PropTypes.object
}

// By invoking withRoomConsumer, we will get the wrapped consumer component, namely: <RoomsConsumer><RoomContainer /></RoomsConsumer>, with value passing in as context.
export default withRoomConsumer(RoomContainer)
