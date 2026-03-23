# KPIs & Metriken

## Sicherheits-KPIs

### Schwachstellenmanagement

| KPI | Definition | Zielwert | Messung |
|-----|-----------|---------|---------|
| Patch-Compliance | % der fristgerecht gepatchten Schwachstellen | ≥ 95% | Monatlich |
| Offene kritische Schwachstellen | Anzahl ungepatchter CVSS ≥ 9.0 | 0 | Wöchentlich |
| Mean Time to Patch (MTTP) | Durchschnittliche Tage bis Patch-Deployment | Krit: < 2d, Hoch: < 7d | Monatlich |

### Incident Management

| KPI | Definition | Zielwert | Messung |
|-----|-----------|---------|---------|
| Mean Time to Detect (MTTD) | Zeit von Angriffsbeginn bis Erkennung | < 24 Stunden | Pro Vorfall |
| Mean Time to Respond (MTTR) | Zeit von Erkennung bis Eindämmung | Krit: < 4h, Hoch: < 24h | Pro Vorfall |
| Meldepflicht-Compliance | % der fristgerecht an BSI gemeldeten Vorfälle | 100% | Pro Vorfall |

### Zugriffskontrolle

| KPI | Definition | Zielwert | Messung |
|-----|-----------|---------|---------|
| MFA-Abdeckung | % der Accounts mit aktivem MFA | 100% (externe Zugriffe) | Monatlich |
| Verwaiste Accounts | Anzahl aktiver Accounts ohne zugehörigen Mitarbeiter | 0 | Monatlich |
| Offboarding-Compliance | % der Accounts innerhalb 24h nach Austritt deaktiviert | 100% | Pro Vorgang |

### Business Continuity

| KPI | Definition | Zielwert | Messung |
|-----|-----------|---------|---------|
| Backup-Erfolgsrate | % der erfolgreichen Backup-Jobs | ≥ 99% | Täglich |
| Restore-Erfolgsrate | % der erfolgreichen Restore-Tests | 100% | Quartalsweise |
| RTO-Einhaltung | Wiederherstellungszeit innerhalb Zielvorgabe | 100% | Pro Test/Vorfall |

### Schulung

| KPI | Definition | Zielwert | Messung |
|-----|-----------|---------|---------|
| Schulungsabschluss | % der Mitarbeiter mit abgeschlossener Pflichtschulung | 100% | Jährlich |
| GL-Schulung | Geschäftsleitung hat Cybersicherheitsschulung absolviert | Ja | Jährlich |
| Phishing-Klickrate | % der Mitarbeiter die in Simulation auf Phishing klicken | < 5% | Halbjährlich |

## Reporting

| Report | Inhalt | Empfänger | Intervall |
|--------|--------|-----------|-----------|
| Security Dashboard | Alle KPIs auf einen Blick | ISB | Laufend |
| Monatlicher Sicherheitsbericht | KPI-Trends, offene Findings, Vorfälle | ISB + IT-Leitung | Monatlich |
| Quartals-Managementbericht | KPI-Zusammenfassung, Risikostatus, Maßnahmen | Geschäftsleitung | Quartalsweise |
| Jährlicher Sicherheitsbericht | Gesamtbewertung, Audit-Ergebnisse, Verbesserungsplan | Geschäftsleitung | Jährlich |
