### Documentação do Projeto: **0304 useMemo e useCallback**

---

## 📖 Visão Geral

Neste projeto, exploramos os hooks **`useMemo`** e **`useCallback`** do React para otimizar operações e estabilizar referências de funções. O `useMemo` é usado para memorizar valores computados, enquanto o `useCallback` memoiza funções para evitar sua recriação desnecessária durante re-renderizações.

---

## 🎯 Objetivo do Projeto

- **Compreender e aplicar o `useMemo` para otimizar cálculos pesados.**
- **Entender o uso do `useCallback` para estabilizar funções.**
- **Identificar quando esses hooks são necessários em um projeto.**
- **Medir o desempenho de operações com o `performance.now`.**

---

## 📄 Estrutura do Projeto

1. **Arquitetura**:
   - Componentes organizados modularmente, cada um abordando um caso de uso específico.
   - Utilização prática de `useMemo` e `useCallback` em contextos reais.

2. **Componentes Criados**:
   - **App.jsx**: Componente principal que demonstra os conceitos.
   - **PerformanceTest.jsx**: Exemplo de otimização com `useMemo`.
   - **StableCallback.jsx**: Demonstra a estabilização de funções com `useCallback`.

---

## 🔧 Principais Componentes

### **App.jsx**

Componente principal que organiza os exemplos práticos.

```jsx
import React from 'react';
import PerformanceTest from './PerformanceTest';
import StableCallback from './StableCallback';

const App = () => {
  return (
    <div>
      <h1>Explorando useMemo e useCallback</h1>
      <PerformanceTest />
      <StableCallback />
    </div>
  );
};

export default App;
```

---

### **PerformanceTest.jsx**

Demonstra como o `useMemo` pode otimizar operações pesadas.

```jsx
import React, { useMemo, useState } from 'react';

const operacaoLenta = () => {
  let resultado;
  for (let i = 0; i < 100000000; i++) {
    resultado = i + i / 10;
  }
  return resultado;
};

const PerformanceTest = () => {
  const [contar, setContar] = useState(0);

  const t1 = performance.now();
  const valorMemo = useMemo(() => operacaoLenta(), []);
  console.log(`useMemo: ${performance.now() - t1}ms`);

  const t2 = performance.now();
  const valorNormal = operacaoLenta();
  console.log(`Normal: ${performance.now() - t2}ms`);

  return (
    <div>
      <h2>Teste de Desempenho</h2>
      <p>Valor calculado com `useMemo`: {valorMemo}</p>
      <button onClick={() => setContar((prev) => prev + 1)}>Contar: {contar}</button>
    </div>
  );
};

export default PerformanceTest;
```

---

### **StableCallback.jsx**

Exemplo que mostra como `useCallback` estabiliza funções para evitar sua recriação.

```jsx
import React, { useCallback, useState } from 'react';

const StableCallback = () => {
  const [contar, setContar] = useState(0);

  const handleClickNormal = () => {
    console.log('Função normal executada.');
  };

  const handleClickMemo = useCallback(() => {
    console.log('Função memoizada executada.');
  }, []);

  return (
    <div>
      <h2>Estabilização de Funções</h2>
      <button onClick={handleClickNormal}>Função Normal</button>
      <button onClick={handleClickMemo}>Função com useCallback</button>
      <button onClick={() => setContar((prev) => prev + 1)}>Atualizar Contador: {contar}</button>
    </div>
  );
};

export default StableCallback;
```

---

## 🧠 O que Aprendi

1. **`useMemo`**:
   - Memoriza o resultado de operações pesadas.
   - Reduz cálculos desnecessários ao reutilizar valores já computados.
   - Útil em cálculos complexos ou em componentes que recebem muitas re-renderizações.

2. **`useCallback`**:
   - Estabiliza a referência de funções entre renderizações.
   - Evita que componentes filhos sejam re-renderizados desnecessariamente quando recebem funções como props.

3. **`performance.now()`**:
   - Ferramenta precisa para medir o tempo de execução de operações.
   - Ideal para identificar gargalos de desempenho no código.

4. **Cuidados ao usar**:
   - Ambos os hooks devem ser usados apenas quando necessário para evitar complexidade desnecessária.
   - Uso excessivo pode prejudicar a legibilidade do código sem benefícios reais.

---

## 🌟 Destaques

1. **`useMemo` na otimização de desempenho**:
   - Redução significativa de cálculos em operações pesadas.

2. **`useCallback` para consistência de referência**:
   - Evita re-renderizações desnecessárias de componentes filhos.

3. **Uso prático de `performance.now`**:
   - Medição precisa para comparar o impacto de otimizações no código.

---

## 🌐 Próximos Passos

- Expandir os exemplos para incluir memoização com `React.memo`.
- Explorar cenários em que `useCallback` e `useMemo` podem ser combinados.
- Implementar um projeto completo que demonstra benefícios reais desses hooks em uma aplicação React.