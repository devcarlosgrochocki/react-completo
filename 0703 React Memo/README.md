### Documentação do Projeto: **0703 React Memo**

---

## 📖 Visão Geral

O **React.memo** é uma função de alta ordem que memoriza um componente, evitando que ele seja re-renderizado desnecessariamente. Isso é útil para componentes que não dependem de estados ou props frequentemente alterados, ajudando a otimizar o desempenho da aplicação.

---

## 🎯 Objetivo do Projeto

1. Entender como utilizar **React.memo** para memorizar componentes.
2. Prevenir re-renderizações desnecessárias de componentes fixos ou estáticos.
3. Aprender a identificar casos onde **React.memo** pode melhorar o desempenho.

---

## 📄 Estrutura do Projeto

**Arquitetura:**
- **App.jsx:** Componente principal que manipula um estado simples para demonstrar re-renderizações.
- **Header.jsx:** Componente fixo, memorizado com **React.memo**.

**Componentes Criados:**
1. **Header.jsx:** Componente memorizado.
2. **App.jsx:** Componente que controla o estado e demonstra o comportamento do **React.memo**.

---

## 🔧 Código Principal

### **Exemplo: Uso do React.memo**

**App.jsx**

```jsx
import React from 'react';
import Header from './Header';

const App = () => {
  const [contar, setContar] = React.useState(0);

  return (
    <div>
      <Header />
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};

export default App;
```

**Header.jsx**

```jsx
import React from 'react';

const Header = () => {
  console.log('Renderizou');
  return <div>Header fixo</div>;
};

export default React.memo(Header);
```

---

## 🧠 O que Aprendi

1. **React.memo:**
   - Memoriza o componente, evitando re-renderizações desnecessárias.
   - O componente só será re-renderizado se suas props mudarem.

2. **Casos de Uso:**
   - Componentes estáticos ou que raramente mudam.
   - Componentes que não dependem de estados do componente pai.

3. **Considerações:**
   - Nem todos os componentes se beneficiam de **React.memo**.
   - Use apenas em casos onde o custo de re-renderização é maior que o custo de comparação.

---

## 🌟 Destaques

1. **Otimização:**
   - Melhora o desempenho, especialmente em componentes pesados ou grandes árvores de componentes.

2. **Facilidade de Uso:**
   - Pode ser aplicado rapidamente ao exportar um componente com `React.memo`.

3. **Flexibilidade:**
   - Pode ser combinado com **useCallback** para maior controle sobre as dependências.

---

## 🌐 Próximos Passos

1. Explorar o uso de **React.memo** em componentes com props complexas e usar **custom comparison functions**.
2. Combinar com o hook **useCallback** para evitar recriação desnecessária de funções.
3. Monitorar o impacto no desempenho utilizando ferramentas como **React DevTools**.