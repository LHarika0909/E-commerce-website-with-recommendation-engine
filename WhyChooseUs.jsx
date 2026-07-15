import {
  FaShippingFast,
  FaLock,
  FaRobot,
  FaHeadset,
} from "react-icons/fa";

function WhyChooseUs() {
  const features = [
    {
      icon: <FaShippingFast size={40} className="text-blue-600" />,
      title: "Fast Delivery",
      description:
        "Get your orders delivered quickly with our trusted delivery partners.",
    },
    {
      icon: <FaLock size={40} className="text-blue-600" />,
      title: "Secure Payments",
      description:
        "Enjoy safe and secure online payments with multiple payment options.",
    },
    {
      icon: <FaRobot size={40} className="text-blue-600" />,
      title: "AI Recommendations",
      description:
        "Receive personalized product suggestions based on your interests.",
    },
    {
      icon: <FaHeadset size={40} className="text-blue-600" />,
      title: "24/7 Support",
      description:
        "Our customer support team is available anytime to help you.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose ShopSmart?
          </h2>

          <p className="mt-3 text-lg text-gray-500">
            Everything you need for a smarter shopping experience.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-6">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;