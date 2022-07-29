import React from 'react'

export default function QuestionCard({quiz}) {
  console.log(quiz)
  return (
    <div><h4>{quiz.question}</h4></div>
  )
}
