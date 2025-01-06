### Documentação do Projeto: **0411 useForm**

---

## 📖 Visão Geral

Nesta aula, aprendemos a criar um **Custom Hook** chamado **`useForm`** para facilitar a validação e o gerenciamento de formulários em React. O objetivo foi encapsular a lógica de validação em um hook reutilizável, melhorando a modularidade e a organização do código.

---

## 🎯 Objetivo do Projeto

1. Criar um **Custom Hook** para gerenciar valores, validações e erros em campos de formulário.
2. Definir tipos de validação com **expressões regulares (Regex)**.
3. Criar um componente reutilizável **Input** que se integra com o **useForm**.
4. Validar e prevenir o envio de formulários com campos inválidos.
5. Demonstrar o uso prático do **useForm** em um formulário.

---

## 📄 Estrutura do Projeto

**Arquitetura:**
- **Custom Hook (useForm):**
  - Gerencia valor, estado de erro e validação.
  - Suporta múltiplos tipos de validação definidos por Regex.
- **Componente Input:**
  - Componente reutilizável que recebe propriedades como valor, erro, e eventos (onChange, onBlur).
- **Componente App:**
  - Exemplo de uso prático com validação de CEP.

**Componentes Criados:**
1. **useForm.js:** Custom Hook para gerenciamento de formulários.
2. **Input.js:** Componente reutilizável para campos de entrada.
3. **App.js:** Integração do **useForm** com um formulário de exemplo.

---

## 🔧 Código Principal

### **useForm.js**

Hook personalizado que encapsula lógica de validação e gerenciamento de estado.

```jsx
import React from 'react';

const types = {
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    message: 'Cep inválido',
  },
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Email inválido',
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function validate(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
  };
};

export default useForm;
```

---

### **Input.js**

Componente reutilizável para campos de entrada com suporte a validação.

```jsx
import React from 'react';

const Input = ({
  id,
  label,
  value,
  type,
  onChange,
  error,
  onBlur,
  placeholder,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {error && <p>{error}</p>}
    </>
  );
};

export default Input;
```

---

### **App.js**

Exemplo de uso do **useForm** em um formulário com validação de CEP.

```jsx
import React from 'react';
import Input from './Form/Input';
import useForm from './Hooks/useForm';

const App = () => {
  const cep = useForm('cep');

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate()) {
      console.log('Enviar');
    } else {
      console.log('Não enviar');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="CEP"
        id="cep"
        type="text"
        placeholder="00000-000"
        {...cep}
      />
      <button>Enviar</button>
    </form>
  );
};

export default App;
```

---

## 🧠 O que Aprendi

1. **Custom Hook (useForm):**
   - Encapsular a lógica de validação e estado reduz a duplicação de código e facilita a reutilização.

2. **Tipos de Validação:**
   - Usar um objeto para definir Regex e mensagens de erro para diferentes tipos de validação.

3. **Componentização Reutilizável:**
   - Criar um componente **Input** modular que aceita props para configuração e validação.

4. **Melhoria na Organização:**
   - Separar lógica de validação (useForm), entrada (Input) e aplicação (App) promove modularidade e clareza.

---

## 🌟 Destaques

1. **Reutilização de Lógica:**
   - O **useForm** pode ser aplicado a diferentes tipos de validação e campos.

2. **Feedback Dinâmico:**
   - Exibição de mensagens de erro específicas para cada tipo de validação.

3. **Flexibilidade:**
   - Facilidade para adicionar novos tipos de validação (ex.: senhas, telefones) no objeto `types`.

---

## 🌐 Próximos Passos

1. Estender o **useForm** para suportar validações assíncronas (ex.: verificar dados em uma API).
2. Adicionar estilos visuais aos campos para diferenciar estados válidos e inválidos.
3. Integrar o **useForm** em um formulário completo com múltiplos campos e validações combinadas.