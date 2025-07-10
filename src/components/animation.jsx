import React, { useEffect, useRef, useState } from 'react';

const leftItems = [
  { label: "Eventos externos", tx: -140, ty: 120 },
  { label: "Operação", tx: -140, ty: 60 },
  { label: "Planejamento", tx: -140, ty: 0 },
  { label: "Agentes", tx: -140, ty: -60 },
  { label: "Agendamento", tx: -140, ty: -120 },
];

const rightItems = [
  { label: "GERDIN/SINapse", tx: 70, ty: -50 },
  { label: "Produto de dados", tx: 90, ty: -15 },
  { label: "Interface de usuário", tx: 90, ty: 15 },
  { label: "Produto SINtegre", tx: 90, ty: 50 },
];

const ModelOpsAnimation = () => {
  const [stage, setStage] = useState(-1); // 0: esquerda entra, 1: direita sai, 2: pausa
  const timeoutRef = useRef();

  useEffect(() => {
  if (stage === -1) {
    timeoutRef.current = setTimeout(() => setStage(0), 50); // inicia a sequência
  } else if (stage === 0) {
    timeoutRef.current = setTimeout(() => setStage(1), 5000);
  } else if (stage === 1) {
    timeoutRef.current = setTimeout(() => setStage(2), 700);
  } else if (stage === 2) {
    timeoutRef.current = setTimeout(() => setStage(3), 20000);
  } else if (stage === 3) {
    timeoutRef.current = setTimeout(() => setStage(4), 2000);
  } else if (stage === 4) {
    timeoutRef.current = setTimeout(() => setStage(0), 1000);
  }

  return () => clearTimeout(timeoutRef.current); }, [stage]);
  return (
    <div className="modelops-container">
      <div className="left-group">
        {leftItems.map((item) => (
          <p
            key={item.label}
            className={`left-item ${stage === 0 ? 'in' : stage === 1 ? 'move' : 'out'}`}
            style={{
              '--tx': `${item.tx}px`,
              '--ty': `${item.ty}px`,
            }}
          >
            {item.label}
          </p>
        ))}
      </div>

      <div className="brain">
        <img src={process.env.PUBLIC_URL + "/img/Logo_ModelOps_Sem_Texto.svg"} alt="ModelOps" />
      </div>

      <div className="right-group">
        {rightItems.map((item) => (
          <p
            key={item.label}
            className={`right-item ${stage === 2 ? 'in' : stage === 3 ? 'move' : 'out'}`}
            style={{
              '--tx': `${item.tx}px`,
              '--ty': `${item.ty}px`,
            }}
          >
            {item.label}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ModelOpsAnimation;