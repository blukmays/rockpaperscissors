import React, {useState} from 'react';
import './App.css';

function App() {
  const [ points, setPoints ] = useState(0)
  const [choice, setChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const computerChoices = ['rock','paper','scissors']

  const _addPoint = () => {
    setPoints(points + 1)
  }

  const handleComputerChoice = () => {
    const rand = computerChoices[Math.floor(Math.random() * computerChoices.length)]
    setComputerChoice(rand)
  }
  return (
    <div className="App">
      <h1>{points}</h1>
      <button onClick={_addPoint}>Add points</button>
      <h1>{choice}</h1>
      <button onClick={()=>setChoice('rock')}>Rock</button>
      <button onClick={()=>setChoice('paper')}>Paper</button>
      <button onClick={()=>setChoice('scissors')}>Scissors</button>
      <h1>{computerChoice}</h1>
      <button onClick={handleComputerChoice}>Computer Pick</button>
    </div>
  );
}

export default App;
