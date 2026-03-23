# Backup Strategy

## 3-2-1 Rule in Detail

### Backup Types

| Type | Description | Interval | Storage Requirement |
|------|------------|----------|---------------------|
| **Full backup** | Complete backup of all data | Weekly (Sunday) | 100% |
| **Incremental** | Only data changed since last backup | Daily | ~5-15% |
| **Configuration backup** | Git-based versioning of all configs | Upon every change | Minimal |

### Backup Targets by Data Type

| Data Type | Primary Backup | Secondary Backup | Offsite | Encryption | Retention |
|-----------|---------------|-----------------|---------|------------|-----------|
| **Databases** | Local storage | Object storage (cloud) | Yes | AES-256 | 90 days |
| **Customer data** | Local storage | Object storage (cloud) | Yes | AES-256 | Per contract, min. 30d |
| **Server configurations** | Git repository | Remote repository | Yes | Repository-level | Indefinite |
| **Email archive** | Local storage | Object storage | Yes | AES-256 | 90 days |
| **Key material** | Encrypted vault | Offline copy | Yes (physically separated) | AES-256 + passphrase | Lifetime of the key |

::: tip 3-2-1 RULE
Maintain at least **3** copies of data, on **2** different media types, with **1** copy stored offsite. This principle is the foundation for resilient data protection per §30(2) No. 3 BSIG.
:::

## Restore Verification

| Test | Interval | Scope | Acceptance Criterion |
|------|----------|-------|---------------------|
| **Automated integrity check** | With every backup | Checksum | Checksum matches |
| **Restore test (sample)** | Monthly | Individual files / databases | Data correct and complete |
| **Full restore test** | Quarterly | Complete system | RTO met, data consistent |
| **DR simulation** | Annually | Entire infrastructure | All RTO/RPO targets achieved |

## Monitoring

- Backup success/failure is monitored automatically
- Failed backups generate immediate alerts
- Storage capacity and retention periods are monitored
- Monthly backup report to CISO
