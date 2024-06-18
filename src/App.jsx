import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/navbar";
import Parallax from "./components/parallax/Parallax";


const App = () => {
  return <div>
    <section id="Homepages">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services"><Parallax type="services"/></section>
  <section>Services</section>
  <section id="Portfolio"><Parallax type="portfolio"/></section>
  <section>portfolio1</section>
  <section>portfolio2</section>
  <section>portfolio3</section>
<section id="Contact">Contact</section>
  </div>;
};

export default App;
