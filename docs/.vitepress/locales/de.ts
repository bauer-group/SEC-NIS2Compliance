import type { LocaleSpecificConfig } from 'vitepress'
import type { ThemeConfig } from '../theme/types'

export const de: LocaleSpecificConfig<ThemeConfig> & { label: string; link: string } = {
  label: 'Deutsch',
  lang: 'de-DE',
  link: '/de/',
  description: 'NIS2-Richtlinie – Compliance-Dokumentation | BAUER GROUP',

  themeConfig: {
    // -----------------------------------------------------------------
    // Announcement Banner
    // -----------------------------------------------------------------

    announcement: {
      text: 'Dieses Dokument befindet sich in aktiver Entwicklung und ist noch nicht finalisiert.',
      type: 'warning',
      dismissible: true,
    },

    // -----------------------------------------------------------------
    // Navigation
    // -----------------------------------------------------------------

    nav: [
      { text: 'Einführung', link: '/de/overview/' },
      {
        text: 'Risikomanagement',
        items: [
          { text: 'Risikoanalyse & ISMS', link: '/de/risk-management/' },
          { text: 'Vorfallmanagement', link: '/de/incident-management/' },
          { text: 'Business Continuity', link: '/de/business-continuity/' },
          { text: 'Lieferkettensicherheit', link: '/de/supply-chain/' },
        ]
      },
      {
        text: 'Technische Maßnahmen',
        items: [
          { text: 'Schwachstellenmanagement', link: '/de/vulnerability-management/' },
          { text: 'Kryptografie', link: '/de/cryptography/' },
          { text: 'Zugriffskontrolle & MFA', link: '/de/access-control/' },
        ]
      },
      {
        text: 'Governance',
        items: [
          { text: 'Wirksamkeitsprüfung', link: '/de/effectiveness-review/' },
          { text: 'Schulung & Awareness', link: '/de/training/' },
          { text: 'Geschäftsleitungspflichten', link: '/de/governance/' },
        ]
      },
      { text: 'Compliance-Matrix', link: '/de/compliance-matrix/' },
    ],

    // -----------------------------------------------------------------
    // Sidebar
    // -----------------------------------------------------------------

    sidebar: {
      '/de/': [
        {
          text: '1. Einführung',
          collapsed: false,
          items: [
            { text: 'Übersicht', link: '/de/overview/' },
            { text: 'Regulatorischer Rahmen', link: '/de/overview/regulatory-framework' },
          ]
        },
        {
          text: '2. Risikomanagement',
          collapsed: true,
          items: [
            { text: 'Risikoanalyse & ISMS', link: '/de/risk-management/' },
          ]
        },
        {
          text: '3. Vorfallmanagement',
          collapsed: true,
          items: [
            { text: 'Incident Response & Meldepflichten', link: '/de/incident-management/' },
          ]
        },
        {
          text: '4. Business Continuity',
          collapsed: true,
          items: [
            { text: 'Backup, DR & Krisenmanagement', link: '/de/business-continuity/' },
          ]
        },
        {
          text: '5. Lieferkettensicherheit',
          collapsed: true,
          items: [
            { text: 'Dienstleisterbewertung & Supply Chain', link: '/de/supply-chain/' },
          ]
        },
        {
          text: '6. Schwachstellenmanagement',
          collapsed: true,
          items: [
            { text: 'Scanning, Patching & Secure Development', link: '/de/vulnerability-management/' },
          ]
        },
        {
          text: '7. Wirksamkeitsprüfung',
          collapsed: true,
          items: [
            { text: 'Audits, KPIs & Penetrationstests', link: '/de/effectiveness-review/' },
          ]
        },
        {
          text: '8. Schulung & Awareness',
          collapsed: true,
          items: [
            { text: 'Pflichtschulungen & Cyberhygiene', link: '/de/training/' },
          ]
        },
        {
          text: '9. Kryptografie',
          collapsed: true,
          items: [
            { text: 'Verschlüsselung & Key Management', link: '/de/cryptography/' },
          ]
        },
        {
          text: '10. Zugriffskontrolle',
          collapsed: true,
          items: [
            { text: 'Authentifizierung, MFA & sichere Kommunikation', link: '/de/access-control/' },
          ]
        },
        {
          text: '11. Governance',
          collapsed: true,
          items: [
            { text: 'Geschäftsleitungspflichten & Struktur', link: '/de/governance/' },
          ]
        },
        {
          text: '12. Compliance-Matrix',
          collapsed: false,
          items: [
            { text: 'Anforderungszuordnung & Synergien', link: '/de/compliance-matrix/' },
          ]
        },
      ],
    },

    // -----------------------------------------------------------------
    // UI Translations
    // -----------------------------------------------------------------

    editLink: {
      pattern: 'https://github.com/bauer-group/SEC-NIS2Compliance/edit/main/docs/:path',
      text: 'Diese Seite bearbeiten'
    },
    lastUpdated: {
      text: 'Zuletzt aktualisiert',
      formatOptions: { dateStyle: 'long', timeStyle: 'short' }
    },
    outline: { label: 'Auf dieser Seite', level: [2, 3] },
    docFooter: { prev: 'Vorherige Seite', next: 'Nächste Seite' },
    returnToTopLabel: 'Zurück nach oben',
    sidebarMenuLabel: 'Menü',
    darkModeSwitchLabel: 'Erscheinungsbild',
    langMenuLabel: 'Sprache',

    footer: {
      message: 'Dokumentation lizenziert unter <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank">CC BY-NC 4.0</a> · Code lizenziert unter <a href="https://opensource.org/licenses/MIT" target="_blank">MIT</a>',
      copyright: `© ${new Date().getFullYear()} BAUER GROUP. Kommerzielle Nutzung der Dokumentation nicht gestattet.`
    },
  }
}
