import '../App.css'
import React from 'react';


const HomePage = ({props}) => {

    const startQuiz = () => props(true)
 
    return (
        
            <div className = "Intro">
                <h1>SDLC QUIZZ</h1>
                <ul>
                    <li>This is a multiple choice with [X] questions</li>
                    <li>You have [X] minutes to complete the quiz</li>
                    <li>You need 50% correct answers to pass</li>
                </ul>
                <br/>
                <br/>
                <br/>
                <button className="start-button" onClick={startQuiz}>Start Quiz</button>
            </div>
        
    )
}

export default HomePage