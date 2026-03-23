# Cryptography

::: info LEGAL BASIS
**§30(2) No. 8 BSIG** – Concepts and procedures for the use of cryptography and, where appropriate, encryption
:::

## Standards

BAUER GROUP follows BSI (TR-02102) and ISO/IEC 27001 Annex A.10 recommendations:

| Area | Standard | Minimum Requirement |
|------|---------|-------------------|
| Symmetric encryption | AES | AES-256 |
| Asymmetric encryption | RSA / ECDSA | RSA-4096 / ECDSA P-384 |
| Hash functions | SHA-2 / SHA-3 | SHA-256+ |
| TLS | TLS 1.2+ | TLS 1.3 preferred |
| Key derivation | PBKDF2 / Argon2 | Argon2id preferred |

## Encryption

### Data at Rest

- Full disk encryption on all server systems
- Database encryption for sensitive data
- Backup encryption (AES-256)

### Data in Transit

- TLS 1.2+ for all external connections, TLS 1.3 preferred
- SSH for server administration (Ed25519 keys)
- VPN for remote access to internal systems

## Key Management

| Aspect | Implementation |
|--------|---------------|
| Key generation | Cryptographically secure random generators |
| Key storage | Encrypted storage, access control |
| Key rotation | At least annually for long-term keys |
| Key destruction | Secure deletion on decommissioning |

## Certificate Management

- **Let's Encrypt** for public TLS certificates (automated renewal)
- Certificate expiry monitoring
- Documented processes for certificate renewal and revocation
