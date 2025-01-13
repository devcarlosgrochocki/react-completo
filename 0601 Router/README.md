### Documentação do Projeto: **0601 React Router Dom**

---

## 📖 Visão Geral

O **React Router Dom** é uma biblioteca que permite gerenciar rotas em aplicações React. Ele possibilita criar e manipular URLs para renderizar diferentes componentes, proporcionando uma navegação dinâmica e baseada no estado da aplicação.

---

## 🎯 Objetivo do Projeto

1. Configurar o **React Router Dom** em uma aplicação React.
2. Criar rotas que renderizam componentes específicos com base na URL.
3. Configurar uma página padrão para rotas não definidas (**404**).
4. Utilizar **BrowserRouter**, **Routes** e **Route** para gerenciamento de navegação.

---

## 📄 Estrutura do Projeto

**Arquitetura:**
- **BrowserRouter:** Componente pai que habilita o uso de rotas na aplicação.
- **Routes e Route:** Define as rotas e os componentes associados.
- **Página 404:** Um componente específico para URLs que não correspondem a nenhuma rota.

**Componentes Criados:**
1. **App.jsx:** Configuração de rotas principais.
2. **Home.jsx, Sobre.jsx e Contato.jsx:** Páginas para rotas específicas.
3. **Pagina404.jsx:** Página exibida para URLs não encontradas.

---

## 🔧 Código Principal

### **Instalação**

Para adicionar o React Router Dom ao projeto:

```bash
npm install react-router-dom
```

---

### **Configuração de Rotas**

Exemplo de rotas básicas com navegação entre páginas.

**App.jsx**

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import Contato from './Contato';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="contato" element={<Contato />} />
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

**Sobre.jsx**

```jsx
const Sobre = () => {
  return <h1>Sobre Nós</h1>;
};

export default Sobre;
```

**Contato.jsx**

```jsx
const Contato = () => {
  return <h1>Fale Conosco</h1>;
};

export default Contato;
```

---

### **Rota 404 - Página Não Encontrada**

Configurando uma rota padrão para URLs não mapeadas.

**App.jsx**

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import Pagina404 from './Pagina404';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="*" element={<Pagina404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
```

**Pagina404.jsx**

```jsx
const Pagina404 = () => {
  return <h1>Erro 404 - Página Não Encontrada</h1>;
};

export default Pagina404;
```

---

## 🧠 O que Aprendi

1. **BrowserRouter:**
   - Necessário para envolver os componentes que utilizam o **React Router Dom**.

2. **Routes e Route:**
   - Gerencia quais componentes serão renderizados com base no URL.

3. **Rota 404:**
   - Utiliza o path `"*"` para capturar rotas não mapeadas e renderizar um componente padrão.

4. **Componentização:**
   - Cada rota pode ser associada a um componente isolado para facilitar a manutenção.

---

## 🌟 Destaques

1. **Navegação Dinâmica:**
   - Permite alternar entre páginas sem recarregar a aplicação.

2. **Flexibilidade:**
   - Fácil adição de novas rotas e componentes.

3. **Experiência de Usuário:**
   - A página **404** melhora a navegação, fornecendo feedback claro para URLs inválidas.

---

## 🌐 Próximos Passos

1. Adicionar **links de navegação** com o componente **Link** do React Router.
2. Implementar **rotas dinâmicas** com parâmetros usando `path="/detalhes/:id"`.
3. Explorar o uso de **useNavigate** para navegação programática.