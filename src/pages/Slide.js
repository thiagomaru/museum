import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: 'https://cdn.culturagenial.com/imagens/leonardo-da-vinci-mona-lisa-0-cke.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1',
    key: 1,
    width: '600px',
    height: '800px',
  },
  {
    src: 'https://www.colegiodosjesuitas.com.br/wp-content/uploads/2021/08/Artigo_Site_Dia-das-Artes.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2',
    key: 2,
    width: '800px',
    height: '600px',
  },
  {
    src: 'https://ceugaleria.com.br/galeria/wp-content/uploads/2019/11/Conheca-5-belas-artes-famosas-na-histo%CC%81ria-da-arte-noite-estrelada-ceu-galeria.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    key: 3,
    width: '800px',
    height: '600px',
  },
  {
    src: 'https://static.todamateria.com.br/upload/ab/ap/abaporutarsiladoamaral-cke.jpg?auto_optimize=low',
    altText: 'Slide 4',
    caption: 'Slide 4',
    key: 4,
    width: '600px',
    height: '800px',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQidXBPsVClFpPMlivnHFv0Vs9htM3_hNfQYg&usqp=CAU',
    altText: 'Slide 5',
    caption: 'Slide 5',
    key: 5,
    width: '800px',
    height: '600px',
  },
  {
    src: 'https://s1.static.brasilescola.uol.com.br/be/vestibular/bbe0d9436cabb27595dc355795a89bce.jpg',
    altText: 'Slide 6',
    caption: 'Slide 6',
    key: 6,
    width: '800px',
    height: '600px',
  },
  {
    src: 'https://ceugaleria.com.br/galeria/wp-content/uploads/2019/11/Conheca-5-belas-artes-famosas-na-histo%CC%81ria-da-arte-o-grito-ceu-galeria.jpg',
    altText: 'Slide 7',
    caption: 'Slide 7',
    key: 7,
    width: '600px',
    height: '800px',
  },
  {
    src: 'https://static.todamateria.com.br/upload/ab/st/abstracionismo-0-cke.jpg?auto_optimize=low',
    altText: 'Slide 8',
    caption: 'Slide 8',
    key: 8,
    width: '800px',
    height: '600px',
  },
  {
    src: 'https://artout.com.br/wp-content/uploads/2019/02/O-que-%C3%A9-arte-visual-1.jpg',
    altText: 'Slide 9',
    caption: 'Slide 9',
    key: 9,
    width: '800px',
    height: '600px',
  },
  {
    src: 'https://bolsasdeestudosfacil.com.br/wp-content/uploads/2024/02/cropped-Artes-Visuais-Desvendando-o-Mundo-das-Artes.webp',
    altText: 'Slide 10',
    caption: 'Slide 10',
    key: 10,
    width: '600px',
    height: '800px',
  },
];

function Slide(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
      <div className="d-flex justify-content-center align-items-center" style={{ width: '100%', height: '100%' }}>
        <img
          src={item.src}
          alt={item.altText}
          style={{ width: item.width, height: item.height }}
        />
      </div>
      <div className="mt-3">
            <CarouselCaption
              captionText={item.caption}
              captionHeader={item.caption}
              className="text-white" // Aplicando cor branca ao texto do caption
            />
      </div>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Slide;