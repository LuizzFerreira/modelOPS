import { Splide, SplideSlide } from '@splidejs/react-splide';

export default function Carrossel() {
  return (
    <div style={{ width: '100%', maxWidth: '676px', margin: '0 auto' }}>
      <Splide
        options={{
          type: 'loop',
          perPage: 1,
          pagination: true,
          arrows: true,
          autoplay: true,
          interval: 5000,
          pauseOnHover: true,
        }}
        style={{ width: '100%' }}
      >
        <SplideSlide className='slide-updates'>
          <div>
            <img src={process.env.PUBLIC_URL + "/img/Eficiencia_Operacional.png"} alt="Imagem Eficiência Operacional" />
            <p className='title-slide'>Eficiência Operacional</p>
          </div>
          <p>Redução significativa no tempo de preparação, execução e extração de resultados</p>
        </SplideSlide>
        <SplideSlide className='slide-updates'>
          <div>
            <img src={process.env.PUBLIC_URL + "/img/code-img.png"} alt="Imagem Low-Code" />
            <p className='title-slide'>Transparência</p>
          </div>
          <p>Rastreabilidade completa de todas as execuções e versões de modelos</p>
        </SplideSlide>
        <SplideSlide className='slide-updates'>
          <div>
            <img src={process.env.PUBLIC_URL + "/img/setas-icone.png"} alt="Imagem Replicação" />
            <p className='title-slide'>Otimização de Recursos</p>
          </div>
          <p>Diminuição dos custos computacionais e de armazenamento</p>
        </SplideSlide>
        <SplideSlide className='slide-updates'>
          <div>
            <img src={process.env.PUBLIC_URL + "/img/Produtividade.png"} alt="Imagem Suporte" />
            <p className='title-slide'>Produtividade</p>
          </div>
          <p>Eliminação de retrabalhos e processos manuais repetitivos</p>
        </SplideSlide>
      </Splide>
    </div>
  );
}