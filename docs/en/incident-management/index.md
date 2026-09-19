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
- Every employee is obligated to report suspected incidents without delay
- Central reporting to the Information Security Officer (ISO)

### 2. Analysis and Assessment

- Classification by severity (see Classification)
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

- Post-mortem analysis with root cause analysis (RCA)
- Documentation and derivation of concrete improvement measures
- Update of risk analysis as needed

## Escalation Matrix

| Level | Initial notification | Escalation | Customer notification |
|-------|---------------------|------------|---------------------|
| Critical | ISO + Management | Immediate | Without delay |
| High | ISO | < 1 hour | If affected |
| Medium | ISO | Regular | Only on impact |
| Low | IT Team | Next meeting | No |

## Reporting Obligations per §32 BSIG

Significant security incidents must be reported to the BSI according to a three-tier model:

| Tier | Deadline | Content |
|------|----------|---------|
| **Early warning** | 24 hours | Initial report: type of incident, suspicion of unlawful action, cross-border impact |
| **Update** | 72 hours | Initial assessment: severity, impact, indicators of compromise (IoC) |
| **Final report** | 1 month after the 72-hour notification | Detailed description: root cause, measures taken, cross-border impacts |

### Criteria for Significant Incidents

An incident is considered significant if it:

- Has caused or is capable of causing severe operational disruption of the services or financial losses
- Has affected or is capable of affecting other natural or legal persons by causing considerable material or non-material damage

For BAUER GROUP's DNS and managed services, Implementing Regulation (EU) 2024/2690 specifies these criteria with fixed thresholds, see [Reporting Obligations](/en/incident-management/reporting).

### Reporting Channels

- **Reporting portal:** BSI reporting platform (online)
- **Internal:** ISO → Management → BSI report
- **In parallel:** If personal data is affected, assess GDPR notifications – as controller to the supervisory authority (Art. 33(1)), as processor without undue delay to the customer (Art. 33(2))

::: warning DUAL REPORTING CRA + NIS2
As a CRA manufacturer and NIS2 entity, **two separate reporting obligations** may be triggered: CRA report via the single reporting platform to the coordinating CSIRT and ENISA (24h / 72h / final report 14 days after a corrective measure is available or 1 month for severe incidents) and NIS2 report to the BSI (24h / 72h / 1 month after the 72-hour notification). Details on the CRA reporting process in the [CRA Documentation](https://cra.docs.bauer-group.com/en/incident-response/).
:::

::: tip CRA Synergy
The product-related incident response process is described in the [CRA Incident Response Documentation](https://cra.docs.bauer-group.com/en/incident-response/). Product vulnerabilities are reported via the CRA process, operational incidents via this process.
:::
