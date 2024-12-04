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
      <Hero />
      <main>
        <section id="about">
          <About />
        </section>
        <section id="sustainabilty">
          <Sustainability />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
