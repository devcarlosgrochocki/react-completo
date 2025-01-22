### Documentação do Projeto: **0702 Lazy e Suspense**

---

## 📖 Visão Geral

O **React Lazy** e **Suspense** permitem a divisão de código (**code splitting**) em uma aplicação React. Isso significa que partes do código só serão carregadas quando forem realmente necessárias, melhorando o desempenho da aplicação ao reduzir o tempo de carregamento inicial.

---

## 🎯 Objetivo do Projeto

1. Implementar **code splitting** com **React Lazy** e **Suspense**.
2. Carregar componentes dinamicamente apenas quando necessários.
3. Melhorar o desempenho e a experiência do usuário, exibindo um fallback enquanto o componente é carregado.

---

## 📄 Estrutura do Projeto

**Arquitetura:**
- **React Lazy:** Usado para importar componentes dinamicamente.
- **React Suspense:** Envolve os componentes importados com um fallback enquanto são carregados.

**Componentes Criados:**
1. **Contato.jsx:** Componente carregado dinamicamente.
2. **App.jsx:** Demonstração do uso de **React Lazy** e **Suspense**.

---

## 🔧 Código Principal

### **Exemplo: Lazy e Suspense**

**Contato.jsx**

```jsx
const Contato = () => {
  return (
    <div>
      <h1>Contato</h1>
      <p>Este é o componente de contato.</p>
    </div>
  );
};

export default Contato;
```

**App.jsx**

```jsx
import React from 'react';

// Importação dinâmica do componente
const Contato = React.lazy(() => import('./Contato'));

const App = () => {
  const [ativar, setAtivar] = React.useState(false);

  return (
    <div>
      {ativar && (
        <React.Suspense fallback={<div>Carregando...</div>}>
          <Contato />
        </React.Suspense>
      )}
      <button onClick={() => setAtivar(true)}>Ativar</button>
    </div>
  );
};

export default App;
```

---

## 🧠 O que Aprendi

1. **React Lazy:**
   - Importa componentes dinamicamente apenas quando são renderizados.
   - Usado com `React.lazy(() => import('caminho'))`.

2. **React Suspense:**
   - Envolve os componentes carregados dinamicamente.
   - Exibe um componente **fallback** enquanto o componente importado está sendo carregado.

3. **Code Splitting:**
   - Reduz o tamanho do bundle inicial, carregando partes do código sob demanda.

---

## 🌟 Destaques

1. **Desempenho Melhorado:**
   - Redução no tempo de carregamento inicial da aplicação.

2. **Experiência de Usuário:**
   - Exibição de mensagens ou animações enquanto os componentes são carregados.

3. **Flexibilidade:**
   - Ideal para grandes aplicações com rotas ou componentes raramente acessados.

---

## 🌐 Próximos Passos

1. Utilizar **Lazy e Suspense** em conjunto com rotas usando **React Router DOM**.
2. Implementar animações no fallback para melhorar a experiência do usuário.
3. Integrar com bibliotecas de monitoramento de desempenho para medir o impacto do **code splitting**.