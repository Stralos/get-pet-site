import React from 'react';
import Header from 'src/components/Header';
import About from 'src/components/About';
import GetApp from 'src/components/GetApp';
import Stats from 'src/components/Stats';
import FAQ from 'src/components/FAQ';
import Footer from 'src/components/Footer';

export default () => (
  <div>
    <Header />
    <GetApp />
    <About />
    <FAQ />
    <Stats />
    <Footer />
  </div>
);
