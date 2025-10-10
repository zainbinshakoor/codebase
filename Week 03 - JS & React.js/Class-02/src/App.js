import './App.css';
import { useState } from 'react';
import Welcome from './components/Welcome';
const App = () => {

  const [increment, setIncrement] = useState(0);

  const handleIncrease = () => {
    setIncrement(increment + 1);
  }

  const reset = () => {
    setIncrement(0);
  }

  const decrease = () => {
    if(increment <= 0) return;
    setIncrement(increment - 1);
  }

  return(
    <>
    {/* <Welcome name={name} age={age}/> */}
    <div className="App">
      <p>Count is {increment}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrease}>Decrease</button>
    </div>
    </>
  )
}

export default App;
