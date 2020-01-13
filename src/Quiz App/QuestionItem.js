import React, { useState } from 'react'
import PropTypes from 'prop-types'

const QuestionItem = ({ question, options, selected }) => {
  const [answers, setAnswer] = useState(options)

  const buttonElements = answers.map((each, index) => (
    <button
      key={index}
      className="answer-button"
      onClick={() => {
        setAnswer([each])
        selected(each)
      }}
    >
      {each}
    </button>
  ))

  return (
    <div className="question-item">
      <div className="question">{question}</div>
      {buttonElements}
    </div>
  )
}

QuestionItem.propTypes = {
  question: PropTypes.string,
  options: PropTypes.array,
  selected: PropTypes.func
}

export default QuestionItem
