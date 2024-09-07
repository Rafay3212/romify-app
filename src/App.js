import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import './App.css';
import logo from './logo.svg';
import Deshboard from './components/userPanal/Deshboard';
import Footer from './components/Footer';
import Header from './components/Header';
import Devices from './components/userPanal/Devices';
import News from './components/userPanal/News';
import DeviceView from './components/userPanal/DeviceView';
import Request from './components/userPanal/Request';

function App() {
  return (
    <Router>

      <Header />

      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path='/dashboard' element={<Deshboard />} />
        <Route path='/devices' element={<Devices />} />
        <Route path='/unbrick' element={<Devices />} />
        <Route path='/devices/view' element={<DeviceView />} />
        <Route path='/news' element={<News />} />
        <Route path='/request' element={<Request />} />
      </Routes>
      <Footer />

    </Router>
  );
}

export default App;