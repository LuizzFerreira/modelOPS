import React, { useRef, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar({ menuOpen, setMenuOpen, showNavbar, showContact, setShowContact }) {
  const navRef = useRef(null);
  const contactRef = useRef(null);
  const [hoverWorkflow, setHoverWorkflow] = useState(false);
  const [hoverTarefas, setHoverTarefas] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuOpen && navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
      if (showContact && contactRef.current && !contactRef.current.contains(event.target)) {
        setShowContact(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen, setMenuOpen, showContact, setShowContact]);

  // Função para fechar menu e navegar para home, ideal para usar no logo e link "Início"
  function goToHome() {
    navigate('/');
    setMenuOpen(false);
    setShowContact(false);
  }

  return (
    <nav className={`navbar${showNavbar ? '' : ' navbar--hidden'}`} ref={navRef}>

      {/* Logo: navega para home, sem scroll manual aqui */}
      <img
        src={process.env.PUBLIC_URL + "/img/Logo_ModelOps_testo_lado.png"}
        alt="Logo"
        width={150}
        height="auto"
        style={{ cursor: 'pointer' }}
        onClick={goToHome}
      />

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <ul id="primary-navigation" className={menuOpen ? "open" : ""}>

        <li>
          <Link to="/" onClick={goToHome}>Início</Link>
        </li>

        <li
          className="has-submenu"
          onMouseEnter={() => setHoverWorkflow(true)}
          onMouseLeave={() => setHoverWorkflow(false)}
          aria-haspopup="true"
          aria-expanded={hoverWorkflow}
        >

          <button
            type="button"
            className="submenu-toggle"
            aria-controls="workflow-submenu"
            aria-expanded={hoverWorkflow}
          >
            Workflow
          </button>
          {hoverWorkflow && (
            <div id="workflow-submenu" className="submenu" role="menu">
              <Link to="/criandoWorkflow" onClick={() => setMenuOpen(false)} role="menuitem">Criando Workflow</Link>
              <Link to="/executandoWorkflow" onClick={() => setMenuOpen(false)} role="menuitem">Executando Workflow</Link>
            </div>
          )}
        </li>

        <li
          className="has-submenu"
          onMouseEnter={() => setHoverTarefas(true)}
          onMouseLeave={() => setHoverTarefas(false)}
          aria-haspopup="true"
          aria-expanded={hoverTarefas}
        >
          <button
            type="button"
            className="submenu-toggle"
            aria-controls="tarefas-submenu"
            aria-expanded={hoverTarefas}
          >
            Criando Tarefas
          </button>
          {hoverTarefas && (
            <div id="tarefas-submenu" className="submenu" role="menu">
              <Link to="/tarefasExistentes" onClick={() => setMenuOpen(false)} role="menuitem">Tarefas existentes</Link>
              <Link to="/linguagensSuportadas" onClick={() => setMenuOpen(false)} role="menuitem">Linguagens suportadas</Link>
              <Link to="/usandoVariaveis" onClick={() => setMenuOpen(false)} role="menuitem">Usando variáveis</Link>
              <Link to="/metodosControle" onClick={() => setMenuOpen(false)} role="menuitem">Invocando métodos de controle do Workflow</Link>
              <Link to="/expressoesRegulares" onClick={() => setMenuOpen(false)} role="menuitem">Expressões regulares</Link>
            </div>
          )}
        </li>

        <li>
          {/* Contato é âncora interna: mantém <a> e scroll manual */}
          <a
            href="#contact"
            onClick={e => {
              e.preventDefault();
              setShowContact(prev => !prev);
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
