import React from "react";
import Animation from '../components/animation';
import '../styles/App.css';
import '../styles/criandoWorkflow.css';

export default function CriandoWorkflow() {
  return (
    <div className='body-area criando-workflow'>
      <main>
        <section className="home-container">
            <div>
              <div className='home-container-text'>
                <div>
                  <h1>Criando um Workflow</h1>
                </div>
                <p className="sub-title">Construa e Personalize Seus Fluxos de Trabalho no ONS ModelOps</p>
              </div>
              <Animation />
            </div>
        </section>
        <p>
          Para criar um workflow no ONS ModelOps, defina as etapas, os modelos a serem utilizados e as conexões entre eles. É possível configurar variáveis, métodos de controle e tarefas customizadas.
        </p>
        <ul>
          <li>Escolha dos modelos</li>
          <li>Definição das tarefas</li>
          <li>Configuração de variáveis e parâmetros</li>
          <li>Orquestração do fluxo de execução</li>
        </ul>
      </main>
    </div>
  );
}