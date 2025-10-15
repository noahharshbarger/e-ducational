# 0. Reusable Components: Button, Card, Input

Before diving into props and state, it's important to understand how to build and use reusable components. Here are three examples from your project:

## Button Component
```jsx
// components/Button.jsx
export default function Button({ children, onClick, type = "button", className = "" }) {
  return (
    <button
      type={type}
      className={`px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// Usage:
<Button onClick={() => alert('Clicked!')}>Click Me</Button>
<Button type="submit" className="bg-green-600 hover:bg-green-700">Submit</Button>
<Button disabled className="opacity-50 cursor-not-allowed">Disabled</Button>
```

## Card Component
```jsx
// components/Card.jsx
export default function Card({ title, children, className = "" }) {
  return (
    <div className={`bg-white rounded-xl shadow p-6 ${className}`}>
      {title && <h2 className="text-xl font-bold mb-2">{title}</h2>}
      {children}
    </div>
  );
}

// Usage:
<Card title="Welcome!">This is a card with some content.</Card>
<Card className="border border-blue-200">No title, just content.</Card>
```

## Input Component
```jsx
// components/Input.jsx
export default function Input({ label, ...props }) {
  return (
    <label className="block mb-4">
      {label && <span className="block mb-1 text-gray-700 font-medium">{label}</span>}
      <input
        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        {...props}
      />
    </label>
  );
}

// Usage:
<Input label="Email" type="email" placeholder="you@example.com" />
<Input label="Password" type="password" />
```

# Next Steps: Props and State in React (JSX)

Now that you know how to build and use reusable components, the next logical step is to learn how to make them dynamic and interactive using **props** and **state**.

---

## 1. Props: Passing Data to Components

Props (short for "properties") let you pass data from a parent component to a child component.

**Example:**
```jsx
function Welcome({ name }) {
  return <h2>Hello, {name}!</h2>;
}

// Usage:
<Welcome name="Noah" />
```

- Props are read-only.
- You can pass any type of data: strings, numbers, arrays, objects, functions.

**Resource:**
- [React Docs: Components and Props](https://react.dev/learn/passing-props-to-a-component)

---

## 2. State: Making Components Interactive

State lets a component keep track of information that can change over time (e.g., user input, toggles, counters).

**Example:**
```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

- `useState` is a React Hook for adding state to function components.
- Changing state causes the component to re-render.

**Resource:**
- [React Docs: State: A Component’s Memory](https://react.dev/learn/state-a-components-memory)

---

## 3. Practice Ideas
- Pass props to your Button or Card components (e.g., different labels, colors).
- Add a counter or toggle to a page using `useState`.
- Build a simple form and manage its input state.

---

## More Resources
- [React Beta Docs](https://react.dev/learn)
- [Props vs State (freeCodeCamp)](https://www.freecodecamp.org/news/props-vs-state-in-react/)
- [useState Hook (W3Schools)](https://www.w3schools.com/react/react_usestate.asp)

---

Feel free to copy these examples and resources into your lesson or slides!
