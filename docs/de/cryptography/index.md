# Kryptografie

::: info RECHTSGRUNDLAGE
**§30 Abs. 2 Nr. 8 BSIG** – Konzepte und Verfahren für den Einsatz von Kryptografie und gegebenenfalls Verschlüsselung
:::

## Standards

Die BAUER GROUP orientiert sich an den Empfehlungen des BSI (TR-02102) und ISO/IEC 27001 Annex A.10:

| Bereich | Standard | Mindestanforderung |
|---------|---------|-------------------|
| Symmetrische Verschlüsselung | AES | AES-256 |
| Asymmetrische Verschlüsselung | RSA / ECDSA | RSA-4096 / ECDSA P-384 |
| Hashfunktionen | SHA-2 / SHA-3 | SHA-256+ |
| TLS | TLS 1.2+ | TLS 1.3 bevorzugt |
| Key Derivation | PBKDF2 / Argon2 | Argon2id bevorzugt |

## Verschlüsselung

### Data at Rest

- Festplattenverschlüsselung auf allen Serversystemen
- Datenbank-Verschlüsselung für sensible Datenbestände
- Backup-Verschlüsselung (AES-256)

### Data in Transit

- TLS 1.2+ für alle externen Verbindungen, TLS 1.3 bevorzugt
- SSH für Serveradministration (Ed25519-Schlüssel)
- VPN für Remote-Zugriff auf interne Systeme

## Key Management

| Aspekt | Umsetzung |
|--------|-----------|
| Schlüsselerzeugung | Kryptografisch sichere Zufallsgeneratoren |
| Schlüsselspeicherung | Verschlüsselter Speicher, Zugriffskontrolle |
| Schlüsselrotation | Mindestens jährlich für Langzeitschlüssel |
| Schlüsselvernichtung | Sichere Löschung bei Außerbetriebnahme |

## Zertifikatsmanagement

- **Let's Encrypt** für öffentliche TLS-Zertifikate (automatisierte Erneuerung)
- Monitoring der Zertifikatslaufzeiten
- Dokumentierte Prozesse für Zertifikatserneuerung und -widerruf
