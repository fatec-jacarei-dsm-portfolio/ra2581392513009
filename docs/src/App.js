import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import Home from './pages/home';
import Header from './components/header';
import Footer from './components/footer';
import About from './pages/about';
import Projects from './pages/projects';
import Technology from './pages/technology';
import CertificatePage from './pages/certificate';
import ContactPage from './pages/contact';
import HobbiesPage from './pages/hobbies';

function App() {
    return (
        <main>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/technology" element={<Technology />} />
                <Route path="/certificate" element={<CertificatePage />} />
                {/* <Route path="/contact" element={<ContactPage />} /> */}
                <Route path="/hobbies" element={<HobbiesPage />} />
            </Routes>
            <Footer />
        </main>
    );
}

export default App;
