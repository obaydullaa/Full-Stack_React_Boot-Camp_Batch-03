import React from 'react'
import AnswerCard from './AnswerCard'
import Parser from "html-react-parser";

export default function QuestionCard({
  quiz, 
  currentAnswers, 
  currentQuestionIndex, 
  quizzes, navigateNext, 
  pickAnswer,
  pickedAnswer,
  correctAnswer,
}) {
// {quiz.question}
  return (
    <div>
      <h3>Total Question: {currentQuestionIndex + 1} / {quizzes.length}</h3>
      <h4 className="question">{Parser(quiz.question)}</h4>
      {currentAnswers.map((answer, index) => <AnswerCard key={index} answer={answer} pickAnswer={pickAnswer} correctAnswer={correctAnswer} pickedAnswer={pickedAnswer}/>)}
      <button onClick={navigateNext}>Next Quiz</button>
    </div>
  )
}
