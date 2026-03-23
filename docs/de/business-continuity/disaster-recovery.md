# Disaster Recovery

## Wiederherstellungsziele

| Dienstkategorie | RTO | RPO | Priorität |
|----------------|-----|-----|-----------|
| **Kritische Produktivsysteme** | < 4 Stunden | < 1 Stunde | 1 – Sofortige Wiederherstellung |
| **Kundenfacing Dienste** | < 8 Stunden | < 4 Stunden | 2 – Hohe Priorität |
| **Interne Systeme** | < 24 Stunden | < 24 Stunden | 3 – Normal |
| **Archiv / Dokumentation** | < 72 Stunden | < 1 Woche | 4 – Niedrig |

## Wiederherstellungsprozeduren

### Szenario: Einzelsystem-Ausfall

1. Ursache identifizieren (Hardware, Software, Konfiguration)
2. Failover aktivieren (falls vorhanden)
3. System aus Backup wiederherstellen oder neu aufsetzen
4. Konfiguration aus Git-Repository anwenden
5. Integritätsprüfung vor Wiederinbetriebnahme
6. Monitoring für 24h verstärken

### Szenario: Ransomware

1. **Sofort:** Alle betroffenen Systeme vom Netz isolieren
2. Umfang der Verschlüsselung bestimmen
3. Backup-Integrität prüfen (saubere Backups identifizieren)
4. Systeme aus verifizierten Backups wiederherstellen
5. Alle Credentials rotieren
6. Angriffsvektor schließen bevor Systeme wieder online gehen

::: danger KEIN LÖSEGELD
Die BAUER GROUP zahlt grundsätzlich kein Lösegeld. Zahlung finanziert kriminelle Strukturen und bietet keine Garantie der Datenwiederherstellung.
:::

### Szenario: Rechenzentrumsausfall

1. Krisenstab aktivieren
2. Failover auf Sekundärstandort (falls vorhanden)
3. Priorisierte Wiederherstellung nach Dienstkategorie
4. Kundenkommunikation aktivieren
5. Provisorischen Betrieb sicherstellen
6. Vollständige Wiederherstellung nach Verfügbarkeit des Primärstandorts

## Failover-Systeme

| System | Failover-Typ | Umschaltzeit |
|--------|-------------|-------------|
| DNS | Automatisch (Anycast / Health-Check) | < 5 Minuten |
| Webanwendungen | Manuell (Backup-Deployment) | < 1 Stunde |
| Datenbanken | Replikation (bei kritischen Systemen) | < 15 Minuten |
| E-Mail | Sekundärer MX-Record | Automatisch |

## DR-Tests

| Test | Intervall | Umfang |
|------|-----------|--------|
| Tabletop-Exercise | Halbjährlich | Durchspielen eines Szenarios ohne echte Systemänderung |
| Restore-Test | Quartalsweise | Tatsächliche Wiederherstellung einzelner Systeme |
| Vollständige DR-Simulation | Jährlich | Gesamtes Failover-Szenario mit Zeitnahme |
