import type { LocaleSpecificConfig } from 'vitepress'
import type { ThemeConfig } from '../theme/types'

export const en: LocaleSpecificConfig<ThemeConfig> & { label: string; link: string } = {
  label: 'English',
  lang: 'en',
  link: '/en/',
  description: 'NIS2 Directive – Compliance Documentation | BAUER GROUP',

  themeConfig: {
    // Banner disabled — re-enable by uncommenting the object below if needed.
    // announcement: {
    //   text: 'This document is under active development and has not been finalized.',
    //   type: 'warning',
    //   dismissible: true,
    // },

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
      { text: 'Templates', link: '/en/templates/' },
    ],

    sidebar: {
      '/en/': [
        {
          text: '1. Introduction',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/en/overview/' },
            { text: 'Regulatory Framework', link: '/en/overview/regulatory-framework' },
            { text: 'CRA & AI Act Synergies', link: '/en/overview/synergies' },
          ]
        },
        {
          text: '2. Risk Management',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/en/risk-management/' },
            { text: 'Information Security Policy', link: '/en/risk-management/isms-policy' },
            { text: 'Risk Analysis', link: '/en/risk-management/risk-analysis' },
            { text: 'Asset Inventory', link: '/en/risk-management/asset-inventory' },
          ]
        },
        {
          text: '3. Incident Management',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/en/incident-management/' },
            { text: 'Incident Response Process', link: '/en/incident-management/response-process' },
            { text: 'Reporting Obligations (§32)', link: '/en/incident-management/reporting' },
            { text: 'Escalation & Communication', link: '/en/incident-management/escalation' },
          ]
        },
        {
          text: '4. Business Continuity',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/en/business-continuity/' },
            { text: 'Backup Strategy', link: '/en/business-continuity/backup-strategy' },
            { text: 'Disaster Recovery', link: '/en/business-continuity/disaster-recovery' },
            { text: 'Crisis Management', link: '/en/business-continuity/crisis-management' },
          ]
        },
        {
          text: '5. Supply Chain Security',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/en/supply-chain/' },
            { text: 'Vendor Assessment', link: '/en/supply-chain/vendor-assessment' },
            { text: 'Contractual Requirements', link: '/en/supply-chain/contractual-requirements' },
          ]
        },
        {
          text: '6. Vulnerability Management',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/en/vulnerability-management/' },
            { text: 'Scanning & CVE Monitoring', link: '/en/vulnerability-management/scanning' },
            { text: 'Patch Management', link: '/en/vulnerability-management/patch-management' },
            { text: 'Secure Development', link: '/en/vulnerability-management/secure-development' },
          ]
        },
        {
          text: '7. Effectiveness Review',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/en/effectiveness-review/' },
            { text: 'Audit Program', link: '/en/effectiveness-review/audit-program' },
            { text: 'KPIs & Metrics', link: '/en/effectiveness-review/kpis' },
          ]
        },
        {
          text: '8. Training & Awareness',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/en/training/' },
            { text: 'Training Program', link: '/en/training/training-program' },
            { text: 'Awareness & Cyber Hygiene', link: '/en/training/awareness' },
          ]
        },
        {
          text: '9. Cryptography',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/en/cryptography/' },
            { text: 'Encryption Standards', link: '/en/cryptography/encryption-standards' },
            { text: 'Key Management', link: '/en/cryptography/key-management' },
          ]
        },
        {
          text: '10. Access Control',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/en/access-control/' },
            { text: 'Authentication & MFA', link: '/en/access-control/authentication' },
            { text: 'Authorization & Permissions', link: '/en/access-control/authorization' },
            { text: 'Secure Communication', link: '/en/access-control/secure-communication' },
          ]
        },
        {
          text: '11. Governance',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/en/governance/' },
            { text: 'Management Duties (§38)', link: '/en/governance/management-duties' },
            { text: 'Reporting & Structure', link: '/en/governance/reporting-structure' },
          ]
        },
        {
          text: '12. Compliance Matrix',
          collapsed: false,
          items: [
            { text: 'Requirements Mapping', link: '/en/compliance-matrix/' },
            { text: 'CRA & AI Act Synergies', link: '/en/compliance-matrix/synergies' },
          ]
        },
        {
          text: 'A. Templates',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/en/templates/' },
            { text: 'Risk Register', link: '/en/templates/risk-register' },
            { text: '§32 Incident Report', link: '/en/templates/incident-report' },
            { text: 'DR Test Protocol', link: '/en/templates/dr-test-protocol' },
            { text: 'Vendor Assessment', link: '/en/templates/vendor-assessment' },
            { text: 'Training Record', link: '/en/templates/training-record' },
            { text: 'Management Approval', link: '/en/templates/management-approval' },
            { text: 'Lessons Learned Protocol', link: '/en/templates/lessons-learned' },
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
