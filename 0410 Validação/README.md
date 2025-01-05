### Documentação do Projeto: **0410 Validação**

---

## 📖 Visão Geral

Nesta aula, aprendemos a implementar validação de campos em formulários React utilizando os eventos **`onBlur`** e **`onSubmit`**. O foco foi garantir que os dados dos campos sejam validados antes de qualquer ação, prevenindo envios com dados inválidos.

---

## 🎯 Objetivo do Projeto

1. Utilizar o evento **`onBlur`** para realizar validações quando um campo perde o foco.
2. Validar dados utilizando **expressões regulares (Regex)**.
3. Impedir o envio do formulário se houver campos inválidos.
4. Exibir mensagens de erro dinâmicas na interface.
5. Garantir que os dados estejam corretos antes de prosseguir com ações como envio para APIs.

---

## 📄 Estrutura do Projeto

**Arquitetura:**
- **Funções de validação** para garantir a consistência dos dados.
- Uso de **estados controlados** para armazenar valores e mensagens de erro.
- Integração com os eventos **`onBlur`** e **`onSubmit`** para validação e controle do envio.

**Componentes Criados:**
1. **App.jsx:** Implementação completa do formulário com validação.

---

## 🔧 Código Principal

### **Validação com `onBlur`**

Utilizando o evento **`onBlur`** para validar campos quando perdem o foco.

```jsx
import React from 'react';

const App = () => {
  const [cep, setCep] = React.useState('');
  const [error, setError] = React.useState(null);

  function validateCep(value) {
    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError('Preencha um cep válido');
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function handleBlur({ target }) {
    validateCep(target.value);
  }

  function handleChange({ target }) {
    if (error) validateCep(target.value);
    setCep(target.value);
  }

  return (
    <form>
      <label htmlFor="cep">CEP</label>
      <input
        id="cep"
        type="text"
        value={cep}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="00000-000"
      />
      {error && <p>{error}</p>}
      <button>Enviar</button>
    </form>
  );
};

export default App;
```

---

### **Validação com `onSubmit`**

Prevenindo o envio do formulário se houver erros de validação.

```jsx
import React from 'react';

const App = () => {
  const [cep, setCep] = React.useState('');
  const [error, setError] = React.useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    if (validateCep(cep)) {
      console.log('Enviar');
    } else {
      console.log('Não enviar');
    }
  }

  function validateCep(value) {
    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError('Preencha um cep válido');
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function handleBlur({ target }) {
    validateCep(target.value);
  }

  function handleChange({ target }) {
    if (error) validateCep(target.value);
    setCep(target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="cep">CEP</label>
      <input
        id="cep"
        type="text"
        value={cep}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="00000-000"
      />
      {error && <p>{error}</p>}
      <button>Enviar</button>
    </form>
  );
};

export default App;
```

---

## 🧠 O que Aprendi

1. **`onBlur`:**
   - Valida os campos quando o usuário termina de preenchê-los, evitando validações constantes enquanto digita.

2. **`onSubmit`:**
   - Verifica a validade de todos os campos antes de enviar o formulário.

3. **Regex para Validação:**
   - Expressões regulares ajudam a validar padrões específicos, como o formato de um CEP.

4. **Estados de Erro:**
   - Exibir mensagens de erro dinâmicas na interface melhora a experiência do usuário e ajuda a corrigir entradas inválidas.

---

## 🌟 Destaques

1. **Prevenção de Erros:**
   - Evita envios de formulário com dados incompletos ou inválidos.

2. **Feedback Imediato:**
   - Mensagens de erro são exibidas no momento certo, ajudando o usuário a corrigir os problemas.

3. **Flexibilidade:**
   - Funções de validação reutilizáveis podem ser adaptadas para diferentes campos e formulários.

---

## 🌐 Próximos Passos

1. Implementar validação para outros tipos de campos (como e-mails e senhas).
2. Adicionar feedback visual para campos válidos (bordas verdes, ícones, etc.).
3. Integrar validações com bibliotecas como **Yup** ou **React Hook Form** para maior escalabilidade.