import React from 'react'

const StartScreen = ({ onStart }) => {
  return (
    <div class="quiz-start" 
        id="start-screen"> 
        <h1 id="top"> 
            Küsimustik
        </h1> 
        <h2> 
        Provi vasta küsimustikule ja vaata kui hea sa tead Eesti
        </h2> 
        <button class="button" onClick={onStart}> 
            Start küsimustik
        </button> 
    </div> 
  )
}

export default StartScreen