import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Hero from './Components/hero/Hero';
import Navbar from './Components/navbar/navbar';
import Parallax from './Components/parallex/Parallax';
import './app.scss'

const App = () => {
  return <div>
    <section id="Homepage"><Navbar /> <Hero /> </section>
    <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <About />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
    <section id="Contact">Contact</section>
    </div>;
};

export default App;
