### Documentação do Projeto: **0504 CSS Frameworks**

---

## 📖 Visão Geral

Nesta aula, foi demonstrado como utilizar frameworks de CSS em projetos React. Embora não seja utilizado durante o curso, aprendemos como integrar bibliotecas como **Bootstrap** e **React-Bootstrap** para estilização rápida e utilização de componentes prontos.

---

## 🎯 Objetivo do Projeto

1. Integrar frameworks de CSS como **Bootstrap** em um projeto React.
2. Configurar o projeto para utilizar bibliotecas externas de CSS.
3. Demonstrar o uso de classes CSS do **Bootstrap** em componentes React.
4. Introduzir frameworks baseados em React, como **React-Bootstrap**, que fornecem componentes prontos.

---

## 📄 Estrutura do Projeto

**Arquitetura:**
- **Configuração do Bootstrap:** Importação dos arquivos necessários de CSS e JavaScript no **index.js**.
- **Uso de Classes:** Demonstração prática de componentes estilizados com classes do Bootstrap.
- **Frameworks com Componentes:** Introdução ao uso de bibliotecas como **React-Bootstrap**.

**Componentes Criados:**
1. **App.jsx:** Demonstração de um card estilizado com Bootstrap.

---

## 🔧 Código Principal

### **Configuração do Bootstrap**

Instalação e configuração básica do **Bootstrap 5**.

**Instalação do Bootstrap**

```bash
npm install bootstrap@next
```

**index.js**

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
```

---

### **Uso de Classes do Bootstrap**

Demonstração prática de estilização com classes do Bootstrap.

**App.jsx**

```jsx
import React from 'react';

const App = () => {
  return (
    <div className="card bg-dark text-white m-5" style={{ maxWidth: '18rem' }}>
      <div className="card-header">Notebook</div>
      <div className="card-body">
        <h5 className="card-title">R$ 2500</h5>
        <p className="card-text">
          Esse é um notebook com 1tb, 16gb de ram e placa de vídeo de 16gb.
        </p>
      </div>
    </div>
  );
};

export default App;
```

**Descrição:**
- **Classes do Bootstrap:**
  - **`card`**: Estilização de cartões.
  - **`bg-dark` e `text-white`**: Cores de fundo e texto.
  - **`m-5`**: Margem.
- **Estilos Inline:** Complementam as classes para ajustes específicos, como **`maxWidth`**.

---

### **Frameworks com Componentes**

**React-Bootstrap:** Alternativa que fornece componentes React prontos baseados no Bootstrap, eliminando a necessidade de utilizar classes diretamente.

Exemplo: 

```bash
npm install react-bootstrap bootstrap
```

**App.jsx (com React-Bootstrap)**

```jsx
import React from 'react';
import Card from 'react-bootstrap/Card';

const App = () => {
  return (
    <Card bg="dark" text="white" style={{ maxWidth: '18rem' }} className="m-5">
      <Card.Header>Notebook</Card.Header>
      <Card.Body>
        <Card.Title>R$ 2500</Card.Title>
        <Card.Text>
          Esse é um notebook com 1tb, 16gb de ram e placa de vídeo de 16gb.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default App;
```

---

## 🧠 O que Aprendi

1. **Integração de Frameworks:**
   - Configuração simples para adicionar frameworks de CSS ao React.

2. **Uso de Classes:**
   - Utilizar classes CSS de frameworks diretamente em elementos React.

3. **Componentes Prontos:**
   - Frameworks como **React-Bootstrap** oferecem componentes React prontos, promovendo produtividade e consistência.

4. **Complemento com Estilos Inline:**
   - Estilos inline podem ser usados para ajustes específicos em combinação com classes.

---

## 🌟 Destaques

1. **Estilização Rápida:**
   - Frameworks como **Bootstrap** permitem prototipagem e estilização rápida.

2. **Flexibilidade:**
   - Possibilidade de combinar classes CSS, estilos inline e componentes React.

3. **Componentização:**
   - Frameworks como **React-Bootstrap** promovem reutilização e manutenção de componentes.

---

## 🌐 Próximos Passos

1. Explorar bibliotecas como **Material-UI** e **TailwindCSS** para maior personalização e flexibilidade.
2. Integrar variáveis CSS do Bootstrap para criar temas personalizados.
3. Experimentar a combinação de **Bootstrap** com **CSS Modules** ou **Styled Components**.