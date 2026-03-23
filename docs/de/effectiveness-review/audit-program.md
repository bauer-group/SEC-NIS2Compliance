# Audit-Programm

## Audit-Typen

| Typ | Beschreibung | Intervall | Durchführung |
|-----|-------------|-----------|-------------|
| **Internes Audit** | Prüfung der ISMS-Konformität und Maßnahmenumsetzung | Jährlich | ISB |
| **Technisches Audit** | Konfigurationsprüfung, Härtungscheck, Vulnerability Assessment | Halbjährlich | IT + ISB |
| **Penetrationstest** | Simulierter Angriff auf Infrastruktur und Anwendungen | Jährlich | Externer Dienstleister |
| **Berechtigungsaudit** | Prüfung aller Zugriffsrechte auf Aktualität und Notwendigkeit | Halbjährlich | ISB |
| **Backup-Audit** | Restore-Tests und Backup-Integritätsprüfung | Quartalsweise | IT-Operations |
| **Dienstleister-Audit** | Prüfung kritischer Dienstleister auf Vertragskonformität | Jährlich | ISB + Einkauf |

## Audit-Scope

### Internes ISMS-Audit

| Prüfbereich | Prüfpunkte |
|------------|-----------|
| Informationssicherheitspolitik | Aktualität, Freigabe durch GL, Bekanntmachung |
| Risikoanalyse | Vollständigkeit, Aktualität, Risikobehandlungspläne |
| Incident Management | Prozessdokumentation, Übungen, Meldefristen |
| Zugriffskontrolle | MFA-Durchsetzung, Berechtigungen, On-/Offboarding |
| Schulung | Abschlussquoten, Aktualität der Inhalte |
| Business Continuity | Backup-Tests, DR-Plan, Krisenübungen |

### Penetrationstest-Scope

| Scope | Beschreibung |
|-------|-------------|
| **Externe Angriffsfläche** | Öffentlich erreichbare Dienste, Webapplikationen, APIs |
| **Interne Infrastruktur** | Netzwerksegmentierung, Lateral Movement, Privilege Escalation |
| **Social Engineering** | Phishing-Simulation (optional, nach Absprache) |
| **Ausgeschlossen** | Denial-of-Service-Tests gegen Produktivsysteme |

## Audit-Dokumentation

Jedes Audit wird dokumentiert mit:

- Audit-Scope und -Zeitraum
- Prüfmethodik
- Findings mit Schweregrad (Kritisch / Hoch / Mittel / Niedrig / Informational)
- Empfohlene Maßnahmen
- Verantwortlicher und Frist für Behebung
- Follow-up-Termin

## Finding-Management

| Schweregrad | Behebungsfrist | Eskalation |
|-------------|---------------|------------|
| Kritisch | 48 Stunden | Sofort an Geschäftsleitung |
| Hoch | 30 Tage | An ISB im nächsten Regelbericht |
| Mittel | 90 Tage | Quartalsreport |
| Niedrig | Nächster Audit-Zyklus | Keine |
