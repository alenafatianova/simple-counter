import React from 'react';
import CountUp from './Counter'
import './App.css';
import CounterSettings from './CounterSettings';



function App() {

  return (
    <div className="App">
      
    <CountUp title='Counter' />
    <CounterSettings value={0} />
    </div>
  );
}

export default App;
