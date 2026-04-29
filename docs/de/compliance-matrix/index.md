# Compliance-Matrix

Vollständige Zuordnung aller NIS2-Anforderungen zu Dokumentation, Umsetzung und Synergien.

::: tip Wirksamkeitsprüfung
Die Spalte **Letzte Wirksamkeitsprüfung** dokumentiert den Nachweis nach §30 Abs. 2 Nr. 6 BSIG. Maßnahmen ohne nachweisbare Prüfung im laufenden Jahr gelten als nicht wirksam überprüft. Die nächste turnusmäßige Wirksamkeitsprüfung erfolgt jeweils 12 Monate nach der letzten dokumentierten Prüfung.
:::

## §30 BSIG – Risikomanagementmaßnahmen

| Nr. | Maßnahme | Dokumentation | Status | Letzte Wirksamkeitsprüfung | Nächste Prüfung |
|-----|----------|---------------|--------|----------------------------|------------------|
| 1 | Risikoanalyse und IT-Sicherheitskonzepte | [Risikomanagement](/de/risk-management/) | ✅ Umgesetzt | 2026-03 | 2027-03 |
| 2 | Bewältigung von Sicherheitsvorfällen | [Vorfallmanagement](/de/incident-management/) | ✅ Umgesetzt | 2026-03 | 2027-03 |
| 3 | Aufrechterhaltung des Betriebs / BCM | [Business Continuity](/de/business-continuity/) | ✅ Umgesetzt | 2026-03 | 2027-03 |
| 4 | Sicherheit der Lieferkette | [Lieferkettensicherheit](/de/supply-chain/) | ✅ Umgesetzt | 2026-03 | 2027-03 |
| 5 | Sichere Beschaffung, Entwicklung, Wartung | [Schwachstellenmanagement](/de/vulnerability-management/) | ✅ Umgesetzt | 2026-03 | 2027-03 |
| 6 | Wirksamkeitsprüfung | [Wirksamkeitsprüfung](/de/effectiveness-review/) | ✅ Umgesetzt | 2026-03 | 2027-03 |
| 7 | Schulung & Awareness | [Schulung & Awareness](/de/training/) | ✅ Umgesetzt | 2026-03 | 2027-03 |
| 8 | Kryptografie | [Kryptografie](/de/cryptography/) | ✅ Umgesetzt | 2026-03 | 2027-03 |
| 9 | Zugriffskontrolle & Personalsicherheit | [Zugriffskontrolle](/de/access-control/) | ✅ Umgesetzt | 2026-03 | 2027-03 |
| 10 | MFA & sichere Kommunikation | [Zugriffskontrolle](/de/access-control/) | ✅ Umgesetzt | 2026-03 | 2027-03 |

## Weitere BSIG-Pflichten

| Paragraph | Pflicht | Dokumentation | Status | Letzte Wirksamkeitsprüfung | Nächste Prüfung |
|-----------|---------|---------------|--------|----------------------------|------------------|
| §32 | Meldepflichten | [Vorfallmanagement](/de/incident-management/) | ✅ Umgesetzt | 2026-03 | 2027-03 |
| §33 | Registrierungspflicht | Organisatorisch umgesetzt | ✅ Umgesetzt | 2026-03 | 2027-03 |
| §38 | Geschäftsleitungspflichten | [Governance](/de/governance/) | ✅ Umgesetzt | 2026-03 | 2027-03 |

## Statuslegende

| Symbol | Bedeutung |
|--------|-----------|
| ✅ Umgesetzt | Maßnahme dokumentiert, eingeführt und letzte Wirksamkeitsprüfung erfolgreich |
| 🟡 In Umsetzung | Maßnahme beschlossen, Einführung läuft, Wirksamkeitsprüfung steht aus |
| 🔴 Offen | Maßnahme erforderlich, aber noch nicht eingeführt |
| ⏸️ Ausgenommen | Maßnahme nicht anwendbar (Begründung dokumentiert) |

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
