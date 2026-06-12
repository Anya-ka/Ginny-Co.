import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import GlobalAdvisory from './components/GlobalAdvisory';
import WhoWeServe from './components/WhoWeServe';
import WhyChooseUs from './components/WhyChooseUs';
import FAQ from './components/FAQ';
import Insights from './components/Insights';
import Contact from './components/Contact';
import Map from './components/Map';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <GlobalAdvisory />
        <WhoWeServe />
        <WhyChooseUs />
        <FAQ />
        <Insights />
        <Contact />
        <Map />
      </main>
      <Footer />
    </>
  );
}

export default App;
