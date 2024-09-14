import { useState } from 'react';
import QuestionCard from './QuestionCard';
import ScoreCard from './ScoreCard';
import shuffle from './utils';
import './index.css'

function App() {
  const [quizzes, setQuizzes] = useState(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [startQuiz, setStartQuiz] = useState(false)
  const [currentAnswers, setCurrentAnswers] = useState(false)
  const [endGame, setEndGame] = useState(false)
  const [totalScore, setTotalScore] = useState(0)
  const [correctAnswer, setCorrectAnswer] = useState(null)
  const [pickedAnswer, setPickedAnswer] = useState(null)

  const pickAnswer = (answer) => {
    setPickedAnswer(answer)
    if(answer === correctAnswer){
      setTotalScore(prevScore => prevScore + 1)
    }
  }

  const navigateNext = () => {
    // Another Technic flushSync
    const currentQuizIndex = currentQuestionIndex + 1;
    const validQuestionIndex = currentQuizIndex < quizzes.length;
    if(validQuestionIndex){
      setCurrentQuestionIndex(currentQuizIndex)
      const question = quizzes[currentQuizIndex];
      setCurrentAnswers(shuffle(question))
       // reset picked answer
       setPickedAnswer(null)
      // setting correct answer on question navigation
      setCorrectAnswer(question.correct_answer);
    }else{
      setEndGame(true)
    }
    
  }

  const fetchQuiz = async () => {
    const res = await fetch('https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple')
      const {results} = await res.json();
      setQuizzes(results)
      setLoaded(true)
      setStartQuiz(true)
      const initialQuestion = results[currentQuestionIndex];
      // const answers = [initialQuestionIndex.correct_answer, ...initialQuestionIndex.incorrect_answers];
      setCurrentAnswers(shuffle(initialQuestion))
      setCorrectAnswer(initialQuestion.correct_answer)
      console.log(results)
   }   

   const resetQuiz = () => {
    setQuizzes(null)
    setCurrentQuestionIndex(0)
    setLoaded(false)
    setStartQuiz(false)
    setCurrentAnswers(false)
    setEndGame(false)
    setTotalScore(0)
    setCorrectAnswer(null)
    setPickedAnswer(null)
   }

  return (
    <>
      <div className="container">
          <div className='quiz-wrapper'>
            {endGame && <ScoreCard totalScore={totalScore} resetQuiz={resetQuiz}/>}
            {!startQuiz && <button onClick={fetchQuiz}>Start Quiz</button>}
            
              <div className='question-card'>
                {loaded && !endGame && <QuestionCard 
                pickAnswer={pickAnswer} 
                quiz={quizzes[currentQuestionIndex]} 
                currentAnswers={currentAnswers} 
                currentQuestionIndex={currentQuestionIndex} 
                quizzes={quizzes}
                navigateNext={navigateNext}
                correctAnswer={correctAnswer}
                pickedAnswer={pickedAnswer}
                />}
              </div>
          </div>
      </div>
    </>
    
  );
}

export default App;
