import { useState } from 'react';
import HeroContainer from './components/HeroContainer';
import TopNavBar from './components/TopNavBar';
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
  const [isJiraMaximized, setIsJiraMaximized] = useState(true);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-console font-sans text-gray-300 selection:bg-primary/30">
      <TopNavBar
        isJiraMaximized={isJiraMaximized}
        setIsJiraMaximized={setIsJiraMaximized}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />
      {/* ── Hero / Epic ticket ─────────────────────────────── */}
      <HeroContainer isJiraMaximized={isJiraMaximized} setIsJiraMaximized={setIsJiraMaximized} />

      {/* ── Career timeline ────────────────────────────────── */}
      <div id="experience">
        <Experience />
      </div>

      {/* ── Sprint board (projects) ────────────────────────── */}
      <div id="projects">
        <Projects />
      </div>

      {/* ── KPI metrics ────────────────────────────────────── */}
      <div id="impact">
        <ImpactDashboard />
      </div>

      {/* ── PM methodology / SOP ───────────────────────────── */}
      <div id="methodology-wiki">
        <MethodologyWiki />
      </div>

      {/* ── Testimonials ───────────────────────────────────── */}
      <div id="testimonials">
        <StakeholderComments />
      </div>

      {/* ── Skills matrix ──────────────────────────────────── */}
      <div id="skills">
        <Skills />
      </div>

      {/* ── Contact form ───────────────────────────────────── */}
      <div id="contact">
        <Contact />
      </div>

      {/* ── Global overlays & chrome ───────────────────────── */}
      <CommandPalette open={isCommandPaletteOpen} onOpenChange={setIsCommandPaletteOpen} />
      <Footer />
    </div>
  );
}

export default App;
