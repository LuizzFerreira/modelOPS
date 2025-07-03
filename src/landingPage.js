import './App.css';
import './index.css';
import './components/splide.min.css';
import Carrossel from './components/carrossel';
import FlipText from './components/fliptext';

function LandingPage() {
  return (  
    <div id='body-area'>
        <header>
          <nav className="navbar">
            <img src="./img/iconeDBSyncBlack.png" alt="Logo" width={100} height="auto"/>
            <ul>
              <li><a href="#home">Início</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#services">Serviços</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <section id="home-container">
            <div>
              <div className='home-container-text'>
                <FlipText />
                <p className='sub-title'>Gerencie as replicações para suas bases de dados.</p>
                <a href="#">Leia nossa Wiki</a>
                <div>
                  <button className='btn-container'><a href="#">Faturas Atuais</a></button>
                  <button className='btn-container btn-container-secondary'><a href="#">Em DEV</a></button>
                </div>
              </div>
              <div className='img-rotate-block'>
                <img src="./img/iconeDBSync.png" alt="Imagem dbsync" />
                <img src="./img/DBSyncDataCapcity.png" alt="Imagem dbsync"/>
                </div>
            </div>
            <img className='container-backImg' src="./img/iconeDBSync.png" alt="Imagem dbsync" />
          </section>
          <section id='home-about'>
            <h2>Reaja a <span>atualizações</span> de dados</h2>
            <p>Aproveite DBSync + Kafka para ler tópicos e reagir a eventos relevantes.</p>
            <Carrossel />
          </section>
          <section id='home-services'>
            <h2>Seerviços</h2>
            <div className='services-container'>
              <div className='service-item'>
                <img src="./img/DBSyncDataCapcity.png" alt="Carga inicial" />
                <div>
                  <h3>Amplie o poder dos seus dados</h3>
                  <p className='text-right'>Seus dados são alterados o tempo todo.
                    O DBSync habilita seus aplicativos a reagirem a cada alteração de dados.
                    Com o monitoramento em tempo real dos dados, o DBSync transmite os dados para o repositório de destino assim que a transação é confirmada.
                    Utilize a capacidade do CDC integrado com o Kafka para realizar o decoupling das suas aplicações, sem precisar alterar nenhuma linha de código.</p>
                </div>
              </div>
              <div className='service-item'>
                <div>
                  <h3>Reduza esforço de implementações</h3>
                  <p>Como o DBSync tem a capacidade de escrever dados diretamente nas bases de dados de destino, você não precisa se preocupar em manter a escrita dos dados nas suas aplicações.
                  Basta cadastrar as conexões com as bases de dados de origem e destino, que o DBSync faz o restante do trabalho.</p>
                </div>
                <img src="./img/telaGestaoConectores.png" alt="Low-code" />
              </div>
              <div className='service-item'>
                <img src="./img/telaConectores.png" alt="Replicação" />
                <div>
                  <h3>Monitore o status de cada conector</h3>
                  <p className='text-right'>Com a interface do DBSync interagindo com a API do DEBEZIUM, é possível monitorar o status de cada conector, bem como as suas definições, de forma protegida.
                  Caso seja necessária alguma manutenção, existe também a possibilidade de pausar e reiniciar a sincronização.
                  Caso exista alguma falha no conector, é possível saber os detalhes da exceção clicando no status de falha.</p>
                </div>
              </div>
              <div className='service-item'>
                <div>
                  <h3>Ganhe velocidade</h3>
                  <p>Quando bem configurado, o DBSync é rápido.
                    Isso significa que a entrega dos dados beira o tempo real.
                    O DBSync usa o Kafka, que é robusto, escalável e lida com grandes volumes de dados rapidamente. Além disso, usa a infraestrutura do Openshift, que pode ser escalada para persistir esses dados tão velozmente quanto são lidos.</p>
                </div>
                <img src="./img/telaGestaoParametros.png" alt="Suporte 24/7" />
              </div>
              <div className='service-item'>
                <img src="./img/telaGestaoParametros.png" alt="Suporte 24/7" />
                <div>
                  <h3>Evite a perda de dados</h3>
                  <p className='text-right'>Mesmo em um cenário de downtime das aplicações, após o reestabelecimento dos recursos o DBSync volta a sincronizar os dados. Com a segurança da entrega dos dados via Kafka, cada cliente tem gravado exatamente o último dado que foi lido e entregue. Além disso, a aplicação está coberta pelo sobreaviso e envia alertas de falhas via Telegram e e-mail.</p>
                </div>
              </div>
              <div className='service-item'>
                <div>
                  <h3>Múltiplos conectores</h3>
                  <p>Com o DBSync e seus conectores, habilitamos que os tipos de bases de dados de origem e destino sejam diferentes. Por exemplo, abrimos a possibilidade de que os dados sejam de origem SqlServer e sejam escritos em um MongoDB, no destino. Como o DBSync usa o DEBEZIUM, o modelo de mensagem produzida fica na notação JSON, tornando simples a leitura e persistência dos dados.</p>
                </div>
                <img src="./img/telaGestaoParametros.png" alt="Suporte 24/7" />
              </div>
            </div>
            </section>
        </main>
        <footer>
          <p>Rrodapé</p>
        </footer>
    </div>
  );
}

export default LandingPage;