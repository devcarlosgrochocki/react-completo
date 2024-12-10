### Documentação do Projeto: **0212 Desafio Componentes**

---

## 📖 Visão Geral

Neste projeto, o objetivo foi replicar a interface apresentada na aula e estruturar os componentes de forma reutilizável. A aplicação apresenta uma navegação simples entre uma página inicial e uma lista de produtos, utilizando uma abordagem modular para construção dos componentes.

---

## 🎯 Objetivo do Projeto

- **Criar uma aplicação baseada em componentes.**
- **Implementar navegação simples utilizando o objeto `window.location`.**
- **Reutilizar componentes para estruturação modular.**
- **Renderizar uma lista de produtos dinamicamente a partir de um array.**

---

## 📄 Estrutura do Projeto

1. **Componentes Criados**:
   - **App.js**: Gerencia a navegação e integra os outros componentes.
   - **Header.js**: Exibe a barra de navegação.
   - **Home.js**: Página inicial com informações básicas.
   - **Produtos.js**: Página que lista os produtos.
   - **Produto.js**: Componente para exibir os detalhes de cada produto.
   - **Titulo.js**: Componente para exibir títulos com estilo padronizado.

2. **Navegação Simples**:
   - Utilização de `window.location.pathname` para alternar entre as páginas.

3. **Renderização Dinâmica**:
   - Mapeamento do array `produtos` para renderizar os componentes de produto.

---

## 🔧 Principais Componentes

### **App.js**
Componente principal que gerencia a navegação e renderiza as páginas de acordo com a URL.

```jsx
import React from 'react';
import Header from './Header';
import Home from './Home';
import Produtos from './Produtos';

const App = () => {
  const { pathname } = window.location;
  let Component;

  if (pathname === '/produtos') {
    Component = Produtos;
  } else {
    Component = Home;
  }

  return (
    <section>
      <Header />
      <Component />
    </section>
  );
};

export default App;
```

---

### **Header.js**
Barra de navegação para alternar entre as páginas.

```jsx
import React from 'react';

const Header = () => {
  return (
    <header>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/produtos">Produtos</a></li>
      </ul>
    </header>
  );
};

export default Header;
```

---

### **Home.js**
Página inicial com uma breve descrição.

```jsx
import React from 'react';
import Titulo from './Titulo';

const Home = () => {
  return (
    <section>
      <Titulo texto="Home" />
      <p>Essa é a home do site</p>
    </section>
  );
};

export default Home;
```

---

### **Produtos.js**
Página que lista os produtos com seus detalhes.

```jsx
import React from 'react';
import Titulo from './Titulo';
import Produto from './Produto';

const Produtos = () => {
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];

  return (
    <section>
      <Titulo texto="Produtos" />
      {produtos.map((produto) => (
        <Produto key={produto.nome} {...produto} />
      ))}
    </section>
  );
};

export default Produtos;
```

---

### **Produto.js**
Componente para exibir as informações de um produto.

```jsx
import React from 'react';

const Produto = ({ nome, propriedades }) => {
  return (
    <div style={{ border: '1px solid', margin: '1rem 0', padding: '1rem' }}>
      <p>{nome}</p>
      <ul>
        {propriedades.map((propriedade) => (
          <li key={propriedade}>{propriedade}</li>
        ))}
      </ul>
    </div>
  );
};

export default Produto;
```

---

### **Titulo.js**
Componente reutilizável para exibir títulos estilizados.

```jsx
import React from 'react';

const Titulo = (props) => {
  return <h1 style={{ color: '#4c8b64' }}>{props.texto}</h1>;
};

export default Titulo;
```

---

## 🧠 O que Aprendi

1. **Composição de Componentes**:
   - Dividir a aplicação em componentes menores e reutilizáveis.

2. **Navegação Simples**:
   - Utilizar o objeto `window.location` para renderizar componentes dinamicamente com base na URL.

3. **Renderização Dinâmica**:
   - Uso do método `map` para exibir listas baseadas em arrays.

4. **Props**:
   - Passar e desestruturar propriedades para personalizar componentes.

---

## 🌟 Destaques

1. **Reutilização de Componentes**:
   - Componentes como `Titulo` e `Produto` são reutilizados em diferentes contextos.

2. **Estilização Inline**:
   - Aplicação de estilos diretamente no JSX para personalização rápida.

3. **Estrutura Modular**:
   - Organização clara dos componentes para facilitar manutenção e entendimento.

---

## 🌐 Próximos Passos

- Adicionar navegação dinâmica utilizando **React Router**.
- Melhorar a estilização utilizando bibliotecas como **CSS Modules** ou **Styled Components**.
- Implementar estados globais para gerenciar os dados da aplicação.