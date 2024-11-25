# 0204 Ferramentas de Automação

## 📖 Visão Geral

Nesta aula, aprendemos a configurar um ambiente React moderno com ferramentas de automação. O objetivo foi abandonar o uso de links CDN e implementar um fluxo de trabalho mais robusto, utilizando o **npm**, **ESBuild**, e outras ferramentas essenciais. 

---

## 📝 O que Aprendemos

### **Por que usar Ferramentas de Automação?**
- Garantem que as bibliotecas e dependências estejam sempre disponíveis e atualizadas.
- Permitem uma organização melhor do código, com separação em arquivos e pastas.
- Realizam a transpilação de código JSX e ES6+ para JavaScript compatível com navegadores mais antigos.
- Agregam funcionalidades como **live reload**, **bundling**, e **minificação**.

---

### **Configuração Básica**
1. **Iniciar um Projeto com NPM**
   - Criamos um pacote npm na pasta do projeto:
     ```bash
     npm init -y
     ```

2. **Instalar Dependências**
   - Instalamos as bibliotecas necessárias:
     ```bash
     npm install react react-dom esbuild
     ```

3. **Configuração do Bundler (ESBuild)**
   - Configuramos os scripts no `package.json`:
     ```json
     "scripts": {
       "start": "esbuild --bundle src/main.jsx --outfile=main.js --servedir=./ --watch",
       "build": "esbuild --bundle src/main.jsx --outfile=main.js"
     }
     ```

     **Descrição**:
     - `--bundle`: Gera um bundle único a partir do código fonte.
     - `--outfile`: Define o arquivo de saída.
     - `--watch`: Observa mudanças nos arquivos para recarregar automaticamente.
     - `--servedir`: Cria um servidor para desenvolvimento.

---

### **Estrutura do Projeto**
O projeto está organizado como segue:
```
0204 Ferramentas de Automação/
├── node_modules/
├── src/
│   ├── App.jsx
│   ├── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── .gitignore
```

#### Arquivos Principais:
- **`src/App.jsx`**:
  Define o componente principal do aplicativo:
  ```jsx
  import React from 'react';

  const App = () => {
    return (
      <a href="https://www.google.com" target="_blank">
        Teste
      </a>
    );
  };

  export default App;
  ```

- **`src/main.jsx`**:
  Renderiza o componente principal na raiz DOM:
  ```jsx
  import ReactDOM from 'react-dom/client';
  import React from 'react';
  import App from './App';

  ReactDOM.createRoot(document.getElementById('root')).render(<App />);
  ```

- **`index.html`**:
  Contém o ponto de entrada do aplicativo:
  ```html
  <div id="root"></div>
  <script src="./main.js"></script>
  <script>
    new EventSource('/esbuild').addEventListener('change', () =>
      location.reload(),
    );
  </script>
  ```

---

### **Ferramentas Utilizadas**
1. **Bundler (ESBuild)**:
   - Realiza o agrupamento e a transpilação do código.
   - Gera o arquivo final otimizado para produção.

2. **Live Reload**:
   - Atualiza automaticamente o navegador ao detectar mudanças no código:
     ```html
     <script>
       new EventSource('/esbuild').addEventListener('change', () =>
         location.reload(),
       );
     </script>
     ```

3. **React e React-DOM**:
   - Instalados localmente, eliminando dependências de links CDN.

---

## 🌟 Destaques

- **Automação Simplificada**:
  - O ESBuild integra tarefas como bundling, transpilação e live reload.
  
- **Organização Modular**:
  - Separação de componentes em arquivos individuais melhora a legibilidade e manutenção.

- **Scripts de Desenvolvimento e Build**:
  - Desenvolvimento: `npm start`
  - Build para produção: `npm run build`

---

## 🚀 Conclusão

A configuração de ferramentas de automação é essencial para projetos React modernos. Elas otimizam o desenvolvimento, garantem desempenho e organizam o código para futuras expansões. Essa estrutura é a base para aplicações escaláveis e de alta qualidade.