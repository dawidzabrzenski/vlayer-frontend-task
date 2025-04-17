import Navbar from "./components/Navbar/Navbar";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Offer from "./sections/Offer";
import Testimonials from "./sections/Testimonials";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Offer />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
