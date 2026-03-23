# Business Continuity

::: info LEGAL BASIS
**§30(2) No. 3 BSIG** – Business continuity, including backup management and disaster recovery, and crisis management
:::

## Backup Strategy

BAUER GROUP applies the **3-2-1 rule**:

| Principle | Implementation |
|-----------|---------------|
| **3** copies | Production data + 2 backups |
| **2** different media | Local storage + cloud/offsite |
| **1** offsite copy | Geographically separated location |

### Backup Intervals

| Data Type | Interval | Retention | Encryption |
|-----------|----------|-----------|------------|
| Databases | Daily (incremental), weekly (full) | 90 days | AES-256 |
| Configurations | On change (Git-based) | Unlimited (versioning) | Repository-level |
| Customer data | Daily | Per contract, min. 30 days | AES-256 |
| Email | Daily | 90 days | AES-256 |

## Recovery Objectives

| Service | RTO (Recovery Time) | RPO (Recovery Point) |
|---------|--------------------|--------------------|
| Critical production systems | < 4 hours | < 1 hour |
| Internal systems | < 24 hours | < 24 hours |
| Archive / documentation | < 72 hours | < 1 week |

## Disaster Recovery

- **Regular restore tests** – Quarterly verification of recoverability
- **Documented recovery procedures** per system
- **Failover systems** for business-critical services
- **Escalation plan** with clear responsibilities and communication channels

## Crisis Management

In the event of a crisis (e.g. ransomware, total outage):

1. **Activate crisis team** (ISO, management, IT lead)
2. **Establish situational awareness** and document
3. **Activate communication plan** (internal, customers, authorities)
4. **Restore** per documented DR plan
5. **Post-incident review** with lessons learned and plan adjustment
