# Vorlage: Risiko-Register

## Anleitung

Das Risiko-Register erfasst sämtliche Informationssicherheitsrisiken der BAUER GROUP gemäß §30 Abs. 2 Nr. 1 BSIG. Es ist die Grundlage für die Risikoanalyse und das ISMS.

## Risiko-Eintrag

```markdown
## Risiko-Eintrag

| Feld | Wert |
|---|---|
| **Risiko-ID** | RISK-NIS2-XXXX |
| **Kurzbezeichnung** | [Risikoname] |
| **Beschreibung** | [Risikobeschreibung mit Bedrohung, Schwachstelle, Auswirkung] |
| **Asset-Kategorie** | [Daten / System / Prozess / Personal / Lieferant] |
| **Betroffene Schutzziele** | [ ] Verfügbarkeit  [ ] Integrität  [ ] Vertraulichkeit  [ ] Authentizität |
| **Eintrittswahrscheinlichkeit** | [Sehr gering / Gering / Mittel / Hoch / Sehr hoch] |
| **Schadenshöhe** | [Sehr gering / Gering / Mittel / Hoch / Sehr hoch] |
| **Brutto-Risikostufe** | [Niedrig / Mittel / Hoch / Kritisch] |
| **Vorhandene Maßnahmen** | [Liste mit Verweis auf Dokumentation] |
| **Maßnahmen-Wirksamkeit** | [Hoch / Mittel / Gering] |
| **Netto-Risikostufe** | [Niedrig / Mittel / Hoch / Kritisch] |
| **Risikobehandlung** | [Vermeidung / Minderung / Übertragung / Akzeptanz] |
| **Geplante Maßnahmen** | [Beschreibung + Zieldatum] |
| **Verantwortlich** | [Name / Rolle] |
| **Erstbewertung** | [Datum] |
| **Letzte Überprüfung** | [Datum] |
| **Nächste Überprüfung** | [Datum, max. +12 Monate] |
| **§30-Bezug** | [Nr. 1–10] |
| **Anmerkungen** | [Freitext, z. B. Annahmen, externe Faktoren] |
```

## Bewertungsmatrix

| Eintritt × Schaden | Sehr gering | Gering | Mittel | Hoch | Sehr hoch |
|---|---|---|---|---|---|
| **Sehr hoch** | Mittel | Hoch | Hoch | Kritisch | Kritisch |
| **Hoch** | Mittel | Mittel | Hoch | Hoch | Kritisch |
| **Mittel** | Niedrig | Mittel | Mittel | Hoch | Hoch |
| **Gering** | Niedrig | Niedrig | Mittel | Mittel | Hoch |
| **Sehr gering** | Niedrig | Niedrig | Niedrig | Mittel | Mittel |

## Hinweise

- ID-Format: `RISK-NIS2-XXXX` (fortlaufend nummeriert)
- **Kritische** Risiken werden der Geschäftsleitung sofort gemeldet (§38)
- **Hohe** Risiken werden im Quartalsbericht aufgeführt
- Risiko-Akzeptanz erfordert dokumentierte Begründung und Geschäftsleitungs-Freigabe
- Das Register wird mindestens **jährlich** vollständig überprüft
