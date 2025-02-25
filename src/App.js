import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import TicTacToe from './gameFunction';


function App(){
  return (
    <Router>
      <div className="App">
        <h1>TicTacToe</h1>
        <Routes>
          <Route path="/" element={<TicTacToe />} />
          {/* Add more routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
