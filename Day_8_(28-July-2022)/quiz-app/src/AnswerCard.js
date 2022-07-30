import React from 'react'

export default function AnswerCard({answer, pickAnswer}) {
  return (
    <>
        <h3 className='quiz-answer' onClick={()=>pickAnswer(answer)}>{answer}</h3>
    </>
  )
}
