**Documentação do Projeto: 0306 Custom Hooks**  

---

### 📖 Visão Geral  
Neste projeto, desenvolvemos dois hooks personalizados: **useLocalStorage** e **useFetch**. Esses hooks foram criados para simplificar funcionalidades recorrentes, como gerenciamento de dados no `localStorage` e requisições a APIs, além de demonstrar como criar hooks reutilizáveis em React.  

### 🎯 Objetivo do Projeto  
1. Aprender a criar hooks personalizados (`Custom Hooks`) para evitar repetição de código.  
2. Implementar o **useLocalStorage** para armazenar estados no `localStorage`.  
3. Desenvolver o **useFetch** para realizar requisições HTTP de forma eficiente e segura.  
4. Compreender a importância do `useCallback` em hooks que utilizam funções assíncronas.  
5. Demonstrar cenários reais de uso para esses hooks.  

---

### 📄 Estrutura do Projeto  

**Arquitetura:**  
- Cada hook foi criado em arquivos específicos para modularidade.  
- O **useLocalStorage** foi usado para gerenciar preferências do usuário.  
- O **useFetch** foi implementado para consumir dados de uma API.  

**Componentes Criados:**  
1. **App.jsx:** Exemplo prático que utiliza ambos os hooks.  
2. **useLocalStorage.js:** Hook personalizado para persistir estados no `localStorage`.  
3. **useFetch.js:** Hook personalizado para lidar com requisições HTTP.  

---

### 🔧 Principais Componentes  

#### **useLocalStorage.js**  
Hook que gerencia estados e sincroniza automaticamente com o `localStorage`.

```jsx
const useLocalStorage = (key, inicial) => {
  const [state, setState] = React.useState(() => {
    const local = window.localStorage.getItem(key);
    return local ? local : inicial;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
};

export default useLocalStorage;
```

---

#### **useFetch.js**  
Hook que simplifica requisições HTTP e evita re-renderizações desnecessárias.

```jsx
import React from "react";

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      if (response.ok === false) throw new Error(json.message);
    } catch (err) {
      json = null;
      setError(err.message);
    } finally {
      setData(json);
      setLoading(false);
      return { response, json };
    }
  }, []);

  return { data, loading, error, request };
};

export default useFetch;
```

---

#### **App.jsx**  
Componente principal que demonstra a aplicação prática dos hooks criados.

```jsx
import React from 'react';
import useLocalStorage from './useLocalStorage';
import useFetch from './useFetch';

const App = () => {
  const [produto, setProduto] = useLocalStorage('produto', '');
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    request('https://ranekapi.origamid.dev/json/api/produto/notebook');
  }, [request]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <div>
      <p>Preferido: {produto}</p>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>

      {error && <p>{error}</p>}
      {loading && <p>Carregando...</p>}
      {data && <div>{data.nome}</div>}
    </div>
  );
};

export default App;
```

---

### 🧠 O que Aprendi  

#### **useLocalStorage:**  
- Permite gerenciar estados e sincronizá-los com o `localStorage`.  
- Garante persistência de dados entre sessões.  
- Necessita de atenção ao tipo dos dados, pois o `localStorage` só armazena strings.  

#### **useFetch:**  
- Simplifica requisições HTTP, encapsulando lógica de fetch, loading e erro.  
- Utiliza `useCallback` para evitar loops infinitos em re-renderizações.  
- Boa prática para evitar duplicação de código em projetos maiores.  

---

### 🌟 Destaques  

1. **Customização e Reutilização:**  
   - Hooks reutilizáveis aumentam a modularidade e reduzem a complexidade.  

2. **Performance:**  
   - O uso do `useCallback` garante que funções assíncronas não sejam recriadas a cada renderização.  

3. **Persistência de Dados:**  
   - `useLocalStorage` é útil para armazenar preferências do usuário.  

---

### 🌐 Próximos Passos  

1. Adicionar validação para tipos de dados armazenados no **useLocalStorage**.  
2. Implementar caching no **useFetch** para evitar chamadas redundantes.  
3. Criar um hook personalizado que combine os dois conceitos para gerenciar estados persistentes e dinâmicos.  