import '../App.css'
import React from "react";



const Quiz = ({props}) => {

    
 
    return (
        
            <div className="quizz-page">
                <h1>Q1</h1>
                <h3>Example question to be placed here</h3>
                <div className="choice-group">
                    <button className="choice">Choice 1</button>
                    <button className="choice">Choice 2</button>
                    <button className="choice">Choice 3</button>
                    <button className="choice">Choice 4</button>
               </div>
            </div>
        
    )
}

export default Quiz