import React from "react";

export default function ExecutandoWorkflow() {
  return (
    <div className="page-container">
      <h1>Executando um Workflow</h1>
      <p>
        O ONS ModelOps permite a execução de workflows completos, integrando diferentes etapas do ciclo de vida dos modelos. O fluxo típico envolve:
      </p>
      <ul>
        <li>Usuário acessa o Frontend</li>
        <li>Frontend envia requisições para a API ModelOps</li>
        <li>API ModelOps orquestra a execução dos modelos</li>
        <li>Execução distribuída no Cluster Efêmero</li>
        <li>Resultados e metadados são armazenados e publicados</li>
      </ul>
      <img src="/img/ons-modelops-execucao.png" alt="Execução Workflow" style={{maxWidth: 700}} />
    </div>
  );
}