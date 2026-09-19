# Regulatorischer Rahmen

## Rechtsquellen

| Rechtsquelle | Status | Relevanz |
|--------------|--------|----------|
| NIS-2-Richtlinie (EU) 2022/2555 | In Kraft seit 16.01.2023 | EU-Rahmenrichtlinie |
| NIS2UmsuCG (Artikelgesetz) | In Kraft seit 06.12.2025 | Deutsche Umsetzung |
| BSIG (Neufassung) | In Kraft seit 06.12.2025 | Zentrale Pflichtennorm |
| Durchführungsverordnung (EU) 2024/2690 | In Kraft seit 07.11.2024 | Unmittelbar geltend für DNS-Diensteanbieter, MSPs u. a.: technische und methodische Anforderungen an die Risikomanagementmaßnahmen (Vorrang nach §30 Abs. 3 BSIG) und Schwellenwerte für erhebliche Sicherheitsvorfälle (Art. 3 ff. DVO) |
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
| 1 | Konzepte in Bezug auf die Risikoanalyse und auf die Sicherheit in der Informationstechnik | [Risikomanagement](/de/risk-management/) |
| 2 | Bewältigung von Sicherheitsvorfällen | [Vorfallmanagement](/de/incident-management/) |
| 3 | Aufrechterhaltung des Betriebs, wie Backup-Management und Wiederherstellung nach einem Notfall, und Krisenmanagement | [Business Continuity](/de/business-continuity/) |
| 4 | Sicherheit der Lieferkette | [Lieferkettensicherheit](/de/supply-chain/) |
| 5 | Sicherheitsmaßnahmen bei Erwerb, Entwicklung und Wartung, einschließlich Management und Offenlegung von Schwachstellen | [Schwachstellenmanagement](/de/vulnerability-management/) |
| 6 | Konzepte und Verfahren zur Bewertung der Wirksamkeit | [Wirksamkeitsprüfung](/de/effectiveness-review/) |
| 7 | Grundlegende Schulungen und Sensibilisierungsmaßnahmen im Bereich der Sicherheit in der Informationstechnik | [Schulung & Awareness](/de/training/) |
| 8 | Konzepte und Prozesse für den Einsatz von kryptographischen Verfahren | [Kryptografie](/de/cryptography/) |
| 9 | Konzepte für die Sicherheit des Personals, die Zugriffskontrolle und die Verwaltung von IKT-Systemen, -Produkten und -Prozessen | [Zugriffskontrolle](/de/access-control/) |
| 10 | Multi-Faktor- oder kontinuierliche Authentifizierung, gesicherte Sprach-, Video- und Textkommunikation, gesicherte Notfallkommunikation | [Zugriffskontrolle](/de/access-control/) |

## Weitere Pflichten

| Paragraph | Pflicht | Dokumentation |
|-----------|---------|---------------|
| §§28, 29 BSIG | Einstufung als besonders wichtige oder wichtige Einrichtung | [Betroffenheit & Größenklassen](/de/overview/applicability) |
| §32 BSIG | Meldepflichten bei erheblichen Sicherheitsvorfällen | [Vorfallmanagement](/de/incident-management/) |
| §33 BSIG | Registrierungspflicht beim BSI | Organisatorisch umgesetzt |
| §38 BSIG | Umsetzungs-, Überwachungs- und Schulungspflichten der Geschäftsleitung | [Governance](/de/governance/) |

::: info KRITIS-DachG-Fristen

- **17.03.2026** – Inkrafttreten (Gesetz vom 11.03.2026, BGBl. 2026 I Nr. 66)
- **17.07.2026** – Frist der CER-Richtlinie, bis zu der die Mitgliedstaaten ihre kritischen Einrichtungen ermitteln (Art. 6 Abs. 1 (EU) 2022/2557) – kein Stichtag für Betreiber
- **Registrierung** – spätestens drei Monate, nachdem eine Anlage als kritische Anlage gilt (§8 Abs. 1 KRITIS-DachG). Welche Anlagen kritisch sind, legt erst die Rechtsverordnung nach §4 Abs. 3 und §5 Abs. 1 KRITIS-DachG fest; sie befindet sich laut BBK noch in Erarbeitung und Abstimmung und ist bislang nicht im Bundesgesetzblatt verkündet (Stand: 19.09.2026). Bis zu ihrem Inkrafttreten bestimmt die BSI-Kritisverordnung die kritischen Anlagen im Sinne des BSIG (§66 BSIG; §12 BSI-KritisV).
- Das KRITIS-DachG ergänzt NIS2 um die **physische Resilienz** und setzt die EU-CER-Richtlinie ((EU) 2022/2557) in deutsches Recht um.

:::

## Abgrenzung CRA / NIS2

| Kriterium | NIS2 | CRA |
|-----------|------|-----|
| **Regulierungsgegenstand** | Betreiber (Einrichtungen) | Produkte mit digitalen Elementen |
| **Rechtsform** | Richtlinie (nationale Umsetzung) | Verordnung (direkt anwendbar) |
| **Fokus** | Betriebssicherheit (Risikomanagement) | Produktsicherheit (Security by Design) |
| **Meldepflicht** | BSI (24h / 72h / 1 Monat nach der 72h-Meldung) | Koordinierendes CSIRT und ENISA über die einheitliche Meldeplattform (24h / 72h / 14 Tage nach Korrektur bzw. 1 Monat) |

::: tip CRA-Synergie
CRA-konforme Prozesse (Schwachstellenmanagement, Incident Response, Supply Chain) erfüllen weitgehend auch die entsprechenden NIS2-Anforderungen. Details in der [CRA-Compliance-Dokumentation](https://cra.docs.bauer-group.com/de/overview/nis2-integration).
:::
