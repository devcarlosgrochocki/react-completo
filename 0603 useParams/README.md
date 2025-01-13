### Documentação do Projeto: **0603 useParams**

---

## 📖 Visão Geral

Nesta aula, exploramos a criação e utilização de rotas dinâmicas no **React Router Dom**, usando parâmetros para personalizar componentes. Também aprendemos sobre os hooks **useParams** e **useLocation**, que fornecem informações detalhadas sobre a rota atual e seus parâmetros.

---

## 🎯 Objetivo do Projeto

1. Criar rotas dinâmicas com parâmetros utilizando `:param`.
2. Utilizar o hook **useParams** para acessar valores de parâmetros nas rotas.
3. Explorar o hook **useLocation** para obter informações detalhadas da rota atual.
4. Demonstrar como manipular parâmetros de busca na URL.

---

## 📄 Estrutura do Projeto

**Arquitetura:**
- **Rotas Dinâmicas:** Permitem definir rotas com parâmetros personalizáveis, como `/produto/:id`.
- **useParams:** Recupera os valores dos parâmetros definidos na URL.
- **useLocation:** Fornece detalhes sobre a rota atual, como caminho, parâmetros de busca e mudanças de rota.

**Componentes Criados:**
1. **App.jsx:** Configuração principal de rotas.
2. **Produto.jsx:** Demonstração de uso do **useParams**.
3. **Header.jsx:** Exemplo prático de **useLocation**.

---

## 🔧 Código Principal

### **Exemplo 1: Rota Dinâmica**

Definindo uma rota com parâmetro dinâmico.

**App.jsx**

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Produto from './Produto';
import Home from './Home';
import Header from './Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="produto/:id" element={<Produto />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
```

**Home.jsx**

```jsx
const Home = () => {
  return <h1>Bem-vindo à Home</h1>;
};

export default Home;
```

---

### **Exemplo 2: useParams**

Recuperando o valor do parâmetro dinâmico na URL.

**Produto.jsx**

```jsx
import { useParams } from 'react-router-dom';

const Produto = () => {
  const params = useParams();

  return (
    <div>
      <h1>Produto</h1>
      <p>id: {params.id}</p>
    </div>
  );
};

export default Produto;
```

---

### **Exemplo 3: useLocation**

Obtendo informações detalhadas da rota atual.

**Header.jsx**

```jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  React.useEffect(() => {
    const search = new URLSearchParams(location.search);
    console.log('Busca:', search.get('q'));
    console.log('Rota mudou para:', location.pathname);
  }, [location]);

  return <div>Localização Atual: {location.pathname}</div>;
};

export default Header;
```

---

### **Exemplo 4: Parâmetros de Busca**

Manipulando parâmetros de busca com **useLocation** e **URLSearchParams**.

**Header.jsx**

```jsx
import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  React.useEffect(() => {
    console.log('Busca:', searchParams.get('q'));
  }, [searchParams]);

  function handleSearchChange() {
    setSearchParams({ q: 'novoValor' });
  }

  return (
    <div>
      <p>Rota Atual: {location.pathname}</p>
      <button onClick={handleSearchChange}>Alterar Busca</button>
    </div>
  );
};

export default Header;
```

---

## 🧠 O que Aprendi

1. **Rotas Dinâmicas:**
   - Parâmetros dinâmicos como `:id` podem ser usados para criar rotas flexíveis.

2. **useParams:**
   - Recupera os valores dos parâmetros da rota, como IDs de produtos ou usuários.

3. **useLocation:**
   - Fornece informações detalhadas sobre a URL atual, como pathname e query strings.

4. **Parâmetros de Busca:**
   - Manipulação de query strings na URL com **URLSearchParams**.

---

## 🌟 Destaques

1. **Navegação Dinâmica:**
   - Criação de rotas que se adaptam a diferentes contextos, como produtos ou usuários específicos.

2. **Flexibilidade:**
   - Acesso a parâmetros e informações detalhadas da rota para lógica personalizada.

3. **Integração de Busca:**
   - Manipulação direta de query strings para filtros e pesquisas.

---

## 🌐 Próximos Passos

1. Explorar rotas aninhadas para estruturar melhor as páginas.
2. Implementar lógica condicional com base nos parâmetros recuperados.
3. Adicionar transições ou animações entre rotas para melhorar a experiência do usuário.