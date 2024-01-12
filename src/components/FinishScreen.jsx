import React from 'react'

const FinishScreen = ({scoreValue,totalQuestions, onRestart}) => {
    let feedbackMessage;
    if (scoreValue === totalQuestions) {
      feedbackMessage = "Suurepärane! Teate kõike!";
    } else if (scoreValue >= totalQuestions / 2) {
      feedbackMessage = "Pole paha! Teate enam kui pool!";
    } else if (scoreValue === 1) {
      feedbackMessage = "On vaja tõsta teadmisi, kuid olete õigel teel!";
    } else {
      feedbackMessage = "Proovige uuesti, saate tulemust parandada!";
    }
  return (
    <div class="quiz-finish" > 
    <h1 id="top"> 
        Küsimustik
    </h1> 
    <h2> 
        Sinu tulemus {scoreValue}/{totalQuestions}
    </h2> 
    <h3>{feedbackMessage}</h3>
    <button class="button" onClick={onRestart}> 
        Start küsimustik veel kord
    </button> 
</div> 
  )
}

export default FinishScreen