import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';

function App() {
  return (
    <Suspense fallback={<div className="bg-[#050505] min-h-screen" />}>
      <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-blue-500/30 relative">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Gallery />
          <Contact />
        </main>
        <Footer />

        {/* Плаваюча кнопка WhatsApp для всіх мов та розділів */}
        <a
          href="https://wa.me/34633260683"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center justify-center border border-white/20"
        >
          <MessageCircle size={28} />
        </a>
      </div>
    </Suspense>
  );
}

export default App;
