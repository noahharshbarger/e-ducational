# Lesson: Next.js API Routes – Starter and Examples

## 1. What is an API Route?
- In Next.js, any file in `pages/api/` becomes an API endpoint.
- You can use these to handle backend logic (fetching data, saving orders, etc.) without a separate server.

---

## 2. Starter API Route Example

**File:** `pages/api/hello.js`
```js
// Example Next.js API Route
// This file creates an endpoint at /api/hello
// You can fetch it from the frontend with fetch('/api/hello')

export default function handler(req, res) {
  // Check the HTTP method
  if (req.method === 'GET') {
    // Respond with JSON data
    res.status(200).json({ message: 'Hello from the API!' });
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
```

---

## 3. Fetching from the Frontend

**Example usage in a React component:**
```js
import { useEffect, useState } from 'react';

export default function HelloDemo() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return <div>API says: {message}</div>;
}
```

---


## 4. Real-World API Route Examples

### Products API
**File:** `pages/api/products.js`
```js
// Returns a list of products as JSON
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json([
      { id: 1, name: 'JS Course Beginner', price: 199.99 },
      { id: 2, name: 'JS Course Advanced', price: 299.99 },
      { id: 3, name: 'React Course Beginner', price: 249.99 },
      { id: 4, name: 'React Course Advanced', price: 349.99 },
    ]);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
```

**How to use in the frontend:**
```js
useEffect(() => {
  fetch('/api/products')
    .then(res => res.json())
    .then(data => setProducts(data));
}, []);
```

### Cart API
**File:** `pages/api/cart.js`
```js
// POST /api/cart { productId, quantity }
let cart = [];
export default function handler(req, res) {
  if (req.method === 'POST') {
    const { productId, quantity } = req.body;
    if (!productId || !quantity) {
      return res.status(400).json({ error: 'Missing productId or quantity' });
    }
    cart.push({ productId, quantity });
    return res.status(200).json({ message: 'Added to cart', cart });
  } else if (req.method === 'GET') {
    return res.status(200).json(cart);
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
```

**How to use in the frontend:**
```js
// Add to cart example
await fetch('/api/cart', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ productId: 1, quantity: 2 })
});
```

### Checkout API
**File:** `pages/api/checkout.js`
```js
// POST /api/checkout { cart, user }
export default function handler(req, res) {
  if (req.method === 'POST') {
    const { cart, user } = req.body;
    if (!cart || !Array.isArray(cart) || cart.length === 0) {
      return res.status(400).json({ error: 'Cart is empty or invalid' });
    }
    return res.status(200).json({
      message: 'Checkout successful',
      order: {
        id: Math.floor(Math.random() * 1000000),
        items: cart,
        user: user || null,
        status: 'confirmed',
      },
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
```

**How to use in the frontend:**
```js
// Checkout example
await fetch('/api/checkout', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ cart, user })
});
```

---

## 5. Resources
- [Next.js API Routes Docs](https://nextjs.org/docs/pages/building-your-application/routing/api-routes)
- [Handling Form Submissions in Next.js](https://nextjs.org/docs/pages/building-your-application/routing/api-routes#handling-form-submissions)

---

Use these real-world examples to teach how to create, use, and fetch from Next.js API routes in your app!
