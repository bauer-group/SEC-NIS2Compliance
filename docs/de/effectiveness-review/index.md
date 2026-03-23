# Wirksamkeitsprüfung

::: info RECHTSGRUNDLAGE
**§30 Abs. 2 Nr. 6 BSIG** – Konzepte und Verfahren zur Bewertung der Wirksamkeit von Risikomanagementmaßnahmen im Bereich der Sicherheit in der Informationstechnik
:::

## Jährliche Sicherheitsüberprüfung

Die Wirksamkeit der Risikomanagementmaßnahmen wird mindestens jährlich überprüft:

| Prüfbereich | Methode | Verantwortlich |
|-------------|---------|---------------|
| Risikoanalyse | Aktualisierung der Risikobewertung | ISB |
| Incident Response | Tabletop-Übung / Simulation | ISB + IT-Team |
| Backup & Recovery | Restore-Test | IT-Operations |
| Zugriffskontrolle | Berechtigungsaudit | ISB |
| Schulung | Abschlussquoten und Wissensprüfung | HR / ISB |

## KPIs

| KPI | Ziel | Messung |
|-----|------|---------|
| Patch-Compliance | ≥ 95% innerhalb definierter Fristen | Monatlich |
| Mean Time to Detect (MTTD) | < 24 Stunden | Pro Vorfall |
| Mean Time to Respond (MTTR) | < 4 Stunden (kritisch) | Pro Vorfall |
| Schulungsabschluss | 100% Pflichtschulungen | Jährlich |
| Backup-Restore-Erfolgsrate | 100% | Quartalstest |

## Penetrationstests

- **Externe Tests** – Jährlich durch unabhängigen Dienstleister
- **Interne Tests** – Anlassbezogen bei wesentlichen Änderungen
- **Scope** – Infrastruktur, Webanwendungen, interne Systeme
- **Ergebnisverwertung** – Findings fließen in Risikoanalyse und Maßnahmenplanung ein

## PDCA-Zyklus

Die kontinuierliche Verbesserung folgt dem Plan-Do-Check-Act-Zyklus:

| Phase | Aktivität |
|-------|-----------|
| **Plan** | Risikoanalyse, Maßnahmenplanung, Schulungsplanung |
| **Do** | Umsetzung der Maßnahmen, Betrieb der Sicherheitssysteme |
| **Check** | KPI-Messung, Audits, Penetrationstests, Vorfallauswertung |
| **Act** | Korrekturmaßnahmen, Anpassung der Risikoanalyse, Prozessverbesserung |
