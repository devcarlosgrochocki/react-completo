### Documentação do Projeto: **0408 Componentes Radio**

---

## 📖 Visão Geral

Nesta aula, aprendemos a criar um componente reutilizável para **radio buttons** em React. O objetivo foi encapsular a lógica e a estrutura dos **radio buttons** em um único componente, simplificando a reutilização e tornando o código mais modular e legível.

---

## 🎯 Objetivo do Projeto

1. Criar um componente **Radio** que encapsule a lógica de **radio buttons**.
2. Tornar o componente reutilizável, permitindo passar diferentes opções via props.
3. Utilizar **props** para controlar o estado selecionado de forma dinâmica.
4. Demonstrar o uso do componente em um exemplo prático.

---

## 📄 Estrutura do Projeto

**Arquitetura:**
- Componente **Radio**:
  - Recebe as opções, valor atual e função de atualização via props.
  - Mapeia as opções para gerar dinamicamente os **radio buttons**.
- Componente **App.jsx**:
  - Define o estado do valor selecionado e utiliza o componente **Radio** com diferentes opções.

**Componentes Criados:**
1. **Radio.jsx:** Componente reutilizável para **radio buttons**.
2. **App.jsx:** Exemplo de uso do componente **Radio**.

---

## 🔧 Código Principal

### **Radio.jsx**

Componente que encapsula a lógica de **radio buttons**, recebendo opções, valor atual e função de atualização via props.

```jsx
import React from 'react';

const Radio = ({ options, value, setValue, ...props }) => {
  return (
    <>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            value={option}
            checked={value === option}
            onChange={({ target }) => setValue(target.value)}
            {...props}
          />
          {option}
        </label>
      ))}
    </>
  );
};

export default Radio;
```

### **App.jsx**

Exemplo prático de utilização do componente **Radio**.

```jsx
import React from 'react';
import Radio from './Radio';

const App = () => {
  const [cor, setCor] = React.useState('');

  return (
    <form>
      <Radio
        options={['azul', 'verde', 'amarelo']}
        value={cor}
        setValue={setCor}
      />
    </form>
  );
};

export default App;
```

---

## 🧠 O que Aprendi

1. **Componentização:**
   - Encapsular lógica e estrutura em componentes reutilizáveis melhora a organização e facilita a manutenção do código.

2. **Props Dinâmicos:**
   - Utilizar props para passar dados (como opções e estado) torna o componente flexível e reutilizável.

3. **Mapeamento de Opções:**
   - A função **`map`** simplifica a criação de múltiplos **radio buttons** de forma dinâmica.

4. **Reutilização:**
   - O componente **Radio** pode ser facilmente reutilizado em diferentes partes do projeto, bastando alterar as opções passadas via props.

---

## 🌟 Destaques

1. **Reutilização e Modularidade:**
   - O componente **Radio** pode ser usado em diferentes contextos sem necessidade de replicar a lógica.

2. **Flexibilidade:**
   - Fácil adaptação para diferentes conjuntos de opções e estados.

3. **Clareza no Código:**
   - Separar a lógica do **radio buttons** em um componente dedicado melhora a legibilidade e organização do código.

---

## 🌐 Próximos Passos

1. Adicionar estilos personalizados ao componente **Radio** para melhorar a experiência do usuário.
2. Implementar validações para garantir que uma opção seja selecionada antes do envio de um formulário.
3. Estender o componente para incluir grupos de **radio buttons** relacionados.