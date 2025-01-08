### Documentação do Projeto: **0503 Styled Components**

---

## 📖 Visão Geral

O **Styled Components** é uma biblioteca para estilização em React que permite escrever CSS diretamente no JavaScript. Cada componente criado com **Styled Components** possui um estilo único e evita conflitos de classes, além de oferecer suporte a lógica condicional e uso de props para personalização dinâmica.

---

## 🎯 Objetivo do Projeto

1. Implementar estilização de componentes React utilizando **Styled Components**.
2. Criar componentes reutilizáveis com estilos personalizados.
3. Utilizar **props** e **estado** para modificar dinamicamente os estilos.
4. Aplicar pseudo-classes como `:hover` e elementos como `::before` e `::after`.
5. Compreender a transpilação de **template strings** no Styled Components.

---

## 📄 Estrutura do Projeto

**Arquitetura:**
- **Styled Components:** Utiliza funções associadas às tags HTML (`styled.div`, `styled.button`, etc.).
- **Template String Transpilation:** Permite usar lógica e interpolação em estilos.
- **Props e Estados:** Integração de lógica condicional diretamente no CSS.

**Componentes Criados:**
1. **Produtos.jsx:** Demonstração de um layout com vários componentes estilizados.
2. **Preco.jsx:** Exemplo de personalização de estilos via props.
3. **Button.jsx:** Estilização condicional com base no estado.

---

## 🔧 Código Principal

### **Exemplo 1: Uso Básico**

Criação de um componente estilizado com **Styled Components**.

```jsx
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  color: tomato;
`;

const App = () => {
  return (
    <div>
      <Title>Título principal</Title>
    </div>
  );
};

export default App;
```

---

### **Exemplo 2: Layout com Styled Components**

Estrutura de layout utilizando componentes estilizados.

```jsx
import styled from 'styled-components';

const ProdutosContainer = styled.div`
  display: flex;
`;

const Produto = styled.div`
  flex: 1;
`;

const Titulo = styled.h1`
  font-size: 2em;
`;

const Comprar = styled.button`
  font-size: 1.5em;
  background: transparent;
  padding: 0.5rem;
  border-radius: 4px;
  border: 2px solid;
  cursor: pointer;
`;

const Preco = styled.span`
  background: #53d956;
  color: white;
  display: inline-block;
  border-radius: 5px;
  padding: 0.5rem;
`;

const App = () => {
  return (
    <ProdutosContainer>
      <Produto>
        <Titulo>
          Notebook <Preco>R$ 1999</Preco>
        </Titulo>
        <Comprar>Comprar</Comprar>
      </Produto>
      <Produto>
        <Titulo>
          Smartphone <Preco>R$ 2999</Preco>
        </Titulo>
        <Comprar>Comprar</Comprar>
      </Produto>
    </ProdutosContainer>
  );
};

export default App;
```

---

### **Exemplo 3: Personalização com Props**

Alteração de estilos com base em props.

```jsx
const Preco = styled.p`
  background: ${(props) => props.cor};
  color: white;
  display: inline-block;
  border-radius: 5px;
  padding: 0.5rem;
`;

const App = () => {
  return (
    <div>
      <Preco cor="#53d956">R$ 2999</Preco>
      <Preco cor="#84e">R$ 1999</Preco>
    </div>
  );
};

export default App;
```

---

### **Exemplo 4: Estilização Condicional com Estado**

Uso de estado para alterar estilos dinamicamente.

```jsx
const Button = styled.button`
  background: ${({ ativo }) => (ativo ? '#53d956' : '#000')};
  border: 1px solid black;
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  color: white;
  cursor: pointer;
`;

const App = () => {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <Button ativo={ativo} onClick={() => setAtivo(!ativo)}>
      Ativar
    </Button>
  );
};

export default App;
```

---

### **Exemplo 5: Pseudo-classes e Elementos**

Uso de `:hover` e `::before`.

```jsx
const Comprar = styled.button`
  font-size: 1.5em;
  background: transparent;
  padding: 0.5rem;
  border-radius: 4px;
  border: 2px solid black;
  cursor: pointer;
  position: relative;

  &:hover {
    background: black;
    color: white;
  }

  &::before {
    display: block;
    content: '';
    width: 16px;
    height: 16px;
    border-radius: 50%;
    position: absolute;
    background: #53d956;
    top: -8px;
    right: -8px;
  }
`;
```

---

## 🧠 O que Aprendi

1. **Styled Components:**
   - Permite encapsular estilos diretamente no JavaScript, eliminando conflitos de classes.

2. **Template Strings:**
   - Utiliza interpolação para lógica condicional e reutilização de valores no CSS.

3. **Props e Estado:**
   - Personaliza estilos dinamicamente com base em props ou estado do componente.

4. **Pseudo-classes:**
   - Suporte total a pseudo-classes e pseudo-elementos para interatividade avançada.

---

## 🌟 Destaques

1. **Modularidade:**
   - Cada componente possui seus estilos únicos e encapsulados.

2. **Flexibilidade:**
   - Adaptação fácil para diferentes contextos com uso de props e estado.

3. **Compatibilidade:**
   - Total suporte a React e ferramentas modernas como **Vite**.

---

## 🌐 Próximos Passos

1. Experimentar animações e transições com Styled Components.
2. Integrar com **ThemeProvider** para criar temas dinâmicos.
3. Explorar bibliotecas complementares como **Polished** para manipulação de cores.