import heroImage from "../../assets/hero.png";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-indigo-100 py-10">
        <div className="max-w-7xl mx-auto px-8 py-14 grid grid-cols-1 lg:grid-cols-2 items-center gap-32">

        {/* Left Content */}
        <div>
          <span className="bg-blue-600 px-8 py-4 rounded-xl text-white font-semibold shadow-lg hover:bg-blue-700 transition duration-300"> 
            AI Powered Shopping
          </span>

          <h1 className="mt-6 text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Discover Amazing
            <br />
            <span className="text-blue-600">Products</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8 max-w-xl">
            Shop smarter with AI-powered recommendations. Discover electronics,
            fashion, accessories, and much more with personalized suggestions
            tailored to your interests.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">
              Shop Now
            </button>

            <button className="border-2 border-blue-600 px-8 py-4 rounded-xl font-semibold text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={heroImage}
            alt="AI Shopping"
            className="w-[420px] lg:w-[480px] h-auto object-contain mx-auto"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;