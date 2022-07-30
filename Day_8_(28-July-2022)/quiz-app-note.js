  /**
 * Quiz Application 
 * ====================================
 * 
 * Button - question ans answer
 * Selecting answer
 * write or wrong answer
 * Total number
 * 
 * Utility
 * -----------
 * Single select answer
 * Reset quiz
 * 
 * API Use this -> https://opentdb.com/
 */

import QuestionCard from "./quiz-app/src/Questioncard"

/**
 * Remote server send request may wyes such as: 3rd Party package Axios, By Default js Fetch, and we use many 3rd party package. In this application we use fetch because we can revision js.
 */
1. Get api fetch by onClick function -----> <button onClick={fetchQuiz}>Start Quiz</button>
2.  Push the api result for track in  setQuizzes state ---> const [quizzes, setQuizzes] = useState(null)
3. Show question in by index number display we gate state   --> const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null)
4. Track load      take state -----------------> const const [loaded, setLoaded] = useState(false)
5. Track answers   take state -----------------> const [currentAnswers, setCurrentAnswers] = useState(false)
6. form answer  --->
      const initialQuestionIndex = results[currentQuestionIndex];
      const answers = [initialQuestionIndex.correct_answer, ...initialQuestionIndex.incorrect_answers];
7. Total Question length show exam: 1/5
8. Next Quiz button add in QuestionCard component and onClick function ---> <button onClick={navigateNext}>Next Quiz</button>
9. Take state for endGame and conditionally apply -----> const [endGame, setEndGame] = useState(false)







