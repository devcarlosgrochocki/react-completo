### Documentação do Projeto: **0404 Radio**

---

## 📖 Visão Geral

Nesta aula, aprendemos a criar e gerenciar **inputs do tipo radio** em formulários React. Exploramos como usar o atributo **`checked`** para determinar qual botão está selecionado e como organizar diferentes grupos de opções, cada um com seu próprio estado.

---

## 🎯 Objetivo do Projeto

1. Criar um grupo de **radio buttons** gerenciado por estado.
2. Usar o atributo **`checked`** para comparar o valor selecionado com os valores disponíveis.
3. Implementar diferentes grupos de **radio buttons**, cada um com seu próprio estado.
4. Garantir a reatividade e a sincronização entre o estado e a interface.

---

## 📄 Estrutura do Projeto

**Arquitetura:**
- Cada grupo de **radio buttons** é gerenciado com um estado específico.
- O evento **`onChange`** é utilizado para atualizar o estado com o valor selecionado.
- O valor selecionado é exibido dinamicamente.

**Componentes Criados:**
1. **App.jsx:** Componente principal contendo exemplos com um único grupo de **radio buttons** e com grupos distintos.

---

## 🔧 Código Principal

### **Exemplo 1: Um Grupo de Radio Buttons**

Neste exemplo, um único estado gerencia o valor selecionado.

```jsx
import React from 'react';

const App = () => {
  const [radio, setRadio] = React.useState('');

  function handleChange({ target }) {
    setRadio(target.value);
  }

  return (
    <form>
      <label>
        <input
          type="radio"
          value="notebook"
          checked={radio === 'notebook'}
          onChange={handleChange}
        />
        Notebook
      </label>
      <label>
        <input
          type="radio"
          value="smartphone"
          checked={radio === 'smartphone'}
          onChange={handleChange}
        />
        Smartphone
      </label>
      <label>
        <input
          type="radio"
          value="tablet"
          checked={radio === 'tablet'}
          onChange={handleChange}
        />
        Tablet
      </label>
    </form>
  );
};

export default App;
```

### **Exemplo 2: Diferentes Grupos de Radio Buttons**

Aqui, cada grupo de **radio buttons** possui seu próprio estado, permitindo múltiplas seleções independentes.

```jsx
import React from 'react';

const App = () => {
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');

  return (
    <form>
      <h2>Dispositivo</h2>
      <label>
        <input
          type="radio"
          value="notebook"
          checked={produto === 'notebook'}
          onChange={({ target }) => setProduto(target.value)}
        />
        Notebook
      </label>
      <label>
        <input
          type="radio"
          value="smartphone"
          checked={produto === 'smartphone'}
          onChange={({ target }) => setProduto(target.value)}
        />
        Smartphone
      </label>

      <h2>Cor</h2>
      <label>
        <input
          type="radio"
          value="azul"
          checked={cor === 'azul'}
          onChange={({ target }) => setCor(target.value)}
        />
        Azul
      </label>
      <label>
        <input
          type="radio"
          value="vermelho"
          checked={cor === 'vermelho'}
          onChange={({ target }) => setCor(target.value)}
        />
        Vermelho
      </label>
    </form>
  );
};

export default App;
```

---

## 🧠 O que Aprendi

1. **Radio Buttons Controlados:**
   - O atributo **`checked`** é usado para comparar o valor selecionado com o valor de cada botão.

2. **Estados Separados para Grupos:**
   - Cada grupo de **radio buttons** pode ser gerenciado por um estado independente, permitindo maior modularidade.

3. **Reatividade:**
   - As alterações nos **radio buttons** são refletidas instantaneamente na interface através do estado do React.

---

## 🌟 Destaques

1. **Personalização por Grupos:**
   - Possibilidade de gerenciar múltiplos grupos de **radio buttons** independentemente.

2. **Feedback Dinâmico:**
   - O valor selecionado é exibido em tempo real na interface.

3. **Flexibilidade:**
   - Fácil expansão para incluir mais grupos ou opções dentro de um grupo.

---

## 🌐 Próximos Passos

1. Adicionar validações para garantir que o usuário selecione uma opção antes de enviar o formulário.
2. Estilizar os **radio buttons** para uma experiência de usuário mais agradável.
3. Integrar os valores dos **radio buttons** com outros componentes em um formulário completo.