import Navbar from "./components/partials/Navbar";
import Footer from "./components/partials/Footer";
import Hero from "./components/homepage/Hero";
import Features from "./components/homepage/Features";
import Overview from "./components/homepage/Overview";
import Testimonials from "./components/homepage/Testimonials";
function App() {
  return (
    <>
    <div className="container-fluid pb-5">
      <Navbar/>
      <Hero/>
      <Features/>
      <Overview/>
      <Testimonials/>
    </div>
    <Footer/>
    </>
    
  );
}

export default App;
