import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ImpactDashboard from './components/ImpactDashboard';
import StakeholderComments from './components/StakeholderComments';
import MethodologyWiki from './components/MethodologyWiki';
import Skills from './components/Skills';
import CommandPalette from './components/CommandPalette';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-console min-h-screen text-gray-300 font-sans selection:bg-primary/30">
      <Hero />
      <div id="experience">
        <Experience />
      </div>
      <Projects />
      <ImpactDashboard />
      <MethodologyWiki />
      <StakeholderComments />
      <Skills />
      <Contact />
      <CommandPalette />
      <Footer />
    </div>
  );
}

export default App;
