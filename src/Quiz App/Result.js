import React from 'react'
import PropTypes from 'prop-types'

const Result = ({ score, total, playAgain }) => (
  <div className="score-board">
    <div>You scored <span className="score">{score} / {total}</span> correct answers.</div>
    <button
      className="play-again"
      onClick={playAgain}
    >
      Play Again!
    </button>
  </div>
)

Result.propTypes = {
  score: PropTypes.number,
  total: PropTypes.number,
  playAgain: PropTypes.func
}

export default Result
