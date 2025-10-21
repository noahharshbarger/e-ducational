# Lesson: Global Cart State with React Context

Now that your cart works on one page, let’s make it global so any page (Shop, Product, Cart, Checkout) can read and update the cart!

---

## 1. What is React Context?
- Context lets you share state/data across your app without passing props down manually at every level.
- Perfect for things like cart, user, or theme.

---

## 2. Create a Cart Context
- Make a new file: `CartContext.jsx` in your `components` folder.
- Example:
```jsx
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const addToCart = (product, quantity = 1) => {
    setCart(cart => {
      const existing = cart.find(item => item.id === product.id);
      if (existing) {
        return cart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...cart, { ...product, quantity }];
    });
  };
  const removeFromCart = id => setCart(cart => cart.filter(item => item.id !== id));
  const updateQuantity = (id, qty) => setCart(cart => cart.map(item => item.id === id ? { ...item, quantity: qty } : item));
  const clearCart = () => setCart([]);
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
```

---

## 3. Wrap Your App with CartProvider
- In `app/layout.jsx` or `app/layout.tsx`, wrap your children:
```jsx
import { CartProvider } from "@/components/CartContext";

export default function RootLayout({ children }) {
  return (
    <CartProvider>
      {children}
    </CartProvider>
  );
}
```

---

## 4. Use Cart Context Anywhere
- Import and use the `useCart` hook in any page/component:
```jsx
import { useCart } from "@/components/CartContext";

const { cart, addToCart, removeFromCart, updateQuantity, clearCart } = useCart();
```

---

## 5. Practice Ideas
- Add to cart from Product or Shop page.
- Show cart item count in the navbar.
- Clear cart after checkout.

---

## Resources
- [React Docs: Context](https://react.dev/reference/react/createContext)
- [React Docs: useContext](https://react.dev/reference/react/useContext)

---

Let’s implement this in your app!
