# Vorfallmanagement

::: info RECHTSGRUNDLAGE
**§30 Abs. 2 Nr. 2 BSIG** – Bewältigung von Sicherheitsvorfällen

**§32 BSIG** – Meldepflichten bei erheblichen Sicherheitsvorfällen
:::

## Klassifikation

| Stufe | Kriterien | Reaktionszeit |
|-------|-----------|---------------|
| **Kritisch** | Datenverlust, vollständiger Dienstausfall, aktive Kompromittierung | Sofort |
| **Hoch** | Teilweiser Ausfall, Zugriff auf sensible Daten möglich, aktiver Angriff | < 4 Stunden |
| **Mittel** | Eingeschränkte Funktionalität, fehlgeschlagene Angriffe, Schwachstelle entdeckt | < 24 Stunden |
| **Niedrig** | Anomalie ohne direkte Auswirkung, Policy-Verstoß ohne Schaden | Nächster Arbeitstag |

## Incident-Response-Prozess

### 1. Erkennung und Meldung

- Monitoring-Systeme, Log-Analyse und manuelle Erkennung
- Jeder Mitarbeiter ist verpflichtet, Verdachtsfälle unverzüglich zu melden
- Zentrale Meldung an den Informationssicherheitsbeauftragten (ISB)

### 2. Analyse und Bewertung

- Einordnung nach Schweregrad (siehe Klassifikation)
- Bestimmung betroffener Systeme, Daten und Kunden
- Prüfung: Handelt es sich um einen meldepflichtigen Vorfall nach §32 BSIG?

### 3. Eindämmung

- Sofortisolierung kompromittierter Systeme
- Sperrung betroffener Zugangsdaten
- Aktivierung von Failover-Systemen bei Dienstausfall
- Beweissicherung vor Bereinigung

### 4. Beseitigung und Wiederherstellung

- Entfernung der Angriffsursache (Malware, kompromittierte Accounts)
- Wiederherstellung aus Backups bei Datenverlust
- Verifizierung der Systemintegrität vor Wiederinbetriebnahme
- Rotation aller potenziell kompromittierten Zugangsdaten

### 5. Nachbereitung

- Post-Mortem-Analyse mit Ursachenbestimmung (Root Cause Analysis)
- Dokumentation und Ableitung konkreter Verbesserungsmaßnahmen
- Aktualisierung der Risikoanalyse bei Bedarf

## Eskalationsmatrix

| Stufe | Erstinformation | Eskalation | Kundeninformation |
|-------|----------------|------------|-------------------|
| Kritisch | ISB + Geschäftsleitung | Sofort | Unverzüglich |
| Hoch | ISB | < 1 Stunde | Wenn betroffen |
| Mittel | ISB | Regulär | Nur bei Auswirkung |
| Niedrig | IT-Team | Nächstes Meeting | Nein |

## Meldepflichten nach §32 BSIG

Erhebliche Sicherheitsvorfälle sind dem BSI nach einem dreistufigen Modell zu melden:

| Stufe | Frist | Inhalt |
|-------|-------|--------|
| **Frühwarnung** | 24 Stunden | Erstmeldung: Art des Vorfalls, Verdacht auf rechtswidrige Handlung, grenzüberschreitende Auswirkung |
| **Aktualisierung** | 72 Stunden | Erste Bewertung: Schweregrad, Auswirkungen, Kompromittierungsindikatoren (IoC) |
| **Abschlussbericht** | 1 Monat | Detaillierte Beschreibung: Ursache, Maßnahmen, grenzüberschreitende Auswirkungen |

### Kriterien für erhebliche Vorfälle

Ein Vorfall gilt als erheblich, wenn er:

- Schwerwiegende Betriebsstörungen der Dienste oder finanzielle Verluste verursacht oder verursachen kann
- Andere natürliche oder juristische Personen durch erhebliche materielle oder immaterielle Schäden beeinträchtigt oder beeinträchtigen kann

### Meldewege

- **Meldeportal:** BSI-Meldeplattform (online)
- **Intern:** ISB → Geschäftsleitung → BSI-Meldung
- **Parallel:** Datenschutzmeldung nach Art. 33 DSGVO prüfen, falls personenbezogene Daten betroffen

::: warning DOPPELMELDUNG CRA + NIS2
Als CRA-Hersteller und NIS2-Einrichtung können **zwei separate Meldepflichten** ausgelöst werden: CRA-Meldung an ENISA (24h/72h/14d) und NIS2-Meldung an BSI (24h/72h/1 Monat). Details zum CRA-Meldeprozess in der [CRA-Dokumentation](https://cra.docs.bauer-group.com/de/incident-response/).
:::

::: tip CRA-Synergie
Der produktbezogene Incident-Response-Prozess ist in der [CRA Incident-Response-Dokumentation](https://cra.docs.bauer-group.com/de/incident-response/) beschrieben. Produktschwachstellen werden über den CRA-Prozess gemeldet, betriebliche Vorfälle über diesen Prozess.
:::
