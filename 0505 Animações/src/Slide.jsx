import React from 'react';

import styles from './Slide.module.css';

const Slide = ({ slides }) => {
  const [posicao, setPosicao] = React.useState(0);
  const slideRef = React.useRef();

  function anteriorSlide() {
    const { width } = slideRef.current.getBoundingClientRect();
    if (posicao < 0) setPosicao((prev) => prev + width);
  }

  function proximoSlide() {
    const { width } = slideRef.current.getBoundingClientRect();
    if (Math.abs(posicao) < width * (slides.length - 1)) {
      setPosicao((prev) => prev - width);
    }
  }

  return (
    <section className={styles.container}>
      <div
        ref={slideRef}
        className={styles.content}
        style={{ transform: `translateX(${posicao}px)` }}
      >
        {slides.map((slide) => (
          <div className={styles.item} key={slide.id}>
            {slide.conteudo}
          </div>
        ))}
      </div>
      <nav className={styles.nav}>
        <button onClick={() => anteriorSlide()}>Anterior</button>
        <button onClick={() => proximoSlide()}>Próximo</button>
      </nav>
    </section>
  );
};

export default Slide;
