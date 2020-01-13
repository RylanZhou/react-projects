import React, { Component } from 'react'

import './style.scss'

import quizMock from './mock'

class Quiz extends Component {
  state = {
    questions: []
  }

  componentDidMount() {
    this.getQuestions()
  }

  getQuestions = async() => {
    const questions = await quizMock()
    this.setState({ questions })
  }

  render() {
    return (
      <div className="container">
        <div className="title">Quiz</div>
      </div>
    )
  }
}

export default Quiz
