import About from './Components/About/About';
import Navigation from './Components/Navigation/Navigation';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/contact/Contact';
import Hero from './Components/hero/Hero';
import Parallax from './Components/parallex/Parallax';
import './app.scss'

const App = () => {
  return <div>
    <section id="Homepage"><Navigation /> <Hero /> </section>
    <section id="About Me">
        <Parallax type="services" />
      </section>
      <section>
        <About />
      </section>
      <section id="Projects">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
    <section id="Contact"><Contact /></section>
    </div>;
};

export default App;
