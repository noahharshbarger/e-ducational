# Lesson: Making the Cart Interactive in React

Now that you have reusable components, let's make the Cart page interactive—just like a real e-commerce site!

---

## 1. Cart State with useState
- Use `useState` to store cart items as an array of objects (each with id, name, quantity, price).
- Example:
```jsx
import { useState } from "react";

const [cart, setCart] = useState([
  { id: 1, name: "Product A", quantity: 2, price: 19.99 },
  { id: 2, name: "Product B", quantity: 1, price: 29.99 },
]);
```

---

## 2. Display Cart Items
- Map over the cart array to show each item, its quantity, and price.
- Example:
```jsx
cart.map(item => (
  <div key={item.id}>
    <span>{item.name}</span>
    <span>Qty: {item.quantity}</span>
    <span>${item.price}</span>
  </div>
))
```

---

## 3. Update Quantity & Remove Items
- Add buttons to increase/decrease quantity and remove items.
- Example:
```jsx
<button onClick={() => setCart(cart => cart.filter(i => i.id !== item.id))}>Remove</button>
```

---

## 4. Calculate Total
- Use `reduce` to sum up the total price.
- Example:
```jsx
const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
```

---

## 5. Practice Ideas
- Add a button to clear the cart.
- Show a message if the cart is empty.
- Style the cart with your Card and Button components.

---

## Resources
- [React Docs: useState](https://react.dev/reference/react/useState)
- [React Patterns: Lifting State Up](https://react.dev/learn/sharing-state-between-components)

---

Let’s implement this in your Cart page!
