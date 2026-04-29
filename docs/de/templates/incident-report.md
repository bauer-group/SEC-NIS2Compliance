# Vorlage: §32-Meldevorlage

## Anleitung

Diese Vorlage strukturiert das dreistufige Meldemodell nach §32 BSIG (Frühwarnung 24h / Update 72h / Abschluss 1 Monat). Alle drei Stufen werden im selben Dokument konsolidiert geführt.

## Vorfall-Stammdaten

| Feld | Wert |
|---|---|
| **Vorfall-ID** | INC-NIS2-YYYY-XXXX |
| **Bezeichnung** | [Kurzbezeichnung] |
| **BSI-Melde-ID** | [Wird vom BSI vergeben] |
| **Erstmeldung** | [Datum + Uhrzeit] |
| **Erkannt durch** | [Name / System / Quelle] |
| **Verantwortlicher ISB** | [Name] |
| **Erheblich (§32)** | [ ] Ja  [ ] Nein – Begründung: |
| **Parallele Meldung** | [ ] DSGVO Art. 33  [ ] CRA Art. 14  [ ] Keine |

## Stufe 1: Frühwarnung (24 Stunden)

| Feld | Wert |
|---|---|
| **Meldedatum** | [Datum + Uhrzeit, max. T+24h] |
| **Art des Vorfalls** | [Ransomware / Datenabfluss / DDoS / Insider / Sonstiges] |
| **Erste Hypothese zur Ursache** | [Freitext] |
| **Verdacht auf rechtswidrige/böswillige Handlung** | [ ] Ja  [ ] Nein  [ ] Unklar |
| **Grenzüberschreitende Auswirkung möglich** | [ ] Ja  [ ] Nein  [ ] Unklar |
| **Übermittelt an BSI durch** | [Name + Übermittlungsweg] |

## Stufe 2: Aktualisierung (72 Stunden)

| Feld | Wert |
|---|---|
| **Meldedatum** | [Datum + Uhrzeit, max. T+72h] |
| **Schweregrad** | [Niedrig / Mittel / Hoch / Kritisch] |
| **Betroffene Systeme** | [Liste] |
| **Betroffene Dienste** | [Liste mit Ausfallzeit] |
| **Betroffene Datenarten** | [PII / Geschäftsdaten / Credentials / Sonstiges] |
| **Anzahl betroffener Personen** | [Schätzung] |
| **Kompromittierungsindikatoren (IoC)** | [Hashes, IPs, Domains – falls verfügbar] |
| **Bisherige Eindämmungsmaßnahmen** | [Liste mit Zeitstempel] |
| **Aktualisierte Ursachen-Hypothese** | [Freitext] |

## Stufe 3: Abschlussbericht (1 Monat)

| Feld | Wert |
|---|---|
| **Meldedatum** | [Datum, max. T+30 Tage – Verlängerung dokumentiert: ja/nein] |
| **Detaillierte Beschreibung** | [Vollständiger Ablauf mit Zeitstempeln] |
| **Bestätigte Ursache** | [Root Cause] |
| **Ergriffene Maßnahmen** | [Sofort / Mittel- / Langfristig] |
| **Nachweisbare Wirksamkeit** | [Wie wurde verifiziert?] |
| **Grenzüberschreitende Auswirkungen** | [Ja/Nein, falls ja: betroffene Mitgliedstaaten] |
| **Schäden Dritter** | [Beschreibung] |
| **Schaden BAUER GROUP** | [Direkt + indirekt, EUR] |
| **Lessons Learned** | [Verweis auf Lessons-Learned-Protokoll] |
| **Maßnahmen zur Prävention** | [Liste mit Zieldatum + Verantwortlich] |

## Interne Eskalation

| Empfänger | Wann | Format |
|-----------|------|--------|
| ISB | Sofort bei Erkennen | Telefon + Ticket |
| Geschäftsleitung | Bei Stufe Hoch/Kritisch oder Meldepflicht | E-Mail + Mündlich |
| Krisenstab | Bei Stufe Kritisch | Sofort einberufen |
| Datenschutzbeauftragter | Bei PII-Bezug | Innerhalb 1h |
| Rechtsabteilung | Bei rechtswidriger Handlung | Innerhalb 4h |

## Aufbewahrung

- **Mindestens 5 Jahre** nach Abschluss des Vorfalls
- Vollständige Korrespondenz mit BSI archivieren
- Beweismittel forensisch sauber sichern (Chain of Custody)
