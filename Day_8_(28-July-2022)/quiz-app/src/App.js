import { useState } from 'react';
import QuestionCard from './QuestionCard';
import shuffle from './utils';

function App() {
  const [quizzes, setQuizzes] = useState(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [startQuiz, setStartQuiz] = useState(false)
  const [currentAnswers, setCurrentAnswers] = useState(false)

  const fetchQuiz = async () => {
    const res = await fetch('https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple')
      const {results} = await res.json();
      setQuizzes(results)
      setLoaded(true)
      setStartQuiz(true)
      const initialQuestion = results[currentQuestionIndex];
      // const answers = [initialQuestionIndex.correct_answer, ...initialQuestionIndex.incorrect_answers];
      setCurrentAnswers(shuffle(initialQuestion))
      console.log(results)
   }   

  return (
    <>
      <div className="container">
        {!startQuiz && <button onClick={fetchQuiz}>Start Quiz</button>}
        
        {loaded && <QuestionCard quiz={quizzes[currentQuestionIndex]} currentAnswers={currentAnswers}/>}
        
      </div>
    </>
    
  );
}

export default App;
