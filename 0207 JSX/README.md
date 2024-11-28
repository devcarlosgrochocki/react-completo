# 0207 JSX

## 📖 Visão Geral

Nesta aula, exploramos o conceito de **JSX** (JavaScript XML), uma extensão da sintaxe do JavaScript que permite escrever código HTML dentro de JavaScript de forma declarativa. O JSX é convertido em chamadas de função do React, o que facilita a construção de interfaces dinâmicas.

---

## 📝 O que Aprendemos

### **JSX (JavaScript XML)**
- JSX é uma sintaxe semelhante ao HTML que permite criar componentes de forma declarativa em JavaScript.
- O JSX é transformado em funções `React.createElement` no processo de transpilação.

#### Exemplo:
JSX:
```jsx
const App = () => {
  return <button>Comprar</button>;
};
```

Transformado para JavaScript:
```javascript
const App = () => {
  return React.createElement('button', null, 'Comprar');
};
```

---

### **Atributos**
- Em JSX, atributos podem ser passados como no HTML, mas existem alguns casos especiais.

#### Exemplo:
```jsx
const App = () => {
  return (
    <a href="https://www.origamid.com" title="Site Origamid">
      Origamid
    </a>
  );
};
```

- Para retornar múltiplos elementos, deve-se usar **parênteses**.

---

### **Casos Especiais**

1. **`class` para `className`**:
   - Devido ao `class` ser uma palavra reservada no JavaScript, no JSX usamos `className` para definir classes CSS.

   ```jsx
   const App = () => {
     return <div className="grid">Origamid</div>;
   };
   ```

2. **`for` para `htmlFor`**:
   - Em JSX, o atributo `for` (usado em labels) é substituído por `htmlFor` devido a conflitos com a palavra-chave `for` no JavaScript.

   ```jsx
   const App = () => {
     return (
       <form>
         <label htmlFor="nome">Nome</label>
         <input type="text" id="nome" />
       </form>
     );
   };
   ```

---

### **React.Fragment**

- Em JSX, ao retornar múltiplos elementos, não podemos retornar uma lista de elementos sem um contêiner. 
- **React.Fragment** permite retornar múltiplos elementos sem adicionar um nó extra no DOM.

#### Exemplo:
```jsx
return (
  <React.Fragment>
    <label htmlFor="nome">Nome</label>
    <input type="text" id="nome" />
  </React.Fragment>
);
```

- **Sintaxe curta**:
```jsx
return (
  <>
    <label htmlFor="nome">Nome</label>
    <input type="text" id="nome" />
  </>
);
```

---

### **camelCase**
- Atributos com nomes compostos em JSX devem seguir a convenção **camelCase**.

#### Exemplo:
```jsx
const App = () => {
  return <video autoPlay />;
};
```

---

### **Expressões e Variáveis em JSX**
- Dentro do JSX, podemos usar **expressões JavaScript** utilizando chaves `{}`.

#### Exemplo:
```jsx
const App = () => {
  const nome = 'André';
  return <p>{nome}</p>;
};
```

#### Outras expressões:
```jsx
const App = () => {
  const desconto = 50;
  const preco = 250;
  return <p>{preco - desconto}</p>;
};
```

#### Atribuindo classes condicionalmente:
```jsx
const App = () => {
  const ativo = true;
  return <p className={ativo ? 'ativo' : 'inativo'}>Estoque</p>;
};
```

#### Atribuindo JSX a variáveis:
```jsx
const Titulo = <h1>Meu título</h1>;

const App = () => {
  return <div>{Titulo}</div>;
};
```

---

### **JSX Expressões**
- Podemos executar **expressões** dentro das chaves `{}`. O JSX aceita números, strings, arrays, funções, e até operações lógicas.

#### Exemplo:
```jsx
const App = () => {
  function meuNome() {
    return 'André';
  }

  const quadrado = (x) => x * x;

  return (
    <div>
      <p>{'MINHA EMPRESA'.toLowerCase()}</p>
      <p>{30 * 2}</p>
      <p>{true}</p>
      <p>{(() => 'Função Executada')()}</p>
      <p>{meuNome()}</p>
      <p>{quadrado(2)}</p>
      <p>{quadrado(2) === 4 ? 'Fórmula correta' : 'Fórmula incorreta'}</p>
      <p>{quadrado(2) === 4 && 'Fórmula correta'}</p>
      <p>{Date.now()}</p>
      <p>{new Date().getFullYear()}</p>
    </div>
  );
};
```

- **Valores que não geram saída na tela**:
  - **Booleanos**, **undefined**, e **null** não serão renderizados no DOM.

---

### **Estilos Inline**

- Podemos passar um objeto de estilo diretamente no JSX, utilizando **camelCase** para as propriedades.

#### Exemplo:
```jsx
const App = () => {
  const estiloH1 = {
    color: 'blue',
    fontSize: '20px',
    fontFamily: 'Helvetica',
  };

  return (
    <div>
      <h1 style={estiloH1}>Empresa</h1>
      <p style={{ color: 'green' }}>Sempre aberta</p>
    </div>
  );
};
```

---

### **Exercício: Apresentar Dados com Condições**

O exercício proposto é exibir informações de um cliente, como nome, idade, situação e total de compras, utilizando as habilidades aprendidas em JSX.

#### Exemplo:
```jsx
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const App = () => {
  const dados = mario;

  const total = dados.compras
    .map((item) => Number(item.preco.replace('R$ ', '')))
    .reduce((a, b) => a + b);

  return (
    <div>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:{' '}
        <span style={{ color: dados.ativa ? 'green' : 'red' }}>
          {dados.ativa ? 'Ativa' : 'Inativa'}
        </span>
      </p>
      <p>Total: R$ {total}</p>
      {total > 10000 && <p>Você está gastando muito</p>}
    </div>
  );
};

export default App;
```

---

## 🌟 Destaques

1. **JSX Sintaxe**:
   - Permite escrever HTML-like diretamente no código JavaScript, melhorando a legibilidade e produtividade.

2. **Expressões dentro do JSX**:
   - Podemos usar variáveis, funções, e operações diretamente dentro do JSX, tornando o código mais dinâmico.

3. **Estilos Inline**:
   - Suporte para passar estilos diretamente dentro dos componentes, utilizando objetos em camelCase.

---

## 🚀 Conclusão

O JSX é uma poderosa ferramenta que facilita a criação de interfaces com React, permitindo a utilização de uma sintaxe declarativa e integrando JavaScript diretamente com o HTML. O aprendizado sobre suas peculiaridades e práticas, como `className`, `htmlFor`, e expressões condicionais, é fundamental para dominar o desenvolvimento de interfaces dinâmicas em React.