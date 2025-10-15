"use client"

import { useState } from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Input from "@/components/Input";

export default function CartPage() {
  const [cart, setCart] = useState([
    { id: 1, name: "Product A", quantity: 2, price: 19.99 }
  ]);

  const updateQuantity = (id, qty) => {
    setCart(cart => cart.map(item => item.id === id ? { ...item, quantity: Math.max(1, Number(qty)) } : item));
  };

  const removeItem = id => {
    setCart(cart => cart.filter(item => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center py-12 px-4">
      <h1 className="text-4xl font-bold mb-4 text-purple-700">Cart</h1>
      {cart.length === 0 ? (
        <p className="text-lg text-gray-500">Your shopping cart is empty.</p>
      ) : (
        <div className="w-full max-w-2xl flex flex-col gap-6">
          {cart.map(item => (
            <Card key={item.id} className="flex flex-row items-center justify-between gap-4">
              <div>
                <div className="font-semibold text-lg mb-1">{item.name}</div>
                <div className="text-gray-500">${item.price.toFixed(2)}</div>
              </div>
              <Input
                label="Quantity"
                type="number"
                min={1}
                value={item.quantity}
                onChange={e => updateQuantity(item.id, e.target.value)}
                className="w-15"
                />
                <Button onClick={() => removeItem(item.id)} className="bg-red-500 hover:bg-red-600">Remove</Button>
            </Card>
          ))}
          <div className="flex justify-between items-center mt-4">
            <span className="text-xl font-bold">Total: ${total.toFixed(2)}</span>
            <Button onClick={clearCart} className="bg-gray-400 hover:bg-gray-500">Clear Cart</Button>
          </div>
        </div>
      )}
    </main>
  )
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
