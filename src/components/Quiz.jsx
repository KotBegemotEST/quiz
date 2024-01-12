import React, { useState, useEffect, useContext } from 'react';
import Question from './Question'
import ScoreBoard from './ScoreBoard'
import StartScreen from './StartScreen';
import FinishScreen from './FinishScreen';
import questions from './Questions';


const Quiz = () => {
    const [quizState, setQuizState] = useState('start'); // 'start', 'inProgress', 'finished'
    const [score, setScore] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);

    const restartQuiz = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setQuizState('start')

    }

    const handleAnswer = (selectedOption) => {
        setSelectedOption(selectedOption);
        const isAnswerCorrect = selectedOption === questions[currentQuestionIndex].correctAnswer;
        setIsCorrect(isAnswerCorrect);

        if (isAnswerCorrect) {
            setScore(score + 1);
          }

          setTimeout(() => {
            const nextQuestionIndex = currentQuestionIndex + 1;
            if (nextQuestionIndex < questions.length) {
              setCurrentQuestionIndex(nextQuestionIndex);
              setSelectedOption(null);
              setIsCorrect(null);
            } else {
              setQuizState('finished');
            }
          }, 500    ); 
      };


  return (
    <div className='quiz-container'>
        <ScoreBoard 
        scoreValue = {score}/>

        {quizState === 'start' && <StartScreen onStart={() => setQuizState('inProgress')} />}
        {quizState === 'inProgress' && (
      <Question 
        text={questions[currentQuestionIndex].text}
        options={questions[currentQuestionIndex].options}
        onAnswerSelect={handleAnswer}
        selectedOption={selectedOption}
        isCorrect={isCorrect}
      />
    )}
    {quizState === 'finished' && <FinishScreen  scoreValue = {score} totalQuestions={questions.length} onRestart = {restartQuiz} />}

    </div>
  )
}

export default Quiz