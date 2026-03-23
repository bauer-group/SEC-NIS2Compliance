# Verschlüsselungsstandards

## Protokoll-Anforderungen

### TLS (Transport Layer Security)

| Anforderung | Standard |
|-------------|---------|
| Mindestversion | TLS 1.2 |
| Empfohlene Version | TLS 1.3 |
| Verbotene Versionen | SSL 3.0, TLS 1.0, TLS 1.1 |
| Cipher Suites (TLS 1.3) | TLS_AES_256_GCM_SHA384, TLS_CHACHA20_POLY1305_SHA256, TLS_AES_128_GCM_SHA256 |
| HSTS | Aktiviert mit min. 1 Jahr, includeSubDomains |

### SSH

| Anforderung | Standard |
|-------------|---------|
| Schlüsseltyp | Ed25519 (bevorzugt), RSA-4096 (Fallback) |
| Passwort-Login | Deaktiviert |
| Root-Login | Deaktiviert |
| Protokollversion | SSH-2 ausschließlich |

### E-Mail (SMTP)

| Anforderung | Standard |
|-------------|---------|
| Transportverschlüsselung | STARTTLS (opportunistisch), MTA-STS (erzwungen) |
| SPF | Konfiguriert für alle Domains |
| DKIM | Signierung aktiv, Schlüssellänge ≥ 2048 Bit |
| DMARC | Policy: reject, Reporting aktiv |

## Datenbank-Verschlüsselung

| Typ | Methode | Anwendung |
|-----|---------|-----------|
| Transparent Data Encryption (TDE) | AES-256 | Gesamte Datenbank at rest |
| Column-Level Encryption | AES-256 | Besonders sensible Felder (Credentials, PII) |
| Connection Encryption | TLS 1.2+ | Alle DB-Verbindungen |

## Backup-Verschlüsselung

| Aspekt | Standard |
|--------|---------|
| Algorithmus | AES-256 |
| Schlüsselverwaltung | Separater Schlüssel pro Backup-Set |
| Schlüsselrotation | Bei jeder Vollsicherung |
| Schlüsselspeicherung | Getrennt vom Backup, verschlüsselter Tresor |
