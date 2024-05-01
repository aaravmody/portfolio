import About from './Components/About/About';
import Navigation from './Components/Navigation/Navigation';
import Portfolio from './Components/Portfolio/Portfolio';
import Hero from './Components/hero/Hero';
import Parallax from './Components/parallex/Parallax';
import './app.scss'

const App = () => {
  return <div>
    <section id="Homepage"><Navigation /> <Hero /> </section>
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
