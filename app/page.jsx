
'use client'
import Button from "@/components/Button";

export default function Hero() {
  return (
    <>
      <section className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 via-fuchsia-50 to-purple-100 overflow-hidden py-16 px-4">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-gradient-to-br from-blue-300/40 to-purple-300/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-24 -right-24 w-[300px] h-[300px] bg-gradient-to-tr from-fuchsia-200/40 to-blue-200/10 rounded-full blur-2xl animate-pulse" />
        </div>
        <div className="relative z-10 max-w-3xl w-full mx-auto flex flex-col items-center text-center gap-6">
          <div className="flex items-center gap-4 justify-center mb-2">
            {/* <image
              src="/file.svg"
              alt="Hero Image"
              width={72}
              height={72}
              className="drop-shadow-xl animate-bounce"
            />  */}
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent tracking-tight drop-shadow">EDUcational</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight bg-gradient-to-r from-blue-600 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
            Your one-stop solution for all educational resources.
          </h1>
          <p className="text-xl text-gray-700 max-w-xl mx-auto mb-2">
            Explore, compare, and shop the best courses and materials for your learning journey.
          </p>
          <ol className="list-inside list-disc text-left space-y-2 mx-auto max-w-lg">
            <li className="text-lg text-gray-600 flex items-center gap-2"><span className="text-blue-500">•</span> Wide range of courses and materials</li>
            <li className="text-lg text-gray-600 flex items-center gap-2"><span className="text-fuchsia-500">•</span> Compare pricing with other platforms</li>
            <li className="text-lg text-gray-600 flex items-center gap-2"><span className="text-purple-500">•</span> Seamless shopping experience</li>
            <li className="text-lg text-gray-600 flex items-center gap-2"><span className="text-blue-400">•</span> Secure and easy checkout</li>
          </ol>
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <Button href="/shop" className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-lg hover:from-blue-700 hover:to-purple-700 transition text-lg">Shop Now</Button>
            <Button href="#about" className="px-8 py-3 rounded-full bg-white text-blue-600 font-bold border border-blue-200 shadow hover:bg-blue-50 transition text-lg">Learn More</Button>
          </div>
        </div>
      </section>
      {/* Button component usage examples for teaching */}
      <section className="max-w-2xl mx-auto mt-12 flex flex-col items-center gap-4">
        <h2 className="text-2xl font-bold mb-2">Button Component Examples</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button onClick={() => alert('Clicked!')}>Click Me</Button>
          <Button type="submit" className="bg-green-600 hover:bg-green-700">Submit</Button>
          <Button disabled className="opacity-50 cursor-not-allowed">Disabled</Button>
        </div>
      </section>
    </>
  );
}
