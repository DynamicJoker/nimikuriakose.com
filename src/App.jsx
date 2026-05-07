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

  return (
    <div className="bg-console min-h-screen text-gray-300 font-sans selection:bg-primary/30 relative">
      <TopNavBar isJiraMaximized={isJiraMaximized} setIsJiraMaximized={setIsJiraMaximized} />
      {/* ── Hero / Epic ticket ─────────────────────────────── */}
      <HeroContainer isJiraMaximized={isJiraMaximized} setIsJiraMaximized={setIsJiraMaximized} />

      {/* ── Career timeline ────────────────────────────────── */}
      <div id="experience">
        <Experience />
      </div>

      {/* ── Sprint board (projects) ────────────────────────── */}
      <Projects />

      {/* ── KPI metrics ────────────────────────────────────── */}
      <ImpactDashboard />

      {/* ── PM methodology / SOP ───────────────────────────── */}
      <div id="methodology-wiki">
        <MethodologyWiki />
      </div>

      {/* ── Testimonials ───────────────────────────────────── */}
      <StakeholderComments />

      {/* ── Skills matrix ──────────────────────────────────── */}
      <Skills />

      {/* ── Contact form ───────────────────────────────────── */}
      <div id="contact">
        <Contact />
      </div>

      {/* ── Global overlays & chrome ───────────────────────── */}
      <CommandPalette />
      <Footer />
    </div>
  );
}

export default App;
