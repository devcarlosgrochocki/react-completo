### Documentação do Projeto: **0604 Nested Routes**

---

## 📖 Visão Geral

As **Nested Routes** permitem criar rotas aninhadas, ou seja, rotas dentro de outras rotas. Essa abordagem é útil para organizar melhor a navegação de aplicações com estruturas hierárquicas, como painéis administrativos ou páginas com conteúdos relacionados.

O uso do componente **`<Outlet>`** ajuda a renderizar o conteúdo das rotas filhas dinamicamente dentro do layout principal da rota pai.

---

## 🎯 Objetivo do Projeto

1. Implementar **rotas aninhadas** com o **React Router DOM**.
2. Utilizar o componente **`<Outlet>`** para renderizar rotas filhas.
3. Configurar links relativos em rotas aninhadas.
4. Trabalhar com mudanças introduzidas na versão 7 do React Router.

---

## 📄 Estrutura do Projeto

**Arquitetura:**
- **Rotas Aninhadas:** Definição de uma rota pai que inclui **rotas filhas**.
- **`<Outlet>`:** Marca o local onde o conteúdo das rotas filhas será renderizado.
- **Links Relativos:** Navegação dentro das rotas filhas, ajustada para o contexto atual.

**Componentes Criados:**
1. **Produto.jsx:** Demonstração de rotas aninhadas com links para sub-páginas.
2. **App.jsx:** Configuração de rotas principais e aninhadas.
3. **ProdutoDescricao.jsx, ProdutoAvaliacao.jsx, ProdutoCustomizado.jsx:** Componentes representando rotas filhas.

---

## 🔧 Código Principal

### **Exemplo 1: Rotas Aninhadas com `<Outlet>`**

**App.jsx**

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import Login from './Login';
import Produto from './Produto';
import ProdutoDescricao from './ProdutoDescricao';
import ProdutoAvaliacao from './ProdutoAvaliacao';
import ProdutoCustomizado from './ProdutoCustomizado';
import Header from './Header';
import NaoEncontrada from './NaoEncontrada';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="login" element={<Login />} />
        <Route path="produto/:id/*" element={<Produto />}>
          <Route path="/" element={<ProdutoDescricao />} />
          <Route path="avaliacao" element={<ProdutoAvaliacao />} />
          <Route path="customizado" element={<ProdutoCustomizado />} />
        </Route>
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
```

---

**Produto.jsx**

```jsx
import { useParams, NavLink, Outlet } from 'react-router-dom';

const Produto = () => {
  const params = useParams();

  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <nav>
        <NavLink to="">Descrição</NavLink>
        <NavLink to="avaliacao">Avaliação</NavLink>
        <NavLink to="customizado">Customizado</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Produto;
```

---

**ProdutoDescricao.jsx**

```jsx
const ProdutoDescricao = () => {
  return <p>Esta é a descrição do produto.</p>;
};

export default ProdutoDescricao;
```

**ProdutoAvaliacao.jsx**

```jsx
const ProdutoAvaliacao = () => {
  return <p>Esta é a avaliação do produto.</p>;
};

export default ProdutoAvaliacao;
```

**ProdutoCustomizado.jsx**

```jsx
const ProdutoCustomizado = () => {
  return <p>Este é o produto customizado.</p>;
};

export default ProdutoCustomizado;
```

---

### **Links Relativos na Versão 7**

Na versão 7 do React Router, links relativos dentro de rotas com **`path="*"`** exigem ajustes para funcionar corretamente.

**Exemplo:**

Antes:
```jsx
<NavLink to="descricao">Descrição</NavLink>
```

Depois:
```jsx
<NavLink to="../descricao">Descrição</NavLink>
```

---

### **Resumo do Componente `<Outlet>`**

1. **Como funciona:**
   - O `<Outlet>` é usado no componente pai para renderizar as rotas filhas.
   - Ele serve como um "placeholder" para o conteúdo das rotas filhas.

2. **Vantagens:**
   - Facilita a criação de layouts consistentes para rotas aninhadas.
   - Evita duplicação de código entre páginas relacionadas.

---

## 🧠 O que Aprendi

1. **Rotas Aninhadas:**
   - Estruturar rotas hierárquicas para melhor organização.

2. **Uso do `<Outlet>`:**
   - Renderizar rotas filhas dinamicamente dentro do layout do pai.

3. **Links Relativos:**
   - Ajustar links para manter a navegação funcional em rotas aninhadas.

---

## 🌟 Destaques

1. **Organização e Escalabilidade:**
   - Ideal para sistemas complexos com múltiplas camadas de navegação.

2. **Reutilização de Layouts:**
   - Reduz redundâncias ao compartilhar layouts entre rotas.

3. **Flexibilidade:**
   - Navegação dinâmica baseada no contexto atual da rota.

---

## 🌐 Próximos Passos

1. Adicionar rotas protegidas para autenticação em níveis específicos.
2. Implementar transições visuais entre rotas com bibliotecas como **Framer Motion**.
3. Experimentar parâmetros adicionais nas rotas aninhadas para maior flexibilidade.