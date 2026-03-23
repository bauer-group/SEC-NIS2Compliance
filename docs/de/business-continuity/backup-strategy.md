# Backup-Strategie

## 3-2-1-Regel im Detail

### Backup-Typen

| Typ | Beschreibung | Intervall | Speicherbedarf |
|-----|-------------|-----------|----------------|
| **Vollbackup** | Komplette Sicherung aller Daten | Wöchentlich (Sonntag) | 100% |
| **Inkrementell** | Nur seit letztem Backup geänderte Daten | Täglich | ~5-15% |
| **Konfigurationsbackup** | Git-basierte Versionierung aller Configs | Bei jeder Änderung | Minimal |

### Backup-Ziele nach Datentyp

| Datentyp | Primär-Backup | Sekundär-Backup | Offsite | Verschlüsselung | Aufbewahrung |
|----------|--------------|-----------------|---------|-----------------|-------------|
| **Datenbanken** | Lokaler Storage | Object Storage (Cloud) | Ja | AES-256 | 90 Tage |
| **Kundendaten** | Lokaler Storage | Object Storage (Cloud) | Ja | AES-256 | Gemäß Vertrag, min. 30d |
| **Server-Konfigurationen** | Git-Repository | Remote-Repository | Ja | Repository-Level | Unbegrenzt |
| **E-Mail-Archiv** | Lokaler Storage | Object Storage | Ja | AES-256 | 90 Tage |
| **Schlüsselmaterial** | Verschlüsselter Tresor | Offline-Kopie | Ja (physisch getrennt) | AES-256 + Passphrase | Lebensdauer des Schlüssels |

## Restore-Verifikation

| Test | Intervall | Umfang | Akzeptanzkriterium |
|------|-----------|--------|-------------------|
| **Automatisierter Integritätscheck** | Bei jedem Backup | Checksumme | Checksumme stimmt überein |
| **Restore-Test (Stichprobe)** | Monatlich | Einzelne Dateien / Datenbanken | Daten korrekt und vollständig |
| **Vollständiger Restore-Test** | Quartalsweise | Komplettes System | RTO eingehalten, Daten konsistent |
| **DR-Simulation** | Jährlich | Gesamte Infrastruktur | Alle RTO/RPO-Ziele erreicht |

## Monitoring

- Backup-Erfolg/-Fehlschlag wird automatisch überwacht
- Fehlgeschlagene Backups erzeugen sofortige Alerts
- Speicherkapazität und Aufbewahrungsfristen werden überwacht
- Monatlicher Backup-Report an ISB
