### Documentação do Projeto: **0704 useReducer**

---

## 📖 Visão Geral

O **useReducer** é um hook do React usado para gerenciar estados mais complexos. Ele é útil em situações onde o estado depende de várias ações para ser atualizado. Com ele, definimos um **reducer**, que é uma função responsável por processar as ações e atualizar o estado.

---

## 🎯 Objetivo do Projeto

1. Entender o funcionamento do **useReducer**.
2. Gerenciar estados complexos com múltiplas ações.
3. Comparar o **useReducer** com o **useState** para identificar cenários onde cada um é mais apropriado.

---

## 📄 Estrutura do Projeto

**Arquitetura:**
- **Reducer Function:** Processa as ações recebidas e retorna um novo estado.
- **Dispatch:** Dispara uma ação para o reducer, informando o tipo de modificação necessária no estado.

**Componentes Criados:**
1. **App.jsx:** Exemplos práticos de uso do **useReducer** para estados simples e complexos.

---

## 🔧 Código Principal

### **Exemplo 1: Contador com `useReducer`**

**Reducer Function**

```jsx
function reducer(state, action) {
  switch (action) {
    case 'aumentar':
      return state + 1;
    case 'reduzir':
      return state - 1;
    default:
      throw new Error('Ação não reconhecida');
  }
}
```

**App.jsx**

```jsx
import React from 'react';

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, 0);

  return (
    <div>
      <button onClick={() => dispatch('aumentar')}>+</button>
      <button onClick={() => dispatch('reduzir')}>-</button>
      <p>{state}</p>
    </div>
  );
};

export default App;
```

---

### **Exemplo 2: Contador com `useState` (Comparação)**

**App.jsx**

```jsx
import React from 'react';

const App = () => {
  const [contar, setContar] = React.useState(0);

  function aumentar() {
    setContar(contar + 1);
  }

  function reduzir() {
    setContar(contar - 1);
  }

  return (
    <div>
      <button onClick={aumentar}>+</button>
      <button onClick={reduzir}>-</button>
      <p>{contar}</p>
    </div>
  );
};

export default App;
```

---

### **Exemplo 3: Gerenciamento de Lista com `useReducer`**

**Reducer Function**

```jsx
function reducer(state, action) {
  switch (action.type) {
    case 'adicionar':
      return [...state, action.content];
    case 'remover':
      return state.filter((item) => item !== action.content);
    default:
      throw new Error('Ação não reconhecida');
  }
}
```

**App.jsx**

```jsx
import React from 'react';

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, ['Item 1']);

  return (
    <div>
      <button onClick={() => dispatch({ type: 'remover', content: 'Item 1' })}>
        Remover Item 1
      </button>
      <button
        onClick={() => dispatch({ type: 'adicionar', content: 'Item 2' })}
      >
        Adicionar Item 2
      </button>
      <ul>
        {state.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
```

---

## 🧠 O que Aprendi

1. **useReducer:**
   - Gerencia estados com múltiplas ações.
   - Requer uma função reducer que define a lógica para modificar o estado.

2. **Reducer Function:**
   - Processa ações com base no tipo e nos dados fornecidos.
   - Retorna o novo estado atualizado.

3. **Diferença entre useReducer e useState:**
   - **useState:** Simples e direto, ideal para estados básicos.
   - **useReducer:** Ideal para estados complexos com múltiplas ações ou lógica mais detalhada.

---

## 🌟 Destaques

1. **Organização:**
   - Separação clara da lógica de atualização de estado na função reducer.

2. **Flexibilidade:**
   - Suporte para estados complexos, como objetos ou arrays com várias ações.

3. **Desempenho:**
   - Reduz a necessidade de várias funções de atualização de estado espalhadas pelo código.

---

## 🌐 Próximos Passos

1. Explorar combinações de **useReducer** com **useContext** para gerenciar estados globais.
2. Implementar casos mais avançados, como carrinhos de compras ou formulários dinâmicos.
3. Medir o impacto no desempenho em projetos maiores utilizando **React DevTools**.