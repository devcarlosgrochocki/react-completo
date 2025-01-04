

### Documentação do Projeto: **0401 Input**

---

## 📖 Visão Geral

Este projeto aborda a criação e o gerenciamento de formulários reativos utilizando **React**, explorando estratégias para lidar com múltiplos campos e estados globais de forma eficiente. O foco principal está na utilização de estados controlados e na simplificação da interação com APIs externas.

---

## 🎯 Objetivo do Projeto

1. Implementar formulários com **estados controlados** para campos individuais.
2. Utilizar **objetos** para gerenciar múltiplos campos de formulário.
3. Criar uma aplicação que realiza requisições HTTP (`POST`) para enviar dados para uma API externa.
4. Exibir mensagens na interface com base nas respostas da API.
5. Demonstrar uma abordagem alternativa para criar e manipular formulários dinamicamente.

---

## 📄 Estrutura do Projeto

**Arquitetura:**
- Estados controlados gerenciados com `useState`.
- Função de manipulação genérica (`handleChange`) para múltiplos campos.
- Comunicação com uma API externa usando `fetch`.

**Componentes Criados:**
1. **App.jsx:** Componente principal com a lógica de gerenciamento do formulário.
2. **formFields.js:** Lista de campos dinâmicos do formulário (alternativa de implementação).

---

## 🔧 Principais Componentes

### **Formulário com Múltiplos Campos**

#### 1. **Gerenciamento por Objeto**
Abordagem onde todos os campos do formulário são armazenados em um único estado do tipo objeto.

```jsx
const App = () => {
  const [form, setForm] = React.useState({
    nome: "",
    email: "",
    senha: "",
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("https://ranekapi.origamid.dev/json/api/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((response) => {
      if (response.ok) alert("Usuário Criado com Sucesso!");
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(form).map((field) => (
        <div key={field}>
          <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
          <input type="text" id={field} value={form[field]} onChange={handleChange} />
        </div>
      ))}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default App;
```

#### 2. **Formulário Dinâmico**
Criação de um formulário com campos definidos por uma lista, facilitando alterações na estrutura.

```jsx
import React from 'react';

const formFields = [
  { id: 'nome', label: 'Nome', type: 'text' },
  { id: 'email', label: 'Email', type: 'email' },
  { id: 'senha', label: 'Senha', type: 'password' },
  { id: 'cep', label: 'CEP', type: 'text' },
  { id: 'rua', label: 'Rua', type: 'text' },
  { id: 'numero', label: 'Número', type: 'text' },
  { id: 'bairro', label: 'Bairro', type: 'text' },
  { id: 'cidade', label: 'Cidade', type: 'text' },
  { id: 'estado', label: 'Estado', type: 'text' },
];

const App = () => {
  const [form, setForm] = React.useState(
    formFields.reduce((acc, field) => ({ ...acc, [field.id]: "" }), {})
  );

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("https://ranekapi.origamid.dev/json/api/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((response) => {
      if (response.ok) alert("Usuário Criado com Sucesso!");
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map(({ id, label, type }) => (
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <input type={type} id={id} value={form[id]} onChange={handleChange} />
        </div>
      ))}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default App;
```

---

## 🧠 O que Aprendi

1. **Estados Controlados:**
   - Uso de `useState` para manter os valores dos campos de formulário sincronizados com a interface.

2. **Manipulação Genérica:**
   - Uso de funções como `handleChange` para atualizar dinamicamente campos de formulário.

3. **Requisições HTTP:**
   - Envio de dados para APIs externas utilizando o método `POST` e tratamento de respostas.

4. **Modularidade:**
   - Separação da definição dos campos (`formFields`) para facilitar futuras expansões.

---

## 🌟 Destaques

1. **Reutilização:**
   - Campos gerados dinamicamente com base em uma lista de objetos.

2. **Flexibilidade:**
   - Facilidade em adicionar novos campos ou alterar o comportamento do formulário.

3. **Feedback ao Usuário:**
   - Exibição de mensagens com base na resposta da API.

---

## 🌐 Próximos Passos

1. Implementar validação para os campos antes do envio.
2. Adicionar feedback visual em caso de erros ou sucesso na submissão.
3. Criar testes automatizados para garantir a funcionalidade do formulário. 
