import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import VideosPage from './pages/VideosPage';

import Header from './components/Header';
import Footer from './components/Footer';


const App = () => {
  return <div className='overflow-hidden'>
    <Router>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Videos' element={<VideosPage />} />

      </Routes>
      <Footer />
    </Router>
  
  </div>;
};

export default App;