
'use client'
import Button from "@/components/Button";

export default function Hero() {
  return (
    <>
      {/* Announcement Bar */}
      <div className="w-full bg-blue-600 text-white text-center py-2 rounded mb-8 shadow-md font-semibold tracking-wide">
        🚀 New: Get 20% off your first course! Use code EDU20 at checkout.
      </div>
      {/* Enhanced Hero Section with background pattern and brand icon */}
      <section className="flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 px-4 border-b border-gray-200 relative">
        <div className="absolute inset-0 pointer-events-none bg-[url('/globe.svg')] bg-no-repeat bg-right-bottom opacity-10" />
        <div className="max-w-4xl w-full mx-auto flex flex-col items-center text-center gap-6 relative z-10">
          {/* Section Divider */}
          <div className="w-24 h-2 mx-auto mb-6 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 rounded-full" />
          <div className="flex items-center gap-3 justify-center mb-2">
            <img src="/logo.png" alt="EDUcational Logo" className="w-12 h-12 shadow" />
            <span className="text-4xl font-bold text-gray-900 tracking-tight">EDUcational</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight text-blue-900 mb-4">
            Your one-stop solution for all educational resources
          </h1>
          <p className="text-xl text-gray-700 max-w-xl mx-auto mb-6">
            Explore, compare, and shop the best courses and materials for your learning journey.
          </p>
          <ul className="list-inside list-disc text-left space-y-2 mx-auto max-w-lg">
            <li className="text-lg text-gray-600">Wide range of courses and materials</li>
            <li className="text-lg text-gray-600">Compare pricing with other platforms</li>
            <li className="text-lg text-gray-600">Seamless shopping experience</li>
            <li className="text-lg text-gray-600">Secure and easy checkout</li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button href="/shop" className="px-8 py-3 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition text-lg">Shop Now</Button>
            <Button href="#about" className="px-8 py-3 rounded bg-gray-100 text-blue-600 font-semibold border border-gray-300 hover:bg-gray-200 transition text-lg">Learn More</Button>
          </div>
        </div>
      </section>

      {/* Product Preview Grid for Ecommerce Feel */}
      <section className="max-w-5xl mx-auto py-12 px-4">
  <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center border-b-2 border-blue-100 pb-4">Featured Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Example static products for preview, replace with dynamic data for real site */}
          {[
            { name: 'JS Course Beginner', price: 199.99, image: '/globe.svg' },
            { name: 'React Course Advanced', price: 349.99, image: '/next.svg' },
            { name: 'Python for Data Science', price: 299.99, image: '/window.svg' }
          ].map((product, idx) => (
            <div key={idx} className="bg-white border border-blue-100 rounded-xl p-6 flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-2xl group">
              <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded-full mb-4 border-2 border-blue-300 group-hover:border-blue-500 transition" />
              <span className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-700 transition">{product.name}</span>
              <span className="text-lg text-blue-600 font-semibold mb-4">${product.price}</span>
              <Button href="/shop" className="px-6 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition w-full">View Course</Button>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Badge Section */}
      {/* Testimonials Section */}
      <section className="max-w-4xl mx-auto py-8 px-4 flex flex-col items-center gap-6">
        <h3 className="text-2xl font-bold text-blue-900 mb-2">What Our Learners Say</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          <div className="bg-white border border-blue-100 rounded-lg p-4 shadow flex flex-col gap-2">
            <span className="text-blue-700 font-bold">“The best platform for online courses!”</span>
            <span className="text-gray-600">— Alex P.</span>
          </div>
          <div className="bg-white border border-blue-100 rounded-lg p-4 shadow flex flex-col gap-2">
            <span className="text-blue-700 font-bold">“Checkout was fast and secure. Highly recommend.”</span>
            <span className="text-gray-600">— Jamie L.</span>
          </div>
        </div>
      </section>
      <section className="max-w-4xl mx-auto py-8 px-4 flex flex-col items-center gap-4">
        <div className="flex gap-6 justify-center items-center">
          <img src="/vercel.svg" alt="Vercel Hosted" className="w-16 h-16" />
          <img src="/next.svg" alt="Powered by Next.js" className="w-16 h-16" />
          <img src="/window.svg" alt="Secure Checkout" className="w-16 h-16" />
        </div>
        <p className="text-gray-500 text-center text-lg">Trusted by thousands of learners. Fast, secure, and reliable.</p>
      </section>
    </>
  );
}
