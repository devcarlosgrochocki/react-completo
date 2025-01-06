### Documentação do Projeto: **0412 Desafio Formulários**

---

## 📖 Visão Geral

Este projeto apresenta um desafio envolvendo um formulário de múltipla escolha em React. O objetivo é implementar um sistema de perguntas com opções de resposta, onde o usuário pode selecionar respostas e verificar a pontuação final com base nas escolhas corretas.

---

## 🎯 Objetivo do Projeto

1. Criar um sistema de **quiz** utilizando **React**.
2. Gerenciar as respostas do usuário com **estados controlados**.
3. Exibir cada pergunta de forma interativa com transições entre os slides.
4. Validar as respostas e calcular a pontuação final do quiz.
5. Criar um componente reutilizável **Radio** para as perguntas e opções.

---

## 📄 Estrutura do Projeto

**Arquitetura:**
- **Componente App:** Gerencia o fluxo principal do quiz (perguntas, respostas, pontuação e transições).
- **Componente Radio:** Exibe as perguntas e opções, além de gerenciar as seleções.
- **Perguntas:** Um array de objetos define as perguntas, opções e respostas corretas.

**Componentes Criados:**
1. **App.jsx:** Lógica principal do quiz.
2. **Radio.jsx:** Componente reutilizável para exibição das perguntas e opções.

---

## 🔧 Código Principal

### **App.jsx**

Gerencia o estado das respostas, transições de slides e exibe o resultado final.

```jsx
import React from 'react';
import Radio from './Radio';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: ['React.makeComponent()', 'React.createComponent()', 'React.createElement()'],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

const App = () => {
  const [respostas, setRespostas] = React.useState({
    p1: '',
    p2: '',
    p3: '',
    p4: '',
  });
  const [slide, setSlide] = React.useState(0);
  const [resultado, setResultado] = React.useState(null);

  function handleChange({ target }) {
    setRespostas({ ...respostas, [target.id]: target.value });
  }

  function resultadoFinal() {
    const corretas = perguntas.filter(({ id, resposta }) => respostas[id] === resposta);
    setResultado(`Você acertou: ${corretas.length} de ${perguntas.length}`);
  }

  function handleClick() {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      resultadoFinal();
    }
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      {perguntas.map((pergunta, index) => (
        <Radio
          active={slide === index}
          key={pergunta.id}
          value={respostas[pergunta.id]}
          onChange={handleChange}
          {...pergunta}
        />
      ))}
      {resultado ? (
        <p>{resultado}</p>
      ) : (
        <button onClick={handleClick}>Próxima</button>
      )}
    </form>
  );
};

export default App;
```

---

### **Radio.jsx**

Componente reutilizável que exibe perguntas e opções de resposta.

```jsx
import React from 'react';

const Radio = ({ pergunta, options, onChange, value, id, active }) => {
  if (active === false) return null;

  return (
    <fieldset style={{ padding: '2rem', marginBottom: '1rem', border: '2px solid #eee' }}>
      <legend style={{ fontWeight: 'bold' }}>{pergunta}</legend>
      {options.map((option) => (
        <label key={option} style={{ marginBottom: '1rem', fontFamily: 'monospace' }}>
          <input
            type="radio"
            id={id}
            checked={value === option}
            value={option}
            onChange={onChange}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
};

export default Radio;
```

---

## 🧠 O que Aprendi

1. **Estados Controlados:**
   - Gerenciar as respostas do usuário em um objeto com chaves correspondentes às perguntas.

2. **Validação de Respostas:**
   - Comparar as respostas do usuário com as corretas para calcular o resultado final.

3. **Componentização:**
   - Criar um componente reutilizável **Radio** para simplificar o código e aumentar a modularidade.

4. **Interatividade:**
   - Implementar transições entre as perguntas usando um índice (`slide`).

---

## 🌟 Destaques

1. **Quiz Interativo:**
   - Navegação entre perguntas e cálculo dinâmico da pontuação final.

2. **Reutilização de Componentes:**
   - O componente **Radio** pode ser usado em outros projetos de quiz ou formulários.

3. **Feedback ao Usuário:**
   - Exibição do resultado de forma clara e interativa.

---

## 🌐 Próximos Passos

1. Adicionar feedback visual para respostas corretas e incorretas após o envio.
2. Estender o quiz para incluir perguntas com imagens ou vídeos.
3. Implementar um cronômetro para limitar o tempo de resposta.