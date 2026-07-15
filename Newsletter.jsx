function Newsletter() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-3xl mx-auto text-center px-6">

        <h2 className="text-4xl font-bold">
          Subscribe to our Newsletter
        </h2>

        <p className="mt-4 text-gray-600">
          Get updates about new products and exclusive offers.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 border border-gray-300 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-600"
          />

          <button className="bg-blue-600 text-white px-10 py-4 rounded-xl hover:bg-blue-700">
            Subscribe
          </button>
        </div>

      </div>
    </section>
  );
}

export default Newsletter;