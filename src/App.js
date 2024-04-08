import Navbar from "./components/partials/Navbar";
import Footer from "./components/partials/Footer";
import Hero from "./components/homepage/Hero";
function App() {
  return (
    <>
    <div className="container-fluid pb-5">
      <Navbar/>
      <Hero/>
    </div>
    <Footer/>
    </>
    
  );
}

export default App;
