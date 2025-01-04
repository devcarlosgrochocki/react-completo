### Documentação do Projeto: **0402 Textarea**

---

## 📖 Visão Geral

Nesta aula, exploramos a utilização do componente **`textarea`** em formulários React. Aprendemos como gerenciar o valor interno de um **textarea** utilizando estados controlados, garantindo que o valor exibido na interface esteja sempre sincronizado com o estado do React.

---

## 🎯 Objetivo do Projeto

1. Compreender como o **`textarea`** é tratado como um **input** no React.
2. Utilizar o atributo **`value`** para controlar o valor interno do **textarea**.
3. Aprender a lidar com alterações no conteúdo do **textarea** utilizando o evento **`onChange`**.
4. Exibir dinamicamente o conteúdo digitado em outro elemento da interface.

---

## 📄 Estrutura do Projeto

**Arquitetura:**
- Estado controlado com `useState` para gerenciar o valor do **textarea**.
- Atualização dinâmica do estado sempre que o conteúdo do **textarea** muda.

**Componentes Criados:**
1. **App.jsx:** Componente principal com a lógica do **textarea**.

---

## 🔧 Código Principal

### **App.jsx**

Exemplo básico de uso do **`textarea`** como um input controlado.

```jsx
import React from 'react';

const App = () => {
  const [mensagem, setMensagem] = React.useState('');

  return (
    <form>
      <textarea
        id="mensagem"
        value={mensagem}
        rows="5"
        onChange={({ target }) => setMensagem(target.value)}
      />
      <p>{mensagem}</p>
    </form>
  );
};

export default App;
```

---

## 🧠 O que Aprendi

1. **`textarea` no React:**
   - Diferentemente do HTML tradicional, onde o conteúdo é definido entre as tags `<textarea></textarea>`, no React utilizamos o atributo **`value`** para controlar o conteúdo do **textarea**.
   - Ele se comporta como um **input**, permitindo o gerenciamento completo do seu valor através de estados.

2. **Estados Controlados:**
   - O valor do **textarea** é armazenado em um estado do React, permitindo que o conteúdo exibido esteja sempre sincronizado com o valor interno.

3. **Eventos de Alteração (`onChange`):**
   - Utilizamos o evento **`onChange`** para atualizar o estado sempre que o usuário digita ou altera o conteúdo do **textarea**.

---

## 🌟 Destaques

1. **Controle Completo:**
   - O uso do estado controlado permite total controle sobre o valor do **textarea**, facilitando integrações com validações e submissões de formulário.

2. **Interface Dinâmica:**
   - O conteúdo do **textarea** pode ser exibido em tempo real em outros elementos, criando uma interface mais interativa.

---

## 🌐 Próximos Passos

1. Adicionar validações para o conteúdo do **textarea** (como limite de caracteres ou campos obrigatórios).
2. Personalizar o **textarea** com estilos CSS para melhorar a usabilidade.
3. Integrar o **textarea** em um formulário completo com envio de dados.
