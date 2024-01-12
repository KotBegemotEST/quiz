import React from 'react';

const Question = ({ text, options, onAnswerSelect, selectedOption, isCorrect  }) => {

    return (
        <div className='question-container'>
          <h2>{text}</h2>
          <div className='options-container'>
            {options.map((option, index) => {
              let buttonClass = 'button';
              if (selectedOption === option) {
                buttonClass += isCorrect ? ' correct-answer' : ' wrong-answer';
              }
              return (
                <button 
                  className={buttonClass} 
                  key={index} 
                  onClick={() => onAnswerSelect(option)}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      );
    };

export default Question;
