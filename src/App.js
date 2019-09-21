import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [ points, setPoints ] = useState(0)
  const [choice, setChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)

  const _addPoint = () => {
    setPoints(points + 1)
  }
  return (
    <div className="App">
      <h1>{points}</h1>
      <button onClick={_addPoint}>Add points</button>
        
    </div>
  );
}

export default App;
