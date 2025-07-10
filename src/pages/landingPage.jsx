import '../styles/App.css';
import '../styles/landingPage.css';
import '../styles/footer.css';
import '../styles/animation.css';
import '../styles/splide.min.css';
import '../styles/navbar.css';
import Carrossel from '../components/carrossel';

function LandingPage() {

  return (  
    <div className='body-area'>
        <main>
          <section className="home-container">
            <div>
              <div className='home-container-text'>
                {/*<FlipText />*/}
                <div className='logo-modelOps'>
                  <img src={process.env.PUBLIC_URL + "/img/Marca_Modelops.png"} alt="Logo ONS" />
                  <h1>ModelOPS</h1>
                </div>
                <p className='sub-title'>Governança, automação e gestão completa de modelos inteligentes.</p>
                <div>
                  <button className='btn-container'><a href="https://modelops-ui-modelops-tst.apps.rosa.rosa-dev.wmaj.p3.openshiftapps.com/dashboard">Utilizar Sistema</a></button>
                  <button className='btn-container btn-container-secondary'><a href="#">Em DEV</a></button>
                </div>
              </div>
              <img src={process.env.PUBLIC_URL + "/img/Logo_ModelOps_Sem_Texto.svg"} alt="Carga inicial" />
            </div>
          </section>
          <section id='home-about'>
            <h2>Principais <span>Benefícios</span></h2>
            <Carrossel />
          </section>
          <section id='home-services'>
            <h2>Serviços</h2>
            <div className='services-container'>
              <div className='service-item'>
                <img src={process.env.PUBLIC_URL + "/img/esboço_modelOps.png"} alt="Carga inicial" />
                <div>
                  <h3>Amplie o poder dos seus dados</h3>
                  <p>Seus dados são alterados o tempo todo.
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
                <img src={process.env.PUBLIC_URL + "/img/telaGestaoConectores.png"} alt="Low-code" />
              </div>
              <div className='service-item'>
                <img src={process.env.PUBLIC_URL + "/img/telaConectores.png"} alt="Replicação" />
                <div>
                  <h3>Monitore o status de cada conector</h3>
                  <p>Com a interface do DBSync interagindo com a API do DEBEZIUM, é possível monitorar o status de cada conector, bem como as suas definições, de forma protegida.
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
                <img src={process.env.PUBLIC_URL + "/img/telaGestaoParametros.png"} alt="Suporte 24/7" />
              </div>
              <div className='service-item'>
                <img src={process.env.PUBLIC_URL + "/img/telaGestaoParametros.png"} alt="Suporte 24/7" />
                <div>
                  <h3>Evite a perda de dados</h3>
                  <p>Mesmo em um cenário de downtime das aplicações, após o reestabelecimento dos recursos o DBSync volta a sincronizar os dados. Com a segurança da entrega dos dados via Kafka, cada cliente tem gravado exatamente o último dado que foi lido e entregue. Além disso, a aplicação está coberta pelo sobreaviso e envia alertas de falhas via Telegram e e-mail.</p>
                </div>
              </div>
              <div className='service-item'>
                <div>
                  <h3>Múltiplos conectores</h3>
                  <p>Com o DBSync e seus conectores, habilitamos que os tipos de bases de dados de origem e destino sejam diferentes. Por exemplo, abrimos a possibilidade de que os dados sejam de origem SqlServer e sejam escritos em um MongoDB, no destino. Como o DBSync usa o DEBEZIUM, o modelo de mensagem produzida fica na notação JSON, tornando simples a leitura e persistência dos dados.</p>
                </div>
                <img src={process.env.PUBLIC_URL + "/img/telaGestaoParametros.png"} alt="Suporte 24/7" />
              </div>
            </div>
          </section>
        </main>
    </div>
  );
}

export default LandingPage;