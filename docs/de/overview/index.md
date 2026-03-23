# Einführung

Diese Dokumentation beschreibt die Umsetzung der **NIS-2-Richtlinie** (EU) 2022/2555 und des deutschen **NIS2-Umsetzungsgesetzes** (NIS2UmsuCG) bei der BAUER GROUP. Sie umfasst alle zehn Risikomanagementmaßnahmen nach §30 Abs. 2 BSIG sowie die Pflichten aus §32 (Meldepflichten), §33 (Registrierung) und §38 (Geschäftsleitungspflichten).

::: info RECHTSGRUNDLAGE
**NIS-2-Richtlinie (EU) 2022/2555** – Maßnahmen für ein hohes gemeinsames Cybersicherheitsniveau in der Union.

**BSIG §30 Abs. 1:** Besonders wichtige Einrichtungen und wichtige Einrichtungen sind verpflichtet, geeignete, verhältnismäßige und wirksame technische und organisatorische Maßnahmen zu ergreifen, um Störungen der Verfügbarkeit, Integrität, Authentizität und Vertraulichkeit der informationstechnischen Systeme, Komponenten und Prozesse zu vermeiden.
:::

## Geltungsbereich

Die Dokumentation deckt folgende Bereiche der BAUER GROUP ab:

| Bereich | Beschreibung |
|---------|-------------|
| **Software-Entwicklung** | Eigenentwicklungen im Bereich B2B-Software, Embedded Systems und AI-gestützte Workflows |
| **IT-Infrastruktur** | Serverbetrieb, Netzwerkinfrastruktur und Cloud-Dienste |
| **Managed Services** | IT-Dienstleistungen und Support für B2B-Kunden |
| **Interne IT** | Systeme und Prozesse für den Eigenbetrieb |

## Komplementäre Dokumentation

Die BAUER GROUP unterhält drei komplementäre Compliance-Dokumentationen:

| Dokumentation | Regulierung | Fokus | URL |
|--------------|-------------|-------|-----|
| **NIS2** (dieses Dokument) | (EU) 2022/2555 / BSIG | Organisation & Betrieb | [nis2.docs.bauer-group.com](https://nis2.docs.bauer-group.com) |
| **CRA** | (EU) 2024/2847 | Produkte & Software | [cra.docs.bauer-group.com](https://cra.docs.bauer-group.com) |
| **AI Act** | (EU) 2024/1689 | KI-Systeme | [ai-act.docs.bauer-group.com](https://ai-act.docs.bauer-group.com) |

Wo sich Anforderungen überschneiden, wird auf die jeweils andere Dokumentation verwiesen, um Redundanzen zu vermeiden. Die CRA-Dokumentation deckt produktbezogene Cybersicherheitsanforderungen ab, die NIS2-Dokumentation organisatorische und betriebliche Anforderungen.

## Aufbau der Dokumentation

| Nr. | Kapitel | §30 BSIG | Inhalt |
|-----|---------|----------|--------|
| 1 | [Einführung](/de/overview/) | — | Geltungsbereich, Rechtsrahmen, Dokumentationsstruktur |
| 2 | [Risikomanagement](/de/risk-management/) | Nr. 1 | Risikoanalyse, ISMS, Asset-Inventar |
| 3 | [Vorfallmanagement](/de/incident-management/) | Nr. 2 + §32 | Incident Response, Meldepflichten |
| 4 | [Business Continuity](/de/business-continuity/) | Nr. 3 | Backup, Disaster Recovery, Krisenmanagement |
| 5 | [Lieferkettensicherheit](/de/supply-chain/) | Nr. 4 | Dienstleisterbewertung, Sicherheitsanforderungen |
| 6 | [Schwachstellenmanagement](/de/vulnerability-management/) | Nr. 5 | Scanning, Patch Management, Secure Development |
| 7 | [Wirksamkeitsprüfung](/de/effectiveness-review/) | Nr. 6 | Sicherheitsaudits, KPIs, Penetrationstests |
| 8 | [Schulung & Awareness](/de/training/) | Nr. 7 | Pflichtschulungen, Cyberhygiene |
| 9 | [Kryptografie](/de/cryptography/) | Nr. 8 | Verschlüsselung, Key Management |
| 10 | [Zugriffskontrolle](/de/access-control/) | Nr. 9–10 | Authentifizierung, MFA, sichere Kommunikation |
| 11 | [Governance](/de/governance/) | §38 | Geschäftsleitungspflichten, Governance-Struktur |
| 12 | [Compliance-Matrix](/de/compliance-matrix/) | Alle | Vollständige Anforderungszuordnung |
