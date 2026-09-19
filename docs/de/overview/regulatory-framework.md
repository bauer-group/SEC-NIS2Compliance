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

Das BSIG unterscheidet zwei Kategorien. Maßgeblich sind die Einrichtungsart (Anlagen 1 und 2 BSIG) und die Unternehmensgröße (§28 BSIG):

| Kategorie | Kriterien (vereinfacht) | Bußgeldrahmen (§65 BSIG) |
|-----------|-------------------------|--------------------------|
| **Besonders wichtige Einrichtungen** | Anlage 1, mindestens 250 Mitarbeiter **oder** sowohl Jahresumsatz über 50 Mio. EUR **als auch** Jahresbilanzsumme über 43 Mio. EUR; größenunabhängig u. a. Betreiber kritischer Anlagen | Bis zu 10 Mio. EUR; bei mehr als 500 Mio. EUR Gesamtumsatz bis zu 2 % des weltweiten Gesamtumsatzes |
| **Wichtige Einrichtungen** | Anlage 1 oder 2, mindestens 50 Mitarbeiter **oder** Jahresumsatz **und** Jahresbilanzsumme jeweils über 10 Mio. EUR | Bis zu 7 Mio. EUR; bei mehr als 500 Mio. EUR Gesamtumsatz bis zu 1,4 % des weltweiten Gesamtumsatzes |

::: tip Kleine Unternehmen und Zulieferer
Kleinst- und Kleinunternehmen sind grundsätzlich nicht erfasst – außer in größenunabhängigen Sonderfällen. Als Zulieferer regulierter Einrichtungen werden sie aber regelmäßig vertraglich zu Sicherheitsmaßnahmen verpflichtet. Größenklassen, Sonderfälle und Konstellationen: [Betroffenheit & Größenklassen](/de/overview/applicability).
:::

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
| §§28, 29 BSIG | Einstufung als besonders wichtige oder wichtige Einrichtung | [Betroffenheit & Größenklassen](/de/overview/applicability) |
| §32 BSIG | Meldepflichten bei erheblichen Sicherheitsvorfällen | [Vorfallmanagement](/de/incident-management/) |
| §33 BSIG | Registrierungspflicht beim BSI | Organisatorisch umgesetzt |
| §38 BSIG | Umsetzungs-, Überwachungs- und Schulungspflichten der Geschäftsleitung | [Governance](/de/governance/) |

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
