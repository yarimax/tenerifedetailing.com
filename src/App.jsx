import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Suspense fallback={<div className="bg-[#050505] min-h-screen" />}>
      <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-blue-500/30">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Gallery />
          <Contact />
        </main>
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;