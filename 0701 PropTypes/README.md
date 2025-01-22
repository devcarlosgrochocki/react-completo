### Documentação do Projeto: **0701 PropTypes**

---

## 📖 Visão Geral

O **PropTypes** é uma biblioteca para validação de tipos de propriedades em componentes React. Ele ajuda a garantir que os dados passados como propriedades para um componente sejam do tipo esperado, retornando um erro em caso de inconsistência. Além disso, é possível definir propriedades obrigatórias e valores padrões com **`defaultProps`**.

---

## 🎯 Objetivo do Projeto

1. Instalar e configurar a biblioteca **PropTypes** no React.
2. Implementar validação de propriedades nos componentes.
3. Definir valores padrão para propriedades com **`defaultProps`**.
4. Melhorar a legibilidade e robustez dos componentes React.

---

## 📄 Estrutura do Projeto

**Arquitetura:**
- **Button.jsx:** Um componente que utiliza **PropTypes** para validar propriedades.
- **App.jsx:** Demonstração prática do uso do componente **Button** com validação.

**Componentes Criados:**
1. **Button.jsx:** Exemplo de validação e valores padrão para propriedades.
2. **App.jsx:** Componente principal que utiliza o **Button**.

---

## 🔧 Código Principal

### **Instalação do PropTypes**

No Vite, instale o **PropTypes** com o comando:

```bash
npm install prop-types
```

---

### **Exemplo 1: Validação de Propriedades**

**Button.jsx**

```jsx
import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button
      style={{
        margin: props.margin,
        width: `${props.width}px`,
        height: `${props.width / 3}px`,
      }}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  margin: PropTypes.string.isRequired,
  width: PropTypes.number,
  disabled: PropTypes.bool,
};

export default Button;
```

**App.jsx**

```jsx
import React from 'react';
import Button from './Button';

const App = () => {
  return (
    <div>
      <h1>Meu App</h1>
      <Button margin="10px" width={300}>
        Clique Aqui
      </Button>
    </div>
  );
};

export default App;
```

---

### **Exemplo 2: Valores Padrão com `defaultProps`**

**Button.jsx**

```jsx
import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button
      style={{
        margin: props.margin,
        width: `${props.width}px`,
        height: `${props.width / 3}px`,
      }}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  width: 200,
  disabled: false,
};

Button.propTypes = {
  margin: PropTypes.string.isRequired,
  width: PropTypes.number,
  disabled: PropTypes.bool,
};

export default Button;
```

---

## 🧠 O que Aprendi

1. **PropTypes:**
   - Validação de propriedades para garantir tipos corretos nos componentes.
   - Especificação de propriedades obrigatórias com **`.isRequired`**.

2. **defaultProps:**
   - Definição de valores padrão para propriedades ausentes.
   - Funciona independentemente do uso de **PropTypes**.

3. **Melhoria na Legibilidade:**
   - Documentação clara dos tipos de dados esperados para cada propriedade.

---

## 🌟 Destaques

1. **Validação de Propriedades:**
   - Identificação rápida de erros ao passar propriedades para componentes.

2. **Valores Padrão:**
   - Elimina a necessidade de verificar valores nulos ou indefinidos manualmente.

3. **Flexibilidade:**
   - Pode ser combinado com outras estratégias de validação para aumentar a robustez.

---

## 🌐 Próximos Passos

1. Experimentar o uso de **PropTypes.shape** para validar objetos complexos.
2. Testar validação de arrays e funções com **PropTypes.array** e **PropTypes.func**.
3. Explorar bibliotecas alternativas como **TypeScript** para validação de tipos em projetos maiores.