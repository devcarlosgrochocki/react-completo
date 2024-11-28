# 0207 JSX Arrays - Organizando Produtos

## 📖 Visão Geral

Neste exercício, foi demonstrado como organizar e filtrar uma lista de produtos no React usando **JSX arrays**. O código apresentado filtra os produtos cujo preço é superior a R$ 1500 e exibe informações sobre esses produtos, incluindo os preços e as cores disponíveis, utilizando o método `.map()` do JavaScript.

---

## 📝 O que Aprendemos

### **Organização de Produtos**
- **Lista de Produtos**: A lista de produtos é representada por um array de objetos, onde cada objeto contém informações sobre o produto, como nome, preço e cores.

#### Exemplo de produtos:
```javascript
const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];
```

### **Filtragem de Produtos**
- Usamos o método `.filter()` para exibir apenas os produtos cujo preço seja superior a R$ 1500.

#### Código de filtragem:
```javascript
produtos
  .filter((produto) => Number(produto.preco.replace('R$ ', '')) > 1500)
  .map((produto) => (
    // Renderização dos produtos filtrados
  ));
```

- O `.replace('R$ ', '')` foi usado para remover o símbolo de "R$" e tornar o valor do preço um número, o que permite a comparação.

---

### **Renderizando Produtos**
- Para cada produto filtrado, o `.map()` é usado para iterar e renderizar as informações do produto, incluindo seu nome, preço e cores.

#### Código de renderização:
```javascript
{produto.cores.map((cor) => (
  <li key={cor} style={{ backgroundColor: cor, color: 'white' }}>
    {cor}
  </li>
))}
```

- Cada **cor** do produto é renderizada dentro de um **`<li>`**, e a cor de fundo do **`<li>`** é definida pelo valor da cor.

---

### **Estrutura do Componente**
- O componente **`App`** retorna uma **`section`** contendo uma lista de produtos filtrados e renderizados.

#### Código completo do componente:
```jsx
const App = () => {
  return (
    <section>
      {produtos
        .filter((produto) => Number(produto.preco.replace('R$ ', '')) > 1500)
        .map((produto) => (
          <div key={produto.id}>
            <h1>{produto.nome}</h1>
            <p>Preço: {produto.preco}</p>
            <ul>
              {produto.cores.map((cor) => (
                <li key={cor} style={{ backgroundColor: cor, color: 'white' }}>
                  {cor}
                </li>
              ))}
            </ul>
          </div>
        ))}
    </section>
  );
};
```

---

### **Renderizando o Componente**
- O código que renderiza o componente `App` na página HTML usa o método `createRoot()` do React 18, que é responsável por montar o componente na DOM.

#### Código de renderização:
```javascript
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(<App />);
```

---

## 🌟 Destaques

1. **Filtragem de Produtos**:
   - O uso de `.filter()` permite exibir apenas os produtos que atendem a uma condição específica, como o preço.

2. **Iteração com `.map()`**:
   - Usamos `.map()` para iterar sobre os produtos e as cores de cada produto, facilitando a renderização de listas dinâmicas.

3. **Estilos Dinâmicos**:
   - As cores dos produtos são aplicadas dinamicamente no estilo de cada item da lista usando o atributo `style`.

---

## 🚀 Conclusão

Neste exercício, aprendemos como filtrar e renderizar uma lista de produtos usando **JSX arrays**. Utilizamos métodos JavaScript como `.filter()` e `.map()` para organizar e exibir os dados de forma eficiente. A aplicação de estilos dinâmicos, como a alteração da cor de fundo com base nas cores dos produtos, é uma prática comum ao trabalhar com listas dinâmicas em React.