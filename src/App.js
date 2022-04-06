import './App.css';
import React from 'react';
import {
  BrowserRouter as
  Router,
  Routes,
  Route
} from "react-router-dom";
import { Navbar, Contact, Projects, About } from './components';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
