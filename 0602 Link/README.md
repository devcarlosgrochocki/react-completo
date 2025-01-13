### Documentação do Projeto: **0602 Link**

---

## 📖 Visão Geral

Nesta aula, exploramos as funcionalidades de navegação no **React Router Dom**, utilizando os componentes **Link**, **NavLink**, e o hook **useNavigate**. Esses recursos permitem navegação fluida sem recarregar a página e adicionam flexibilidade para redirecionamentos programáticos.

---

## 🎯 Objetivo do Projeto

1. Implementar o **Link** para navegação entre rotas sem recarregar a página.
2. Utilizar o **NavLink** para adicionar estilos ao link ativo.
3. Explorar o **useNavigate** para redirecionamentos programáticos.
4. Melhorar a experiência de navegação em aplicações React.

---

## 📄 Estrutura do Projeto

**Arquitetura:**
- **Link:** Permite navegação direta entre rotas.
- **NavLink:** Similar ao **Link**, mas com suporte a estilos dinâmicos para o link ativo.
- **useNavigate:** Oferece controle programático para navegação, como em cenários de login.

**Componentes Criados:**
1. **Header.jsx:** Navegação utilizando **Link** e **NavLink**.
2. **Login.jsx:** Redirecionamento programático com **useNavigate**.

---

## 🔧 Código Principal

### **Exemplo 1: Link**

Navegação básica entre rotas com **Link**.

**Header.jsx**

```jsx
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="sobre">Sobre</Link>
      <Link to="contato">Contato</Link>
    </nav>
  );
};

export default Header;
```

---

### **Exemplo 2: NavLink**

Adicionando estilos dinâmicos ao link ativo com **NavLink**.

**Header.jsx**

```jsx
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const activeStyle = {
    color: 'tomato',
  };

  return (
    <nav>
      <NavLink to="/" end activeStyle={activeStyle}>
        Home
      </NavLink>
      <NavLink to="sobre" activeStyle={activeStyle}>
        Sobre
      </NavLink>
      <NavLink to="contato" activeStyle={activeStyle}>
        Contato
      </NavLink>
    </nav>
  );
};

export default Header;
```

**Descrição:**
- **Propriedade `end`:** Necessária no link que aponta para a raiz (`/`) para evitar conflitos com outras rotas que também começam com `/`.

**Header.css**

```css
nav {
  display: flex;
  gap: 1rem;
  font-size: 1.2rem;
}

a {
  text-decoration: none;
  color: black;
}

a.active {
  color: tomato;
  font-weight: bold;
}
```

---

### **Exemplo 3: useNavigate**

Redirecionamento programático com o hook **useNavigate**.

**Login.jsx**

```jsx
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  function handleClick() {
    console.log('Fazendo login...');
    navigate('/sobre');
  }

  return (
    <div>
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default Login;
```

**Descrição:**
- **useNavigate:** Utilizado para navegar entre rotas programaticamente, como após uma ação bem-sucedida (ex.: login).

---

## 🧠 O que Aprendi

1. **Link:**
   - Substitui a tag `<a>` tradicional, evitando recarregamentos de página.

2. **NavLink:**
   - Adiciona classes ou estilos dinamicamente ao link ativo, melhorando a navegação visual.

3. **useNavigate:**
   - Permite redirecionamentos programáticos com controle total sobre a navegação.

4. **Propriedade `end`:**
   - Garante que o link para a raiz (`/`) não seja ativado para rotas que também começam com `/`.

---

## 🌟 Destaques

1. **Experiência de Navegação:**
   - Navegação fluida sem recarregar a página.

2. **Estilização Dinâmica:**
   - Melhor feedback visual com estilos para links ativos.

3. **Flexibilidade:**
   - **useNavigate** permite lógica de navegação baseada em condições ou eventos.

---

## 🌐 Próximos Passos

1. Criar menus suspensos ou hambúrgueres utilizando **Link** e **NavLink**.
2. Explorar **parâmetros de rota** para links dinâmicos com `to="/detalhes/:id"`.
3. Integrar animações de transição entre rotas utilizando bibliotecas como **React Transition Group**.