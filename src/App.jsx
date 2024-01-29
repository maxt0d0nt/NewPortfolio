import "./app.scss";
import Navbar from "./components/navbar/navbar";


const App = () => {
  return <div>
    <section>
      <Navbar/>
    </section>
    <section id="Homepages">Parallax</section>
  <section id="Services">Services</section>
  <section id="Portfolio">Parallax</section>
  <section>portfolio1</section>
  <section>portfolio2</section>
  <section>portfolio3</section>
<section id="Contact">Contact</section>
  </div>;
};

export default App;
