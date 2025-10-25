"use client"

import { useCart } from "@/components/CartContext";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Input from "@/components/Input";


export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center py-12 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Announcement Bar */}
      <div className="w-full bg-blue-600 text-white text-center py-2 rounded mb-8 shadow-md font-semibold tracking-wide">
        🛒 Your cart is ready for checkout!
      </div>
      {/* Section Divider */}
      <div className="w-24 h-2 mx-auto mb-6 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 rounded-full" />
      <h1 className="text-4xl font-bold mb-4 text-blue-800 drop-shadow-lg">Cart</h1>
      {cart.length === 0 ? (
        <p className="text-lg text-gray-500">Your shopping cart is empty.</p>
      ) : (
        <div className="w-full max-w-2xl flex flex-col gap-6">
          {cart.map(item => (
            <div key={item.id} className="bg-white/80 backdrop-blur-md border border-blue-100 rounded-xl shadow-lg p-6 flex flex-row items-center justify-between gap-4 transition-transform duration-200 hover:scale-105 hover:shadow-2xl group">
              <div className="flex flex-col gap-1">
                <span className="font-bold text-lg text-blue-700 group-hover:text-blue-900 transition">{item.name}</span>
                <span className="text-gray-500">${item.price.toFixed(2)}</span>
              </div>
              <Input
                label="Quantity"
                type="number"
                min={1}
                value={item.quantity}
                onChange={e => updateQuantity(item.id, Math.max(1, Number(e.target.value)))}
                className="w-20 border-blue-300 focus:border-blue-500 focus:ring-blue-500"
              />
              <Button onClick={() => removeFromCart(item.id)} className="bg-red-500 hover:bg-red-600 text-white font-semibold rounded shadow px-4 py-2">Remove</Button>
            </div>
          ))}
          <div className="flex justify-between items-center mt-4 bg-white/80 backdrop-blur-md border border-blue-100 rounded-xl shadow p-4">
            <span className="text-xl font-bold text-blue-700">Total: ${total.toFixed(2)}</span>
            <Button onClick={clearCart} className="bg-gray-400 hover:bg-gray-500 text-white font-semibold rounded shadow px-4 py-2">Clear Cart</Button>
          </div>
        </div>
      )}
      {/* Trust Badge Section */}
      <section className="max-w-2xl mx-auto py-8 px-4 flex flex-col items-center gap-4 mt-12">
        <div className="flex gap-6 justify-center items-center">
          <img src="/vercel.svg" alt="Vercel Hosted" className="w-12 h-12" />
          <img src="/next.svg" alt="Powered by Next.js" className="w-12 h-12" />
          <img src="/window.svg" alt="Secure Checkout" className="w-12 h-12" />
        </div>
        <p className="text-gray-500 text-center text-lg">Fast, secure, and trusted by thousands of learners.</p>
      </section>
    </main>
  );
}

// 'use client'

// import { useState } from "react";
// import Card from "@/components/Card";
// import Button from "@/components/Button";
// import Input from "@/components/Input";

// export default function CartPage() {
//   const [cart, setCart] = useState([
//     { id: 1, name: "Product A", quantity: 2, price: 19.99 },
//     { id: 2, name: "Product B", quantity: 1, price: 29.99 },
//   ]);

//   const updateQuantity = (id, qty) => {
//     setCart(cart => cart.map(item => item.id === id ? { ...item, quantity: Math.max(1, Number(qty)) } : item));
//   };

//   const removeItem = id => {
//     setCart(cart => cart.filter(item => item.id !== id));
//   };

//   const clearCart = () => setCart([]);

//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <main className="min-h-[60vh] flex flex-col items-center justify-center py-12 px-4">
//       <h1 className="text-4xl font-bold mb-4 text-purple-700">Cart</h1>
//       {cart.length === 0 ? (
//         <p className="text-lg text-gray-500">Your shopping cart is empty.</p>
//       ) : (
//         <div className="w-full max-w-2xl flex flex-col gap-6">
//           {cart.map(item => (
//             <Card key={item.id} className="flex flex-row items-center justify-between gap-4">
//               <div>
//                 <div className="font-semibold text-lg mb-1">{item.name}</div>
//                 <div className="text-gray-500">${item.price.toFixed(2)}</div>
//               </div>
//               <Input
//                 label="Quantity"
//                 type="number"
//                 min={1}
//                 value={item.quantity}
//                 onChange={e => updateQuantity(item.id, e.target.value)}
//                 className="w-20"
//               />
//               <Button onClick={() => removeItem(item.id)} className="bg-red-500 hover:bg-red-600">Remove</Button>
//             </Card>
//           ))}
//           <div className="flex justify-between items-center mt-4">
//             <span className="text-xl font-bold">Total: ${total.toFixed(2)}</span>
//             <Button onClick={clearCart} className="bg-gray-400 hover:bg-gray-500">Clear Cart</Button>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }
