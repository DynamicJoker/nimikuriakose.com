/**
 * Site-wide configuration.
 * ─────────────────────────
 * Update personal details, social links, and site metadata here.
 * Every component pulls from this file — no hunting through JSX.
 */

const siteConfig = {
  name: 'Nimi Kuriakose',
  initials: 'NK',
  title: 'Bridging Engineering, Support, and Security',
  role: 'Security Project Manager',
  location: 'Remote / Hybrid',
  experience: '10+ Years Exp.',
  status: 'EVALUATING OPPORTUNITIES',
  linkedinUrl: 'https://www.linkedin.com/in/nimik',
  resumeUrl: null, // Set to a URL when a downloadable resume is available
  version: '2.0.1',
  
  // Executive View Data
  executiveEyebrow: 'Executive Briefing',
  executiveSubtitle: 'Security Project Management Leader.',
  executiveDescription: 'Bridging the gap between engineering execution, enterprise security, and C-suite strategy.',
  
  navLinks: [
    { label: 'Home', targetId: 'top' },
    { label: 'Experience', targetId: 'experience' },
    { label: 'Projects', targetId: 'projects' },
    { label: 'Impact', targetId: 'impact' },
    { label: 'Methodology', targetId: 'methodology-wiki' },
    { label: 'Testimonials', targetId: 'testimonials' },
    { label: 'Skills', targetId: 'skills' },
    { label: 'Contact', targetId: 'contact' },
  ],
};

export default siteConfig;
