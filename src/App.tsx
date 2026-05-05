/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Environment from './components/Environment';
import Reviews from './components/Reviews';
import Units from './components/Units';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Environment />
        <Reviews />
        <Units />
      </main>
      <Footer />
    </div>
  );
}
