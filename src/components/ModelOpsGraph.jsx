import React, { useEffect, useRef, useState } from "react";
import '../styles/ModelOpsGraph.css';
import cytoscape from "cytoscape";

const elements = [

  { data: { id: "usuario", label: "Usuário / Agentes" } },
  { data: { id: "frontend", label: "Frontend" } },
  { data: { id: "api", label: "API ModelOps" } },
  { data: { id: "banco", label: "BD ModelOps\nMongoDB" } },
  { data: { id: "modelos", label: "Modelos" } },
  { data: { id: "cluster", label: "Cluster Efêmero" } },
  { data: { id: "inputs", label: "Obtenção Inputs" } },
  { data: { id: "execucao", label: "Execução Modelo" } },
  { data: { id: "persistencia", label: "Persistência Outputs" } },
  { data: { id: "publicacao", label: "Publicação Resultados" } },
  { data: { id: "metadados", label: "Coleta Metadados" } },
  { data: { id: "notificacao", label: "Notificação" } },
  { data: { id: "produtos", label: "Produtos/Resultados" } },

  { data: { source: "usuario", target: "frontend" } },
  { data: { source: "frontend", target: "api" } },
  { data: { source: "api", target: "banco" } },
  { data: { source: "api", target: "modelos" } },
  { data: { source: "api", target: "cluster" } },
  { data: { source: "cluster", target: "inputs" } },
  { data: { source: "inputs", target: "execucao" } },
  { data: { source: "execucao", target: "persistencia" } },
  { data: { source: "persistencia", target: "publicacao" } },
  { data: { source: "publicacao", target: "produtos" } },
  { data: { source: "execucao", target: "metadados" } },
  { data: { source: "metadados", target: "banco" } },
  { data: { source: "publicacao", target: "notificacao" } },
];

const nodeDetails = {
  usuario: {
    variaveis: ["Planejamento", "Operação", "Agentes", "Agendamento", "Eventos externos"],
    saida: "Solicitação de execução/modelo"
  },
  frontend: {
    variaveis: ["HTTP Request", "HTTP Stream"],
    saida: "Interface de usuário, envio de comandos"
  },
  api: {
    variaveis: ["Conexão SSH", "Tarefas Workflow", "CI/CD", "Versionamento"],
    saida: "Orquestração, execução de modelos"
  },
  banco: {
    variaveis: ["Modelos", "Metadados", "Resultados"],
    saida: "Persistência e versionamento"
  },
  modelos: {
    variaveis: ["Modelos ML", "Regras", "Otimização", "Linguística"],
    saida: "Execução via cluster"
  },
  cluster: {
    variaveis: ["Master node", "Execução distribuída"],
    saida: "Execução dos modelos"
  },
  inputs: {
    variaveis: ["Arquivos de entrada", "Dados consolidados"],
    saida: "Inputs para execução"
  },
  execucao: {
    variaveis: ["exec.sh", "qsub", "unzip", "zip"],
    saida: "Output modelo"
  },
  persistencia: {
    variaveis: ["Outputs", "Logs"],
    saida: "Dados persistidos"
  },
  publicacao: {
    variaveis: ["Resultados", "Dashboards"],
    saida: "Resultados publicados"
  },
  metadados: {
    variaveis: ["Coleta de logs", "Metadados de execução"],
    saida: "Metadados para BD"
  },
  notificacao: {
    variaveis: ["Alertas", "Status"],
    saida: "Notificações para usuários"
  },
  produtos: {
    variaveis: ["SINtegre", "Painéis BI", "Produto de dados"],
    saida: "Resultados finais"
  }
};

export default function ModelOpsGraph() {
  const cyRef = useRef(null);
  const containerRef = useRef(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (containerRef.current) {
      cyRef.current = cytoscape({
        container: containerRef.current,
        elements,
        style: [
          {
            selector: "node",
            style: {
              "background-color": "#546223",
              "label": "data(label)",
              "color": "#fff",
              "text-valign": "center",
              "text-halign": "center",
              "font-size": "13px",
              "width": "140px",
              "height": "48px",
              "shape": "roundrectangle",
              "text-wrap": "wrap"
            }
          },
          {
            selector: "edge",
            style: {
              "width": 3,
              "line-color": "#888",
              "target-arrow-color": "#888",
              "target-arrow-shape": "triangle"
            }
          },
          {
            selector: "node:selected",
            style: {
              "background-color": "#bada55",
              "color": "#222"
            }
          }
        ],
        layout: {
          name: "breadthfirst",
          directed: true,
          padding: 10,
          spacingFactor: 1.2,
          animate: false,
          orientation: 'horizontal'
        },
        autoungrabify: true 
      });

      cyRef.current.on("tap", "node", (evt) => {
        setSelected(evt.target.id());
      });

      cyRef.current.on("tap", (evt) => {
        if (evt.target === cyRef.current) setSelected(null);
      });
    }
    return () => {
      if (cyRef.current) {
        cyRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="modelops-graph-wrapper">
      <div
        ref={containerRef}
        className="modelops-graph-cyto"
      />
      <div className="modelops-graph-details">
        {selected ? (
          <div>
            <h4>{elements.find(e => e.data.id === selected)?.data.label}</h4>
            <b>Variáveis:</b>
            <ul>
              {nodeDetails[selected].variaveis.map((v, i) => <li key={i}>{v}</li>)}
            </ul>
            <b>Saída:</b>
            <div>{nodeDetails[selected].saida}</div>
          </div>
        ) : (
          <div className="empty">Clique em um bloco para ver detalhes.</div>
        )}
      </div>
    </div>
  );
}