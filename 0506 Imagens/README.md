### Documentação do Projeto: **0506 Imagens**

---

## 📖 Visão Geral

Nesta aula, exploramos como trabalhar com imagens e SVGs em projetos React. Aprendemos a importar arquivos de imagens diretamente no código, utilizá-los como backgrounds em CSS e incorporar SVGs como componentes para maior flexibilidade e controle.

---

## 🎯 Objetivo do Projeto

1. Importar e usar imagens no React com caminhos gerenciados pelo **Webpack**.
2. Utilizar imagens como **backgrounds** no CSS.
3. Trabalhar com **SVGs** como arquivos importados ou como componentes React.
4. Configurar o **Vite** para suporte avançado de SVGs.

---

## 📄 Estrutura do Projeto

**Arquitetura:**
- **Imagens:** Arquivos gerenciados pelo Webpack, importados diretamente no componente.
- **Backgrounds no CSS:** Uso de caminhos relativos para imagens no estilo.
- **SVGs:** 
  - Importados como arquivos para uso direto.
  - Convertidos em componentes para controle dinâmico.
  - Configuração do **Vite** para suporte aprimorado.

**Componentes Criados:**
1. **App.jsx:** Demonstração de importação e uso de imagens e SVGs.
2. **DogSvg.jsx:** Exemplo de SVG como componente com propriedades dinâmicas.

---

## 🔧 Código Principal

### **Exemplo 1: Importação de Imagens**

Importando imagens diretamente no React.

**App.jsx**

```jsx
import React from 'react';
import foto from './img/foto.jpg';

const App = () => {
  return (
    <div>
      <img src={foto} alt="Cachorro" />
    </div>
  );
};

export default App;
```

---

### **Exemplo 2: Background no CSS**

Usando uma imagem como background.

**App.css**

```css
.fundo {
  width: 50px;
  height: 50px;
  background-image: url('./img/foto.jpg');
  background-size: cover;
}
```

**App.jsx**

```jsx
import React from 'react';
import './App.css';

const App = () => {
  return <div className="fundo"></div>;
};

export default App;
```

---

### **Exemplo 3: SVG como Arquivo**

Importando e utilizando SVGs no React.

**Configuração do Vite**

```bash
npm i vite-plugin-svgr
```

**vite.config.js**

```jsx
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
});
```

**App.jsx**

```jsx
import React from 'react';
import Dog from './img/dog.svg?react';

const App = () => {
  return (
    <div>
      <Dog />
    </div>
  );
};

export default App;
```

---

### **Exemplo 4: SVG como Componente Dinâmico**

Definindo um SVG como componente para controle dinâmico com props.

**DogSvg.jsx**

```jsx
const DogSvg = ({ color }) => {
  return (
    <svg
      width="28"
      height="22"
      viewBox="0 0 28 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 10h1.652c1.708 0 2.63 2.004 1.518 3.302l-1.618 1.887A4.501 4.501 0 0024.5 14.5a1.5 1.5 0 013 0A7.5 7.5 0 0114 19 7.5 7.5 0 01.5 14.5a1.5 1.5 0 013 0 4.5 4.5 0 008.948.689l-1.618-1.887C9.718 12.004 10.64 10 12.35 10H14z"
        fill={color}
      />
      <circle cx="21" cy="3" r="3" fill={color} />
      <circle cx="7" cy="3" r="3" fill={color} />
    </svg>
  );
};

export default DogSvg;
```

**App.jsx**

```jsx
import React from 'react';
import DogSvg from './DogSvg';

const App = () => {
  return (
    <div>
      <DogSvg color="#53d956" />
      <DogSvg color="#84e" />
    </div>
  );
};

export default App;
```

---

## 🧠 O que Aprendi

1. **Importação de Imagens:**
   - Imagens são gerenciadas pelo Webpack ou Vite, que definem o caminho correto na build final.

2. **Uso de Backgrounds:**
   - Imagens podem ser usadas como backgrounds no CSS com caminhos relativos.

3. **SVGs como Componentes:**
   - SVGs importados como componentes oferecem controle total sobre atributos como cor e tamanho.

4. **Configuração do Vite:**
   - Uso do plugin `vite-plugin-svgr` para facilitar a importação de SVGs como componentes React.

---

## 🌟 Destaques

1. **Modularidade:**
   - Cada tipo de imagem (JPG, PNG, SVG) pode ser tratado de forma específica, aumentando a flexibilidade.

2. **Flexibilidade com SVGs:**
   - SVGs como componentes permitem personalização dinâmica e reutilização.

3. **Integração Simples:**
   - Configuração fácil e suporte nativo para imagens no React.

---

## 🌐 Próximos Passos

1. Adicionar suporte para manipulação de SVGs com animações (ex.: **GSAP**).
2. Experimentar otimização de imagens com ferramentas como **Imagemin**.
3. Integrar imagens responsivas utilizando **picture** e **srcset**.