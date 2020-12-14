import React, {useState} from 'react';
import {Counter} from './Counter/Counter'
import './App.css';
import {CounterSettings} from './CounterSettings/CounterSettings';



export function App() {
  
  const [startValue, setStartValue] = useState<number>(Number(localStorage.getItem('startValue')))
  const [maxValue, setMaxValue] = useState<number> (Number(localStorage.getItem('maxValue')) || 5)
  let [count, setCount] = useState(startValue);
  const onClickSet = (startValue: number, maxValue: number) => {
    setCount(startValue)
    setStartValue(startValue)
    setMaxValue(maxValue)
    localStorage.setItem('startValue', startValue.toString())
    localStorage.setItem('maxValue', maxValue.toString())
  }
  const [error, setError] = useState('')

  return (
    
    <div className="App">
    <Counter 
      error={error}
      setCount={setCount}
      count={count}
      title='Counter' 
      maxValue={maxValue} 
      startValue={startValue} />

    <CounterSettings 
      setError={setError}
      onClickSet={onClickSet}
      maxValue={maxValue} 
      startValue={startValue} 
      setStartValue={setStartValue} 
      setMaxValue={setMaxValue} 
      />
    </div>
  );
}


