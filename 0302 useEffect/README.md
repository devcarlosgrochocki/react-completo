### Documentação do Projeto: **0302 useEffect**

---

## 📖 Visão Geral

Neste projeto, o foco foi explorar o Hook `useEffect` do React, que permite manipular o ciclo de vida dos componentes funcionais. O `useEffect` possibilita executar efeitos colaterais em momentos específicos, como após a renderização inicial, atualizações de estado ou desmontagem de um componente.

---

## 🎯 Objetivos do Projeto

- **Compreender o ciclo de vida dos componentes funcionais**.
- **Utilizar o `useEffect`** para gerenciar efeitos colaterais, como:
  - Chamadas à API.
  - Atualização do título do documento.
  - Armazenamento de preferências do usuário no `localStorage`.
- **Gerenciar dependências** no `useEffect` para evitar reexecuções desnecessárias.
- **Implementar desmontagem limpa** de componentes, removendo eventos ou recursos.

---

## 🧩 Estrutura do Projeto

### **Componentes Criados**

1. **App.js**:
   - Gerencia o estado do produto selecionado e as preferências do usuário no `localStorage`.
   - Renderiza os botões e passa as informações para o componente `Produto`.

2. **Produto.js**:
   - Recebe o produto selecionado como prop.
   - Busca informações do produto na API e as exibe.

---

## 🚀 Principais Conceitos Aplicados

### **1. Ciclo de Vida com `useEffect`**
O `useEffect` permite executar efeitos colaterais em diferentes momentos:
- **Sem dependências (`[]`)**: Executa apenas na montagem.
- **Com dependências ([variáveis])**: Executa sempre que uma dependência é atualizada.
- **Retorno do `useEffect`**: Executa durante a desmontagem do componente.

Exemplo:
```jsx
React.useEffect(() => {
  console.log('Executa na montagem e atualização de dependências.');
  return () => {
    console.log('Executa na desmontagem.');
  };
}, [dependencia]);
```

---

### **2. Uso Correto de Dependências**
O React recomenda adicionar todas as variáveis usadas no `useEffect` à lista de dependências para evitar comportamentos inesperados.

---

### **3. Manipulação do `localStorage`**
Armazenar preferências do usuário e recuperá-las ao carregar a aplicação.

Exemplo:
```jsx
React.useEffect(() => {
  const produtoLocal = window.localStorage.getItem('produto');
  if (produtoLocal) setProduto(produtoLocal);
}, []);
```

---

### **4. Chamadas à API**
Buscar dados dinamicamente ao clicar em botões e exibir os resultados.

Exemplo:
```jsx
React.useEffect(() => {
  if (produto !== null) {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
      .then((response) => response.json())
      .then((json) => setDados(json));
  }
}, [produto]);
```

---

## 🔧 Código Implementado

### **App.js**
Gerencia o estado e as preferências do usuário.

```jsx
import React from 'react';
import Produto from './Produto';

const App = () => {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto');
    if (produtoLocal) setProduto(produtoLocal);
  }, []);

  React.useEffect(() => {
    if (produto) window.localStorage.setItem('produto', produto);
  }, [produto]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <div>
      <h1>Preferência: {produto}</h1>
      <button onClick={handleClick} style={{ marginRight: '1rem' }}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
      <Produto produto={produto} />
    </div>
  );
};

export default App;
```

---

### **Produto.js**
Exibe informações do produto selecionado.

```jsx
import React from 'react';

const Produto = ({ produto }) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    if (produto) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((response) => response.json())
        .then((json) => setDados(json));
    }
  }, [produto]);

  if (!dados) return null;

  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
    </div>
  );
};

export default Produto;
```

---

## 🧠 O que Aprendi

1. **Ciclo de Vida com `useEffect`**:
   - Montagem, atualização e desmontagem de componentes.

2. **LocalStorage**:
   - Persistir dados entre sessões para melhorar a experiência do usuário.

3. **Efeitos com Dependências**:
   - Controlar a execução de efeitos com base em variáveis específicas.

4. **Múltiplos Efeitos**:
   - Gerenciar efeitos independentes em diferentes `useEffect`.

5. **Manutenção Limpa**:
   - Garantir que eventos ou recursos sejam removidos ao desmontar componentes.

---

## 🌟 Destaques

1. **Preferências do Usuário**:
   - Produto selecionado é salvo e recuperado automaticamente.

2. **Requisições Assíncronas**:
   - Busca de dados na API com exibição dinâmica.

3. **Desmontagem Limpa**:
   - Uso de retornos no `useEffect` para evitar vazamentos de memória.

---

## 🌐 Próximos Passos

- Adicionar tratamento de erros para chamadas à API.
- Melhorar a experiência do usuário com um indicador de carregamento.
- Explorar Hooks avançados como `useMemo` e `useCallback` para otimizar a performance.