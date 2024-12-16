### Documentação do Projeto: **0301 useState**

---

## 📖 Visão Geral

Neste projeto, exploramos o conceito de **estado** e como manipulá-lo utilizando o **Hook `useState`** no React. Também discutimos o impacto da **reatividade** no ciclo de vida do componente e a importância de manter a **separação de responsabilidades** ao atualizar estados.

---

## 🎯 Objetivos do Projeto

- **Compreender o conceito de estado** e sua influência nos componentes React.
- **Utilizar o `useState`** para gerenciar estados em componentes funcionais.
- **Aplicar múltiplos estados** no mesmo componente.
- **Implementar reatividade** correta ao modificar estados.
- **Utilizar funções de callback** para atualizar estados de forma confiável.
- **Consumir dados externos com fetch** e exibir carregamento dinâmico.

---

## 🧩 Estrutura do Projeto

### **Componentes Criados**

1. **App.js**:
   - Gerencia o estado e realiza chamadas para a API.
   - Renderiza os botões e exibe os dados do produto carregado.

2. **Produto.js**:
   - Recebe os dados do produto como `props` e os exibe.

---

## 🚀 Principais Conceitos Aplicados

### **1. useState**
O `useState` é um Hook do React que permite gerenciar o estado de componentes funcionais. Ele retorna um **array** com dois valores:
- **Valor atual do estado**.
- **Função para atualizar o estado**.

Exemplo:
```jsx
const [ativo, setAtivo] = React.useState(true);
```

---

### **2. Atualização de Estado**
A atualização do estado sempre deve ser feita com a **função de modificação** (ex: `setAtivo`). Atualizar o estado diretamente não garante a reatividade.

Exemplo:
```jsx
setAtivo((anterior) => !anterior); // Atualização reativa com callback
```

---

### **3. Reatividade Correta**
Para evitar **efeitos colaterais**, cada função de atualização de estado deve operar no seu próprio escopo e cuidar apenas do estado que modifica.

**Errado**:
```jsx
setContar((contar) => {
  setItems([...items, 'Item ' + (contar + 1)]);
  return contar + 1;
});
```

**Correto**:
```jsx
setContar((prev) => prev + 1);
setItems((prev) => [...prev, 'Item ' + (contar + 1)]);
```

---

### **4. Consumo de Dados Externos**
Realizamos chamadas assíncronas com **`fetch`** para buscar dados de produtos a partir de uma API e exibimos os dados dinamicamente.

Exemplo de uso:
```jsx
async function handleClick(event) {
  setCarregando(true);
  const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`);
  const json = await response.json();
  setDados(json);
  setCarregando(false);
}
```

---

## 🔧 Código Implementado

### **App.js**
Componente principal que gerencia os estados e consome os dados externos.

```jsx
import React from 'react';
import Produto from './Produto';

const App = () => {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  async function handleClick(event) {
    setCarregando(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
    );
    const json = await response.json();
    setDados(json);
    setCarregando(false);
  }

  return (
    <>
      <button onClick={handleClick}>smartphone</button>
      <button onClick={handleClick}>tablet</button>
      <button onClick={handleClick}>notebook</button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados} />}
    </>
  );
};

export default App;
```

---

### **Produto.js**
Componente que exibe os detalhes do produto recebido via `props`.

```jsx
import React from 'react';

const Produto = ({ dados }) => {
  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
      <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
    </div>
  );
};

export default Produto;
```

---

## 🧠 O que Aprendi

1. **Gerenciamento de Estado com `useState`**:
   - Armazenar e atualizar valores no estado de um componente funcional.
   - Aplicar múltiplos estados em um único componente.

2. **Reatividade**:
   - Garantir que os componentes se atualizem automaticamente quando o estado é modificado.

3. **Separação de Responsabilidades**:
   - Evitar a mistura de lógicas de atualização de estados distintos.

4. **Consumo de APIs**:
   - Utilizar `fetch` para buscar dados externos e exibir informações de forma dinâmica.

5. **Callback no Estado**:
   - Utilizar uma função de callback dentro do `setState` para garantir a consistência do valor anterior.

---

## 🌟 Destaques

1. **Carregamento Dinâmico**:
   - Exibição de "Carregando..." enquanto os dados são buscados.

2. **Reutilização de Componentes**:
   - O componente `Produto` foi criado para exibir dinamicamente qualquer dado de produto.

3. **Uso Correto de Estados**:
   - Implementação com atualização reativa e sem efeitos colaterais.

---

## 🌐 Próximos Passos

- Integrar **React Router** para navegação entre páginas.
- Adicionar tratamento de erros para as chamadas da API.
- Melhorar o estilo da aplicação utilizando **CSS Modules** ou **Styled Components**.