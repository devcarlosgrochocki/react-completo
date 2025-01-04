### Documentação do Projeto: **0403 Select**

---

## 📖 Visão Geral

Nesta aula, exploramos o componente **`select`** em React. Aprendemos como utilizar o **`value`** e o evento **`onChange`** para criar um **select controlado**, além de definir um valor inicial e opções interativas para o usuário.

---

## 🎯 Objetivo do Projeto

1. Criar e gerenciar um componente **`select`** utilizando estados controlados.
2. Definir um valor inicial para o **select** através do **`useState`**.
3. Garantir que o usuário escolha uma opção válida ao usar um valor inicial desabilitado.
4. Exibir o valor selecionado dinamicamente na interface.

---

## 📄 Estrutura do Projeto

**Arquitetura:**
- Uso de `useState` para gerenciar o valor do **select**.
- Integração com o evento **`onChange`** para atualizar o estado ao selecionar uma opção.
- Diferentes abordagens para definir valores iniciais.

**Componentes Criados:**
1. **App.jsx:** Componente principal com os exemplos de **select**.

---

## 🔧 Código Principal

### **Exemplo 1: Select com Valor Inicial Definido**

Neste exemplo, o valor inicial do **select** é definido diretamente no estado.

```jsx
import React from 'react';

const App = () => {
  const [select, setSelect] = React.useState('smartphone');

  return (
    <form>
      <select value={select} onChange={({ target }) => setSelect(target.value)}>
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
      </select>
      <p>{select}</p>
    </form>
  );
};

export default App;
```

### **Exemplo 2: Select com Placeholder Desabilitado**

Neste exemplo, o valor inicial é desabilitado, forçando o usuário a selecionar uma opção válida.

```jsx
import React from 'react';

const App = () => {
  const [select, setSelect] = React.useState('');

  return (
    <form>
      <select value={select} onChange={({ target }) => setSelect(target.value)}>
        <option value="" disabled>
          Selecione
        </option>
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
      </select>
      <p>{select}</p>
    </form>
  );
};

export default App;
```

---

## 🧠 O que Aprendi

1. **Select Controlado:**
   - Utilizar o atributo **`value`** para controlar a opção selecionada no **select**.
   - Gerenciar o valor do **select** com o estado do React para maior flexibilidade.

2. **Eventos de Alteração (`onChange`):**
   - Atualizar o estado com o valor selecionado usando o evento **`onChange`**.

3. **Valores Iniciais:**
   - Definir um valor inicial direto no estado.
   - Usar uma opção desabilitada como placeholder para guiar o usuário.

---

## 🌟 Destaques

1. **Interatividade:**
   - O valor do **select** é exibido dinamicamente, tornando a interface mais responsiva.

2. **Usabilidade Melhorada:**
   - Placeholder desabilitado ajuda a garantir que o usuário selecione uma opção válida.

3. **Flexibilidade:**
   - Fácil adaptação para diferentes cenários de uso.

---

## 🌐 Próximos Passos

1. Adicionar validação para garantir que o usuário escolha uma opção antes de enviar o formulário.
2. Personalizar o estilo do **select** para melhorar a experiência do usuário.
3. Implementar o **select** em um formulário completo com integração a uma API.