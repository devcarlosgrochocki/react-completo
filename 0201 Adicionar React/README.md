# 🚀 Meu Aprendizado em React - Adicionando React no HTML sem NPM

Este repositório documenta o processo de aprendizado sobre como configurar e utilizar o React diretamente em um arquivo HTML sem a necessidade de ferramentas como NPM ou Webpack. Este método utiliza bibliotecas do React carregadas via CDN, sendo ideal para iniciantes compreenderem os fundamentos do React.

---

## 🗂 Estrutura do Diretório

- `index.html`: O arquivo principal contendo a implementação do React diretamente no HTML, usando `<script type="text/babel">`.

---

## 📚 Aula: Adicionando React no HTML sem NPM

### Objetivo
O objetivo desta aula foi aprender a configurar e utilizar o React em um projeto simples sem depender de ferramentas de build como Webpack ou NPM, carregando as bibliotecas via CDN e criando componentes React básicos.

---

## 🔧 Configuração e Código

### 1. Carregando as Bibliotecas
As bibliotecas React, React DOM e Babel foram carregadas via CDN:
```html
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

- **React**: A biblioteca principal para criar componentes e gerenciar o estado.
- **React DOM**: Para renderizar os componentes React na árvore DOM do navegador.
- **Babel**: Permite usar JSX diretamente no navegador.

---

### 2. Estrutura HTML
O arquivo contém uma `<div>` com o `id="root"`, onde os componentes React serão renderizados:
```html
<div id="root"></div>
```

---

### 3. Código React
O código React foi implementado dentro de um `<script type="text/babel">` para permitir o uso de JSX:

```jsx
function App() {
  return (
    <div>
      <h1>Aplicativo React</h1>
      <Button />
      <Button />
    </div>
  );
}

function Button() {
  const [total, setTotal] = React.useState(0);

  return <button onClick={() => setTotal(total + 1)}>Adicionar {total}</button>;
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
```

#### Explicação do Código
1. **Componente `App`**:
   - Componente principal que renderiza um título e dois botões.
2. **Componente `Button`**:
   - Usa o **React Hook** `useState` para gerenciar o estado local de cada botão.
   - Cada botão começa com o contador `0` e incrementa o valor ao clicar.
3. **Renderização**:
   - A função `ReactDOM.createRoot` monta o componente `App` na `<div id="root">`.

---

## 📄 Código Completo

```html
<!DOCTYPE html>
<html lang="PT-BR">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Adicionando React no HTML sem NPM">
  <title>React no HTML sem NPM</title>

  <!-- Carrega o React, React Dom e Babel -->
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

  <!-- Don't use this in production: -->
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

</head>

<body>
  <div id="root"></div>

  <script type="text/babel">
    function App() {
      return <div>
          <h1>Aplicativo React</h1>
          <Button />
          <Button />
        </div>
    }

    function Button() {
      const [total, setTotal] = React.useState(0)

      return <button onClick={() => setTotal(total + 1)}>Adicionar {total}</button>
    }

    const container = document.getElementById("root")

    const root = ReactDOM.createRoot(container)

    root.render(<App />)

  </script>
</body>

</html>
```

---

## 🌟 O que Aprendi

1. **Instância Independente de Estado**:
   - Cada botão possui seu próprio estado independente ao usar `useState` dentro do componente.
   - Cada instância do componente `Button` é isolada e mantém seu próprio contador.

2. **Uso Básico de JSX**:
   - A sintaxe JSX foi utilizada para criar elementos HTML de forma declarativa.

3. **Renderização React no Navegador**:
   - Utilizando o React DOM para montar os componentes na árvore DOM de forma eficiente.

---

## 🌐 Referências

- [Documentação Oficial do React](https://reactjs.org/docs/getting-started.html)
- [CDN de React no UNPKG](https://unpkg.com/)

---

## 📜 Histórico de Atualizações

| Aula           | Tópico                       | Descrição                                                |
|-----------------|------------------------------|---------------------------------------------------------|
| `0201`         | Adicionar React no HTML      | Implementação de um exemplo básico de React no HTML.    |

---