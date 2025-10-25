"use client"

import { useEffect, useState, useRef } from "react";
import { useCart } from "@/components/CartContext";
import Card from "@/components/Card";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function Shop() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    // --- Teaching Moment: State for search and filter ---
    // These states control the search input and category filter, enabling dynamic product filtering.
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const quantityRefs = useRef({});
    const { addToCart } = useCart();
    // useRef for the focus input example (must be at top level)
    const focusRef = useRef(null);

    useEffect(() => {
        // --- Teaching Moment: Fetch products from API ---
        // In a real ecommerce site, products are fetched from a backend API.
        // This enables dynamic updates and scalability for large catalogs.
        fetch("api/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            });
    }, []);

    return (
        <main className="min-h-[80vh] bg-gradient-to-br from-blue-50 via-white to-blue-100 py-12 px-4">
            {/* Announcement Bar */}
            <div className="w-full bg-blue-600 text-white text-center py-2 rounded mb-8 shadow-md font-semibold tracking-wide">
                🎉 Free shipping on all course bundles this week!
            </div>
            <section className="max-w-4xl mx-auto text-center mb-12">
                {/* Section Divider */}
                <div className="w-24 h-2 mx-auto mb-6 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 rounded-full" />
                <h1 className="text-5xl font-extrabold text-blue-800 mb-2 drop-shadow-lg">
                    Welcome to the Shop
                </h1>
                <p className="text-xl text-blue-600 mb-6 mt-4">
                    Discover the best products on your learning journey.
                </p>
                {/* --- Teaching Moment: Search and Filter UI --- */}
                {/* A search bar and category dropdown help users quickly find products. */}
                <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-8">
                    {/* Search Input: Filters products by name in real time */}
                    <Input
                        label="Search"
                        type="text"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        placeholder="Search products..."
                        className="w-64 border-blue-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                    {/* Category Filter: Shows only products in the selected category */}
                    <select
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                        className="border border-blue-300 rounded px-4 py-2 bg-white text-blue-700 focus:border-blue-500 focus:ring-blue-500"
                    >
                        <option value="">All Categories</option>
                        {/* Dynamically generate categories from products */}
                        {[...new Set(products.map(p => p.category).filter(Boolean))].map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>
                <div className="text-xl text-gray-700 mb-6 gap-4 flex justify-center">
                    <Button className="px-6">Featured</Button>
                    <Button className="px-6">New Arrivals</Button>
                </div>
            </section>
            <section className="max-w-5xl mx-auto grid grid-cols-1 gap-8">
                {loading ? (
                    <div className="text-center text-lg">Loading products...</div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {products
                            .filter(product =>
                                (!search || product.name.toLowerCase().includes(search.toLowerCase())) &&
                                (!category || product.category === category)
                            )
                            .map((product) => (
                                <div key={product.id} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center border border-blue-100 transition-transform duration-200 hover:scale-105 hover:shadow-2xl group">
                                    {/* Product image or placeholder */}
                                    <img src={product.image || '/logo.png'} alt={product.name} className="w-24 h-24 object-cover rounded-full mb-4 border-2 border-blue-300 group-hover:border-blue-500 transition" />
                                    <span className="text-xl font-bold text-gray-800 mb-1 group-hover:text-blue-700 transition">{product.name}</span>
                                    {/* Category tag */}
                                    {product.category && (
                                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded mb-2">{product.category}</span>
                                    )}
                                    <span className="text-lg text-blue-600 font-semibold mb-2">${product.price}</span>
                                    <span className={`mb-2 font-semibold ${product.stock === 0 ? 'text-red-500' : 'text-green-600'}`}>{product.stock === 0 ? 'Out of Stock' : `In Stock: ${product.stock}`}</span>
                                    <Input
                                        label="Quantity"
                                        type="number"
                                        min={1}
                                        max={product.stock}
                                        defaultValue={1}
                                        className="w-24 mb-2"
                                        ref={el => quantityRefs.current[product.id] = el}
                                        disabled={product.stock === 0}
                                    />
                                    <Input label="Gift Code" type="text" placeholder="Enter code" className="w-48 mb-2" disabled={product.stock === 0} />
                                    <Button
                                        className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition"
                                        onClick={async () => {
                                            const qty = Number(quantityRefs.current[product.id]?.value || 1);
                                            if (product.stock === 0) return;
                                            addToCart(product, qty);
                                            await fetch("/api/cart", {
                                                method: "POST",
                                                headers: { "Content-Type": "application/json" },
                                                body: JSON.stringify({ productId: product.id, quantity: qty })
                                            });
                                            alert(`Added ${qty} x ${product.name} to cart!`);
                                        }}
                                        disabled={product.stock === 0}
                                    >
                                        {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                                    </Button>
                                </div>
                            ))}
                    </div>
                )}
            {/* Trust Badge Section */}
            <section className="max-w-4xl mx-auto py-8 px-4 flex flex-col items-center gap-4 mt-16">
                <div className="flex gap-6 justify-center items-center">
                    <img src="/vercel.svg" alt="Vercel Hosted" className="w-12 h-12" />
                    <img src="/next.svg" alt="Powered by Next.js" className="w-12 h-12" />
                    <img src="/window.svg" alt="Secure Checkout" className="w-12 h-12" />
                </div>
                <p className="text-gray-500 text-center text-lg">Trusted by thousands of learners. Fast, secure, and reliable.</p>
            </section>
            </section>
        </main>
    );
}
