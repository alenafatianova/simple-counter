import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { Counter } from './Counter/Counter';
import {CounterSettings} from './CounterSettings/CounterSettings';
import { AppStateType } from './redux/state';



export function App() {

  const startValue = useSelector<AppStateType, number>(state => state.counter.startValue)  
  const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)  
  // const [startValue, setStartValue] = useState<number>(start)
  // const [maxValue, setMaxValue] = useState<number> (max)
  
  // let [count, setCount] = useState(startValue);
  

  const [error, setError] = useState('')

  return (
    
    <div className="App">
    
    <Counter
      error={error}
      title='Counter' 
      maxValue={maxValue} 
      startValue={startValue} />

    <CounterSettings 
      setError={setError}
      startValue={startValue}
      maxValue={maxValue}
      />
    </div>
  );
}


