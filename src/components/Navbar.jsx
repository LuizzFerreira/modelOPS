import React, { useRef, useEffect } from 'react';

export default function Navbar({ menuOpen, setMenuOpen, showNavbar, showContact, setShowContact }) {
  const navRef = useRef(null);
  const contactRef = useRef(null);

  // Fecha o menu ao clicar fora
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuOpen && navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
      // Fecha o contato ao clicar fora
      if (showContact && contactRef.current && !contactRef.current.contains(event.target)) {
        setShowContact(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen, setMenuOpen, showContact, setShowContact]);

  return (
    <nav className={`navbar${showNavbar ? '' : ' navbar--hidden'}`} ref={navRef}>
      <img src={process.env.PUBLIC_URL + "/img/Logo_ModelOps_testo_lado.png"} alt="Logo" width={150} height="auto" style={{ cursor: 'pointer' }}
        onClick={() => {
          document.getElementById('home-container').scrollIntoView({ behavior: 'smooth' });
          setMenuOpen(false);
        }}
      />
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <a href="#home" onClick={e => {
            e.preventDefault();
            document.getElementById('home-container').scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false);
          }}>Início</a>
        </li>
        <li><a href="#about">Sobre</a></li>
        <li>
          <a href="#home-services" onClick={e => {
            e.preventDefault();
            document.getElementById('home-services').scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false);
          }}>Serviços</a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={e => {
              e.preventDefault();
              setShowContact(prev => !prev); // Toggle ao clicar em contato
              setMenuOpen(false);
            }}
          >
            Contato
          </a>
        </li>
      </ul>
      <div
        className={`contact-slide${showContact ? ' open' : ''}`}
        ref={contactRef}
      >
        <p>Email: contato@seudominio.com</p>
        <p>Telefone: (21) 739-2818</p>
      </div>
    </nav>
  );
}