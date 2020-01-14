import React, { Component } from 'react'
import QuestionItem from './QuestionItem'
import Result from './Result'

import './style.scss'

import quizMock from './mock'

const QUESTION_NUMBERS = 5

class Quiz extends Component {
  state = {
    questions: [],
    score: 0,
    responses: 0
  }

  componentDidMount() {
    this.getQuestions()
  }

  getQuestions = async () => {
    const questions = await quizMock(QUESTION_NUMBERS)
    this.setState({ questions })
  }

  computeAnswer = (answer, correctAnswer) => {
    console.log(answer, correctAnswer)
    if (answer === correctAnswer) {
      this.setState({
        score: this.state.score + 1
      })
    }
    this.setState({
      responses: this.state.responses + 1
    })
  }

  playAgain = async () => {
    await this.getQuestions()
    this.setState({
      score: 0,
      responses: 0
    })
  }

  render() {
    const questionsElements = this.state.questions.map((each) => (
      <QuestionItem
        question={each.question}
        key={each.id}
        options={each.answers}
        selected={(answer) => this.computeAnswer(answer, each.key)}
      />
    ))
    const resultElement = (
      <Result
        score={this.state.score}
        total={QUESTION_NUMBERS}
        playAgain={this.playAgain}
      />
    )
    return (
      <div className="container">
        <div className="title">Quiz</div>
        {
          this.state.responses < QUESTION_NUMBERS
            ? questionsElements
            : resultElement
        }
      </div>
    )
  }
}

export default Quiz
