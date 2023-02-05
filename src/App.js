import React from 'react';
import './App.css'
import Title from './components/Title/Title';
import Clock from './components/Clock/Clock';
import Management from './components/Management/Management';

function App() {
  return (
    <div className="App">
      <Title/>
      <Clock/>
      <Management/>
    </div>
  );
}

export default App;