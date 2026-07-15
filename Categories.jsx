function Categories() {
  const categories = [
    {
      name: "Electronics",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      items: "120+ Products",
    },
    {
      name: "Fashion",
      image:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518",
      items: "95+ Products",
    },
    {
      name: "Shoes",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      items: "70+ Products",
    },
    {
      name: "Watches",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      items: "40+ Products",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Shop by Categories
          </h2>

          <p className="mt-3 text-gray-500 text-lg">
            Explore our most popular categories
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
            >
              {/* Category Image */}
              <div className="overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {category.name}
                </h3>

                <p className="mt-2 text-gray-500">
                  {category.items}
                </p>

                <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;