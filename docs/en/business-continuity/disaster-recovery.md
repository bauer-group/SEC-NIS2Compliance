# Disaster Recovery

## Recovery Objectives

| Service Category | RTO | RPO | Priority |
|-----------------|-----|-----|----------|
| **Critical production systems** | < 4 hours | < 1 hour | 1 – Immediate recovery |
| **Customer-facing services** | < 8 hours | < 4 hours | 2 – High priority |
| **Internal systems** | < 24 hours | < 24 hours | 3 – Normal |
| **Archive / documentation** | < 72 hours | < 1 week | 4 – Low |

## Recovery Procedures

### Scenario: Single System Failure

1. Identify root cause (hardware, software, configuration)
2. Activate failover (if available)
3. Restore system from backup or rebuild
4. Apply configuration from Git repository
5. Verify integrity before returning to production
6. Enhance monitoring for 24 hours

### Scenario: Ransomware

1. **Immediately:** Isolate all affected systems from the network
2. Determine scope of encryption
3. Verify backup integrity (identify clean backups)
4. Restore systems from verified backups
5. Rotate all credentials
6. Close attack vector before bringing systems back online

::: danger NO RANSOM PAYMENTS
The BAUER GROUP does not pay ransom under any circumstances. Payment finances criminal organizations and provides no guarantee of data recovery.
:::

### Scenario: Data Center Outage

1. Activate crisis team
2. Failover to secondary site (if available)
3. Prioritized recovery by service category
4. Activate customer communication
5. Ensure provisional operations
6. Complete recovery after primary site availability

## Failover Systems

| System | Failover Type | Switchover Time |
|--------|-------------|----------------|
| DNS | Automatic (Anycast / health check) | < 5 minutes |
| Web applications | Manual (backup deployment) | < 1 hour |
| Databases | Replication (for critical systems) | < 15 minutes |
| Email | Secondary MX record | Automatic |

## DR Test Schedule

| Test | Interval | Scope |
|------|----------|-------|
| Tabletop exercise | Semi-annually | Walk through a scenario without actual system changes |
| Restore test | Quarterly | Actual restoration of individual systems |
| Full DR simulation | Annually | Complete failover scenario with time measurement |
