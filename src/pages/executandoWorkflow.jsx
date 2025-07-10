import React from "react";
import '../styles/App.css';
import ModelOpsGraph from '../components/ModelOpsGraph';
import '../styles/executandoWorkflow.css';

export default function ExecutandoWorkflow() {
  return (
    <div className='body-area executando-workflow'>
      <main>
        <section className="home-container">
            <div>
              <div className='home-container-text'>
                <div>
                  <h1>Executando um Workflow</h1>
                </div>
                <p className="sub-title">Execução Simplificada de Modelos Energéticos</p>
              </div>
              <div className="logo-modelOps">
                <img src={process.env.PUBLIC_URL + "/img/Marca_Modelops.png"} alt="Logo ONS" />
                <h2>ModelOPS</h2>
              </div>
            </div>
        </section>
        <div className="processes">
          <ul className="processes-list">
            <li><p>Upload de Dados</p></li>
            <li><p>Parametrização</p></li>
            <li><p>Monitoramento</p></li>
          </ul>
        </div>
        <div className="modelops-graph">
          <h3>
            O ONS ModelOps permite a execução de workflows completos, integrando diferentes etapas do ciclo de vida dos modelos.
          </h3>
          <ModelOpsGraph />
        </div>
        <ul>
          <li>Usuário acessa o Frontend</li>
          <li>Frontend envia requisições para a API ModelOps</li>
          <li>API ModelOps orquestra a execução dos modelos</li>
          <li>Execução distribuída no Cluster Efêmero</li>
          <li>Resultados e metadados são armazenados e publicados</li>
        </ul>
        <img src="/img/ons-modelops-execucao.png" alt="Execução Workflow" style={{maxWidth: 700}} />
      </main>
    </div>
  );
}