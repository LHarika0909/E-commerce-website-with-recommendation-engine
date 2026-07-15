import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero";
import Categories from "./components/layout/Categories";
import FeaturedProducts from "./components/layout/FeaturedProducts";
import WhyChooseUs from "./components/layout/WhyChooseUs";
import OfferBanner from "./components/layout/OfferBanner";
import Newsletter from "./components/layout/Newsletter";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <WhyChooseUs />
      <OfferBanner />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;