//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import Register from './pages/Register/Register';
function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Register/>} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
