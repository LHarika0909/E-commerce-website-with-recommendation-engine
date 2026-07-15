import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-4xl font-bold text-blue-400">
            ShopSmart
          </h2>

          <p className="mt-4 text-gray-400">
            AI-powered shopping platform with personalized recommendations.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-xl mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li>Home</li>
            <li>Products</li>
            <li>Categories</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-xl mb-4">
            Support
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li>Help Center</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-xl mb-4">
            Follow Us
          </h3>

          <div className="flex gap-4 text-2xl">
            <FaFacebook className="hover:text-blue-500 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaTwitter className="hover:text-sky-400 cursor-pointer" />
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
        © 2026 ShopSmart. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;