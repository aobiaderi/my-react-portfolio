
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '././components/Header';
import Home from './components/pages/Home';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/my-react-portfolio" element={<Home />} />
        </Routes>
 
      </div>
    </Router>
  );
}

export default App;
