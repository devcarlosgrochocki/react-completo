### Documentação do Projeto: **0502 CSS Modules**

---

## 📖 Visão Geral

Nesta aula, exploramos o uso de **CSS Modules** em React para estilização de componentes. Os **CSS Modules** garantem que classes CSS sejam únicas no escopo do componente, evitando conflitos comuns em projetos maiores e promovendo um estilo mais modular e escalável.

---

## 🎯 Objetivo do Projeto

1. Utilizar **CSS Modules** para estilização local de componentes React.
2. Garantir nomes de classes únicos e evitar conflitos de estilo.
3. Aprender boas práticas como uso de **camelCase** e evitar funcionalidades extras de CSS Modules.
4. Implementar variáveis e composição de estilos com o CSS Modules.

---

## 📄 Estrutura do Projeto

**Arquitetura:**
- **CSS Modules:** Arquivos `.module.css` para escopo local dos estilos.
- **Importação como Objeto:** Classes CSS são importadas como propriedades de um objeto.
- **Boas Práticas:** Uso de **camelCase** para classes e variáveis globais em contextos específicos.

**Componentes Criados:**
1. **Produto.jsx:** Demonstração prática do uso de **CSS Modules**.

---

## 🔧 Código Principal

### **Exemplo 1: Uso Básico de CSS Modules**

Estilização local utilizando o nome de classes gerado pelo **CSS Modules**.

**Produto.jsx**

```jsx
import styles from './Produto.module.css';

const Produto = () => {
  return (
    <div>
      <h1 className={styles.titulo}>Notebook</h1>
      <p className={styles.preco}>R$ 12000</p>
      <button className={styles.comprar}>Comprar</button>
    </div>
  );
};

export default Produto;
```

**Produto.module.css**

```css
.titulo,
.preco {
  color: #43c;
}

.preco {
  font-weight: bold;
}

.comprar {
  transform: rotate(90deg) translateY(-100px);
}
```

---

### **Exemplo 2: Uso de camelCase para Classes**

É recomendável o uso de **camelCase** para garantir compatibilidade com objetos JavaScript.

**Produto.module.css**

```css
.tituloPrincipal {
  color: blue;
}
```

**Produto.jsx**

```jsx
<h1 className={styles.tituloPrincipal}>Notebook</h1>
```

---

### **Exemplo 3: Funcionalidades Extras**

**Composição de Estilos**

```css
.titulo {
  color: #43c;
}

.preco {
  composes: titulo;
  font-weight: bold;
}
```

**Uso de Variáveis CSS**

```css
@value width: 900px;

:global .container {
  max-width: width;
}
```

---

## 🧠 O que Aprendi

1. **CSS Modules:**
   - Promovem modularidade ao escopar estilos por componente.
   - Garantem que classes CSS tenham nomes únicos, evitando conflitos.

2. **Importação como Objeto:**
   - Classes CSS são acessadas como propriedades do objeto importado.

3. **Boas Práticas:**
   - Usar **camelCase** para compatibilidade com JavaScript.
   - Evitar funcionalidades extras como `composes` para maior compatibilidade com IDEs e ESLint.

4. **Estilos Locais e Globais:**
   - Utilizar o escopo local para componentes e o escopo global apenas quando necessário.

---

## 🌟 Destaques

1. **Escopo Local de Estilos:**
   - Permite a reutilização de classes sem medo de conflitos.

2. **Modularidade:**
   - Facilita o desenvolvimento de componentes isolados e escaláveis.

3. **Compatibilidade:**
   - Integração direta com **Vite** e suporte nativo para projetos React.

---

## 🌐 Próximos Passos

1. Explorar o uso de **CSS-in-JS** para maior controle de estilos dinâmicos.
2. Adotar **variáveis CSS** para criar temas reutilizáveis em projetos maiores.
3. Combinar **CSS Modules** com bibliotecas como **TailwindCSS** para estilos globais e consistentes.