import React, { useCallback } from 'react'
import useQuizStore from '../../store/use-quiz-store'
const Quiz = () => {
    const { quiz, incrementQuizProgress } = useQuizStore()
    const handleQuizNext = useCallback(()=>{
            incrementQuizProgress();
        }, [incrementQuizProgress]
    );
  return (
    <div>
      <h1>Quiz</h1>
      <span>porcentaje del progreso del quiz : {quiz.percentageQuizCompleted}</span>
      <button onClick={handleQuizNext}>Increment Quiz Progress</button>

    </div>
  )
}

export default Quiz