import React, { useState, useRef, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage';
import CriandoWorkflow from './pages/criandoWorkflow';
import ExecutandoWorkflow from './pages/executandoWorkflow';
import Navbar from './components/Navbar';

export default function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const lastScrollY = useRef(window.scrollY);
    const [showContact, setShowContact] = useState(false);

      useEffect(() => {
        function handleScroll() {
          if (window.scrollY < 50) {
            setShowNavbar(true);
            lastScrollY.current = window.scrollY;
            return;
          }
          if (window.scrollY > lastScrollY.current) {
            setShowNavbar(false);
          } else {
            setShowNavbar(true);
          }
          lastScrollY.current = window.scrollY;
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
  return (
    <>
      <header>
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} showNavbar={showNavbar} showContact={showContact} setShowContact={setShowContact}/>
      </header>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/criandoWorkflow" element={<CriandoWorkflow />} />
        <Route path="/executandoWorkflow" element={<ExecutandoWorkflow />} />
      </Routes>
      <footer className="footer">
          <div className="footer-container">
            <div className="footer-col">
              <h4>DBSync</h4>
            </div>
            <div className="footer-col">
              <h4>Documentação</h4>
              <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">Readme</a></li>
                <li><a href="#">Arquitetura</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contribua</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Support</h4>
              <ul>
                <li>
                  <span className="footer-label">TOLL FREE</span><br />
                    <a href="tel:+55217392818">+55 (21) 739-2818</a>
                </li>
                <li>
                  <span className="footer-label">CLOUD WORKFLOW SUPPORT</span><br />
                    <a href="mailto:support-ipaas@mydbsync.com">support-ipaas@mydbsync.com</a>
                </li>
                <li>
                  <span className="footer-label">SAAS REPLICATION SUPPORT</span><br />
                    <a href="mailto:support-cdm@mydbsync.com">support-cdm@mydbsync.com</a>
                </li>
                <li>
                  <span className="footer-label">CONTACT SALES</span><br />
                    <a href="mailto:sales@mydbsync.com">sales@mydbsync.com</a>
                </li>
              </ul>
            </div>
          </div>
      </footer>
    </>
  );
}