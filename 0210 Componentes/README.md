### Documentação do Projeto: **0210 Componentes**

---

## 📖 Visão Geral

Neste projeto, exploramos o conceito de componentes no React, dividindo a interface de um aplicativo em partes menores e reutilizáveis. Essa abordagem segue as melhores práticas do React, promovendo modularidade, organização e manutenção simplificada do código.

---

## 🎯 Objetivo do Projeto

- **Compreender e implementar componentes funcionais.**
- **Compor uma aplicação React com componentes reutilizáveis.**
- **Criar uma interface básica composta de Header, Formulário e Footer.**
- **Utilizar React.Fragment para estruturação do layout.**

---

## 📄 Estrutura do Projeto

1. **Arquitetura**:
   - Código organizado em componentes dentro da pasta `src`.
   - Componentes organizados em arquivos individuais (ex.: `Button.jsx`, `Form.jsx`, etc.).
   - Utilização do **React.Fragment** (`<>`) para retornar múltiplos elementos.

2. **Componentes Criados**:
   - **App.jsx**: Componente principal que engloba todos os outros.
   - **Header.jsx**: Componente de cabeçalho.
   - **Footer.jsx**: Componente de rodapé.
   - **Form.jsx**: Componente que contém o formulário.
   - **Button.jsx**: Botão de envio do formulário.
   - **Input.jsx**: Campo de entrada reutilizável.

---

## 🔧 Principais Componentes

### **main.jsx**
Arquivo de entrada que renderiza o componente principal `App` na árvore DOM.

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
```

---

### **App.jsx**
Componente principal que integra o layout. Exemplifica o uso de **React.Fragment**.

```jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form/Form';

const App = () => {
  return (
    <>
      <Header />
      <Form />
      <Footer />
    </>
  );
};

export default App;
```

---

### **Header.jsx**
Representa o cabeçalho da aplicação.

```jsx
import React from 'react';

const Header = () => {
  return <header>Header</header>;
};

export default Header;
```

---

### **Footer.jsx**
Responsável pelo rodapé.

```jsx
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
```

---

### **Form.jsx**
Componente que organiza os campos do formulário e o botão de envio.

```jsx
import React from 'react';
import Input from './Input';
import Button from './Button';

const Form = () => {
  return (
    <form>
      <p>
        <label htmlFor="nome">Nome</label>
        <Input />
      </p>
      <p>
        <label htmlFor="mail">Email</label>
        <Input />
      </p>
      <Button />
    </form>
  );
};

export default Form;
```

---

### **Input.jsx**
Campo de entrada reutilizável.

```jsx
import React from 'react';

const Input = () => {
  return <input type="text" />;
};

export default Input;
```

---

### **Button.jsx**
Botão que finaliza o envio do formulário.

```jsx
import React from 'react';

const Button = () => {
  return <button>Enviar</button>;
};

export default Button;
```

---

## 🧠 O que Aprendi

1. **Criação de Componentes**:
   - Composição de uma aplicação utilizando componentes pequenos e focados.
   - Organização do código em arquivos separados para melhor manutenção.

2. **React.Fragment**:
   - Uso de `<React.Fragment>` ou `<>` para evitar a criação de elementos extras na árvore DOM.

3. **Reutilização de Componentes**:
   - Criação de componentes genéricos como `Input` e `Button` para serem usados em diferentes contextos.

4. **Estrutura e Modulação**:
   - Separação de responsabilidades em componentes como `Header`, `Footer`, `Form` e outros.

---

## 🌟 Destaques

1. **Componentização**:
   - Componentes estruturados e reutilizáveis.
   - Modularidade promove fácil manutenção.

2. **Snippets**:
   - Uso de atalhos no VS Code para acelerar a criação de componentes funcionais.

3. **Interface Simples**:
   - Layout minimalista que separa claramente as partes da aplicação.

---

## 🌐 Próximos Passos

- Explorar o uso de **props** para comunicação entre componentes.
- Adicionar validação ao formulário (ex.: campos obrigatórios).
- Introduzir estados no formulário utilizando o **useState**.
- Avançar para o gerenciamento de estado global utilizando **Context API** ou **Redux**.