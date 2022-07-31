import React from 'react'

export default function AnswerCard({answer, pickAnswer, pickedAnswer, correctAnswer,}) {
/**
 *  Mark select question right or wrong
 * =========================================
    1. user selected answer
    2. picked Answer
    3. correct Answer
 */
  
    const isRightAnswer = pickedAnswer && answer === correctAnswer;
    const isWrongAnswer = pickedAnswer && answer === pickedAnswer && pickedAnswer !== correctAnswer;

    const correctClass = isRightAnswer ? 'correct-answer' : ' '
    const wrongClass = isWrongAnswer ? 'incorrect-answer' : ' '
    const disabledClass = pickedAnswer && 'disabled-answer'
  
    return (
    <>
        <p className={`quiz-answer ${correctClass} ${wrongClass} ${disabledClass}`}
        onClick={()=>pickAnswer(answer)} >{answer}
        </p>
    </>
  )
}
