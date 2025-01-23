### Documentação do Projeto: **0705 Classes**

---

## 📖 Visão Geral

Antes do surgimento dos hooks no React, os **componentes de classe** eram a única forma de criar componentes com estados reativos e métodos de ciclo de vida. Eles utilizam o **`extends React.Component`**, que oferece funcionalidades como gerenciamento de estado, acesso a props, e controle do ciclo de vida.

---

## 🎯 Objetivo do Projeto

1. Entender como funcionam os **componentes de classe** no React.
2. Aprender a gerenciar estados e propriedades utilizando **`this.state`** e **`this.props`**.
3. Implementar métodos de ciclo de vida para controlar o comportamento dos componentes em diferentes momentos.

---

## 📄 Estrutura do Projeto

**Arquitetura:**
- **Produtos.jsx:** Demonstração de um componente de classe com estado, props e ciclo de vida.
- **App.jsx:** Componente funcional que utiliza o **Produtos.jsx**.

**Principais Conceitos:**
1. **`this.props`:** Acessa propriedades passadas ao componente.
2. **`this.state`:** Gerencia estados internos do componente.
3. **`this.setState()`:** Atualiza o estado e re-renderiza o componente.
4. **Métodos de ciclo de vida:** Permitem executar ações em momentos específicos (montagem, atualização e desmontagem).

---

## 🔧 Código Principal

### **Exemplo 1: Componente Simples**

**Produtos.jsx**

```jsx
import React from 'react';

class Produtos extends React.Component {
  render() {
    return (
      <div>
        <h1>Componente de Classe</h1>
      </div>
    );
  }
}

export default Produtos;
```

**App.jsx**

```jsx
import React from 'react';
import Produtos from './Produtos';

const App = () => {
  return (
    <div>
      <Produtos />
    </div>
  );
};

export default App;
```

---

### **Exemplo 2: Props em Componentes de Classe**

**Produtos.jsx**

```jsx
import React from 'react';

class Produtos extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.titulo}</h1>
      </div>
    );
  }
}

export default Produtos;
```

**App.jsx**

```jsx
import React from 'react';
import Produtos from './Produtos';

const App = () => {
  return (
    <div>
      <Produtos titulo="Meus Produtos" />
    </div>
  );
};

export default App;
```

---

### **Exemplo 3: Gerenciamento de Estado**

**Produtos.jsx**

```jsx
import React from 'react';

class Produtos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contar: 0,
    };
  }

  render() {
    return (
      <div>
        <h1>{this.props.titulo}</h1>
        <p>{this.state.contar}</p>
        <button onClick={() => this.setState({ contar: this.state.contar + 1 })}>
          Adicionar
        </button>
      </div>
    );
  }
}

export default Produtos;
```

---

### **Exemplo 4: Métodos de Ciclo de Vida**

**Produtos.jsx**

```jsx
import React from 'react';

class Produtos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contar: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log('Componente montado - ideal para Fetch.');
  }

  componentDidUpdate() {
    console.log('Componente atualizado.');
  }

  componentWillUnmount() {
    console.log('Componente desmontado.');
  }

  handleClick() {
    this.setState((state) => ({
      contar: state.contar + 1,
    }));
  }

  render() {
    return (
      <div>
        <h1>{this.props.titulo}</h1>
        <p>{this.state.contar}</p>
        <button onClick={this.handleClick}>Adicionar</button>
      </div>
    );
  }
}

export default Produtos;
```

---

## 🧠 O que Aprendi

1. **Props e Estado:**
   - **`this.props`** é usado para acessar as propriedades passadas ao componente.
   - **`this.state`** é usado para gerenciar o estado interno do componente.

2. **Atualização de Estado:**
   - **`this.setState()`** é usado para alterar o estado e re-renderizar o componente.

3. **Ciclo de Vida:**
   - **`componentDidMount`**: Executado após o componente ser montado.
   - **`componentDidUpdate`**: Executado após uma atualização no componente.
   - **`componentWillUnmount`**: Executado antes de o componente ser desmontado.

4. **Métodos e Contexto:**
   - É necessário usar **`bind`** para garantir que os métodos mantenham o contexto correto do `this`.

---

## 🌟 Destaques

1. **Gerenciamento Completo:**
   - Os componentes de classe oferecem controle total sobre o estado, ciclo de vida e métodos.

2. **Legibilidade:**
   - Separação clara de responsabilidades entre métodos e renderização.

3. **Ciclo de Vida:**
   - Permite executar ações precisas em momentos específicos do componente.

---

## 🌐 Próximos Passos

1. Comparar o uso de componentes de classe com **hooks** para identificar as diferenças e vantagens.
2. Implementar **`componentDidCatch`** para manipulação de erros em componentes.
3. Explorar a migração de componentes de classe para componentes funcionais com hooks.