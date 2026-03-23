# Incident Management

::: info LEGAL BASIS
**§30(2) No. 2 BSIG** – Incident handling

**§32 BSIG** – Reporting obligations for significant security incidents
:::

## Classification

| Level | Criteria | Response Time |
|-------|----------|---------------|
| **Critical** | Data loss, complete service outage, active compromise | Immediate |
| **High** | Partial outage, access to sensitive data possible, active attack | < 4 hours |
| **Medium** | Limited functionality, failed attacks, vulnerability discovered | < 24 hours |
| **Low** | Anomaly without direct impact, policy violation without damage | Next business day |

## Incident Response Process

### 1. Detection and Reporting

- Monitoring systems, log analysis and manual detection
- Every employee is obligated to report suspected incidents immediately
- Central reporting to the Information Security Officer (ISO)

### 2. Analysis and Assessment

- Classification by severity
- Determination of affected systems, data and customers
- Assessment: Is this a reportable incident under §32 BSIG?

### 3. Containment

- Immediate isolation of compromised systems
- Blocking of affected credentials
- Activation of failover systems for service outages
- Evidence preservation before remediation

### 4. Eradication and Recovery

- Removal of attack cause (malware, compromised accounts)
- Restoration from backups for data loss
- Verification of system integrity before return to service
- Rotation of all potentially compromised credentials

### 5. Post-Incident Review

- Post-mortem analysis with root cause determination
- Documentation and derivation of improvement measures
- Update of risk analysis as needed

## Escalation Matrix

| Level | Initial notification | Escalation | Customer notification |
|-------|---------------------|------------|---------------------|
| Critical | ISO + Management | Immediate | Without delay |
| High | ISO | < 1 hour | If affected |
| Medium | ISO | Regular | Only on impact |
| Low | IT Team | Next meeting | No |

## Reporting Obligations per §32 BSIG

| Tier | Deadline | Content |
|------|----------|---------|
| **Early warning** | 24 hours | Type of incident, suspicion of unlawful action, cross-border impact |
| **Update** | 72 hours | Severity, impact, indicators of compromise (IoC) |
| **Final report** | 1 month | Root cause, measures taken, cross-border impacts |

::: warning DUAL REPORTING CRA + NIS2
As a CRA manufacturer and NIS2 entity, **two separate reporting obligations** may be triggered: CRA report to ENISA (24h/72h/14d) and NIS2 report to BSI (24h/72h/1 month). Details in the [CRA Documentation](https://cra.docs.bauer-group.com/en/incident-response/).
:::
