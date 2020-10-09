import React from 'react';
import './App.css';
import AppContainer from './Container';
import Header from './Header'


function App() {
  return (
    <div className="App">
      <Header/>
      <AppContainer Component="App"/>
    </div>
  );
}

export default App;
