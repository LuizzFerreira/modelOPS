import React from "react";

export default function CriandoTarefas() {
  return (
    <div className="page-container">
      <h1>Criando Tarefas</h1>
      <p>
        Cada etapa do workflow é composta por tarefas, como obtenção de inputs, execução de modelos, persistência de outputs, publicação de resultados, coleta de metadados e notificações.
      </p>
      <img src="/img/ons-modelops-tarefas.png" alt="Tarefas Workflow" style={{maxWidth: 700}} />
      <ul>
        <li>Obtenção de inputs</li>
        <li>Execução de modelo</li>
        <li>Persistência de outputs</li>
        <li>Publicação de resultados</li>
        <li>Coleta de metadados</li>
        <li>Notificação</li>
      </ul>
    </div>
  );
}