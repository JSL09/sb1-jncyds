import React, { useState } from 'react';
import { Instagram, Youtube, Music as MusicIcon } from 'lucide-react';
import SpiderWeb from './components/SpiderWeb';
import Navbar from './components/Navbar';
import Biography from './components/Biography';
import Music from './components/Music';
import Stories from './components/Stories';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('biography');

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 relative overflow-hidden">
      <SpiderWeb />
      <div className="container mx-auto px-4 py-8 relative z-10">
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
        <main className="mt-8">
          {activeSection === 'biography' && <Biography />}
          {activeSection === 'music' && <Music />}
          {activeSection === 'stories' && <Stories />}
          {activeSection === 'contact' && <Contact />}
        </main>
        <footer className="mt-16 flex justify-center space-x-6">
          <a href="https://instagram.com/jimmyshibaru" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400">
            <Instagram size={24} />
          </a>
          <a href="https://youtube.com/jimmyshibaru" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400">
            <Youtube size={24} />
          </a>
          <a href="https://open.spotify.com/artist/jimmyshibaru" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400">
            <MusicIcon size={24} />
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;