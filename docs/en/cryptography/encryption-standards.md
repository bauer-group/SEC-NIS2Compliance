# Encryption Standards

## Protocol Requirements

### TLS (Transport Layer Security)

| Requirement | Standard |
|-------------|---------|
| Minimum version | TLS 1.2 |
| Recommended version | TLS 1.3 |
| Prohibited versions | SSL 3.0, TLS 1.0, TLS 1.1 |
| Cipher suites (TLS 1.3) | TLS_AES_256_GCM_SHA384, TLS_CHACHA20_POLY1305_SHA256, TLS_AES_128_GCM_SHA256 |
| HSTS | Enabled with min. 1 year, includeSubDomains |

### SSH

| Requirement | Standard |
|-------------|---------|
| Key type | Ed25519 (preferred), RSA-4096 (fallback) |
| Password login | Disabled |
| Root login | Disabled |
| Protocol version | SSH-2 exclusively |

### Email (SMTP)

| Requirement | Standard |
|-------------|---------|
| Transport encryption | STARTTLS (opportunistic), MTA-STS (enforced) |
| SPF | Configured for all domains |
| DKIM | Signing active, key length ≥ 2048 bit |
| DMARC | Policy: reject, reporting active |

## Database Encryption

| Type | Method | Application |
|------|--------|-------------|
| Transparent Data Encryption (TDE) | AES-256 | Entire database at rest |
| Column-level encryption | AES-256 | Highly sensitive fields (credentials, PII) |
| Connection encryption | TLS 1.2+ | All database connections |

## Backup Encryption

| Aspect | Standard |
|--------|---------|
| Algorithm | AES-256 |
| Key management | Separate key per backup set |
| Key rotation | On every full backup |
| Key storage | Separate from backup, encrypted vault |
