# Business Continuity

::: info RECHTSGRUNDLAGE
**§30 Abs. 2 Nr. 3 BSIG** – Aufrechterhaltung des Betriebs, wie Backup-Management und Wiederherstellung nach einem Notfall, und Krisenmanagement
:::

## Backup-Strategie

Die BAUER GROUP wendet die **3-2-1-Regel** an:

| Prinzip | Umsetzung |
|---------|-----------|
| **3** Kopien | Produktivdaten + 2 Backups |
| **2** verschiedene Medien | Lokaler Storage + Cloud/Offsite |
| **1** Offsite-Kopie | Geografisch getrennter Standort |

### Backup-Intervalle

| Datentyp | Intervall | Aufbewahrung | Verschlüsselung |
|----------|-----------|-------------|-----------------|
| Datenbanken | Täglich (inkrementell), wöchentlich (voll) | 90 Tage | AES-256 |
| Konfigurationen | Bei Änderung (Git-basiert) | Unbegrenzt (Versionierung) | Repository-Level |
| Kundendaten | Täglich | Gemäß Vertrag, min. 30 Tage | AES-256 |
| E-Mail | Täglich | 90 Tage | AES-256 |

## Wiederherstellungsziele

| Dienst | RTO (Recovery Time) | RPO (Recovery Point) |
|--------|--------------------|--------------------|
| Kritische Produktivsysteme | < 4 Stunden | < 1 Stunde |
| Interne Systeme | < 24 Stunden | < 24 Stunden |
| Archiv / Dokumentation | < 72 Stunden | < 1 Woche |

## Disaster Recovery

- **Regelmäßige Restore-Tests** – Vierteljährliche Prüfung der Wiederherstellbarkeit
- **Dokumentierte Wiederherstellungsprozeduren** pro System
- **Failover-Systeme** für geschäftskritische Dienste
- **Eskalationsplan** mit klaren Verantwortlichkeiten und Kommunikationswegen

## Krisenmanagement

Bei Eintritt eines Krisenfalls (z.B. Ransomware, Totalausfall):

1. **Krisenstab** aktivieren (ISB, Geschäftsleitung, IT-Leitung)
2. **Lagebild** erstellen und dokumentieren
3. **Kommunikationsplan** aktivieren (intern, Kunden, Behörden)
4. **Wiederherstellung** nach dokumentiertem DR-Plan
5. **Nachbereitung** mit Lessons Learned und Plananpassung
