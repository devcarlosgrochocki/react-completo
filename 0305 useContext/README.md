### Documentação do Projeto: **0305 useContext**

---

## 📖 Visão Geral

Neste projeto, exploramos o **React Context API** para gerenciar estados globais de forma eficiente, eliminando a necessidade de prop drilling. O **Context API** permite que dados e estados sejam acessados diretamente por componentes filhos, sem a necessidade de passá-los como propriedades.

---

## 🎯 Objetivo do Projeto

- **Criar e usar um Contexto global** para compartilhar dados entre componentes.
- **Implementar um Provider** para encapsular componentes que acessam o contexto.
- **Utilizar o `useContext`** para consumir o contexto de forma simples.
- **Aplicar Context API** em um exemplo real, utilizando dados de uma API externa.
- **Gerenciar e limpar estados globais** dinamicamente.

---

## 📄 Estrutura do Projeto

1. **Arquitetura**:
   - Componentes organizados em módulos.
   - Contexto criado e gerenciado em um arquivo específico.
   - API externa utilizada para fornecer dados ao estado global.

2. **Componentes Criados**:
   - **App.jsx**: Componente principal que organiza a aplicação.
   - **Produto.jsx**: Demonstra o consumo do estado global.
   - **GlobalContext.js**: Define e gerencia o estado global.

---

## 🔧 Principais Componentes

### **App.jsx**

Encapsula os componentes filhos dentro do `GlobalStorage` para fornecer acesso ao contexto global.

```jsx
import React from 'react';
import Produto from './Produto';
import { GlobalStorage } from './GlobalContext';

const App = () => {
  return (
    <GlobalStorage>
      <h1>Gerenciamento de Estado Global com Context API</h1>
      <Produto />
    </GlobalStorage>
  );
};

export default App;
```

---

### **GlobalContext.js**

Define o contexto global e o Provider, que encapsula os componentes filhos e gerencia o estado global.

```jsx
import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then((response) => response.json())
      .then((json) => setProduto(json));
  }, []);

  function limparDados() {
    setProduto(null);
  }

  return (
    <GlobalContext.Provider value={{ produto, setProduto, limparDados }}>
      {children}
    </GlobalContext.Provider>
  );
};
```

---

### **Produto.jsx**

Componente que consome os dados do contexto global usando `useContext`.

```jsx
import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const { produto, limparDados } = React.useContext(GlobalContext);

  return (
    <div>
      <h2>Produtos</h2>
      {produto ? (
        <ul>
          {produto.map((item) => (
            <li key={item.id}>
              <strong>{item.nome}</strong>: {item.preco}
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum produto disponível.</p>
      )}
      <button onClick={limparDados}>Limpar Dados</button>
    </div>
  );
};

export default Produto;
```

---

## 🧠 O que Aprendi

1. **`createContext`**:
   - Usado para criar um contexto que pode ser compartilhado entre componentes.
   - Ideal para estados e dados globais como autenticação, temas, e carrinhos de compras.

2. **Provider**:
   - Encapsula os componentes que consomem o contexto.
   - Usa a propriedade `value` para expor dados e funções globais.

3. **`useContext`**:
   - Permite consumir diretamente o contexto sem precisar passar propriedades manualmente.

4. **Gerenciamento de estados globais**:
   - Dados de uma API podem ser carregados diretamente no contexto.
   - Funções podem ser expostas no contexto para manipular estados globais.

---

## 🌟 Destaques

1. **Integração com API externa**:
   - Dados da API foram armazenados e gerenciados no contexto global.

2. **Modularidade**:
   - Componentes desacoplados, cada um com sua responsabilidade.

3. **Estado global dinâmico**:
   - A capacidade de atualizar e limpar estados globalmente.

---

## 🌐 Próximos Passos

- Implementar autenticação usando Context API.
- Utilizar `React.memo` para otimizar componentes que consomem o contexto.
- Adicionar lógica para persistir estados globais no `localStorage`.