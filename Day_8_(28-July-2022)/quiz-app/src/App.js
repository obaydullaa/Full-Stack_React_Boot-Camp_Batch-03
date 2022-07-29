import { useState } from 'react';
import QuestionCard from './QuestionCard';

function App() {
  const [quizzes, setQuizzes] = useState(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [startQuiz, setStartQuiz] = useState(false)

  const fetchQuiz = async () => {
    const res = await fetch('https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple')
      const {results} = await res.json();
      setQuizzes(results)
      setLoaded(true)
      setStartQuiz(true)
      console.log(results)
   }   

  return (
    <>
      <div className="container">
        {!startQuiz && <button onClick={fetchQuiz}>Start Quiz</button>}
        
        {loaded && <QuestionCard quiz={quizzes[currentQuestionIndex]}/>}
        
      </div>
    </>
    
  );
}

export default App;
