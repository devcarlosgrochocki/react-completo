### Documentação do Projeto: **0505 Animações**

---

## 📖 Visão Geral

Nesta aula, exploramos a criação de animações no React utilizando CSS e a propriedade **animation**. Aprendemos a animar a entrada de elementos e criar slides interativos com transições suaves. O objetivo foi tornar interfaces mais dinâmicas e interativas.

---

## 🎯 Objetivo do Projeto

1. Implementar animações CSS em componentes React.
2. Criar uma animação de entrada para elementos utilizando **keyframes**.
3. Desenvolver um **Slide** interativo com transições baseadas em estado.
4. Utilizar **useRef** e **useEffect** para calcular posições dinâmicas de elementos.

---

## 📄 Estrutura do Projeto

**Arquitetura:**
- **Produto.jsx:** Componente com animação de entrada utilizando `keyframes`.
- **Slide.jsx:** Componente para criar slides animados com navegação.
- **CSS Modules:** Utilizado para estilizar e encapsular as animações do Slide.

**Componentes Criados:**
1. **Produto.jsx:** Demonstração de uma animação de entrada.
2. **Slide.jsx:** Componente de slides com animações de transição.
3. **App.jsx:** Integração dos exemplos.

---

## 🔧 Código Principal

### **Exemplo 1: Animação de Entrada**

Utilizando **keyframes** para animar a entrada de um componente.

**CSS**

```css
.animeLeft {
  opacity: 0;
  transform: translateX(-20px);
  animation: animeLeft 0.3s forwards;
}

@keyframes animeLeft {
  to {
    opacity: 1;
    transform: initial;
  }
}
```

**App.jsx**

```jsx
import React from 'react';
import Produto from './Produto';

const App = () => {
  const [ativar, setAtivar] = React.useState(false);

  return (
    <div>
      <button onClick={() => setAtivar(!ativar)}>Ativar</button>
      {ativar && <Produto />}
    </div>
  );
};

export default App;
```

**Produto.jsx**

```jsx
import React from 'react';
import './App.css';

const Produto = () => {
  return (
    <div className="animeLeft">
      <h1>Notebook</h1>
      <span>R$ 2000</span>
    </div>
  );
};

export default Produto;
```

---

### **Exemplo 2: Slide Interativo**

Desenvolvimento de um **Slide** interativo com transições.

**Slide.module.css**

```css
.container {
  overflow: hidden;
}

.content {
  display: flex;
  z-index: 100;
  transition: transform 0.3s ease;
}

.item {
  flex-shrink: 0;
  width: 80%;
  margin: 0 10%;
  border-radius: 4px;
  background-color: #eee;
  text-align: center;
  padding: 10rem 0;
}

.nav {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 1rem auto;
}
```

**Slide.jsx**

```jsx
import React from 'react';
import styles from './Slide.module.css';

const Slide = ({ slides }) => {
  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const contentRef = React.useRef();

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(width * active));
  }, [active]);

  function slidePrev() {
    if (active > 0) setActive(active - 1);
  }

  function slideNext() {
    if (active < slides.length - 1) setActive(active + 1);
  }

  return (
    <section className={styles.container}>
      <div
        ref={contentRef}
        className={styles.content}
        style={{ transform: `translateX(${position}px)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className={styles.item}>
            {slide.text}
          </div>
        ))}
      </div>
      <nav className={styles.nav}>
        <button onClick={slidePrev}>Anterior</button>
        <button onClick={slideNext}>Próximo</button>
      </nav>
    </section>
  );
};

export default Slide;
```

**App.jsx**

```jsx
import React from 'react';
import Slide from './Slide';

const App = () => {
  const slides = [
    { id: 'slide1', text: 'Slide 1' },
    { id: 'slide2', text: 'Slide 2' },
    { id: 'slide3', text: 'Slide 3' },
  ];

  return (
    <div>
      <Slide slides={slides} />
    </div>
  );
};

export default App;
```

---

## 🧠 O que Aprendi

1. **Animação com Keyframes:**
   - Utilizar a propriedade `animation` para criar transições suaves de entrada.

2. **Slides Interativos:**
   - Usar **useRef** para calcular dimensões dinâmicas e aplicar transições com `transform`.

3. **CSS Modules:**
   - Encapsular estilos de componentes para evitar conflitos e melhorar a manutenção.

4. **Controle com Estado:**
   - Alternar animações e posições com base no estado do componente.

---

## 🌟 Destaques

1. **Animações Elegantes:**
   - As transições tornam a interface mais fluida e interativa.

2. **Modularidade:**
   - Uso de CSS Modules para organização e escopo de estilos.

3. **Interatividade:**
   - Slides com navegação dinâmica criam uma experiência de usuário rica.

---

## 🌐 Próximos Passos

1. Adicionar indicadores visuais para o slide ativo.
2. Implementar animações personalizadas para transições entre slides.
3. Explorar bibliotecas como **Framer Motion** para animações mais avançadas.