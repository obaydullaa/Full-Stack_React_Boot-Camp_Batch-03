import React from 'react'

export default function ScoreCard({totalScore, resetQuiz}) {

  return (
    <div>
        <h3>Result Pate</h3>
        <h3>Score {totalScore} </h3>
        <button onClick={resetQuiz}>Reset Quiz</button>
    </div>
  )
}
