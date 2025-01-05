### Documentação do Projeto: **0405 Checkbox**

---

## 📖 Visão Geral

Nesta aula, aprendemos a implementar e gerenciar **checkboxes** em formulários React, abordando tanto o uso de um único checkbox quanto múltiplos checkboxes. Exploramos a lógica para controlar o estado de seleção e otimizamos o código utilizando arrays dinâmicas.

---

## 🎯 Objetivo do Projeto

1. Criar e gerenciar um **checkbox** simples utilizando o estado controlado.
2. Gerenciar múltiplos **checkboxes** com um estado em array, armazenando os valores selecionados.
3. Demonstrar como exibir dinamicamente os itens selecionados.
4. Otimizar o código para gerar checkboxes a partir de um array.

---

## 📄 Estrutura do Projeto

**Arquitetura:**
- Estados controlados com `useState` para gerenciar a seleção de checkboxes.
- Lógica de inclusão e remoção de itens selecionados utilizando arrays.
- Iteração dinâmica para criar checkboxes a partir de uma lista de valores.

**Componentes Criados:**
1. **App.jsx:** Contém exemplos com um checkbox simples, múltiplos checkboxes e otimização com um array.

---

## 🔧 Código Principal

### **Exemplo 1: Checkbox Simples**

Um único checkbox controlado pelo estado.

```jsx
import React from 'react';

const App = () => {
  const [checkbox, setCheckbox] = React.useState(false);

  function handleChange({ target }) {
    setCheckbox(target.checked);
  }

  return (
    <form>
      <label>
        <input
          type="checkbox"
          value="termos"
          checked={checkbox}
          onChange={handleChange}
        />
        Li os termos.
      </label>
    </form>
  );
};

export default App;
```

### **Exemplo 2: Múltiplos Checkboxes**

Gerenciamento de múltiplos checkboxes utilizando um estado em array.

```jsx
import React from 'react';

const App = () => {
  const [cores, setCores] = React.useState([]);

  function handleChange({ target }) {
    const { checked, value } = target;
    if (checked) {
      setCores([...cores, value]);
    } else {
      setCores(cores.filter((cor) => cor !== value));
    }
  }

  function handleChecked(cor) {
    return cores.includes(cor);
  }

  return (
    <form>
      <label>
        <input
          type="checkbox"
          value="azul"
          checked={handleChecked('azul')}
          onChange={handleChange}
        />
        Azul
      </label>
      <label>
        <input
          type="checkbox"
          value="vermelho"
          checked={handleChecked('vermelho')}
          onChange={handleChange}
        />
        Vermelho
      </label>
      <label>
        <input
          type="checkbox"
          value="verde"
          checked={handleChecked('verde')}
          onChange={handleChange}
        />
        Verde
      </label>
      <ul>
        {cores.map((cor) => (
          <li key={cor}>{cor}</li>
        ))}
      </ul>
    </form>
  );
};

export default App;
```

### **Exemplo 3: Otimização com Array**

Criação dinâmica de checkboxes a partir de uma lista de valores.

```jsx
import React from 'react';

const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

const App = () => {
  const [cores, setCores] = React.useState([]);

  function handleChange({ target }) {
    const { checked, value } = target;
    if (checked) {
      setCores([...cores, value]);
    } else {
      setCores(cores.filter((cor) => cor !== value));
    }
  }

  function handleChecked(cor) {
    return cores.includes(cor);
  }

  return (
    <form>
      {coresArray.map((cor) => (
        <label key={cor} style={{ textTransform: 'capitalize' }}>
          <input
            type="checkbox"
            value={cor}
            checked={handleChecked(cor)}
            onChange={handleChange}
          />
          {cor}
        </label>
      ))}
      <ul>
        {cores.map((cor) => (
          <li key={cor}>{cor}</li>
        ))}
      </ul>
    </form>
  );
};

export default App;
```

---

## 🧠 O que Aprendi

1. **Checkbox Controlado:**
   - O estado do checkbox é controlado pelo atributo **`checked`**, refletindo mudanças em tempo real.

2. **Múltiplos Checkboxes:**
   - Utilizar um array para gerenciar a seleção de múltiplos checkboxes.
   - Incluir e remover valores no array com base no evento **`onChange`**.

3. **Criação Dinâmica:**
   - Gerar checkboxes dinamicamente a partir de um array, otimizando a escrita de código e facilitando a manutenção.

---

## 🌟 Destaques

1. **Flexibilidade:**
   - Capacidade de lidar com múltiplos checkboxes de forma escalável.

2. **Iteração Dinâmica:**
   - Uso de arrays para criar interfaces dinâmicas e responsivas.

3. **Exibição Dinâmica:**
   - Os valores selecionados são exibidos em tempo real na interface.

---

## 🌐 Próximos Passos

1. Adicionar validações para limitar o número de seleções possíveis.
2. Estilizar os checkboxes para melhorar a experiência do usuário.
3. Integrar os valores selecionados em um formulário completo para envio de dados a uma API.