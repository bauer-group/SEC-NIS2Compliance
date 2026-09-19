# Meldepflichten nach §32 BSIG

## Dreistufiges Meldemodell

### Stufe 1: Frühwarnung (24 Stunden)

| Feld | Inhalt |
|------|--------|
| **Frist** | Unverzüglich, spätestens 24 Stunden nach Kenntnis des erheblichen Vorfalls (§32 Abs. 1 Nr. 1 BSIG) |
| **Empfänger** | BSI über Meldeplattform |
| **Inhalt** | Art des Vorfalls, erster Verdacht auf Ursache |
| **Besonderheiten** | Angabe ob rechtswidrige/böswillige Handlung vermutet wird; ob grenzüberschreitende Auswirkung möglich |

### Stufe 2: Aktualisierung (72 Stunden)

| Feld | Inhalt |
|------|--------|
| **Frist** | Unverzüglich, spätestens 72 Stunden nach Kenntnis (§32 Abs. 1 Nr. 2 BSIG) |
| **Empfänger** | BSI über Meldeplattform |
| **Inhalt** | Erste Bewertung des Vorfalls: Schweregrad, Auswirkungen |
| **Besonderheiten** | Kompromittierungsindikatoren (IoC) soweit verfügbar; Aktualisierung der Ersteinschätzung |

### Stufe 3: Abschlussbericht (1 Monat)

| Feld | Inhalt |
|------|--------|
| **Frist** | Spätestens 1 Monat nach Übermittlung der 72-Stunden-Meldung (§32 Abs. 1 Nr. 4 BSIG) |
| **Empfänger** | BSI über Meldeplattform |
| **Inhalt** | Ausführliche Beschreibung mit Schweregrad und Auswirkungen, Art der Bedrohung bzw. Ursache, getroffene und laufende Abhilfemaßnahmen, ggf. grenzüberschreitende Auswirkungen |
| **Besonderheiten** | Dauert der Vorfall zu diesem Zeitpunkt noch an: Fortschrittsmeldung statt Abschlussbericht; der Abschlussbericht folgt nach abschließender Bearbeitung (§32 Abs. 2 BSIG) |

::: info MELDEFRISTEN
Die Fristen von 24 und 72 Stunden laufen ab dem Zeitpunkt, zu dem die Einrichtung Kenntnis von dem erheblichen Sicherheitsvorfall erlangt. „Kenntnis“ bezeichnet den Zeitpunkt, zu dem der ISB oder ein Mitglied des Incident-Response-Teams bestätigt hat, dass das Ereignis nach den nachstehenden Kriterien ein erheblicher Sicherheitsvorfall ist. Die Frist für den Abschlussbericht beginnt dagegen erst mit der Übermittlung der 72-Stunden-Meldung. Auf Ersuchen des BSI ist zusätzlich eine Zwischenmeldung über relevante Statusaktualisierungen abzugeben (§32 Abs. 1 Nr. 3 BSIG).
:::

## Kriterien für erhebliche Sicherheitsvorfälle

Grundsätzlich ist ein Sicherheitsvorfall erheblich, wenn er schwerwiegende Betriebsstörungen der Dienste oder finanzielle Verluste für die Einrichtung verursacht oder verursachen kann oder andere Personen durch erhebliche materielle oder immaterielle Schäden beeinträchtigt oder beeinträchtigen kann (§2 Nr. 11 BSIG). Für die BAUER GROUP als DNS-Diensteanbieter und Managed Service Provider konkretisiert die unmittelbar geltende DVO (EU) 2024/2690 diese Begriffsbestimmung mit festen Schwellenwerten. Ein Vorfall ist erheblich, wenn mindestens eines der folgenden Kriterien erfüllt ist; bei den Schadenskriterien nach Art. 3 Abs. 1 Buchst. a bis d genügt bereits, dass der Vorfall den Schaden verursachen kann:

| Kriterium | Schwellenwert | DVO (EU) 2024/2690 |
|-----------|---------------|--------------------|
| Finanzieller Schaden | Direkter Verlust von mehr als 500.000 EUR oder 5 % des Jahresumsatzes des Vorjahres – je nachdem, welcher Wert niedriger ist | Art. 3 Abs. 1 Buchst. a |
| Geschäftsgeheimnisse | Abfluss von Geschäftsgeheimnissen | Art. 3 Abs. 1 Buchst. b |
| Personenschäden | Tod oder schwere Gesundheitsschädigung einer Person | Art. 3 Abs. 1 Buchst. c, d |
| Unbefugter Zugriff | Erfolgreicher, mutmaßlich böswilliger und unbefugter Zugriff auf Netz- und Informationssysteme, der schwerwiegende Betriebsstörungen verursachen kann | Art. 3 Abs. 1 Buchst. e |
| Wiederholte Vorfälle | Mindestens zwei für sich genommen nicht erhebliche Vorfälle innerhalb von sechs Monaten mit derselben offensichtlichen Ursache, die zusammen die Schwelle für finanzielle Verluste (Art. 3 Abs. 1 Buchst. a) überschreiten | Art. 4 |
| DNS-Dienste | Autoritative oder rekursive Namensauflösung mehr als 30 Minuten vollständig nicht verfügbar; durchschnittliche Antwortzeit über 10 Sekunden für mehr als eine Stunde; oder Integrität, Vertraulichkeit oder Authentizität der Daten des autoritativen DNS-Dienstes beeinträchtigt (ausgenommen Fehlkonfigurationen bei weniger als 1.000 und höchstens 1 % der verwalteten Domains) | Art. 5 |
| Managed Services | Dienst mehr als 30 Minuten vollständig nicht verfügbar; Verfügbarkeit für mehr als 5 % der Nutzer in der EU oder mehr als 1 Mio. Nutzer (niedrigerer Wert) länger als eine Stunde eingeschränkt; oder Integrität, Vertraulichkeit oder Authentizität der Daten durch mutmaßlich böswillige Handlung oder für mehr als 5 % bzw. 1 Mio. Nutzer beeinträchtigt | Art. 10 |

Planmäßige Betriebsunterbrechungen und geplante Folgen planmäßiger Wartungsarbeiten, die von oder im Auftrag der BAUER GROUP durchgeführt werden, gelten nicht als erhebliche Sicherheitsvorfälle (Art. 3 Abs. 2 DVO). Ungeplante Auswirkungen einer Wartung fallen nicht unter diese Ausnahme.

## Meldeprozess intern

```
Vorfall erkannt
  → ISB informiert (< 1h)
    → Erstbewertung: Erheblich ja/nein? (< 4h)
      → Wenn ja: BSI-Frühwarnung vorbereiten (< 24h)
        → Geschäftsleitung informieren
          → DSGVO-Meldung prüfen (Art. 33: 72h an Aufsichtsbehörde)
            → CRA-Meldung prüfen (Art. 14: 24h über die ENISA-Meldeplattform)
```

## Unterrichtung der Dienstempfänger (§35 BSIG)

Als Einrichtung des Sektors digitale Infrastruktur teilt die BAUER GROUP den potenziell von einer erheblichen Cyberbedrohung betroffenen Kunden und dem BSI unverzüglich mit, welche Maßnahmen oder Abhilfemaßnahmen die Kunden ergreifen können, und informiert sie über die Bedrohung selbst – soweit die Interessen der Kunden überwiegen (§35 Abs. 2 BSIG). Zusätzlich kann das BSI anordnen, dass Kunden über einen erheblichen Sicherheitsvorfall unterrichtet werden (§35 Abs. 1 BSIG).

## Parallele Meldepflichten

| Regulierung | Auslöser | Frist | Empfänger |
|------------|----------|-------|-----------|
| **NIS2 / §32 BSIG** | Erheblicher Sicherheitsvorfall | 24h / 72h / 1 Monat nach der 72h-Meldung | BSI |
| **DSGVO Art. 33** | Verletzung des Schutzes personenbezogener Daten | 72 Stunden | Zuständige Aufsichtsbehörde |
| **CRA Art. 14 Abs. 1** | Aktiv ausgenutzte Schwachstelle in einem Produkt mit digitalen Elementen | 24h / 72h / 14 Tage nach Verfügbarkeit einer Korrektur | Koordinierendes CSIRT über die einheitliche Meldeplattform (zugleich ENISA) |
| **CRA Art. 14 Abs. 3** | Schwerwiegender Sicherheitsvorfall mit Auswirkung auf die Sicherheit eines Produkts | 24h / 72h / 1 Monat nach der 72h-Meldung | Koordinierendes CSIRT über die einheitliche Meldeplattform (zugleich ENISA) |

::: warning PARALLELE MELDEPFLICHTEN
Ein einzelner Vorfall kann gleichzeitig Meldepflichten nach mehreren Regelwerken auslösen. Die Erstbewertung prüft alle anwendbaren Regelwerke. Die Vorlagen sind aufeinander abgestimmt, damit parallele Meldungen effizient erfolgen können. Siehe auch [CRA- & AI-Act-Synergien](/de/overview/synergies).
:::

## Dokumentation

Jeder meldepflichtige Vorfall wird vollständig dokumentiert:

- Chronologischer Ablauf mit Zeitstempeln
- Alle Entscheidungen mit Begründung
- Kommunikation mit BSI (Melde-IDs, Korrespondenz)
- Maßnahmen und deren Wirksamkeit
- Lessons Learned und Folgemaßnahmen

Aufbewahrungsfrist: Mindestens 3 Jahre nach Abschluss des Vorfalls.
