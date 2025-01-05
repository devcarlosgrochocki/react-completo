### Documentação do Projeto: **0406 Componentes Input**

---

## 📖 Visão Geral

Nesta aula, aprendemos a criar componentes reutilizáveis para campos de formulário em React. A abordagem modular facilita a manutenção do código, reduz redundâncias e permite a personalização de diferentes tipos de inputs.

---

## 🎯 Objetivo do Projeto

1. Criar um componente genérico para campos de formulário, permitindo reutilização.
2. Reduzir repetição de código em formulários extensos.
3. Gerenciar o estado dos inputs de forma centralizada utilizando `props`.
4. Demonstrar a aplicação prática de um componente **Input** reutilizável.

---

## 📄 Estrutura do Projeto

**Arquitetura:**
- **Input.jsx:** Componente genérico para campos de formulário.
- **App.jsx:** Implementa o componente **Input** em um formulário funcional.

**Componentes Criados:**
1. **Input.jsx:** Componente reutilizável para diferentes tipos de campos.
2. **App.jsx:** Exemplo de uso do componente **Input**.

---

## 🔧 Código Principal

### **Input.jsx**

Componente reutilizável para criar inputs genéricos. Ele recebe `id`, `label`, `setValue` e outras propriedades via `props`.

```jsx
import React from 'react';

const Input = ({ id, label, setValue, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </>
  );
};

export default Input;
```

### **App.jsx**

Componente principal que utiliza o **Input** para criar um formulário simples.

```jsx
import React from 'react';
import Input from './Input';

const App = () => {
  const [nome, setNome] = React.useState('');

  return (
    <form>
      <Input
        label="Nome"
        id="nome"
        type="text"
        value={nome}
        setValue={setNome}
      />
    </form>
  );
};

export default App;
```

---

## 🧠 O que Aprendi

1. **Componentização:**
   - Criar componentes modulares e reutilizáveis para inputs.
   - Reduzir redundâncias ao encapsular a lógica comum dos inputs.

2. **Props no React:**
   - Passar propriedades como `id`, `label`, `value`, e `setValue` para customizar cada instância do componente **Input**.

3. **Modularidade:**
   - Centralizar a lógica de gerenciamento de inputs em um único componente para facilitar alterações e expansões futuras.

---

## 🌟 Destaques

1. **Reutilização:**
   - Um único componente **Input** pode ser usado para criar diversos tipos de campos com diferentes configurações.

2. **Redução de Código:**
   - A modularização elimina a necessidade de repetir a estrutura de inputs em todo o projeto.

3. **Flexibilidade:**
   - Propriedades adicionais podem ser passadas via `props` para personalizar o comportamento de cada campo.

---

## 🌐 Próximos Passos

1. Expandir o componente **Input** para lidar com validações e mensagens de erro.
2. Criar componentes adicionais para outros elementos do formulário, como **Textarea** e **Select**.
3. Estilizar o componente **Input** com CSS ou bibliotecas de design para melhorar a experiência do usuário.