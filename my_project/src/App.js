import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './Components/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Contacts from './Pages/Contacts';
import Blog from './Pages/Blog';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
