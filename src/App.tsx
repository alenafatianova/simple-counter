import React, {useState} from 'react';
import Counter from './Counter'
import './App.css';
import CounterSettings from './CounterSettings';



function App() {

  const [startValue, setStartValue] = useState<number>(0)
  const [maxValue, setMaxValue] = useState<number> (5)
  let [count, setCount] = useState(startValue);
  const onClickSet = (startValue: number, maxValue: number) => {
    setCount(startValue)
    setStartValue(startValue)
    setMaxValue(maxValue)
    localStorage.setItem('startValue', startValue.toString())
    localStorage.setItem('maxValue', maxValue.toString())
  }
  return (
    <div className="App">
    <Counter 
      setCount={setCount}
      count={count}
      title='Counter' 
      maxValue={maxValue} 
      startValue={startValue} />
    <CounterSettings 
      onClickSet={onClickSet}
      maxValue={maxValue} 
      startValue={startValue} 
      setStartValue={setStartValue} 
      setMaxValue={setMaxValue} 
      />
    </div>
  );
}

export default App;
