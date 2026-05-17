import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import siteConfig from './src/data/siteConfig.js'
import {
  llmsTxt,
  personJsonLd,
  portfolioMarkdown,
  robotsTxt,
  sitemapXml,
  staticPortfolioHtml,
} from './src/content/staticPortfolio.js'

const jsonLdScript = () =>
  `<script type="application/ld+json">${JSON.stringify(personJsonLd()).replace(/</g, '\\u003c')}</script>`

const jsEnabledFallbackGuard = () => `
    <script>document.documentElement.classList.add('js-enabled')</script>
    <style>html.js-enabled body{background:#09090b}html.js-enabled #root>.crawler-portfolio{display:none!important}</style>`

const aiReadablePortfolio = () => ({
  name: 'ai-readable-portfolio',
  transformIndexHtml(html) {
    return html
      .replace('<div id="root"></div>', `<div id="root">${staticPortfolioHtml()}</div>`)
      .replace(
        '</head>',
        `    <link rel="canonical" href="${siteConfig.siteUrl}" />${jsEnabledFallbackGuard()}\n    ${jsonLdScript()}\n  </head>`
      )
  },
  generateBundle() {
    this.emitFile({ type: 'asset', fileName: 'portfolio.md', source: portfolioMarkdown() })
    this.emitFile({ type: 'asset', fileName: 'llms.txt', source: llmsTxt() })
    this.emitFile({ type: 'asset', fileName: 'robots.txt', source: robotsTxt() })
    this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemapXml() })
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), aiReadablePortfolio()],
})
