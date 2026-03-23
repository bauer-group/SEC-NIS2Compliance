# Risikoanalyse

## Methodik

Die Risikoanalyse folgt einem strukturierten Prozess, orientiert an ISO 27005 und BSI IT-Grundschutz:

```
Kontext festlegen → Risiken identifizieren → Risiken analysieren → Risiken bewerten → Risiken behandeln
```

## Bedrohungskatalog

| Kategorie | Bedrohungen | Relevanz |
|-----------|-----------|----------|
| **Cyberangriffe** | Ransomware, Phishing, DDoS, APT, Supply-Chain-Angriff | Hoch |
| **Innentäter** | Vorsätzlicher Datendiebstahl, fahrlässige Fehlbedienung | Mittel |
| **Technisches Versagen** | Hardwareausfall, Softwarefehler, Netzwerkausfall | Mittel |
| **Naturereignisse** | Stromausfall, Überschwemmung, Brand | Niedrig |
| **Drittanbieter** | Kompromittierung eines Dienstleisters, SaaS-Ausfall | Mittel |

## Risikobewertungsmatrix

Risiken werden nach Eintrittswahrscheinlichkeit und Auswirkung bewertet:

| | Gering | Mittel | Hoch | Sehr hoch |
|---|--------|--------|------|-----------|
| **Sehr wahrscheinlich** | Mittel | Hoch | Kritisch | Kritisch |
| **Wahrscheinlich** | Niedrig | Mittel | Hoch | Kritisch |
| **Möglich** | Niedrig | Niedrig | Mittel | Hoch |
| **Unwahrscheinlich** | Niedrig | Niedrig | Niedrig | Mittel |

## Risikobehandlungsplan

Für jedes identifizierte Risiko wird dokumentiert:

| Feld | Beschreibung |
|------|-------------|
| Risiko-ID | Eindeutige Kennung |
| Beschreibung | Art des Risikos und betroffene Assets |
| Bewertung | Eintrittswahrscheinlichkeit × Auswirkung |
| Behandlungsoption | Vermeiden / Vermindern / Übertragen / Akzeptieren |
| Maßnahme | Konkrete technische oder organisatorische Maßnahme |
| Verantwortlich | Zuständige Person |
| Frist | Umsetzungsdatum |
| Restrisiko | Risiko nach Maßnahmenumsetzung |
| Freigabe | Geschäftsleitungsfreigabe bei Risikoakzeptanz |

## Prozessintegration

| Auslöser | Aktion |
|----------|--------|
| Jährlicher Review-Zyklus | Vollständige Überprüfung aller Risiken |
| Neues System / Dienstleister | Risikoanalyse vor Inbetriebnahme |
| Sicherheitsvorfall | Anlassbezogene Neubewertung betroffener Risiken |
| Wesentliche Änderung | Risikoanalyse bei Architektur- oder Prozessänderungen |
| Externe Bedrohungslage | Neubewertung bei relevanten CVEs oder Advisories |
