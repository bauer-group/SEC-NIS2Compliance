# Autorisierung & Berechtigungsmanagement

## Zugriffskontrollmodell

Die BAUER GROUP setzt ein rollenbasiertes Zugriffskontrollmodell (RBAC) ein:

| Prinzip | Umsetzung |
|---------|-----------|
| **Least Privilege** | Jeder Account erhält nur die minimal notwendigen Rechte |
| **Need-to-Know** | Datenzugriff nur bei geschäftlicher Notwendigkeit |
| **Separation of Duties** | Kritische Operationen erfordern mehrere Personen |
| **Default Deny** | Kein Zugriff ohne explizite Berechtigung |

## Rollenmodell

| Rolle | Berechtigungen | Vergabe durch |
|-------|---------------|--------------|
| **Benutzer** | Zugriff auf zugewiesene Anwendungen und Daten | Vorgesetzter + IT |
| **Entwickler** | Code-Repositories, Staging-Umgebungen, CI/CD | Teamlead + IT |
| **Administrator** | Systemkonfiguration, Benutzerverwaltung, Monitoring | ISB + IT-Leitung |
| **Root / Superadmin** | Vollzugriff auf Infrastruktur | Nur IT-Leitung, Vier-Augen-Prinzip |

## Berechtigungsprozess

### Vergabe

1. Antragstellung durch Mitarbeiter oder Vorgesetzten
2. Genehmigung durch zuständigen Daten-/Systemverantwortlichen
3. Umsetzung durch IT
4. Dokumentation im Berechtigungsinventar

### Änderung

1. Bei Rollenwechsel: Alte Berechtigungen entziehen, neue vergeben
2. Frist: Innerhalb von 5 Arbeitstagen nach Rollenwechsel
3. Review alter Berechtigungen durch Vorgesetzten

### Entzug (Offboarding)

| Schritt | Frist | Verantwortlich |
|---------|-------|---------------|
| Account-Deaktivierung | Am letzten Arbeitstag, vor Arbeitsende | IT |
| E-Mail-Weiterleitung | Einrichten auf Vertreter (befristet) | IT |
| Shared Credentials | Rotation aller geteilten Zugänge | IT + Fachabteilung |
| Hardware-Rückgabe | Am letzten Arbeitstag | Vorgesetzter |
| VPN/Remote-Zugang | Sofortige Deaktivierung | IT |

## Berechtigungsaudit

| Prüfung | Intervall | Aktion |
|---------|-----------|--------|
| Vollständiger Berechtigungs-Review | Halbjährlich | Jeder Systemverantwortliche prüft Berechtigungen seiner Systeme |
| Verwaiste Accounts | Monatlich (automatisiert) | Deaktivierung von Accounts ohne zugehörigen aktiven Mitarbeiter |
| Privilegierte Accounts | Quartalsweise | Prüfung aller Admin-Berechtigungen auf Notwendigkeit |
| Service-Accounts | Halbjährlich | Eigentümer bestätigt Notwendigkeit und Scope |
