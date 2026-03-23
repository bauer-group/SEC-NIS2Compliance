# Berichtswesen & Governance-Struktur

## Organisationsstruktur

```
Geschäftsleitung
  ├── Informationssicherheitsbeauftragter (ISB)
  │     ├── Risikoanalyse & ISMS
  │     ├── Incident Management & BSI-Kontakt
  │     ├── Audit & Compliance
  │     └── Schulung & Awareness
  ├── IT-Leitung
  │     ├── IT-Operations (Server, Netzwerk, Cloud)
  │     ├── Softwareentwicklung
  │     └── Helpdesk / Support
  └── Datenschutzbeauftragter (DSB)
        └── DSGVO-Compliance
```

## ISB – Rolle und Befugnisse

| Aspekt | Beschreibung |
|--------|-------------|
| **Berichtslinie** | Direkt an Geschäftsleitung (unabhängig von IT-Leitung) |
| **Aufgaben** | ISMS-Betrieb, Risikoanalyse, Vorfallkoordination, BSI-Meldungen, Audit-Koordination |
| **Befugnisse** | Anordnung von Sofortmaßnahmen bei Sicherheitsvorfällen, Eskalation an Geschäftsleitung |
| **Unabhängigkeit** | ISB darf nicht gleichzeitig für die zu prüfenden Systeme operativ verantwortlich sein |

## Reporting-Struktur

### Regelmäßige Berichte

| Bericht | Inhalt | Empfänger | Intervall | Format |
|---------|--------|-----------|-----------|--------|
| **Security KPI Dashboard** | Patch-Compliance, MTTD/MTTR, MFA-Quote, offene Findings | ISB | Laufend | Dashboard |
| **Monatsbericht** | KPI-Trends, neue Schwachstellen, Vorfallübersicht, Maßnahmenstatus | ISB + IT-Leitung | Monatlich | Kurzreport |
| **Quartalsbericht** | Zusammenfassung, Risikostatus, Audit-Ergebnisse, Budget | Geschäftsleitung | Quartalsweise | Präsentation |
| **Jahresbericht** | Gesamtbewertung, Audit-Ergebnisse, Vorjahresvergleich, Verbesserungsplan | Geschäftsleitung | Jährlich | Schriftlicher Bericht |

### Anlassbezogene Berichte

| Auslöser | Empfänger | Frist | Format |
|----------|-----------|-------|--------|
| Kritischer Sicherheitsvorfall | Geschäftsleitung + ISB | Sofort | Mündlich + schriftliche Nachbereitung |
| BSI-Meldung nach §32 | Geschäftsleitung | Parallel zur Meldung | Schriftlich |
| Kritischer Audit-Befund | Geschäftsleitung | Innerhalb 48h | Schriftlich |
| Wesentliche Änderung der Bedrohungslage | Geschäftsleitung + IT | Zeitnah | Kurzinfo |

## Dokumentationspflichten

Folgende Dokumente werden gepflegt und sind jederzeit verfügbar:

| Dokument | Verantwortlich | Review-Zyklus |
|----------|---------------|--------------|
| Informationssicherheitspolitik | ISB, Freigabe durch GL | Jährlich |
| Risikoanalyse und Risikobehandlungsplan | ISB | Jährlich + anlassbezogen |
| Asset-Inventar | IT + ISB | Laufend |
| Incident-Response-Playbooks | ISB + IT | Jährlich + nach Vorfall |
| Backup- und DR-Dokumentation | IT-Operations | Jährlich + nach Änderung |
| Berechtigungsmatrix | IT + Fachbereiche | Halbjährlich |
| Schulungsnachweise | HR + ISB | Laufend |
| Audit-Berichte und Finding-Tracker | ISB | Nach jedem Audit |
| BSI-Meldedokumentation | ISB | Pro Vorfall |
| Dienstleisterbewertungen | ISB + Einkauf | Jährlich |
