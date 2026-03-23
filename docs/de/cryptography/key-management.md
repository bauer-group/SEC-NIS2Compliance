# Key Management & Zertifikatsverwaltung

## Schlüssel-Lebenszyklus

| Phase | Anforderungen |
|-------|-------------|
| **Erzeugung** | Kryptografisch sichere Zufallsgeneratoren (CSPRNG), Mindestschlüssellängen gemäß BSI TR-02102 |
| **Verteilung** | Verschlüsselter Kanal, personalisierte Übergabe, keine Klartextübertragung |
| **Speicherung** | Verschlüsselter Speicher, Zugriffskontrolle nach Need-to-Know, Audit-Trail |
| **Nutzung** | Nur für definierten Zweck, keine Zweckentfremdung |
| **Rotation** | Planmäßig gemäß Rotationsintervallen, außerplanmäßig bei Kompromittierungsverdacht |
| **Archivierung** | Verschlüsselt, zeitlich begrenzt, nur für Entschlüsselung alter Daten |
| **Vernichtung** | Sichere Löschung (kryptografisches Löschen oder physische Zerstörung), dokumentiert |

## Rotationsintervalle

| Schlüsseltyp | Rotation | Anmerkung |
|-------------|----------|-----------|
| TLS-Zertifikate | 90 Tage (Let's Encrypt automatisiert) | Automatisierte Erneuerung |
| SSH-Schlüssel | Jährlich oder bei Personalwechsel | Personalisierte Schlüssel |
| API-Keys | Jährlich oder bei Kompromittierungsverdacht | Automatisiert wo möglich |
| Backup-Schlüssel | Bei jeder Vollsicherung | Alter Schlüssel für Restore archivieren |
| Datenbank-Schlüssel | Jährlich | Geplante Rotation in Wartungsfenster |

## Zertifikatsverwaltung

### Inventar

Alle Zertifikate werden zentral erfasst:

| Attribut | Beschreibung |
|---------|-------------|
| Domain / Common Name | Für welche Domain gilt das Zertifikat |
| Aussteller | CA (Let's Encrypt, interne CA) |
| Ablaufdatum | Automatisches Monitoring |
| Erneuerungsprozess | Automatisch / Manuell |
| Verantwortlich | Zuständiger Administrator |

### Monitoring

| Prüfung | Intervall | Aktion bei Befund |
|---------|-----------|------------------|
| Ablaufdatum-Check | Täglich (automatisiert) | Alert 30 Tage vor Ablauf, Eskalation 7 Tage vor Ablauf |
| Zertifikatsketten-Prüfung | Wöchentlich | Alert bei ungültiger Kette |
| Widerrufsstatus (OCSP/CRL) | Bei jeder Verbindung (Client) | Verbindung ablehnen bei widerrufenem Zertifikat |

### Widerrufsprozess

Bei Kompromittierung eines Zertifikats:

1. Sofortiger Widerruf bei der CA
2. Neues Zertifikat ausstellen und deployen
3. Prüfen ob der kompromittierte Schlüssel anderweitig eingesetzt wurde
4. Vorfall dokumentieren und in Risikoanalyse aufnehmen
