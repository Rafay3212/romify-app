import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MantineProvider } from '@mantine/core'; // Import MantineProvider
import Signup from './components/Signup';
import Login from './components/Login';
import Deshboard from './components/userPanal/Deshboard';
import Devices from './components/userPanal/Devices';
import News from './components/userPanal/News';
import DeviceView from './components/userPanal/DeviceView';
import Request from './components/userPanal/Request';
import Installguide from './components/userPanal/Installguide';
import StockROM from './components/userPanal/StockROM';
import SupportPage from './components/userPanal/SupportPage';
import Layout from './components/Layout';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Router>
        <Layout>
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
            <Route path='/devices/view/installguide' element={<Installguide />} />
            <Route path='/support' element={<SupportPage />} />
            <Route path='/devices/view/StockROM' element={<StockROM />} />
          </Routes>
        </Layout>
      </Router>
    </MantineProvider>
  );
}

export default App;
