# Eventos em React

## 📖 Visão Geral

Nesta seção, exploramos como adicionar **eventos** em React, abordando eventos sintéticos, funções anônimas em manipuladores de eventos, e como lidar com eventos no **`window`** ou **`document`** fora do controle do React. Através de exemplos práticos, vimos como React facilita o gerenciamento de eventos enquanto segue as especificações da W3C.

---

## 📝 O que Aprendemos

### **Eventos Sintéticos em React**

Os **eventos sintéticos** são eventos criados pelo próprio React, mas que seguem as especificações da W3C e funcionam de maneira consistente nos diversos navegadores. Isso significa que o React fornece uma camada de abstração para os eventos, que podem ser usados de maneira semelhante aos eventos nativos do DOM, mas com algumas melhorias e otimizações.

#### Exemplo de evento sintético (`onClick`):
```jsx
const App = () => {
  function handleClick(event) {
    alert('Comprou: ' + event.target.innerText);
  }

  return (
    <div>
      <button onClick={handleClick}>Camisa</button>
      <button onClick={handleClick}>Bermuda</button>
    </div>
  );
};
```

- No exemplo acima, a função `handleClick` é acionada sempre que um dos botões é clicado.
- **`event.target.innerText`**: Acessa o texto dentro do botão clicado, que é exibido no alerta.

### **Funções Anônimas em Eventos**

Em React, também é possível **executar uma função anônima** diretamente dentro do manipulador de eventos, sem a necessidade de criar uma função separada.

#### Exemplo de função anônima:
```jsx
const App = () => {
  return (
    <button onClick={({ target }) => target.classList.toggle('ativo')}>
      Ativar
    </button>
  );
};
```

- **Explicação**: A função anônima é executada sempre que o botão é clicado, e ela altera a classe do botão, ativando ou desativando o estilo `ativo`.

**Nota**: Guardar o estado do DOM diretamente dessa maneira não é o ideal. Em casos mais avançados, veremos como gerenciar o estado de forma mais eficiente utilizando **Hooks**.

---

### **Eventos no `window` ou `document`**

Quando precisamos adicionar eventos fora do controle do React, como no objeto global `window` ou `document`, devemos usar a API do JavaScript tradicional, especificamente o **`addEventListener`**. Em React, esse tipo de evento deve ser gerenciado dentro de um **`hook useEffect`** para garantir que ele seja corretamente limpo quando o componente for desmontado.

#### Exemplo de evento no `window` (scroll):
```jsx
const App = () => {
  function handleScroll(event) {
    console.log(event);
  }

  // Adicionando o evento no `window`
  window.addEventListener('scroll', handleScroll);

  return <div style={{ height: '200vw' }}>Div</div>;
};
```

- Nesse exemplo, o evento de `scroll` é adicionado diretamente ao objeto `window`, e sempre que a página é rolada, a função `handleScroll` é chamada, imprimindo o evento no console.

#### **Importante**: Para garantir que o evento seja removido corretamente quando o componente for desmontado, devemos usar o **hook `useEffect`**.

---

### **Limpeza de Eventos com `useEffect`**
Quando adicionamos eventos fora do React, como em `window` ou `document`, é importante remover esses eventos quando o componente for desmontado. Isso é feito utilizando o **`useEffect`** com a função de limpeza (return).

#### Exemplo de como remover o evento com `useEffect`:
```jsx
import { useEffect } from 'react';

const App = () => {
  function handleScroll(event) {
    console.log(event);
  }

  useEffect(() => {
    // Adiciona o evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Função de limpeza para remover o evento
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // O array vazio garante que o evento seja adicionado apenas uma vez

  return <div style={{ height: '200vw' }}>Div</div>;
};
```

- O **`useEffect`** é usado para adicionar o evento `scroll` no `window` quando o componente é montado e removê-lo quando o componente for desmontado, garantindo que não haja **leaks** de memória ou eventos desnecessários.

---

## 🌟 Destaques

1. **Eventos Sintéticos**:
   - React utiliza eventos sintéticos para garantir que os eventos funcionem de maneira consistente entre navegadores, enquanto segue as especificações da W3C.

2. **Funções Anônimas em Eventos**:
   - É possível passar uma função anônima diretamente em manipuladores de eventos, mas não é recomendado para manipulação de estados no DOM.

3. **Eventos no `window` e `document`**:
   - Para lidar com eventos fora do React, usamos `addEventListener` diretamente, mas devemos garantir a remoção do evento com **`useEffect`**.

---

## 🚀 Conclusão

Com os eventos em React, temos uma forma eficiente e padronizada de interagir com a interface do usuário. A utilização de **eventos sintéticos** simplifica o gerenciamento, e a combinação com **Hooks** como `useEffect` permite que eventos externos, como os no `window`, sejam gerenciados corretamente, garantindo que o comportamento do aplicativo seja sempre consistente e livre de problemas de performance.