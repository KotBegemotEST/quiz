import React from 'react'

const ScoreBoard = ({scoreValue }) => {
  return (
    <div class="score-container"> 
        <p> Score: <span class="score"> {scoreValue}</span> </p> 
    </div> 

  )
}

export default ScoreBoard