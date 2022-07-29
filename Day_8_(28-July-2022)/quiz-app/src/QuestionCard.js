import React from 'react'
import AnswerCard from './AnswerCard'

export default function QuestionCard({quiz, currentAnswers}) {
  console.log(quiz)
  return (
    <div>
      <h2>{quiz.question}</h2>
      {currentAnswers.map((answer, index) => <AnswerCard key={index} answer={answer}/>)}
      </div>
  )
}
