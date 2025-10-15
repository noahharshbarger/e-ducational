"use client"

import { useState } from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Input from "@/components/Input";

export default function ProductPage() {
  const [product] = useState({
    id: 1,
    name: "Awesome Course",
    price: 49.99,
    description: "Learn everything about JavaScript",
    image: "file.svg",
  });
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center py-12 px-4">
      <Card className="max-w-md w-full flex flex-col items-center text-center gap-6">
        <img src={product.image} alt={product.name} className="w-24 h-24 mx-auto mb-2" />
        <h1 className="text-3xl font-bold text-fuchsia-700">{product.name}</h1>
        <p className="text-2xl text-gray-500 mb-2">{product.description}</p>
        <div className="text-xl font-semibold text-purple-600 mb-2">${product.price.toFixed(2)}</div>
        <Input
          label="Quantity"
          type="number"
          min={1}
          value={quantity}
          onChange={e => setQuantity(Math.max(1, Number(e.target.value)))}
          />
          <Button onClick={handleAddToCart} disabled={quantity < 1} className="bg-fuchsia-600 hover:bg-fuchsia-700">
            Add to Cart
          </Button>
          {added && <div className="text-pink-600 font-semibold mt-2">Added to cart!</div>}
      </Card>
    </main>
  )
}

// 'use client'

// import { useState } from "react";
// import Card from "@/components/Card";
// import Button from "@/components/Button";
// import Input from "@/components/Input";

// export default function ProductPage() {
//   const [product] = useState({
//     id: 1,
//     name: "Awesome Course",
//     price: 49.99,
//     description: "Learn everything about frontend!",
//     image: "/file.svg"
//   });
//   const [quantity, setQuantity] = useState(1);
//   const [added, setAdded] = useState(false);

//   const handleAddToCart = () => {
//     setAdded(true);
//     setTimeout(() => setAdded(false), 1500);
//   };

//   return (
//     <main className="min-h-[60vh] flex flex-col items-center justify-center py-12 px-4">
//       <Card className="max-w-md w-full flex flex-col items-center text-center gap-4">
//         <img src={product.image} alt={product.name} className="w-24 h-24 mx-auto mb-2" />
//         <h1 className="text-3xl font-bold text-fuchsia-700">{product.name}</h1>
//         <p className="text-lg text-gray-500 mb-2">{product.description}</p>
//         <div className="text-xl font-semibold text-purple-600 mb-2">${product.price.toFixed(2)}</div>
//         <Input
//           label="Quantity"
//           type="number"
//           min={1}
//           value={quantity}
//           onChange={e => setQuantity(Math.max(1, Number(e.target.value)))}
//           className="w-24 h-8 mx-auto border border-gray-300 rounded px-2"
//         />
//         <Button onClick={handleAddToCart} disabled={quantity < 1} className="bg-fuchsia-600 hover:bg-fuchsia-700">
//           Add to Cart
//         </Button>
//         {added && <div className="text-pink-600 font-semibold mt-2">Added to cart!</div>}
//       </Card>
//     </main>
//   );
// }
