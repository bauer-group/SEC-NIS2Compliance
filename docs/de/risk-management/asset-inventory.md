# Asset-Inventar

## Zweck

Das Asset-Inventar erfasst alle informationstechnischen Systeme, Komponenten und Prozesse der BAUER GROUP. Es bildet die Grundlage für die Risikoanalyse und ermöglicht die Zuordnung von Schutzmaßnahmen zu konkreten Assets.

## Asset-Kategorien

### Serversysteme

| Attribut | Beschreibung |
|---------|-------------|
| Hostname / ID | Eindeutige Identifikation |
| Typ | Physisch / Virtuell / Container |
| Standort | Rechenzentrum, Anbieter |
| Betriebssystem | Inkl. Version und Patch-Level |
| Zweck | Produktivsystem, Staging, Backup |
| Verantwortlich | Zuständiger Administrator |
| Schutzbedarf | Normal / Hoch / Sehr hoch |

### Netzwerkkomponenten

- Firewalls mit Regelwerk-Version und letztem Review-Datum
- Switches und Router mit Firmware-Version
- VPN-Gateways und Zugangspunkte
- DNS-Server und Load Balancer

### Anwendungen

| Attribut | Beschreibung |
|---------|-------------|
| Name / Version | Anwendung mit aktueller Version |
| Typ | Eigenentwicklung / Drittanbieter / SaaS |
| Lizenz | Lizenztyp und Ablaufdatum |
| Support | Supportstatus und Ansprechpartner |
| Datenklassifizierung | Welche Datenklassen werden verarbeitet |
| Abhängigkeiten | Andere Systeme, Bibliotheken, APIs |

### Cloud-Dienste

- Anbieter mit Standort und Rechtsraum
- Vertragslaufzeit und SLAs
- Datenklassifizierung der gespeicherten Daten
- Exit-Strategie und Datenportabilität

### Datenbestände

| Klassifizierung | Speicherort | Backup | Verschlüsselung |
|----------------|------------|--------|-----------------|
| Öffentlich | Beliebig | Optional | Optional |
| Intern | Zugriffskontrolliert | Ja | In Transit |
| Vertraulich | Zugriffskontrolliert + verschlüsselt | Ja + verschlüsselt | At Rest + In Transit |
| Streng vertraulich | Isoliert + verschlüsselt | Ja + verschlüsselt + Offsite | At Rest + In Transit + Audit |

## Pflege

| Aktivität | Intervall |
|-----------|-----------|
| Inventaraktualisierung | Bei jeder Änderung (Deployment, Dekommissionierung) |
| Vollständigkeitsprüfung | Halbjährlich |
| Schutzbedarfsfeststellung | Jährlich oder bei Änderung |
| Verantwortlichkeitsprüfung | Bei Personalwechsel |
