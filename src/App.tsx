import React from 'react';
import CountUp from './Counter'
import './App.css';
import CounterSettings from './CounterSettings';



function App() {

  return (
    <div className="App">
      
    <CountUp title='Counter' />
    <CounterSettings />
    </div>
  );
}

export default App;
