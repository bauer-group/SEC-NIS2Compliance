# Access Control & Secure Communication

::: info LEGAL BASIS
**§30(2) No. 9 BSIG** – Personnel security, access control concepts and asset management

**§30(2) No. 10 BSIG** – Use of multi-factor authentication or continuous authentication solutions, secured voice, video and text communication, and secured emergency communication systems where appropriate
:::

## Access Control Principles

| Principle | Implementation |
|-----------|---------------|
| **Least privilege** | Minimum rights per task requirement |
| **Need-to-know** | Data access only on business necessity |
| **Separation of duties** | Critical operations require multiple persons |
| **Four-eyes principle** | Security-relevant changes with review |

## Authentication

### Multi-Factor Authentication (MFA)

MFA is mandatory for:

- All external access (VPN, web portals)
- Administrative system access
- Cloud services and SaaS applications
- Email access

Preferred MFA methods: hardware tokens (FIDO2/WebAuthn), authenticator app (TOTP). SMS-based MFA is not permitted.

### Server Access

- SSH with key-based authentication (Ed25519)
- Password-based SSH login disabled
- Root login disabled, access only via personalized accounts

## Password Management

| Requirement | Minimum Standard |
|-------------|-----------------|
| Minimum length | 16 characters (passphrase recommended) |
| Password manager | Mandatory for all employees |
| Password reuse | Prohibited |
| Compromised passwords | Automatic check against known-breach lists |

## On-/Offboarding

| Process | Measure | Deadline |
|---------|---------|----------|
| **Onboarding** | Set up personalized accounts, MFA setup, basic training | Before first working day |
| **Role change** | Adjust permissions, review old rights | Within 5 business days |
| **Offboarding** | Deactivate all access, return hardware, key rotation | On last working day |

## Secure Communication

### Communication Channels

| Channel | Security | Use |
|---------|----------|-----|
| **Email** | TLS transport encryption, SPF/DKIM/DMARC | Standard business communication |
| **Encrypted messenger** | End-to-end encryption | Sensitive internal communication |
| **Video conferencing** | TLS-encrypted, access controls | Meetings, customer calls |
| **VPN** | IPsec/WireGuard | Remote access to internal systems |

### Email Security

- **SPF** – Sender Policy Framework configured for all domains
- **DKIM** – DomainKeys Identified Mail for signature verification
- **DMARC** – Domain-based Message Authentication, Reporting and Conformance (policy: reject)

### Emergency Communication

- Predefined fallback communication channels (phone, alternative messenger)
- Current contact lists of key personnel available offline
- Regular verification of reachability
