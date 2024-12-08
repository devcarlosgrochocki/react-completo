### Documentação do Projeto: **0211 Propriedades**

---

## 📖 Visão Geral

Neste projeto, o foco está no uso de **propriedades (props)** em componentes React. As propriedades permitem que dados sejam passados de um componente pai para seus componentes filhos, permitindo maior flexibilidade e reutilização de código.

---

## 🎯 Objetivo do Projeto

- **Compreender e implementar o uso de props.**
- **Utilizar desestruturação para acessar propriedades.**
- **Aplicar o operador spread (`...`) para lidar com propriedades dinâmicas.**
- **Explorar a flexibilidade das propriedades em diferentes contextos.**

---

## 📄 Estrutura do Projeto

1. **Arquitetura**:
   - Componentes organizados em arquivos individuais.
   - `props` aplicados para criar componentes reutilizáveis.

2. **Componentes Criados**:
   - **App.jsx**: Componente principal que inclui o formulário.
   - **Form.jsx**: Agrupa os campos do formulário e o botão.
   - **Input.jsx**: Campo de entrada dinâmico que utiliza propriedades para personalização.
   - **Button.jsx**: Botão simples.

---

## 🔧 Principais Componentes

### **main.jsx**
Arquivo de entrada que renderiza o componente principal `App` na árvore DOM.

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.querySelector('#root')).render(<App />);
```

---

### **App.jsx**
Componente principal que organiza a aplicação.

```jsx
import React from 'react';
import Form from './Form/Form';

const App = () => {
  return (
    <section>
      <Form />
    </section>
  );
};

export default App;
```

---

### **Form.jsx**
Componente que utiliza `Input` e `Button` para criar o formulário. Mostra o uso básico de propriedades.

```jsx
import React from 'react';
import Button from './Button';
import Input from './Input';

const Form = () => {
  return (
    <div>
      <Input id="email" label="Email" />
      <Input id="senha" label="Senha" required type="password" />
      <Button />
    </div>
  );
};

export default Form;
```

---

### **Input.jsx**
Componente reutilizável que utiliza desestruturação e o operador spread para receber propriedades adicionais.

```jsx
import React from 'react';

const Input = ({ label, id, ...props }) => {
  console.log([...props]);

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...props} />
    </div>
  );
};

export default Input;
```

---

### **Button.jsx**
Componente simples que representa o botão do formulário.

```jsx
import React from 'react';

const Button = () => {
  return <button>Clique</button>;
};

export default Button;
```

---

## 🧠 O que Aprendi

1. **Props**:
   - Propriedades são argumentos passados para componentes.
   - Permitem criar componentes reutilizáveis e personalizáveis.

2. **Desestruturação**:
   - Simplifica o acesso às propriedades dentro de um componente.

3. **Spread Operator (`...`)**:
   - Permite lidar com propriedades dinâmicas e desconhecidas.
   - Garante que todas as propriedades sejam transmitidas para elementos JSX.

4. **Reutilização de Componentes**:
   - Componentes genéricos como `Input` e `Button` tornam o código mais limpo e eficiente.

---

## 🌟 Destaques

1. **Uso de Propriedades**:
   - Passagem de múltiplas propriedades para personalizar componentes.

2. **Flexibilidade**:
   - Propriedades podem incluir atributos HTML padrão e valores dinâmicos.

3. **Modularidade**:
   - Componentes estruturados em arquivos individuais para fácil manutenção.

---

## 🌐 Próximos Passos

- Adicionar validações ao formulário.
- Implementar **estado** para gerenciar os dados do formulário.
- Trabalhar com **propriedade `children`** para incluir conteúdo dinâmico dentro de componentes.
- Explorar o uso de **Context API** para compartilhar dados entre componentes.