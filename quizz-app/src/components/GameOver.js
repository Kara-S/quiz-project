import '../App.css'
import React from 'react';


const GameOver = ({pts, qComplete}) => {

    const restartGame = () => window.location.reload();
    let pass_fail = ((pts/23 *100) < 50) ? "FAIL" : "PASS";

    

    return (
        
            <div className = "End">
                <h1>QUIZ COMPLETE</h1>
                <div className = "Results">
                    <h3>{pass_fail}</h3>
                    <h3> SCORE {pts}/23</h3>
                </div>
                
                <br/>
                <div className = "Round-Info">
                    <h4>Questions Completed: {qComplete}/23</h4>
                    <h4> Time Remaining ??:??</h4>
                </div>
              
                <br/>
                <button className="start-button" onClick = {restartGame}>Restart</button>
            </div>
        
    )
}

export default GameOver