# NIS2 Compliance Documentation

Vollständige Compliance-Dokumentation für die **NIS2-Richtlinie** (Richtlinie (EU) 2022/2555) und das **NIS2-Umsetzungsgesetz** (BSIG) der BAUER GROUP.

> **Live-Dokumentation:** [nis2.docs.bauer-group.com](https://nis2.docs.bauer-group.com)
>
> Verfügbar in **Deutsch**, **English** und **简体中文** (Vereinfachtes Chinesisch)

## Regulatorische Fristen

| Frist | Pflicht | Status |
| --- | --- | --- |
| **16.01.2023** | NIS2-Richtlinie (EU) 2022/2555 in Kraft | ✅ In Kraft |
| **06.12.2025** | NIS2UmsuCG / BSIG-Neufassung in Kraft | ✅ In Kraft |
| **17.03.2026** | KRITIS-Dachgesetz (KRITIS-DachG) in Kraft | ✅ In Kraft |
| **17.07.2026** | KRITIS-DachG: Frühester Beginn der Registrierungspflicht (3 Monate nach Identifikation als Kritische Anlage) | 🟡 Vorbereitung |

## Projektstruktur

```text
.
├── docs/                          # VitePress-Dokumentation
│   ├── de/                        # Deutsche Dokumentation (12 Kapitel)
│   │   ├── overview/              # 1. Einführung & regulatorischer Rahmen
│   │   ├── risk-management/       # 2. Risikomanagement (§30 Nr. 1)
│   │   ├── incident-management/   # 3. Vorfallmanagement (§30 Nr. 2 + §32)
│   │   ├── business-continuity/   # 4. Business Continuity (§30 Nr. 3)
│   │   ├── supply-chain/          # 5. Lieferkettensicherheit (§30 Nr. 4)
│   │   ├── vulnerability-management/ # 6. Schwachstellenmanagement (§30 Nr. 5)
│   │   ├── effectiveness-review/  # 7. Wirksamkeitsprüfung (§30 Nr. 6)
│   │   ├── training/              # 8. Schulung & Awareness (§30 Nr. 7)
│   │   ├── cryptography/          # 9. Kryptografie (§30 Nr. 8)
│   │   ├── access-control/        # 10. Zugriffskontrolle & MFA (§30 Nr. 9-10)
│   │   ├── governance/            # 11. Governance (§38)
│   │   └── compliance-matrix/     # 12. Compliance-Matrix
│   ├── en/                        # Englische Dokumentation
│   ├── zh/                        # Chinesische Dokumentation (简体中文)
│   ├── public/                    # Statische Assets (Logo, Favicon)
│   └── .vitepress/
│       ├── config.ts              # VitePress-Konfiguration
│       ├── locales/               # DE/EN/ZH Navigation + Sidebar
│       └── theme/                 # Custom Theme (BAUER GROUP CI)
├── .github/
│   └── workflows/                 # Deploy, Release, Teams, AI Summary
└── package.json                   # @bauer-group/nis2-compliance
```

## Dokumentation

12 Kapitel in DE/EN/ZH, strukturiert nach den zehn §30-Maßnahmen:

| Kapitel | Sektion | §30 BSIG | Inhalt |
| --- | --- | --- | --- |
| **1** | Einführung | — | Geltungsbereich, regulatorischer Rahmen, CRA/AI-Act-Synergien |
| **2** | Risikomanagement | Nr. 1 | ISMS, Risikoanalyse, Asset-Inventar |
| **3** | Vorfallmanagement | Nr. 2 + §32 | Incident Response, Meldepflichten (24h/72h/1 Monat) |
| **4** | Business Continuity | Nr. 3 | Backup (3-2-1), Disaster Recovery, Krisenmanagement |
| **5** | Lieferkettensicherheit | Nr. 4 | Dienstleisterbewertung, Sicherheitsanforderungen |
| **6** | Schwachstellenmanagement | Nr. 5 | Scanning, Patch Management, Secure Development |
| **7** | Wirksamkeitsprüfung | Nr. 6 | Audits, KPIs, Penetrationstests, PDCA |
| **8** | Schulung & Awareness | Nr. 7 | Pflichtschulungen, Cyberhygiene, Onboarding |
| **9** | Kryptografie | Nr. 8 | BSI/ISO-Standards, Key Management, Zertifikate |
| **10** | Zugriffskontrolle | Nr. 9–10 | MFA, Zugriffskontrolle, sichere Kommunikation |
| **11** | Governance | §38 | Geschäftsleitungspflichten, Governance-Struktur |
| **12** | Compliance-Matrix | Alle | §30-Zuordnung, CRA/AI-Act-Synergien |

### NIS2-Abdeckung

- Alle 10 Risikomanagementmaßnahmen nach §30 Abs. 2 BSIG
- Meldepflichten nach §32 BSIG (3-Stufen-Modell)
- Geschäftsleitungspflichten nach §38 BSIG
- Durchführungsverordnung (EU) 2024/2690
- CRA-Synergien dokumentiert und querverwiesen

### Leitprinzip

> Regulatorisch vollständig nach außen — intern minimaler Mehraufwand.

## Abgrenzung zu CRA und AI Act

| | NIS2-Dokumentation | CRA-Dokumentation | AI-Act-Dokumentation |
| --- | --- | --- | --- |
| **Repo** | `SEC-NIS2Compliance` | `SEC-CRACompliance` | `SEC-AIActCompliance` |
| **Regulierung** | (EU) 2022/2555 + BSIG | (EU) 2024/2847 | (EU) 2024/1689 |
| **Scope** | Organisation & Betrieb | Produkte mit digitalen Elementen | KI-Systeme |
| **Fokus** | Betriebssicherheit | Produktsicherheit | KI-Sicherheit |
| **Synergien** | ← Nutzt CRA-Basisarbeit für Schwachstellen, Incident Response, Supply Chain | → Produkt-CVEs, SBOM, Signierung | → QMS, Techn. Doku, Cybersicherheit |

## Quickstart

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run docs:dev

# Produktions-Build
npm run docs:build

# Build-Preview
npm run docs:preview
```

### Verfügbare Scripts

| Script | Beschreibung |
| --- | --- |
| `npm run docs:dev` | Entwicklungsserver mit Hot Reload |
| `npm run docs:build` | Produktions-Build |
| `npm run docs:preview` | Preview des Produktions-Builds |
| `npm run docs:clean` | Build-Cache und dist bereinigen |
| `npm run lint` | Markdown-Linting |
| `npm run lint:fix` | Markdown-Linting mit Auto-Fix |
| `npm run validate` | Lint + Build + Link-Check |
| `npm run ci` | CI-Pipeline (install + lint + build) |

## Deployment

Push auf `main` (Änderungen in `docs/`, `package.json`, `package-lock.json`) triggert automatisch:

1. Checkout + Node.js Setup (via `.nvmrc`)
2. `npm ci` + Markdown-Lint
3. VitePress-Build
4. GitHub Pages Deployment

## Lizenz

Dieses Repository verwendet ein **Dual-License-Modell**:

| Bereich | Lizenz | SPDX |
| --- | --- | --- |
| Code, Workflows, Konfiguration | [MIT License](LICENSE) | `MIT` |
| Dokumentation (`docs/`) | [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/) | `CC-BY-NC-4.0` |

Die Dokumentation darf mit Namensnennung geteilt und bearbeitet werden, jedoch nicht für kommerzielle Zwecke verwendet werden.

Copyright © 2026 BAUER GROUP
