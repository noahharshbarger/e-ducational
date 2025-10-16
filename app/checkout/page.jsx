'use client'

import { useState } from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Input from "@/components/Input";

export default function CheckoutPage() {
  const [form, setForm] = useState({ name: "", email: "", address: "" });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  // Example cart data (replace with real cart state in a full app)
  const cart = [
    { id: 1, name: "Product A", quantity: 2, price: 19.99 },
    { id: 2, name: "Product B", quantity: 1, price: 29.99 },
  ];
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.address) {
      setError("All fields are required.");
      return;
    }
    setError("");
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cart, user: form })
    });
    if (res.ok) {
      setSubmitted(true);
    } else {
      setError("Checkout failed. Try again.");
    }
  };

  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center py-12 px-4">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">Checkout</h1>
      <div className="w-full max-w-2xl flex flex-col gap-8">
        <Card title="Order Summary">
          {cart.map(item => (
            <div key={item.id} className="flex justify-between mb-2">
              <span>{item.name} x {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="flex justify-between font-bold text-lg mt-4">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </Card>
        <Card title="Shipping Information">
          {submitted ? (
            <div className="text-green-600 font-semibold">Order placed! Thank you, {form.name}.</div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <Input label="Name" name="name" value={form.name} onChange={handleChange} required />
              <Input label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
              <Input label="Address" name="address" value={form.address} onChange={handleChange} required />
              {error && <div className="text-red-500 text-sm">{error}</div>}
              <Button type="submit" onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-700 mt-2">
                Place Order
              </Button>
            </form>
          )}
        </Card>
      </div>
    </main>
  );
}
