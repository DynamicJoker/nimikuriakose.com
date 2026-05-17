import siteConfig from '../data/siteConfig.js';
import experience from '../data/experience.js';
import { heroSummaryText, dodItems } from '../data/hero.js';
import metrics from '../data/metrics.js';
import methodology from '../data/methodology.js';
import { completedProjects, backlogProjects, inProgressProjects } from '../data/projects.js';
import skills from '../data/skills.js';
import testimonials from '../data/testimonials.js';

const escapeHtml = (value) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const absoluteUrl = (path = '/') => new URL(path, siteConfig.siteUrl).toString();

const listItems = (items, renderItem) => items.map(renderItem).join('\n');

export const portfolioMarkdown = () => `# ${siteConfig.name}

> ${siteConfig.description}

${siteConfig.name} is a ${siteConfig.role} focused on cloud security, compliance, risk remediation, and engineering execution.

## Profile

- Role: ${siteConfig.role}
- Location: ${siteConfig.location}
- Experience: ${siteConfig.experience}
- Status: ${siteConfig.status}
- LinkedIn: ${siteConfig.linkedinUrl}

## Executive Summary

${heroSummaryText}

## Definition of Done

${dodItems.map((item) => `- ${item.text}`).join('\n')}

## Experience

${experience
  .map(
    (role) => `### ${role.role}, ${role.company}

- Period: ${role.version}
- Focus: ${role.tags.join(', ')}
- ${role.details}`
  )
  .join('\n\n')}

## Projects

${completedProjects
  .map(
    (project) => `### ${project.id}: ${project.title}

- Type: ${project.type}
- Points: ${project.points}
- ${project.description}`
  )
  .join('\n\n')}

### In Progress

${inProgressProjects.map((project) => `- ${project.id}: ${project.title} (${project.progress}% complete)`).join('\n')}

### Backlog

${backlogProjects.map((project) => `- ${project.id}: ${project.title}`).join('\n')}

## Impact Metrics

${metrics.map((metric) => `- ${metric.title}: ${metric.value} - ${metric.subtext}`).join('\n')}

## Methodology

${methodology.map((phase) => `- ${phase.title}: ${phase.description}`).join('\n')}

## Skills

${skills.map((skill) => `- ${skill.name}: ${skill.status} (${skill.category})`).join('\n')}

## Testimonials

${testimonials.map((testimonial) => `- ${testimonial.author}: ${testimonial.text} (${testimonial.status})`).join('\n')}

## Contact

Use the contact form on ${absoluteUrl('/#contact')} to create a portfolio inquiry ticket.
`;

export const llmsTxt = () => `# ${siteConfig.name}

> ${siteConfig.description}

This site is a public professional portfolio for ${siteConfig.name}, ${siteConfig.role}. The React interface is visual and interactive, but the canonical public content is also available in crawler-friendly HTML and Markdown.

## Core content

- [Homepage](${absoluteUrl('/')}): Full portfolio page with semantic HTML fallback and interactive React UI.
- [Portfolio Markdown](${absoluteUrl('/portfolio.md')}): Plain Markdown version of the public portfolio content.
- [Sitemap](${absoluteUrl('/sitemap.xml')}): Crawlable URL list.

## Notes

- Public content may be used for search indexing and user-requested retrieval.
- Automated model-training crawlers are opted out where supported by robots.txt.
`;

export const robotsTxt = () => `User-agent: GPTBot
Disallow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: *
Allow: /

Sitemap: ${absoluteUrl('/sitemap.xml')}
`;

export const sitemapXml = () => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${escapeHtml(absoluteUrl('/'))}</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${escapeHtml(absoluteUrl('/portfolio.md'))}</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${escapeHtml(absoluteUrl('/llms.txt'))}</loc>
    <priority>0.6</priority>
  </url>
</urlset>
`;

export const personJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.name,
  url: siteConfig.siteUrl,
  jobTitle: siteConfig.role,
  description: siteConfig.description,
  sameAs: [siteConfig.linkedinUrl],
  knowsAbout: skills.map((skill) => skill.name),
  worksFor: experience.map((role) => ({
    '@type': 'Organization',
    name: role.company,
  })),
});

export const staticPortfolioHtml = () => `
<style>
  .crawler-portfolio {
    min-height: 100vh;
    background: #09090b;
    color: #e4e4e7;
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    line-height: 1.6;
    padding: 2rem;
  }
  .crawler-portfolio__inner {
    max-width: 58rem;
    margin: 0 auto;
  }
  .crawler-portfolio a { color: #a5b4fc; }
  .crawler-portfolio section {
    border-top: 1px solid #27272a;
    padding: 2rem 0;
  }
  .crawler-portfolio h1 {
    color: #fff;
    font-size: clamp(2rem, 8vw, 4rem);
    line-height: 1;
    margin: 0 0 1rem;
  }
  .crawler-portfolio h2 {
    color: #fff;
    font-size: 1.5rem;
    margin: 0 0 1rem;
  }
  .crawler-portfolio h3 {
    color: #f4f4f5;
    margin-bottom: 0.25rem;
  }
  .crawler-portfolio ul {
    padding-left: 1.25rem;
  }
  .crawler-portfolio li {
    margin: 0.4rem 0;
  }
  .crawler-portfolio__card {
    background: #18181b;
    border: 1px solid #27272a;
    border-radius: 0.5rem;
    padding: 1rem;
    margin: 1rem 0;
  }
  .crawler-portfolio__meta {
    color: #a1a1aa;
    font-size: 0.95rem;
  }
  .crawler-portfolio form {
    display: grid;
    gap: 1rem;
    max-width: 36rem;
  }
  .crawler-portfolio input,
  .crawler-portfolio select,
  .crawler-portfolio textarea,
  .crawler-portfolio button {
    width: 100%;
    box-sizing: border-box;
    border-radius: 0.375rem;
    border: 1px solid #3f3f46;
    padding: 0.75rem;
    font: inherit;
  }
  .crawler-portfolio input,
  .crawler-portfolio select,
  .crawler-portfolio textarea {
    background: #09090b;
    color: #e4e4e7;
  }
  .crawler-portfolio button {
    background: #818cf8;
    color: #09090b;
    font-weight: 700;
    cursor: pointer;
  }
</style>
<article class="crawler-portfolio" aria-label="${escapeHtml(siteConfig.name)} portfolio">
  <div class="crawler-portfolio__inner">
    <header>
      <p class="crawler-portfolio__meta">${escapeHtml(siteConfig.executiveEyebrow)}</p>
      <h1>${escapeHtml(siteConfig.name)}</h1>
      <p><strong>${escapeHtml(siteConfig.role)}</strong> - ${escapeHtml(siteConfig.title)}</p>
      <p>${escapeHtml(siteConfig.description)}</p>
      <p class="crawler-portfolio__meta">${escapeHtml(siteConfig.location)} | ${escapeHtml(siteConfig.experience)} | ${escapeHtml(siteConfig.status)}</p>
      <p><a href="${escapeHtml(siteConfig.linkedinUrl)}">LinkedIn profile</a></p>
    </header>

    <section id="static-summary">
      <h2>Executive Summary</h2>
      ${heroSummaryText
        .split('\n')
        .map((line) => `<p>${escapeHtml(line)}</p>`)
        .join('\n')}
      <h3>Definition of Done</h3>
      <ul>
        ${listItems(dodItems, (item) => `<li>${escapeHtml(item.text)}</li>`)}
      </ul>
    </section>

    <section id="static-experience">
      <h2>Experience</h2>
      ${listItems(
        experience,
        (role) => `<div class="crawler-portfolio__card">
          <h3>${escapeHtml(role.role)} at ${escapeHtml(role.company)}</h3>
          <p class="crawler-portfolio__meta">${escapeHtml(role.version)} | ${escapeHtml(role.tags.join(', '))}</p>
          <p>${escapeHtml(role.details)}</p>
        </div>`
      )}
    </section>

    <section id="static-projects">
      <h2>Projects</h2>
      ${listItems(
        completedProjects,
        (project) => `<div class="crawler-portfolio__card">
          <h3>${escapeHtml(project.id)}: ${escapeHtml(project.title)}</h3>
          <p class="crawler-portfolio__meta">${escapeHtml(project.type)} | ${escapeHtml(project.points)} points</p>
          <p>${escapeHtml(project.description)}</p>
        </div>`
      )}
      <h3>In Progress</h3>
      <ul>${listItems(inProgressProjects, (project) => `<li>${escapeHtml(project.id)}: ${escapeHtml(project.title)} (${escapeHtml(project.progress)}% complete)</li>`)}</ul>
      <h3>Backlog</h3>
      <ul>${listItems(backlogProjects, (project) => `<li>${escapeHtml(project.id)}: ${escapeHtml(project.title)}</li>`)}</ul>
    </section>

    <section id="static-impact">
      <h2>Impact Metrics</h2>
      <ul>${listItems(metrics, (metric) => `<li><strong>${escapeHtml(metric.title)}:</strong> ${escapeHtml(metric.value)} - ${escapeHtml(metric.subtext)}</li>`)}</ul>
    </section>

    <section id="static-methodology">
      <h2>Methodology</h2>
      <ul>${listItems(methodology, (phase) => `<li><strong>${escapeHtml(phase.title)}:</strong> ${escapeHtml(phase.description)}</li>`)}</ul>
    </section>

    <section id="static-skills">
      <h2>Skills</h2>
      <ul>${listItems(skills, (skill) => `<li>${escapeHtml(skill.name)} - ${escapeHtml(skill.status)} (${escapeHtml(skill.category)})</li>`)}</ul>
    </section>

    <section id="static-testimonials">
      <h2>Testimonials</h2>
      ${listItems(
        testimonials,
        (testimonial) => `<blockquote class="crawler-portfolio__card">
          <p>${escapeHtml(testimonial.text)}</p>
          <footer>${escapeHtml(testimonial.author)} - ${escapeHtml(testimonial.status)}</footer>
        </blockquote>`
      )}
    </section>

    <section id="contact">
      <h2>Contact</h2>
      <form action="${escapeHtml(siteConfig.contactForm.endpoint)}" method="POST">
        <input type="hidden" name="access_key" value="${escapeHtml(siteConfig.contactForm.accessKey)}">
        <input type="hidden" name="subject" value="${escapeHtml(siteConfig.contactForm.subject)}">
        <input type="hidden" name="from_name" value="${escapeHtml(siteConfig.contactForm.fromName)}">
        <input type="checkbox" name="botcheck" style="display:none" tabindex="-1" autocomplete="off">
        <label>
          Summary
          <input name="summary" type="text" required>
        </label>
        <label>
          Reporter Contact
          <input name="email" type="email" required>
        </label>
        <label>
          Priority
          <select name="priority">
            <option value="Highest (Blocker)">Highest (Blocker)</option>
            <option value="High">High</option>
            <option value="Medium" selected>Medium</option>
            <option value="Low">Low</option>
          </select>
        </label>
        <label>
          Description
          <textarea name="message" rows="5"></textarea>
        </label>
        <button type="submit">Create Ticket</button>
      </form>
    </section>
  </div>
</article>
`;
