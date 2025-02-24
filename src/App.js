import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import GameFunction from './gameFunction';


function App(){
  return (
    <Router>
      <div className="App">
        <h1></h1>
        <Routes>
          <Route path="/" element={<App />} />
          {/* Add more routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
