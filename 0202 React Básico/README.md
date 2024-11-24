# 0202 React Básico

## 📖 Visão Geral

Nesta aula, exploramos os fundamentos do React, incluindo a criação de elementos React, componentes funcionais, composição de componentes, gerenciamento de eventos e o uso de Hooks. Esses conceitos são essenciais para o desenvolvimento de interfaces dinâmicas e reativas.

---

## 📝 O que Aprendemos

### **React Element**
- Todo elemento React é criado usando a função `React.createElement`. 
- O Babel converte a sintaxe JSX em chamadas para `React.createElement`, permitindo que escrevamos código semelhante a HTML dentro de JavaScript.

#### Exemplo:
JSX:
```jsx
function App() {
  return <div id="container">Meu App</div>;
}
```

Convertido para JavaScript:
```javascript
function App() {
  return React.createElement('div', { id: 'container' }, 'Meu App');
}
```

---

### **Componentes**
- Os componentes permitem dividir a interface em pequenas partes reutilizáveis.
- São criados como funções que retornam elementos React.

#### Exemplo:
```jsx
const Button = () => {
  return <button>Comprar</button>;
};
```

#### **Composição**
- Um dos principais benefícios dos componentes é a possibilidade de compor interfaces com diversos componentes.

---

### **Eventos**
- Eventos em React são declarados diretamente nos elementos utilizando sintaxe JavaScript.

#### Exemplo:
```jsx
const Produtos = () => {
  function handleClick(event) {
    console.log('Comprou: ' + event.target.innerText);
  }

  return (
    <div>
      <button onClick={handleClick}>Camisa</button>
      <button onClick={handleClick}>Bermuda</button>
    </div>
  );
};
```

---

### **Hooks**
- Os Hooks são funções especiais do React que permitem gerenciar estados e efeitos dentro de componentes funcionais.
- O `useState` é utilizado para criar e atualizar estados.

#### Exemplo:
```jsx
const Compras = () => {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>Comprar: {count}</button>
      <p>Total: {count}</p>
      <p>Preço: R$ {count * 250}</p>
    </div>
  );
};
```

---

## 🛠 Código Implementado

```html
<!DOCTYPE html>
<html lang="PT-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React Básico</title>
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
  <div id="root"></div>
  <script type="text/babel">
    const Button = () => <button>Comprar</button>;

    const MainNav = () => (
      <nav>
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
        </ul>
      </nav>
    );

    const Produtos = () => {
      function handleClick(event) {
        console.log('Comprou:' + event.target.innerText);
      }
      return (
        <div>
          <button onClick={handleClick}>Camisa</button>
          <button onClick={handleClick}>Bermuda</button>
        </div>
      );
    };

    const Compras = () => {
      const [count, setCount] = React.useState(0);
      function handleClick() {
        setCount(count + 1);
      }
      return (
        <div>
          <button onClick={handleClick}>Comprar: {count}</button>
          <p>Total: {count}</p>
          <p>Preço: R$ {count * 250}</p>
        </div>
      );
    };

    const App = () => (
      <div>
        <MainNav />
        <Produtos />
        <Button />
        <Compras />
      </div>
    );

    const root = ReactDOM.createRoot(document.querySelector("#root"));
    root.render(<App />);
  </script>
</body>
</html>
```

---

## 🌟 Destaques

1. **Elementos React**: Criados com `React.createElement` e simplificados pelo JSX.
2. **Componentes Reutilizáveis**: Modulares e compostos.
3. **Gerenciamento de Eventos**: Utilizando funções e atributos JSX.
4. **Hooks**: Como o `useState` para estados reativos.