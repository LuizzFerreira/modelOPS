import React, { useEffect, useRef, useState } from 'react';

const leftItems = [
  { src: process.env.PUBLIC_URL + "/iimg/planejamento.png", alt: "Eventos externos", tx: -190, ty: 120 },
  { src: process.env.PUBLIC_URL + "/iimg/operacao.png", alt: "Operação", tx: -190, ty: 60 },
  { src: process.env.PUBLIC_URL + "/iimg/planejamento.png", alt: "Planejamento", tx: -190, ty: 0 },
  { src: process.env.PUBLIC_URL + "/iimg/agentes.png", alt: "Agentes", tx: -190, ty: -60 },
  { src: process.env.PUBLIC_URL + "/iimg/agendamento.png", alt: "Agendamento", tx: -190, ty: -120 },
];

const rightItems = [
  { src: "gerdin.png", alt: "GERDIN/SINapse", tx: 140, ty: -50 },
  { src: "produto_dados.png", alt: "Produto de dados", tx: 140, ty: -15 },
  { src: "interface_usuario.png", alt: "Interface de usuário", tx: 140, ty: 15 },
  { src: "sintegre.png", alt: "Produto SINtegre", tx: 140, ty: 50 },
];

const ModelOpsAnimation = () => {
  const [stage, setStage] = useState(0); // 0: esquerda entra, 1: direita sai, 2: pausa
  const timeoutRef = useRef();

  useEffect(() => {
  if (stage === 0) {
    // Esquerda aparece e fica visível por 10s
    timeoutRef.current = setTimeout(() => setStage(1), 5000);
  } else if (stage === 1) {
    // Esquerda se move por 2s
    timeoutRef.current = setTimeout(() => setStage(2), 700);
  } else if (stage === 2) {
    // Direita entra parada por 10s
    timeoutRef.current = setTimeout(() => setStage(3), 20000);
  } else if (stage === 3) {
    // Direita se move por 2s
    timeoutRef.current = setTimeout(() => setStage(4), 2000);
  } else if (stage === 4) {
    // Pausa de 5s antes de reiniciar
    timeoutRef.current = setTimeout(() => setStage(0), 1000);
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
            className={`left-item ${stage === 0 ? 'in' : stage === 1 ? 'move' :
  'out'}`}
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
            className={`right-item ${stage === 2 ? 'in' :
  stage === 3 ? 'move' :
  'out'}`}
            style={{ '--tx': `${item.tx}px`, '--ty': `${item.ty}px` }}
          />
        ))}
      </div>
    </div>
  );
};

export default ModelOpsAnimation;