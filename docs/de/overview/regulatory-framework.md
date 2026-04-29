# Regulatorischer Rahmen

## Rechtsquellen

| Rechtsquelle | Status | Relevanz |
|--------------|--------|----------|
| NIS-2-Richtlinie (EU) 2022/2555 | In Kraft seit 16.01.2023 | EU-Rahmenrichtlinie |
| NIS2UmsuCG (Artikelgesetz) | In Kraft seit 06.12.2025 | Deutsche Umsetzung |
| BSIG (Neufassung) | In Kraft seit 06.12.2025 | Zentrale Pflichtennorm |
| Durchführungsverordnung (EU) 2024/2690 | In Kraft | Detaillierte technische Anforderungen |
| KRITIS-Dachgesetz (KRITIS-DachG) | In Kraft seit 17.03.2026 | Physische Resilienz (CER-Umsetzung) |

## Betroffenheit

Die NIS2-Richtlinie unterscheidet zwei Kategorien:

| Kategorie | Kriterien | Sanktionen |
|-----------|-----------|------------|
| **Besonders wichtige Einrichtungen** | Annex I-Sektoren, ≥250 Mitarbeiter oder ≥50 Mio. EUR Umsatz | Bis zu 10 Mio. EUR oder 2% des weltweiten Jahresumsatzes |
| **Wichtige Einrichtungen** | Annex I/II-Sektoren, ≥50 Mitarbeiter oder ≥10 Mio. EUR Umsatz | Bis zu 7 Mio. EUR oder 1,4% des weltweiten Jahresumsatzes |

## §30 BSIG – Zehn Risikomanagementmaßnahmen

| Nr. | Maßnahme | Dokumentation |
|-----|----------|---------------|
| 1 | Risikoanalyse und Konzepte für die Sicherheit von Informationssystemen | [Risikomanagement](/de/risk-management/) |
| 2 | Bewältigung von Sicherheitsvorfällen | [Vorfallmanagement](/de/incident-management/) |
| 3 | Aufrechterhaltung des Betriebs (BCM, Backup, Disaster Recovery, Krisenmanagement) | [Business Continuity](/de/business-continuity/) |
| 4 | Sicherheit der Lieferkette | [Lieferkettensicherheit](/de/supply-chain/) |
| 5 | Sicherheit bei Erwerb, Entwicklung und Wartung | [Schwachstellenmanagement](/de/vulnerability-management/) |
| 6 | Konzepte und Verfahren zur Bewertung der Wirksamkeit | [Wirksamkeitsprüfung](/de/effectiveness-review/) |
| 7 | Grundlegende Verfahren im Bereich der Cyberhygiene und Schulungen | [Schulung & Awareness](/de/training/) |
| 8 | Konzepte und Verfahren für den Einsatz von Kryptografie | [Kryptografie](/de/cryptography/) |
| 9 | Sicherheit des Personals, Konzepte für die Zugriffskontrolle | [Zugriffskontrolle](/de/access-control/) |
| 10 | Verwendung von MFA, gesicherte Kommunikation | [Zugriffskontrolle](/de/access-control/) |

## Weitere Pflichten

| Paragraph | Pflicht | Dokumentation |
|-----------|---------|---------------|
| §32 BSIG | Meldepflichten bei erheblichen Sicherheitsvorfällen | [Vorfallmanagement](/de/incident-management/) |
| §33 BSIG | Registrierungspflicht beim BSI | Organisatorisch umgesetzt |
| §38 BSIG | Billigungs-, Überwachungs- und Schulungspflichten der Geschäftsleitung | [Governance](/de/governance/) |

::: info KRITIS-DachG-Fristen

- **17.03.2026** – Inkrafttreten (Bundesrat-Zustimmung am 06.03.2026)
- **17.07.2026** – Frühester Beginn der Registrierungspflicht für identifizierte Kritische Anlagen (3-Monats-Frist nach Identifikation, nicht vor diesem Datum)
- Das KRITIS-DachG ergänzt NIS2 um die **physische Resilienz** und setzt die EU-CER-Richtlinie ((EU) 2022/2557) in deutsches Recht um.

:::

## Abgrenzung CRA / NIS2

| Kriterium | NIS2 | CRA |
|-----------|------|-----|
| **Regulierungsgegenstand** | Betreiber (Einrichtungen) | Produkte mit digitalen Elementen |
| **Rechtsform** | Richtlinie (nationale Umsetzung) | Verordnung (direkt anwendbar) |
| **Fokus** | Betriebssicherheit (Risikomanagement) | Produktsicherheit (Security by Design) |
| **Meldepflicht** | CSIRT (24h/72h/1 Monat) | ENISA (24h/72h/14d) |

::: tip CRA-Synergie
CRA-konforme Prozesse (Schwachstellenmanagement, Incident Response, Supply Chain) erfüllen weitgehend auch die entsprechenden NIS2-Anforderungen. Details in der [CRA-Compliance-Dokumentation](https://cra.docs.bauer-group.com/de/overview/nis2-integration).
:::
