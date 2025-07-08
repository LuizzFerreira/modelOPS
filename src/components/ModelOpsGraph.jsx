import React, { useEffect, useRef, useState } from "react";
import '../styles/ModelOpsGraph.css';
import cytoscape from "cytoscape";

const elements = [

{ data: { id: "usuario", label: "Usuário / Agentes" }, position: { x: 50, y: 200 } },
  { data: { id: "frontend", label: "Frontend" }, position: { x: 240, y: 200 } },
  { data: { id: "api", label: "API ModelOps" }, position: { x: 430, y: 200 } },
  { data: { id: "banco", label: "BD ModelOps\nMongoDB" }, position: { x: 620, y: 300 } },
  { data: { id: "modelos", label: "Modelos" }, position: { x: 620, y: 100 } },
  { data: { id: "cluster", label: "Cluster Efêmero" }, position: { x: 640, y: 200 } },
  { data: { id: "inputs", label: "Obtenção Inputs" }, position: { x: 860, y: 200 } },
  { data: { id: "execucao", label: "Execução Modelo" }, position: { x: 1050, y: 200 } },
  { data: { id: "persistencia", label: "Persistência Outputs" }, position: { x: 1240, y: 200 } },
  { data: { id: "publicacao", label: "Publicação Resultados" }, position: { x: 1430, y: 200 } },
  { data: { id: "metadados", label: "Coleta Metadados" }, position: { x: 1240, y: 300 } },
  { data: { id: "notificacao", label: "Notificação" }, position: { x: 1620, y: 100 } },
  { data: { id: "produtos", label: "Produtos/Resultados" }, position: { x: 1620, y: 300 } },


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
          name: "preset"
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