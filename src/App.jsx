import { Element } from 'react-scroll';
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Sustainability from "./components/Sustainability";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Element name="hero">
        <Hero />
      </Element>
      <main>
        <Element name="about">
          <About />
        </Element>
        <Element name="sustainability">
          <Sustainability />
        </Element>
        <Element name="services">
          <Services />
        </Element>
        <Element name="gallery">
          <Gallery />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </main>
      <Footer />
    </div>
  );
}

export default App;