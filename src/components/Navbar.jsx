import React, { useRef, useEffect } from 'react';

export default function Navbar({ menuOpen, setMenuOpen, showNavbar, showContact, setShowContact }) {
  const navRef = useRef(null);

  // Fecha o menu ao clicar fora
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuOpen && navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen, setMenuOpen]);

  return (
    <nav className={`navbar${showNavbar ? '' : ' navbar--hidden'}`} ref={navRef}>
      <img src={process.env.PUBLIC_URL + "/img/logo-modelOPS.jpg"} alt="Logo" width={100} height="auto" style={{ cursor: 'pointer' }}
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
              setShowContact(true);
              setMenuOpen(false);
            }}
          >
            Contato
          </a>
        </li>
      </ul>
      <div className={`contact-slide${showContact ? ' open' : ''}`}>
        <p>Email: contato@seudominio.com</p>
        <p>Telefone: (21) 739-2818</p>
      </div>
    </nav>
  );
}