'use client'

import { useState } from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Input from "@/components/Input";

export default function CheckoutPage() {
  const [form, setForm] = useState({ name: "", email: "", address: "" });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Review
  const [loading, setLoading] = useState(false);
    // Checkout page: displays order summary and handles checkout form
    // Posts checkout data to API and shows result
  // Example cart data (replace with real cart state in a full app)
  const cart = [
    { id: 1, name: "Product A", quantity: 2, price: 19.99 },
    { id: 2, name: "Product B", quantity: 1, price: 29.99 },
  ];
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = e => {
  setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  setError("");
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (step === 1) {
      if (!form.name || !form.email || !form.address) {
        setError("All fields are required.");
        return;
      }
      setStep(2);
      return;
    }
    if (step === 2) {
      // Simulate payment step
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setStep(3);
      }, 1200);
      return;
    }
    if (step === 3) {
      setLoading(true);
      setError("");
      fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart, user: form })
      }).then(res => {
        setLoading(false);
        if (res.ok) {
          setSubmitted(true);
        } else {
          setError("Checkout failed. Try again.");
        }
      });
    }
  };

  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center py-12 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">Checkout</h1>
      {/* Step Progress Bar */}
      <div className="flex justify-center gap-4 mb-8">
        <div className={`px-4 py-2 rounded-full font-semibold ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>Shipping</div>
        <div className={`px-4 py-2 rounded-full font-semibold ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>Payment</div>
        <div className={`px-4 py-2 rounded-full font-semibold ${step === 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>Review</div>
      </div>
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
        <Card title={step === 1 ? "Shipping Information" : step === 2 ? "Payment" : "Review & Confirm"}>
          {submitted ? (
            <div className="text-green-600 font-semibold animate-bounce">Order placed! Thank you, {form.name}.</div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {step === 1 && (
                <>
                  <Input label="Name" name="name" value={form.name} onChange={handleChange} required className={form.name ? 'border-green-400' : 'border-red-400'} />
                  <Input label="Email" name="email" type="email" value={form.email} onChange={handleChange} required className={form.email ? 'border-green-400' : 'border-red-400'} />
                  <Input label="Address" name="address" value={form.address} onChange={handleChange} required className={form.address ? 'border-green-400' : 'border-red-400'} />
                </>
              )}
              {step === 2 && (
                <div className="flex flex-col gap-4">
                  <Input label="Card Number" name="card" type="text" placeholder="1234 5678 9012 3456" required className="border-blue-400" />
                  <Input label="Expiry" name="expiry" type="text" placeholder="MM/YY" required className="border-blue-400" />
                  <Input label="CVC" name="cvc" type="text" placeholder="123" required className="border-blue-400" />
                </div>
              )}
              {step === 3 && (
                <div className="text-blue-700 font-semibold">Review your details and place your order.</div>
              )}
              {error && <div className="text-red-500 text-sm">{error}</div>}
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 mt-2 w-full" disabled={loading}>
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/></svg>
                    Processing...
                  </span>
                ) : step === 1 ? 'Continue to Payment' : step === 2 ? 'Continue to Review' : 'Place Order'}
              </Button>
            </form>
          )}
        </Card>
      </div>
    </main>
  );
}
