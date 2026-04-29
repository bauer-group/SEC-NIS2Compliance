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

    // Banner deaktiviert — bei Bedarf erneut aktivieren, indem das Objekt unten unkommentiert wird.
    // announcement: {
    //   text: 'Dieses Dokument befindet sich in aktiver Entwicklung und ist noch nicht finalisiert.',
    //   type: 'warning',
    //   dismissible: true,
    // },

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
      { text: 'Vorlagen', link: '/de/templates/' },
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
            { text: 'CRA- & AI-Act-Synergien', link: '/de/overview/synergies' },
          ]
        },
        {
          text: '2. Risikomanagement',
          collapsed: true,
          items: [
            { text: 'Übersicht', link: '/de/risk-management/' },
            { text: 'Informationssicherheitspolitik', link: '/de/risk-management/isms-policy' },
            { text: 'Risikoanalyse', link: '/de/risk-management/risk-analysis' },
            { text: 'Asset-Inventar', link: '/de/risk-management/asset-inventory' },
          ]
        },
        {
          text: '3. Vorfallmanagement',
          collapsed: true,
          items: [
            { text: 'Übersicht', link: '/de/incident-management/' },
            { text: 'Incident-Response-Prozess', link: '/de/incident-management/response-process' },
            { text: 'Meldepflichten (§32)', link: '/de/incident-management/reporting' },
            { text: 'Eskalation & Kommunikation', link: '/de/incident-management/escalation' },
          ]
        },
        {
          text: '4. Business Continuity',
          collapsed: true,
          items: [
            { text: 'Übersicht', link: '/de/business-continuity/' },
            { text: 'Backup-Strategie', link: '/de/business-continuity/backup-strategy' },
            { text: 'Disaster Recovery', link: '/de/business-continuity/disaster-recovery' },
            { text: 'Krisenmanagement', link: '/de/business-continuity/crisis-management' },
          ]
        },
        {
          text: '5. Lieferkettensicherheit',
          collapsed: true,
          items: [
            { text: 'Übersicht', link: '/de/supply-chain/' },
            { text: 'Dienstleisterbewertung', link: '/de/supply-chain/vendor-assessment' },
            { text: 'Vertragliche Anforderungen', link: '/de/supply-chain/contractual-requirements' },
          ]
        },
        {
          text: '6. Schwachstellenmanagement',
          collapsed: true,
          items: [
            { text: 'Übersicht', link: '/de/vulnerability-management/' },
            { text: 'Scanning & CVE-Monitoring', link: '/de/vulnerability-management/scanning' },
            { text: 'Patch Management', link: '/de/vulnerability-management/patch-management' },
            { text: 'Secure Development', link: '/de/vulnerability-management/secure-development' },
          ]
        },
        {
          text: '7. Wirksamkeitsprüfung',
          collapsed: true,
          items: [
            { text: 'Übersicht', link: '/de/effectiveness-review/' },
            { text: 'Audit-Programm', link: '/de/effectiveness-review/audit-program' },
            { text: 'KPIs & Metriken', link: '/de/effectiveness-review/kpis' },
          ]
        },
        {
          text: '8. Schulung & Awareness',
          collapsed: true,
          items: [
            { text: 'Übersicht', link: '/de/training/' },
            { text: 'Schulungsprogramm', link: '/de/training/training-program' },
            { text: 'Awareness & Cyberhygiene', link: '/de/training/awareness' },
          ]
        },
        {
          text: '9. Kryptografie',
          collapsed: true,
          items: [
            { text: 'Übersicht', link: '/de/cryptography/' },
            { text: 'Verschlüsselungsstandards', link: '/de/cryptography/encryption-standards' },
            { text: 'Key Management', link: '/de/cryptography/key-management' },
          ]
        },
        {
          text: '10. Zugriffskontrolle',
          collapsed: true,
          items: [
            { text: 'Übersicht', link: '/de/access-control/' },
            { text: 'Authentifizierung & MFA', link: '/de/access-control/authentication' },
            { text: 'Autorisierung & Berechtigungen', link: '/de/access-control/authorization' },
            { text: 'Sichere Kommunikation', link: '/de/access-control/secure-communication' },
          ]
        },
        {
          text: '11. Governance',
          collapsed: true,
          items: [
            { text: 'Übersicht', link: '/de/governance/' },
            { text: 'Geschäftsleitungspflichten (§38)', link: '/de/governance/management-duties' },
            { text: 'Berichtswesen & Struktur', link: '/de/governance/reporting-structure' },
          ]
        },
        {
          text: '12. Compliance-Matrix',
          collapsed: false,
          items: [
            { text: 'Anforderungszuordnung', link: '/de/compliance-matrix/' },
            { text: 'CRA- & AI-Act-Synergien', link: '/de/compliance-matrix/synergies' },
          ]
        },
        {
          text: 'A. Vorlagen',
          collapsed: true,
          items: [
            { text: 'Übersicht', link: '/de/templates/' },
            { text: 'Risiko-Register', link: '/de/templates/risk-register' },
            { text: '§32-Meldevorlage', link: '/de/templates/incident-report' },
            { text: 'DR-Testprotokoll', link: '/de/templates/dr-test-protocol' },
            { text: 'Lieferantenbewertung', link: '/de/templates/vendor-assessment' },
            { text: 'Schulungsnachweis', link: '/de/templates/training-record' },
            { text: 'Geschäftsleitungs-Billigung', link: '/de/templates/management-approval' },
            { text: 'Lessons-Learned-Protokoll', link: '/de/templates/lessons-learned' },
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
