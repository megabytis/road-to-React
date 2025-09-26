## 📝 Emmet

**What is Emmet?**
Emmet is a powerful toolkit that supercharges web development by allowing developers to write HTML and CSS faster through abbreviations.

**How it works:**

- Type short abbreviations that expand into full HTML/CSS code
- Uses intuitive syntax that most developers already know
- Dramatically speeds up coding workflow

**Example:**

```html
<!-- Type: div.container>ul>li*3 -->
<!-- Expands to: -->
<div class="container">
  <ul>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</div>
```

---

## 🔧 Library vs Framework

### React (Library) 🛠️

- **What it is:** A JavaScript library focused on building user interfaces
- **Your control:** You decide the application structure and call React's functions
- **Flexibility:** High - you choose how to organize everything
- **Analogy:** Like having individual tools (hammer, nails) to build your house however you want

### Next.js (Framework) 🏗️

- **What it is:** A structured framework built on top of React
- **Framework's control:** Provides pre-built structure with routing, rendering, and conventions
- **Flexibility:** Medium - work within the framework's guidelines
- **Extra features:** Server-side rendering, static site generation, built-in routing
- **Analogy:** Like having a house blueprint with rooms already planned - you decorate within the structure

**Key Takeaway:** React gives you tools, Next.js gives you tools + structure.

---

## 🌐 CDN (Content Delivery Network)

**What is a CDN?**
A network of geographically distributed servers that deliver web content quickly and efficiently.

**Why use CDN?**

- **Speed:** Content loads faster from servers closer to users
- **Reliability:** Multiple servers provide backup if one fails
- **Security:** Built-in protection against attacks
- **Efficiency:** Reduces load on your main server

**How it works:**
User in Tokyo → Gets content from Tokyo server (not New York server) → Faster loading

**Example of CDN React**

```js
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

- if we'll paste this CDN in our project then, our browser could be able to understand React codes!

---

## ⚛️ Why is React called "React"?

React gets its name from its core ability to **react to changes in data**.

**The concept:**

- When data changes, React automatically updates the user interface
- It "reacts" to state changes without manual DOM manipulation
- Created by Facebook as an open-source library
- Focuses on declarative, efficient UI building

---

## 🔗 CrossOrigin in Script Tags

**What is crossorigin?**
An attribute that controls how browsers handle requests for resources from different domains (CORS - Cross-Origin Resource Sharing).

**Syntax:**

```html
<script crossorigin="anonymous"></script>
<script crossorigin="use-credentials"></script>
```

**Why use it?**

- **Security:** Controls how resources are shared between domains
- **Safety:** Ensures it's safe to load scripts from other websites
- **CORS compliance:** Handles cross-domain requests properly

---

## 🔄 React vs ReactDOM

### React

- **Purpose:** Core library for building UI components
- **Contains:**
  - `React.createElement()` - Creates React elements
  - `React.Component` - Base class for components
  - `React.Children` - Utilities for working with children
- **Think of it as:** The blueprint and tools for building components

### ReactDOM

- **Purpose:** Connects React to the browser's DOM
- **Contains:**
  - `ReactDOM.render()` - Renders components to DOM
  - `ReactDOMServer.renderToString()` - Server-side rendering
- **Think of it as:** The bridge between React and the web page

**Simple analogy:** React is the architect, ReactDOM is the construction crew that builds it on the webpage.

---

## 🏗️ Development vs Production Files

### Development Build

- **Purpose:** For coding and testing
- **Speed:** 3-5x slower than production
- **Features:**
  - Detailed error messages
  - Debugging tools
  - Uncompressed code
- **File:** `react.development.js`

### Production Build

- **Purpose:** For live websites
- **Speed:** Optimized for performance
- **Features:**
  - Minified code
  - No debugging overhead
  - Smaller file sizes
- **File:** `react.production.js`

---

## ⚡ Script Loading: Async vs Defer

### Async

```html
<script src="script.js" async></script>
```

- **Downloads:** In parallel with HTML parsing
- **Executes:** Immediately when download completes
- **Use case:** Independent scripts that don't depend on DOM or other scripts

### Defer

```html
<script src="script.js" defer></script>
```

- **Downloads:** In parallel with HTML parsing
- **Executes:** After HTML parsing is complete
- **Use case:** Scripts that need the full DOM to be ready

### Modern Best Practice: Type="module"

```html
<script type="module" src="main.js"></script>
```

**Benefits of modules:**

- ✅ Automatic strict mode (faster, safer code)
- ✅ Waits for DOM to be ready
- ✅ Prevents global namespace pollution
- ✅ Supports ES6 imports/exports
- ✅ Asynchronous loading and parsing
- ✅ Top-level await support

**Legacy fallback:**

```html
<script defer nomodule src="fallback.js"></script>
```

---

## 💡 Quick Reference

| Feature  | Async        | Defer           | Module          |
| -------- | ------------ | --------------- | --------------- |
| Download | Parallel     | Parallel        | Parallel        |
| Execute  | Immediately  | After DOM       | After DOM       |
| Order    | No guarantee | Preserves order | Preserves order |
| Modern   | ❌           | ❌              | ✅ Recommended  |

---

_These notes cover fundamental concepts every web developer should understand. Keep practicing and building projects to solidify these concepts!_
