"use client"

import { useEffect, useState, useRef } from "react";
import { useCart } from "@/components/CartContext";
import Card from "@/components/Card";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function Shop() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const quantityRefs = useRef({});
    const { addToCart } = useCart();
    // useRef for the focus input example (must be at top level)
    const focusRef = useRef(null);

    useEffect(() => {
        fetch("api/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            });
        }, []);

    return (
        <main className="min-h-[80vh] bg-gradient-to-br from-blue-100 to-purple-100 py-12 px-4">
            <section className="max-w-4xl mx-auto text-center mb-12">
                <h1 className="text-5xl font-extrabold bg-gradient-to-r from-fuchsia-600 via-blue-900 to-purple-600 bg-clip-text text-transparent mb-2 drop-shadow-lg">
                    Welcome to the Shop
                </h1>
                <p className="text-xl text-gray-600 mb-6 mt-4 bg-gradient-to-r from-fuchsia-600 via-blue-900 to-purple-600 bg-clip-text text-transparent">
                    Discover the best products on your learning journey.
                </p>
                <div className="text-xl text-gray-700 mb-6">
                    <Button className="px-6">
                        Featured
                    </Button>
                    <Button className="px-6">
                        New Arrivals
                    </Button>
                </div>
            </section>
            <section className="max-w-5xl mx-auto grid grid-cols-1 gap-8">
                {loading ? (
                    <div className="text-center text-lg">Loading products...</div>
                ) : (
                    products.map((product) => (
                        <Card key={product.id} title={product.name}
                            className="flex flex-row items-center gap-8 hover:scale-102 hover:shadow-2xl transition-all border border-purple-500">
                                <div className="w-32 h-32 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                    <span className="text-5xl text-white font-bold">{product.name[0]}</span>
                                </div>
                                <div>
                                    <p className="text-gray-500 mb-2">Price: ${product.price}</p>
                                    <Input
                                        label="Quantity"
                                        type="number"
                                        min={1}
                                        defaultValue={1}
                                        className="w-24"
                                        // Assign a ref to each quantity input so we can read its value on Add to Cart
                                        ref={el => quantityRefs.current[product.id] = el}
                                    />
            {/* useRef example: focus an input by clicking a button */}
            <section className="max-w-xl mx-auto mt-16">
                <h2 className="text-2xl font-bold mb-2">useRef Example: Focus Input</h2>
                <p className="mb-2 text-gray-600">useRef can also be used to directly access a DOM element, like focusing an input:</p>
                <div className="flex gap-2 items-end">
                    <Input label="Focus Me" ref={focusRef} className="w-48" />
                    <Button onClick={() => focusRef.current && focusRef.current.focus()}>
                        Focus Input
                    </Button>
                </div>
            </section>
                                    <Input label="Gift Code" type="text" placeholder="Enter code" className="w-48" />
                                    <Button
                                        className="mt-4"
                                        onClick={async () => {
                                            const qty = Number(quantityRefs.current[product.id]?.value || 1);
                                            addToCart(product, qty);

                                            await fetch("/api/cart", {
                                                method: "POST",
                                                headers: { "Content-Type": "application/json" },
                                                body: JSON.stringify({ productId: product.id, quantity: qty })
                                            });
                                            alert(`Added ${qty} x ${product.name} to cart!`);
                                        }}
                                    >
                                        Add to Cart
                                    </Button>
                                </div>
                        </Card>
                    ))
                )}
            </section>
        </main>
    );
}
//

// export default function ShopPage() {
//   return (
//     <main className="min-h-[80vh] bg-gradient-to-br from-blue-50 to-purple-100 py-12 px-4">
//       <section className="max-w-4xl mx-auto text-center mb-12">
//         <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg mb-4">
//           Welcome to the Shop
//         </h1>
//         <p className="text-xl text-gray-700 mb-6">
//           Discover the best digital products for your learning journey.
//         </p>
//         <div className="flex justify-center gap-4">
//           <button className="px-6 py-2 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition">Featured</button>
//           <button className="px-6 py-2 rounded-full bg-purple-600 text-white font-semibold shadow-lg hover:bg-purple-700 transition">New Arrivals</button>
//         </div>
//       </section>
//       <section className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {[1,2,3,4,5,6].map((i) => (
//           <div
//             key={i}
//             className="bg-white rounded-3xl shadow-xl p-6 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-all border border-purple-100"
//           >
//             <div className="w-24 h-24 bg-gradient-to-tr from-blue-400 to-purple-400 rounded-full flex items-center justify-center mb-4">
//               <span className="text-3xl text-white font-bold">{String.fromCharCode(65 + i)}</span>
//             </div>
//             <h2 className="text-xl font-bold mb-2">Product {i}</h2>
//             <p className="text-gray-500 mb-4 text-center">Amazing product description goes here. Make your learning awesome!</p>
//             <span className="text-lg font-semibold text-purple-600 mb-2">${i * 19 + 9}.99</span>
//             <button className="mt-auto px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow hover:from-blue-600 hover:to-purple-600 transition">Add to Cart</button>
//           </div>
//         ))}
//       </section>
//     </main>
//   );
// }
