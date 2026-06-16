import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Quote from './components/Quote';
import About from './components/About';
import Services from './components/Services';
import GlobalAdvisory from './components/GlobalAdvisory';
import WhoWeServe from './components/WhoWeServe';
import FAQ from './components/FAQ';

import Contact from './components/Contact';
import Footer from './components/Footer';
import LegalPage from './components/LegalPage';

const legalPages = new Set(['privacy-policy', 'terms-of-service', 'disclaimer']);


function App() {
  const [hash, setHash] = useState(() => window.location.hash);
  const pageKey = hash.replace('#', '');
  const showLegalPage = legalPages.has(pageKey);

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (showLegalPage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (!hash) return;
    window.setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  }, [hash, showLegalPage]);

  return (
    <>
      <Navbar />
      {showLegalPage ? (
        <LegalPage pageKey={pageKey} />
      ) : (
        <main>
          <Hero />
          <Quote />
          <About />
          <Services />
          <GlobalAdvisory />
          <WhoWeServe />
          <FAQ />
          <Contact />
        </main>
      )}
      <Footer />
    </>
  );
}

export default App;
