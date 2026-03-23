# Meldepflichten nach §32 BSIG

## Dreistufiges Meldemodell

### Stufe 1: Frühwarnung (24 Stunden)

| Feld | Inhalt |
|------|--------|
| **Frist** | 24 Stunden nach Kenntnis des erheblichen Vorfalls |
| **Empfänger** | BSI über Meldeplattform |
| **Inhalt** | Art des Vorfalls, erster Verdacht auf Ursache |
| **Besonderheiten** | Angabe ob rechtswidrige/böswillige Handlung vermutet wird; ob grenzüberschreitende Auswirkung möglich |

### Stufe 2: Aktualisierung (72 Stunden)

| Feld | Inhalt |
|------|--------|
| **Frist** | 72 Stunden nach Kenntnis |
| **Empfänger** | BSI über Meldeplattform |
| **Inhalt** | Erste Bewertung des Vorfalls: Schweregrad, Auswirkungen |
| **Besonderheiten** | Kompromittierungsindikatoren (IoC) soweit verfügbar; Aktualisierung der Ersteinschätzung |

### Stufe 3: Abschlussbericht (1 Monat)

| Feld | Inhalt |
|------|--------|
| **Frist** | 1 Monat nach Kenntnis (Verlängerung auf Antrag möglich) |
| **Empfänger** | BSI über Meldeplattform |
| **Inhalt** | Detaillierte Beschreibung: Ursache, ergriffene Maßnahmen, grenzüberschreitende Auswirkungen |
| **Besonderheiten** | Wenn Vorfall noch andauert: Zwischenbericht statt Abschluss, Abschluss nach Ende |

## Kriterien für erhebliche Sicherheitsvorfälle

Ein Vorfall ist erheblich, wenn mindestens eines der folgenden Kriterien erfüllt ist:

| Kriterium | Schwellenwert |
|-----------|--------------|
| Schwerwiegende Betriebsstörung | Dienste für Kunden sind eingeschränkt oder nicht verfügbar |
| Finanzielle Verluste | Direkte oder indirekte Verluste oberhalb der Wesentlichkeitsschwelle |
| Schäden für Dritte | Andere Personen oder Einrichtungen sind erheblich betroffen |
| Datenverlust | Personenbezogene oder geschäftskritische Daten kompromittiert |

## Meldeprozess intern

```
Vorfall erkannt
  → ISB informiert (< 1h)
    → Erstbewertung: Erheblich ja/nein? (< 4h)
      → Wenn ja: BSI-Frühwarnung vorbereiten (< 24h)
        → Geschäftsleitung informieren
          → DSGVO-Meldung prüfen (Art. 33: 72h an Aufsichtsbehörde)
            → CRA-Meldung prüfen (Art. 14: 24h an ENISA)
```

## Parallele Meldepflichten

| Regulierung | Auslöser | Frist | Empfänger |
|------------|----------|-------|-----------|
| **NIS2 / §32 BSIG** | Erheblicher Sicherheitsvorfall | 24h / 72h / 1 Monat | BSI |
| **DSGVO Art. 33** | Verletzung des Schutzes personenbezogener Daten | 72 Stunden | Zuständige Aufsichtsbehörde |
| **CRA Art. 14** | Aktiv ausgenutzte Produktschwachstelle | 24h / 72h / 14d | ENISA + nationale CSIRT |

## Dokumentation

Jeder meldepflichtige Vorfall wird vollständig dokumentiert:

- Chronologischer Ablauf mit Zeitstempeln
- Alle Entscheidungen mit Begründung
- Kommunikation mit BSI (Melde-IDs, Korrespondenz)
- Maßnahmen und deren Wirksamkeit
- Lessons Learned und Folgemaßnahmen

Aufbewahrungsfrist: Mindestens 3 Jahre nach Abschluss des Vorfalls.
