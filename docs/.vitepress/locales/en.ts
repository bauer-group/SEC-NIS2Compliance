import type { LocaleSpecificConfig } from 'vitepress'
import type { ThemeConfig } from '../theme/types'

export const en: LocaleSpecificConfig<ThemeConfig> & { label: string; link: string } = {
  label: 'English',
  lang: 'en',
  link: '/en/',
  description: 'NIS2 Directive – Compliance Documentation | BAUER GROUP',

  themeConfig: {
    announcement: {
      text: 'This document is under active development and has not been finalized.',
      type: 'warning',
      dismissible: true,
    },

    nav: [
      { text: 'Introduction', link: '/en/overview/' },
      {
        text: 'Risk Management',
        items: [
          { text: 'Risk Analysis & ISMS', link: '/en/risk-management/' },
          { text: 'Incident Management', link: '/en/incident-management/' },
          { text: 'Business Continuity', link: '/en/business-continuity/' },
          { text: 'Supply Chain Security', link: '/en/supply-chain/' },
        ]
      },
      {
        text: 'Technical Measures',
        items: [
          { text: 'Vulnerability Management', link: '/en/vulnerability-management/' },
          { text: 'Cryptography', link: '/en/cryptography/' },
          { text: 'Access Control & MFA', link: '/en/access-control/' },
        ]
      },
      {
        text: 'Governance',
        items: [
          { text: 'Effectiveness Review', link: '/en/effectiveness-review/' },
          { text: 'Training & Awareness', link: '/en/training/' },
          { text: 'Management Duties', link: '/en/governance/' },
        ]
      },
      { text: 'Compliance Matrix', link: '/en/compliance-matrix/' },
    ],

    sidebar: {
      '/en/': [
        {
          text: '1. Introduction',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/en/overview/' },
            { text: 'Regulatory Framework', link: '/en/overview/regulatory-framework' },
          ]
        },
        {
          text: '2. Risk Management',
          collapsed: true,
          items: [
            { text: 'Risk Analysis & ISMS', link: '/en/risk-management/' },
          ]
        },
        {
          text: '3. Incident Management',
          collapsed: true,
          items: [
            { text: 'Incident Response & Reporting', link: '/en/incident-management/' },
          ]
        },
        {
          text: '4. Business Continuity',
          collapsed: true,
          items: [
            { text: 'Backup, DR & Crisis Management', link: '/en/business-continuity/' },
          ]
        },
        {
          text: '5. Supply Chain Security',
          collapsed: true,
          items: [
            { text: 'Vendor Assessment & Supply Chain', link: '/en/supply-chain/' },
          ]
        },
        {
          text: '6. Vulnerability Management',
          collapsed: true,
          items: [
            { text: 'Scanning, Patching & Secure Development', link: '/en/vulnerability-management/' },
          ]
        },
        {
          text: '7. Effectiveness Review',
          collapsed: true,
          items: [
            { text: 'Audits, KPIs & Penetration Testing', link: '/en/effectiveness-review/' },
          ]
        },
        {
          text: '8. Training & Awareness',
          collapsed: true,
          items: [
            { text: 'Mandatory Training & Cyber Hygiene', link: '/en/training/' },
          ]
        },
        {
          text: '9. Cryptography',
          collapsed: true,
          items: [
            { text: 'Encryption & Key Management', link: '/en/cryptography/' },
          ]
        },
        {
          text: '10. Access Control',
          collapsed: true,
          items: [
            { text: 'Authentication, MFA & Secure Communication', link: '/en/access-control/' },
          ]
        },
        {
          text: '11. Governance',
          collapsed: true,
          items: [
            { text: 'Management Duties & Structure', link: '/en/governance/' },
          ]
        },
        {
          text: '12. Compliance Matrix',
          collapsed: false,
          items: [
            { text: 'Requirements Mapping & Synergies', link: '/en/compliance-matrix/' },
          ]
        },
      ],
    },

    editLink: {
      pattern: 'https://github.com/bauer-group/SEC-NIS2Compliance/edit/main/docs/:path',
      text: 'Edit this page'
    },
    lastUpdated: {
      text: 'Last updated',
      formatOptions: { dateStyle: 'long', timeStyle: 'short' }
    },
    outline: { label: 'On this page', level: [2, 3] },
    docFooter: { prev: 'Previous page', next: 'Next page' },
    returnToTopLabel: 'Back to top',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Appearance',
    langMenuLabel: 'Language',

    footer: {
      message: 'Documentation licensed under <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank">CC BY-NC 4.0</a> · Code licensed under <a href="https://opensource.org/licenses/MIT" target="_blank">MIT</a>',
      copyright: `© ${new Date().getFullYear()} BAUER GROUP. Commercial use of documentation not permitted.`
    },
  }
}
