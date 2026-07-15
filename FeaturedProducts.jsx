import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";

function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      category: "Electronics",
      price: "₹2,999",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    },
    {
      id: 2,
      name: "Smart Watch",
      category: "Watches",
      price: "₹4,499",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },
    {
      id: 3,
      name: "Running Shoes",
      category: "Shoes",
      price: "₹3,299",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
    {
      id: 4,
      name: "Leather Jacket",
      category: "Fashion",
      price: "₹5,999",
      image:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518",
    },
    {
      id: 5,
      name: "Gaming Mouse",
      category: "Electronics",
      price: "₹1,499",
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db",
    },
    {
      id: 6,
      name: "Bluetooth Speaker",
      category: "Electronics",
      price: "₹2,199",
      image:
        "https://images.unsplash.com/photo-1589003077984-894e133dabab",
    },
    {
      id: 7,
      name: "Casual Sneakers",
      category: "Shoes",
      price: "₹2,799",
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772",
    },
    {
      id: 8,
      name: "Backpack",
      category: "Accessories",
      price: "₹1,999",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Featured Products
          </h2>

          <p className="mt-3 text-gray-500 text-lg">
            Discover our best-selling products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />

                <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow hover:text-red-500">
                  <FaHeart />
                </button>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-sm text-blue-600 font-medium">
                  {product.category}
                </p>

                <h3 className="text-xl font-semibold mt-2 mb-2">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex text-yellow-400 mt-3">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                {/* Price */}
                <div className="flex justify-between items-center mt-5">
                  <span className="text-2xl font-bold text-blue-600">
                    {product.price}
                  </span>

                  <button className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition">
                    <FaShoppingCart />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;