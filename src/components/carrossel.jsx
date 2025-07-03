import { Splide, SplideSlide } from '@splidejs/react-splide';
import './splide.min.css';

export default function Carrossel() {
  return (
    <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
      <Splide
        options={{
          type: 'loop',
          perPage: 1,
          pagination: true,
          arrows: true,
          autoplay: true,
          interval: 1000,
          pauseOnHover: true,
        }}
        style={{ width: '100%' }}
      >
        <SplideSlide className='slide-updates'>
          <div>
            <img src={process.env.PUBLIC_URL + "/img/carga-inicial.png"} alt="Imagem Carga Inicial" />
            <p className='title-slide'>Carga inicial</p>
          </div>
          <p>Inicie a primeira carga do sistema, levando dados da origem para o destino, usando uma interface amigável.</p>
        </SplideSlide>
        <SplideSlide className='slide-updates'>
          <div>
            <img src={process.env.PUBLIC_URL + "/img/code-img.png"} alt="Imagem Low-Code" />
            <p className='title-slide'>Low-code</p>
          </div>
          <p>Gerencie suas sincronizações via interface, usando código somente para personalizar sua carga inicial.</p>
        </SplideSlide>
        <SplideSlide className='slide-updates'>
          <div>
            <img src={process.env.PUBLIC_URL + "/img/setas-icone.png"} alt="Imagem Replicação" />
            <p className='title-slide'>Replicação</p>
          </div>
          <p>Sincronização de dados robusta e escalável com o uso do DEBEZIUM e da infraestrutura do OPENSHIFT.</p>
        </SplideSlide>
        <SplideSlide className='slide-updates'>
          <div>
            <img src={process.env.PUBLIC_URL + "/img/suporte-icon.png"} alt="Imagem Suporte" />
            <p className='title-slide'>Suporte 24/7</p>
          </div>
          <p>A plataforma adota a observabilidade, envia alertas via Telegram, e-mail e outros. Está no sobreaviso para dar suporte aos times.</p>
        </SplideSlide>
      </Splide>
    </div>
  );
}