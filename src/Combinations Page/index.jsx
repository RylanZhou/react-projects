import React from 'react'
import Combination from './Combination'
import Arrangement from './Arrangement'
import './style.scss'

export default function CombinationsPage() {
  return (
    <div className="main-container">
      <Combination />
      <Arrangement />
    </div>
  )
}
