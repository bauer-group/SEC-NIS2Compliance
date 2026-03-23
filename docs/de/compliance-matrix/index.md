# Compliance-Matrix

Vollständige Zuordnung aller NIS2-Anforderungen zu Dokumentation, Umsetzung und Synergien.

## §30 BSIG – Risikomanagementmaßnahmen

| Nr. | Maßnahme | Dokumentation | Status |
|-----|----------|---------------|--------|
| 1 | Risikoanalyse und IT-Sicherheitskonzepte | [Risikomanagement](/de/risk-management/) | ✅ Umgesetzt |
| 2 | Bewältigung von Sicherheitsvorfällen | [Vorfallmanagement](/de/incident-management/) | ✅ Umgesetzt |
| 3 | Aufrechterhaltung des Betriebs / BCM | [Business Continuity](/de/business-continuity/) | ✅ Umgesetzt |
| 4 | Sicherheit der Lieferkette | [Lieferkettensicherheit](/de/supply-chain/) | ✅ Umgesetzt |
| 5 | Sichere Beschaffung, Entwicklung, Wartung | [Schwachstellenmanagement](/de/vulnerability-management/) | ✅ Umgesetzt |
| 6 | Wirksamkeitsprüfung | [Wirksamkeitsprüfung](/de/effectiveness-review/) | ✅ Umgesetzt |
| 7 | Schulung & Awareness | [Schulung & Awareness](/de/training/) | ✅ Umgesetzt |
| 8 | Kryptografie | [Kryptografie](/de/cryptography/) | ✅ Umgesetzt |
| 9 | Zugriffskontrolle & Personalsicherheit | [Zugriffskontrolle](/de/access-control/) | ✅ Umgesetzt |
| 10 | MFA & sichere Kommunikation | [Zugriffskontrolle](/de/access-control/) | ✅ Umgesetzt |

## Weitere BSIG-Pflichten

| Paragraph | Pflicht | Dokumentation | Status |
|-----------|---------|---------------|--------|
| §32 | Meldepflichten | [Vorfallmanagement](/de/incident-management/) | ✅ Umgesetzt |
| §33 | Registrierungspflicht | Organisatorisch umgesetzt | ✅ Umgesetzt |
| §38 | Geschäftsleitungspflichten | [Governance](/de/governance/) | ✅ Umgesetzt |

## CRA-Synergien

| NIS2-Maßnahme | CRA-Dokumentation | Synergie |
|---------------|-------------------|----------|
| Nr. 2 – Vorfallmanagement | [CRA Incident Response](https://cra.docs.bauer-group.com/de/incident-response/) | Produktvorfälle via CRA, Betriebsvorfälle via NIS2 |
| Nr. 4 – Lieferkette | [CRA Supply Chain](https://cra.docs.bauer-group.com/de/supply-chain/) | Software-Supply-Chain via CRA, Dienstleister via NIS2 |
| Nr. 5 – Schwachstellen | [CRA Vulnerability Management](https://cra.docs.bauer-group.com/de/vulnerability-management/) | Produkt-CVEs via CRA, Infra-CVEs via NIS2 |
| Nr. 5 – SBOM | [CRA SBOM & Signierung](https://cra.docs.bauer-group.com/de/sbom-signing/) | SBOM-Generierung und -Signierung via CRA |

## AI-Act-Synergien

| NIS2-Maßnahme | AI-Act-Bezug | Synergie |
|---------------|-------------|----------|
| Nr. 1 – Risikomanagement | Art. 9 AI Act (Risikomanagement) | NIS2-ISMS als Basis für KI-Risikomanagement |
| Nr. 8 – Kryptografie | Art. 15 AI Act (Cybersicherheit) | Kryptografie-Standards gelten auch für KI-Systeme |
| Nr. 9 – Zugriffskontrolle | Art. 14 AI Act (Menschliche Aufsicht) | Zugriffskontrolle als Grundlage für KI-Oversight |
