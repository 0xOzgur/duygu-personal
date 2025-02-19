import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Navbar, Contact, Projects, About, Footer } from './components';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar/>
        <main className="main-content">
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;