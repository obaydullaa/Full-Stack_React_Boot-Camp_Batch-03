import React from 'react'
import AnswerCard from './AnswerCard'

export default function QuestionCard({quiz, currentAnswers, currentQuestionIndex, quizzes, navigateNext, pickAnswer}) {

  return (
    <div>
      <h3>Total Question: {currentQuestionIndex + 1} / {quizzes.length}</h3>
      <h2>{quiz.question}</h2>
      {currentAnswers.map((answer, index) => <AnswerCard key={index} answer={answer} pickAnswer={pickAnswer}/>)}
      <button onClick={navigateNext}>Next Quiz</button>
    </div>
  )
}
