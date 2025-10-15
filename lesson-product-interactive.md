# Lesson: Making the Product Page Interactive

Let’s make the Product page dynamic and interactive, just like a real e-commerce site!

---

## 1. Product State and Props
- Use `useState` to manage product details (name, price, description, quantity).
- Use props to pass product data if needed (for now, hardcode a sample product).

**Example:**
```jsx
import { useState } from "react";

const [product, setProduct] = useState({
  id: 1,
  name: "Awesome Course",
  price: 49.99,
  description: "Learn everything about frontend!",
});
const [quantity, setQuantity] = useState(1);
```

---

## 2. Add to Cart Button
- Add a button to simulate adding the product to the cart.
- Show a confirmation message or update a local cart state.

**Example:**
```jsx
<Button onClick={() => alert('Added to cart!')}>Add to Cart</Button>
```

---

## 3. Quantity Input
- Use the Input component to let users select quantity.

**Example:**
```jsx
<Input label="Quantity" type="number" min={1} value={quantity} onChange={e => setQuantity(e.target.value)} />
```

---

## 4. Practice Ideas
- Show a product image.
- Display a success message when added to cart.
- Disable the button if quantity is less than 1.

---

## Resources
- [React Docs: useState](https://react.dev/reference/react/useState)
- [React Docs: Event Handling](https://react.dev/learn/responding-to-events)

---

Let’s implement this in your Product page!
