/**
 * Site-wide configuration.
 * ─────────────────────────
 * Update personal details, social links, and site metadata here.
 * Every component pulls from this file — no hunting through JSX.
 */

const siteConfig = {
  name: 'Nimi Kuriakose',
  initials: 'NK',
  siteUrl: 'https://nimikuriakose.com',
  description:
    'Nimi Kuriakose is a Security Project Manager bridging engineering execution, enterprise security, compliance, and cloud infrastructure strategy.',
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

  contactForm: {
    endpoint: 'https://api.web3forms.com/submit',
    accessKey: 'ebcde855-9e05-43e8-a93e-d603573e5647',
    subject: 'New Portfolio Contact for Nimi Kuriakose',
    fromName: 'nimikuriakose.com',
  },
  
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
