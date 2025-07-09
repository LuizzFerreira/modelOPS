import React from "react";
import Animation from '../components/animation';

export default function CriandoWorkflow() {
  return (
    <div id='body-area'>
      <main>
        <h1>Criando um Workflow</h1>
        <h2>Construa e Personalize Seus Fluxos de Trabalho no ONS ModelOps</h2>
        <p>
          Para criar um workflow no ONS ModelOps, defina as etapas, os modelos a serem utilizados e as conexões entre eles. É possível configurar variáveis, métodos de controle e tarefas customizadas.
        </p>
        <ul>
          <li>Escolha dos modelos</li>
          <li>Definição das tarefas</li>
          <li>Configuração de variáveis e parâmetros</li>
          <li>Orquestração do fluxo de execução</li>
        </ul>
        <Animation />
      </main>
    </div>
  );
}