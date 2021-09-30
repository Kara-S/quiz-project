import React, { useState } from 'react'
import './App.css';
import HomePage from './components/HomePage';
import Quiz from './components/Quiz';

function App() {

  const [startQuiz, setStartQuiz] = useState(false);

  return (
    <div className="quiz">
      { startQuiz ? <Quiz/> : <HomePage props={setStartQuiz}/>  }
      
    </div>
  );
}

export default App;
