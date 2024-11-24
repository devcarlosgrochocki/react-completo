# 0203 React e JavaScript

## 📖 Visão Geral

Nesta aula, exploramos as diferenças entre criar uma aplicação utilizando JavaScript puro e React. Comparamos a complexidade do código, as vantagens de usar estados reativos em React e como o framework reduz a necessidade de manipulação direta do DOM. A aplicação criada foi um simples carrinho de compras, que atualiza o total e o preço a cada clique no botão.

---

## 📝 O que Aprendemos

### **JavaScript Puro**
- Em JavaScript puro, é necessário:
  - Selecionar manualmente os elementos DOM com `getElementById`.
  - Gerenciar eventos com `addEventListener`.
  - Atualizar o DOM diretamente utilizando propriedades como `innerText`.

#### Exemplo:
```javascript
const button = document.getElementById('button');
const total = document.getElementById('total');
const preco = document.getElementById('preco');

let contador = 1;

function atualizarValores(contador) {
  total.innerText = contador;
  preco.innerText = contador * 250;
}

atualizarValores(contador);

button.addEventListener('click', () => {
  contador++;
  atualizarValores(contador);
});
```

**Desvantagens:**
- Alto acoplamento entre lógica e manipulação do DOM.
- Maior probabilidade de erros em aplicações maiores.
- Dificuldade em manter o estado sincronizado em diferentes partes da aplicação.

---

### **React**
- Em React, utilizamos **componentes funcionais** e o Hook `useState` para gerenciar o estado da aplicação.
- A lógica e a interface estão no mesmo local, tornando o código mais organizado e fácil de manter.
- React atualiza automaticamente o DOM ao detectar mudanças no estado.

#### Exemplo:
```jsx
const Comprar = () => {
  const [contador, setContador] = React.useState(1);

  return (
    <div>
      <p>Total: {contador}</p>
      <p>Preço: R$ {contador * 250}</p>
      <button onClick={() => setContador(contador + 1)}>Comprar</button>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('app-react')).render(<Comprar />);
```

**Vantagens:**
- Redução significativa da quantidade de código necessário.
- Sincronização automática do estado em toda a aplicação.
- Componentes reutilizáveis e de fácil manutenção.

---

## 🌟 Destaques

1. **Comparação Direta**:
   - **JavaScript puro** exige manipulação manual do DOM, o que pode ser propenso a erros e verboso.
   - **React** abstrai a complexidade, permitindo foco na lógica da aplicação.

2. **Eficiência em React**:
   - O uso de Hooks como `useState` simplifica o gerenciamento de estado.
   - O DOM é atualizado apenas onde necessário, otimizando o desempenho.

3. **Código Modular e Escalável**:
   - Componentes em React são reutilizáveis, facilitando o crescimento da aplicação.

---

## 🚀 Conclusão

Essa aula destacou como React simplifica o desenvolvimento de interfaces dinâmicas ao eliminar a necessidade de manipulação manual do DOM. Em aplicações mais complexas, como carrinhos de compras em e-commerces, React é a escolha ideal para garantir código limpo, escalável e eficiente.