# Lesson: Building a Checkout Form in React

Let’s make the Checkout page realistic by building a form for user info and showing an order summary!

---

## 1. Checkout Form State
- Use `useState` to manage form fields (name, email, address, etc.).
- Use the Input component for each field.

**Example:**
```jsx
import { useState } from "react";

const [form, setForm] = useState({
  name: "",
  email: "",
  address: "",
});

const handleChange = e => {
  setForm(f => ({ ...f, [e.target.name]: e.target.value }));
};
```

---

## 2. Form Validation
- Check for empty fields and show error messages.
- Example: `if (!form.name) setError('Name is required')`

---

## 3. Order Summary
- Show a summary of cart items and total price (use hardcoded data or pass as props for now).
- Example:
```jsx
const cart = [
  { id: 1, name: "Product A", quantity: 2, price: 19.99 },
  { id: 2, name: "Product B", quantity: 1, price: 29.99 },
];
const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
```

---

## 4. Practice Ideas
- Disable the submit button if the form is invalid.
- Show a success message on submit.
- Add more fields (phone, notes, etc.).

---

## Resources
- [React Docs: Forms](https://react.dev/learn/choosing-the-state-structure)
- [React Docs: Controlled Components](https://react.dev/learn/sharing-state-between-components#controlled-components)

---

Let’s implement this in your Checkout page!
