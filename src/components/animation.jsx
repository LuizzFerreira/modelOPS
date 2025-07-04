import React, { useEffect, useRef, useState } from 'react';
import './animation.css';

const leftItems = [
  { src: "/assets/evento.png", alt: "Eventos externos", tx: -90, ty: 110 },
  { src: "/assets/operacao.png", alt: "Operação", tx: -90, ty: 60 },
  { src: "/assets/planejamento.png", alt: "Planejamento", tx: -90, ty: 0 },
  { src: "/assets/agentes.png", alt: "Agentes", tx: -90, ty: -60 },
  { src: "/assets/agendamento.png", alt: "Agendamento", tx: -90, ty: -120 },
];

const rightItems = [
  { src: "/assets/gerdin.png", alt: "GERDIN/SINapse", tx: 250, ty: -90 },
  { src: "/assets/produto_dados.png", alt: "Produto de dados", tx: 250, ty: -30 },
  { src: "/assets/interface_usuario.png", alt: "Interface de usuário", tx: 250, ty: 30 },
  { src: "/assets/sintegre.png", alt: "Produto SINtegre", tx: 250, ty: 90 },
];

const ModelOpsAnimation = () => {
  const [stage, setStage] = useState(0); // 0: esquerda entra, 1: direita sai, 2: pausa
  const timeoutRef = useRef();

  useEffect(() => {
    if (stage === 0) {
      // Fase 1: esquerda entra (15s)
      timeoutRef.current = setTimeout(() => setStage(1), 15000);
    } else if (stage === 1) {
      // Fase 2: pausa (10s)
      timeoutRef.current = setTimeout(() => setStage(0), 15000);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [stage]);

  return (
    <div className="modelops-container">
      <div className="left-group">
        {leftItems.map((item, i) => (
          <img
            key={item.alt}
            src={item.src}
            alt={item.alt}
            className={`left-item ${stage === 0 ? 'in' : 'out'}`}
            style={{ '--tx': `${item.tx}px`, '--ty': `${item.ty}px` }}
          />
        ))}
      </div>

      <div className="brain">
        <img src="/assets/cerebro.png" alt="ModelOps" />
      </div>

      <div className="right-group">
        {rightItems.map((item, i) => (
          <img
            key={item.alt}
            src={item.src}
            alt={item.alt}
            className={`right-item ${stage === 1 ? 'in' : 'out'}`}
            style={{ '--tx': `${item.tx}px`, '--ty': `${item.ty}px` }}
          />
        ))}
      </div>
    </div>
  );
};

export default ModelOpsAnimation;