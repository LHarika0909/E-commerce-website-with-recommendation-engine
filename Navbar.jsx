import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-blue-600 cursor-pointer">
          ShopSmart
        </h1>

        {/* Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-8 text-gray-700 font-medium">
            <li className="hover:text-blue-600 cursor-pointer transition-colors">
              Home
            </li>

            <li className="hover:text-blue-600 cursor-pointer transition-colors">
              Products
            </li>

            <li className="hover:text-blue-600 cursor-pointer transition-colors">
              Categories
            </li>

            <li className="hover:text-blue-600 cursor-pointer transition-colors">
              Contact
            </li>
          </ul>
        </nav>

        {/* Search */}
        <div className="hidden lg:block">
          <input
            type="text"
            placeholder="Search products..."
            className="w-80 px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6 text-xl text-gray-700">
          <FaHeart className="cursor-pointer hover:text-red-500 transition-colors" />
          <FaShoppingCart className="cursor-pointer hover:text-blue-600 transition-colors" />
          <FaUser className="cursor-pointer hover:text-blue-600 transition-colors" />
        </div>

      </div>
    </header>
  );
}

export default Navbar;