### Documentação do Projeto: **0501 CSS Import**

---

## 📖 Visão Geral

Nesta aula, exploramos como importar e utilizar CSS em projetos React. Abordamos as implicações da importação de estilos globais, os conflitos que podem surgir ao usar seletores genéricos e práticas recomendadas para evitar problemas durante a construção final do projeto.

---

## 🎯 Objetivo do Projeto

1. Compreender como o CSS é importado em projetos React através do **Webpack**.
2. Gerenciar estilos globais e evitar conflitos entre seletores.
3. Adotar práticas recomendadas para nomear componentes e classes CSS.
4. Visualizar como o **CSS final** é gerado no processo de build.

---

## 📄 Estrutura do Projeto

**Arquitetura:**
- **Importação de CSS Global:** Como funciona e suas implicações.
- **Conflitos de Seletores:** Problemas que surgem ao utilizar classes com nomes genéricos.
- **Boas Práticas:** Utilização de nomes únicos para componentes e classes.

**Componentes Criados:**
1. **App.jsx:** Gerencia a estrutura principal e a importação de componentes.
2. **Title.jsx e Title.css:** Exemplo de um componente com estilos importados.
3. **Produto.jsx e Produto.css:** Demonstra conflitos de estilo com seletores genéricos.
4. **UserForm.jsx e UserForm.css:** Aplica boas práticas para evitar conflitos.

---

## 🔧 Código Principal

### **Exemplo 1: Importação Básica de CSS**

Os estilos importados no React são globais e gerenciados pelo **Webpack**.

**App.jsx**

```jsx
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <p className="text">Meu site</p>
    </div>
  );
};

export default App;
```

**App.css**

```css
.container {
  max-width: 30rem;
  margin: 0 auto;
}

.text {
  font-weight: bold;
}
```

---

### **Exemplo 2: Componentes com Estilos**

Mesmo que um componente não seja utilizado, seus estilos serão adicionados ao CSS final.

**Title.jsx**

```jsx
import "./Title.css";

const Title = ({ text }) => {
  return <h1 className="Title">{text}</h1>;
};

export default Title;
```

**Title.css**

```css
.Title {
  font-size: 2rem;
  font-family: Cambria, serif;
}
```

**App.jsx**

```jsx
import "./App.css";
import Title from "./Components/Title";

const App = () => {
  return (
    <div className="container">
      {/* <Title text="Meu título" /> */}
      <p className="text">Meu site</p>
    </div>
  );
};

export default App;
```

---

### **Exemplo 3: Conflitos de Estilos**

Conflitos surgem ao usar seletores genéricos.

**Title.css**

```css
.Title {
  font-size: 2rem;
  font-family: sans-serif;
}
```

**Produto.jsx**

```jsx
import "./Produto.css";

const Produto = () => {
  return <h1 className="Title">Notebook</h1>;
};

export default Produto;
```

**Produto.css**

```css
h1 {
  color: tomato;
}

h1.Title {
  font-family: serif;
}
```

**CSS Final Gerado no Build**

```css
.Title {
  font-size: 2rem;
  font-family: sans-serif;
}

h1 {
  color: tomato;
}

h1.Title {
  font-family: serif;
}
```

---

### **Exemplo 4: Evitando Conflitos**

Boas práticas para nomes únicos de componentes e classes.

**UserForm.jsx**

```jsx
import "./UserForm.css";

const UserForm = () => {
  return (
    <div className="UserForm">
      <h1>Formulário</h1>
      <p className="UserFormText">Esse texto.</p>
    </div>
  );
};

export default UserForm;
```

**UserForm.css**

```css
.UserForm h1 {
  color: tomato;
}

.UserFormText {
  font-family: serif;
}
```

---

## 🧠 O que Aprendi

1. **Importação de CSS:**
   - Os estilos são importados de forma global e gerenciados pelo **Webpack**, compondo o CSS final da build.

2. **Conflitos de Seletores:**
   - Utilizar seletores genéricos pode causar conflitos, especialmente em projetos maiores.

3. **Boas Práticas:**
   - Adotar nomes únicos para classes relacionadas a componentes ajuda a evitar conflitos de estilo.

4. **Processo de Build:**
   - Durante a build, todos os estilos importados são mesclados em um único arquivo de CSS.

---

## 🌟 Destaques

1. **Simplicidade:**
   - A importação de CSS permite um início rápido no gerenciamento de estilos.

2. **Flexibilidade:**
   - Utilização de componentes e classes específicas evita problemas com escalabilidade.

3. **Escalabilidade:**
   - Boas práticas de nomenclatura facilitam o gerenciamento em projetos maiores.

---

## 🌐 Próximos Passos

1. Explorar **CSS Modules** para escopo local de estilos e evitar conflitos.
2. Experimentar bibliotecas como **styled-components** para estilos no JavaScript.
3. Implementar variáveis CSS para padronização de temas e cores.