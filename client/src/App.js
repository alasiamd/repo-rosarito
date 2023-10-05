import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Landing from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import LogoutButton from './components/Login/LogoutButton'; // Importa el componente LogoutButton en lugar de LoggedOut

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
      
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/about" element={<About />} />
          <Route path="/loggedout" element={<LogoutButton />} /> {/* Utiliza LogoutButton en lugar de LoggedOut */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
