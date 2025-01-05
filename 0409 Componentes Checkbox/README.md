### Documentação do Projeto: **0409 Componentes Checkbox**

---

## 📖 Visão Geral

Nesta aula, aprendemos a criar um componente reutilizável para **checkboxes** em React. O objetivo foi encapsular a lógica e a estrutura dos **checkboxes**, permitindo o gerenciamento de múltiplas seleções e facilitando a reutilização em diferentes contextos.

---

## 🎯 Objetivo do Projeto

1. Criar um componente **Checkbox** que encapsule a lógica de múltiplos checkboxes.
2. Tornar o componente reutilizável, permitindo passar diferentes opções via props.
3. Gerenciar a seleção de múltiplos itens em um array controlado pelo estado.
4. Demonstrar o uso do componente em um exemplo prático.

---

## 📄 Estrutura do Projeto

**Arquitetura:**
- Componente **Checkbox**:
  - Recebe as opções, valores selecionados e função de atualização via props.
  - Gerencia a inclusão e exclusão de valores selecionados no estado.
- Componente **App.jsx**:
  - Utiliza o componente **Checkbox** com diferentes conjuntos de opções.

**Componentes Criados:**
1. **Checkbox.jsx:** Componente reutilizável para **checkboxes**.
2. **App.jsx:** Exemplo de uso do componente **Checkbox**.

---

## 🔧 Código Principal

### **Checkbox.jsx**

Componente que encapsula a lógica de **checkboxes**, gerenciando múltiplas seleções.

```jsx
import React from 'react';

const Checkbox = ({ options, value, setValue }) => {
  function handleChange({ target }) {
    if (target.checked) {
      setValue([...value, target.value]);
    } else {
      setValue(value.filter((item) => item !== target.value));
    }
  }

  return (
    <>
      {options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            value={option}
            checked={value.includes(option)}
            onChange={handleChange}
          />
          {option}
        </label>
      ))}
    </>
  );
};

export default Checkbox;
```

### **App.jsx**

Exemplo prático de utilização do componente **Checkbox**.

```jsx
import React from 'react';
import Checkbox from './Checkbox';

const App = () => {
  const [fruta, setFruta] = React.useState([]);
  const [termos, setTermos] = React.useState([]);

  return (
    <form>
      <Checkbox
        options={['Uva', 'Laranja', 'Limão']}
        value={fruta}
        setValue={setFruta}
      />

      <Checkbox
        options={['Termos e Condições']}
        value={termos}
        setValue={setTermos}
      />
    </form>
  );
};

export default App;
```

---

## 🧠 O que Aprendi

1. **Componentização de Checkboxes:**
   - Encapsular a lógica de múltiplos checkboxes em um único componente melhora a modularidade e reutilização.

2. **Gerenciamento de Seleções:**
   - Adicionar e remover itens selecionados de um array controlado pelo estado.

3. **Props Dinâmicas:**
   - Passar diferentes conjuntos de opções e estados para o componente **Checkbox**, permitindo flexibilidade.

4. **Inclusão Condicional:**
   - Utilizar o método **`includes`** para verificar se um item já está selecionado.

---

## 🌟 Destaques

1. **Reutilização e Modularidade:**
   - O componente **Checkbox** pode ser utilizado para diferentes conjuntos de opções sem duplicar lógica.

2. **Gerenciamento Dinâmico:**
   - A lógica de inclusão e remoção de itens torna o componente robusto e escalável.

3. **Flexibilidade:**
   - Fácil adaptação para diferentes contextos, como listas de preferências ou condições de uso.

---

## 🌐 Próximos Passos

1. Adicionar validações para limitar o número de seleções possíveis.
2. Estilizar os checkboxes para melhorar a experiência do usuário.
3. Implementar feedback visual para o estado selecionado.