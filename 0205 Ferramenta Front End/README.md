# 0205 Ferramenta Front End

## 📖 Visão Geral

Nesta aula, aprendemos a configurar o ambiente de desenvolvimento com **Vite**, uma ferramenta moderna e otimizada para criação de aplicativos com React. Também abordamos a configuração do ESLint para manter o código padronizado e identificar possíveis erros.

---

## 📝 O que Aprendemos

### **Por que Vite?**
- **Vite** é uma ferramenta de última geração que:
  - Oferece velocidade e eficiência no desenvolvimento.
  - Substitui ferramentas como o Create React App, que é mais lenta e instala dependências desnecessárias.
  - Inclui suporte nativo para **módulos ES6**, **CSS**, e outras funcionalidades modernas.

#### Comandos de Configuração:
1. Criar um novo projeto com Vite:
   ```bash
   npm create vite@latest .
   ```

2. Instalar as dependências:
   ```bash
   npm install
   ```

3. Iniciar o ambiente de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Gerar a build final:
   ```bash
   npm run build
   ```

---

### **Estrutura do Projeto**
Após a configuração com Vite, o projeto segue a estrutura:
```
0205 Ferramenta Front End/
├── node_modules/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
```

#### Arquivos Essenciais:
1. **`index.html`**:
   - Configura o ponto de entrada para o React:
   ```html
   <div id="root"></div>
   <script type="module" src="/src/main.jsx"></script>
   ```

2. **`src/main.jsx`**:
   - Renderiza o aplicativo:
   ```jsx
   import ReactDOM from 'react-dom/client';
   import App from './App';

   ReactDOM.createRoot(document.getElementById('root')).render(<App />);
   ```

3. **`src/App.jsx`**:
   - Define o componente principal:
   ```jsx
   import React from 'react';

   const App = () => {
     return <div>App React</div>;
   };

   export default App;
   ```

---

### **Configuração do ESLint**
O **ESLint** foi configurado para:
- Detectar problemas comuns em código React.
- Manter padrões consistentes de escrita.

#### Configuração:
```javascript
module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'no-unsafe-finally': 'off',
    'no-unused-vars': 'off',
    'react/jsx-key': 'off',
  },
};
```

---

## 🌟 Destaques

1. **Vite como Ferramenta Principal**:
   - Substitui o Create React App, tornando o desenvolvimento mais rápido e eficiente.

2. **Organização Modular**:
   - Código dividido em arquivos JSX para facilitar o gerenciamento e a escalabilidade.

3. **ESLint Configurado**:
   - Auxilia na manutenção de um código limpo e no uso adequado de padrões React.

4. **Flexibilidade de Configuração**:
   - Possibilidade de adicionar estilos no arquivo `public/style.css`.
   - Configuração do modo estrito do React para identificar possíveis problemas.

---

## 🚀 Conclusão

Com Vite e ESLint configurados, o ambiente de desenvolvimento está preparado para criar aplicações modernas em React. Essa base otimizada permite maior eficiência, melhor organização e menor risco de erros ao longo do desenvolvimento.