# Aula 0201 - Adicionando React no HTML sem NPM

Nesta aula, aprendemos como configurar e executar React diretamente em um arquivo HTML, sem a necessidade de ferramentas como NPM ou Webpack. O foco foi entender como carregar e utilizar React e JSX utilizando bibliotecas via **CDN**.

---

## 🎯 Objetivo da Aula

- Renderizar componentes React diretamente no navegador.
- Configurar um ambiente básico de React utilizando apenas um arquivo HTML.
- Criar componentes React simples com estado (`useState`).

---

## 📄 Estrutura do Código

### 1. **Carregando as Bibliotecas**
As bibliotecas do React e Babel foram carregadas via **CDN**, diretamente no `<head>` do HTML:

```html
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

- **React**: Biblioteca principal para criação de interfaces de usuário.
- **React DOM**: Permite a manipulação da árvore DOM usando componentes React.
- **Babel**: Transforma JSX em JavaScript puro compreensível pelos navegadores.

### 2. **Estrutura HTML**
O HTML contém um único `<div>` com o `id="root"`, que serve como ponto de entrada para os componentes React:

```html
<div id="root"></div>
```

### 3. **Componente React**
Dois componentes foram criados:
- `App`: Componente principal que contém dois botões.
- `Button`: Um botão que incrementa um valor ao ser clicado. Cada botão mantém seu próprio estado.

---

## 💻 Código Completo

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
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

</head>

<body>
  <div id="root"></div>

  <script type="text/babel">
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

      return (
        <button onClick={() => setTotal(total + 1)}>
          Adicionar {total}
        </button>
      );
    }

    const container = document.getElementById("root");
    const root = ReactDOM.createRoot(container);

    root.render(<App />);
  </script>
</body>

</html>
```

---

## 🧠 O que Aprendi

1. **Configuração Básica**:
   - Como carregar React e Babel diretamente no navegador via CDN.
   - Como criar uma estrutura básica para renderizar componentes React.

2. **Criação de Componentes**:
   - Uso de funções para criar componentes React (`App` e `Button`).
   - Uso de `React.useState` para gerenciar o estado local de cada componente.

3. **Isolamento de Estado**:
   - Cada instância do componente `Button` possui seu próprio estado isolado, mesmo que compartilhem o mesmo código.

---

## 🌟 Próximos Passos

- Aprender sobre **props** para passar dados entre componentes.
- Explorar como o estado pode ser compartilhado entre diferentes componentes (estado global).
- Avançar para uma configuração utilizando ferramentas como **Create React App**.

---

## 🌐 Referências

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [UNPKG CDN](https://unpkg.com/)
- [Babel Standalone](https://babeljs.io/docs/en/babel-standalone)

---

Este é um exercício inicial com React e JSX. A abordagem é ideal para quem está começando e deseja entender os fundamentos antes de avançar para configurações mais complexas!