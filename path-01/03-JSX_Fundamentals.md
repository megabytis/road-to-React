# JSX Fundamentals

## ⚛️ What is JSX?

**JSX (JavaScript XML)** is a syntax extension for JavaScript that lets you write HTML-like code directly in your JavaScript files.

**Key Concept:** JSX is syntactic sugar that makes React code more readable and writable.

### The Magic Behind JSX

```js
// ✅ With JSX (Easy to read)
const element = <h1>Hello, World!</h1>;

// ❌ Without JSX (Verbose)
const element = React.createElement("h1", null, "Hello, World!");
```

**What JSX does:**

- Converts HTML-like syntax into `React.createElement()` calls
- Makes component creation intuitive and readable
- Allows mixing JavaScript logic with markup
- Provides better error messages and warnings

---

## 🚀 Superpowers of JSX

### 1. **Logic + Markup in One Place**

```javascript
function Greeting({ user, isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back, {user}!</h1> : <h1>Please sign in</h1>}
    </div>
  );
}
```

### 2. **JavaScript Expressions Embedded**

```javascript
function ShoppingCart({ items }) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Cart Total: ${total}</h2>
      <p>Items: {items.length}</p>
      {items.length === 0 && <p>Your cart is empty</p>}
    </div>
  );
}
```

### 3. **Dynamic Content Creation**

```javascript
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className={todo.completed ? "done" : "pending"}>
          {todo.text}
        </li>
      ))}
    </ul>
  );
}
```

### 4. **Component Composition**

```javascript
function App() {
  return (
    <div>
      <Header />
      <MainContent>
        <Sidebar />
        <ArticleList />
      </MainContent>
      <Footer />
    </div>
  );
}
```

**JSX Advantages:**

- 🎯 **Intuitive** - Looks like HTML, behaves like JavaScript
- 🛠️ **Developer Experience** - Better debugging and error messages
- 🧹 **Maintainable** - Logic and presentation in one place
- 🔧 **Tooling Support** - Excellent IDE support and syntax highlighting

---

## 🏷️ Script Tag `type` Attribute

The `type` attribute tells the browser how to interpret and execute the script content.

### Common Script Types

| Type              | Purpose                        | Example                           |
| ----------------- | ------------------------------ | --------------------------------- |
| `text/javascript` | Standard JavaScript (default)  | `<script type="text/javascript">` |
| `module`          | ES6 modules with import/export | `<script type="module">`          |
| `text/babel`      | Babel transpilation required   | `<script type="text/babel">`      |
| `text/typescript` | TypeScript code                | `<script type="text/typescript">` |
| `text/ecmascript` | ECMAScript standards compliant | `<script type="text/ecmascript">` |

### Practical Examples

**Standard JavaScript:**

```html
<script type="text/javascript">
  console.log("Hello World");
</script>
```

**ES6 Module:**

```html
<script type="module">
  import { Component } from "./component.js";
  const app = new Component();
</script>
```

**Babel Transpilation:**

```html
<script type="text/babel">
  const App = () => <h1>Hello React!</h1>;
  ReactDOM.render(<App />, document.getElementById("root"));
</script>
```

**Modern Best Practice:**

```html
<!-- ✅ Recommended for modern apps -->
<script type="module" src="./app.js"></script>
```

---

## 🔧 JSX Component Syntax Variations

Understanding the different ways to use components in JSX is crucial for React development.

### 1. `{TitleComponent}` - JavaScript Expression

**What it is:** Treats the component as a JavaScript variable/expression

```javascript
const TitleComponent = () => <h1>My Title</h1>;

function App() {
  const MyComponent = TitleComponent; // Assigning to variable

  return (
    <div>
      {TitleComponent} {/* ❌ This won't render the component */}
      {TitleComponent()} {/* ✅ This calls the function and renders */}
    </div>
  );
}
```

**When to use:** When you need to reference the component as a function or pass it as a prop.

### 2. `{<TitleComponent/>}` - Self-Closing Component

**What it is:** Renders a component that doesn't need children

```javascript
const TitleComponent = () => <h1>My Title</h1>;

function App() {
  return (
    <div>
      <TitleComponent /> {/* ✅ Renders the component */}
    </div>
  );
}
```

**When to use:**

- Component doesn't need children
- Cleaner, more concise syntax
- Most common usage pattern

### 3. `{<TitleComponent></TitleComponent>}` - Opening/Closing Tags

**What it is:** Component with explicit opening and closing tags, can contain children

```javascript
const TitleComponent = ({ children }) => (
  <div>
    <h1>My Title</h1>
    {children}
  </div>
);

function App() {
  return (
    <div>
      <TitleComponent>
        <p>This is child content</p>
        <button>Click me</button>
      </TitleComponent>
    </div>
  );
}
```

**When to use:**

- Component needs to wrap other elements
- Passing children components
- More explicit about component boundaries

---

## 📝 Practical Component Examples

### Example 1: Simple Component Usage

```javascript
// Component definition
const WelcomeMessage = ({ name }) => <h2>Welcome, {name}!</h2>;

// Usage variations
function App() {
  return (
    <div>
      {/* Self-closing - no children */}
      <WelcomeMessage name="Alice" />

      {/* With children */}
      <WelcomeMessage name="Bob">
        <p>Great to see you again!</p>
      </WelcomeMessage>
    </div>
  );
}
```

### Example 2: Container Components

```javascript
const Card = ({ title, children }) => (
  <div className="card">
    <h3>{title}</h3>
    <div className="card-content">{children}</div>
  </div>
);

function Dashboard() {
  return (
    <div>
      <Card title="User Stats">
        <p>Active users: 1,234</p>
        <p>New signups: 56</p>
      </Card>

      <Card title="Quick Actions">
        <button>Create Post</button>
        <button>View Analytics</button>
      </Card>
    </div>
  );
}
```

---

## 🎯 Key Takeaways

### JSX Rules to Remember:

1. **Single Parent Element:** JSX expressions must have one parent element

   ```javascript
   // ❌ Wrong
   return (
     <h1>Title</h1>
     <p>Paragraph</p>
   );

   // ✅ Correct
   return (
     <div>
       <h1>Title</h1>
       <p>Paragraph</p>
     </div>
   );
   ```

2. **JavaScript Expressions in Curly Braces:**

   ```javascript
   const name = "React";
   return <h1>Hello, {name}!</h1>; // ✅
   ```

3. **Attribute Names are camelCase:**

   ```javascript
   return <div className="container" onClick={handleClick}>; // ✅
   ```

4. **Self-Closing Tags Must Close:**
   ```javascript
   return <img src="image.jpg" />; // ✅
   return <input type="text" />; // ✅
   ```

### Component Syntax Quick Guide:

| Syntax                    | Use Case                       |
| ------------------------- | ------------------------------ |
| `{Component}`             | Reference as variable/function |
| `<Component />`           | Render without children        |
| `<Component></Component>` | Render with potential children |

---

_Master these JSX fundamentals to build powerful, maintainable React applications! JSX is the bridge between JavaScript logic and HTML structure that makes React development intuitive and powerful._
