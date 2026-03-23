# Key Management & Certificate Management

## Key Lifecycle

| Phase | Requirements |
|-------|-------------|
| **Generation** | Cryptographically secure random number generators (CSPRNG), minimum key lengths per BSI TR-02102 |
| **Distribution** | Encrypted channel, personalized handover, no plaintext transmission |
| **Storage** | Encrypted storage, need-to-know access control, audit trail |
| **Usage** | Only for defined purpose, no repurposing |
| **Rotation** | Scheduled per rotation intervals, unscheduled upon suspected compromise |
| **Archival** | Encrypted, time-limited, only for decryption of legacy data |
| **Destruction** | Secure deletion (cryptographic erasure or physical destruction), documented |

## Rotation Intervals

| Key Type | Rotation | Notes |
|----------|----------|-------|
| TLS certificates | 90 days (Let's Encrypt automated) | Automated renewal |
| SSH keys | Annually or upon personnel change | Personalized keys |
| API keys | Annually or upon suspected compromise | Automated where possible |
| Backup keys | On every full backup | Archive old key for restore |
| Database keys | Annually | Planned rotation during maintenance window |

## Certificate Management

### Inventory

All certificates are tracked centrally:

| Attribute | Description |
|-----------|-------------|
| Domain / Common Name | Which domain the certificate covers |
| Issuer | CA (Let's Encrypt, internal CA) |
| Expiry date | Automatic monitoring |
| Renewal process | Automatic / Manual |
| Responsible party | Assigned administrator |

### Monitoring

| Check | Interval | Action on Finding |
|-------|----------|-------------------|
| Expiry date check | Daily (automated) | Alert 30 days before expiry, escalation 7 days before expiry |
| Certificate chain validation | Weekly | Alert on invalid chain |
| Revocation status (OCSP/CRL) | On every connection (client) | Reject connection for revoked certificate |

### Revocation Process

Upon compromise of a certificate:

1. Immediate revocation at the CA
2. Issue and deploy a new certificate
3. Verify whether the compromised key was used elsewhere
4. Document the incident and incorporate into risk analysis
