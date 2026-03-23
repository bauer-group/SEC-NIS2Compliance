# Incident Response Process

## 5-Phase Model

The incident response process of the BAUER GROUP follows the established NIST SP 800-61 framework, adapted to the requirements of §30(2) No. 2 BSIG.

### Phase 1: Preparation

| Measure | Description |
|---------|-------------|
| Incident response team | Defined roles: CISO (lead), IT Ops, Development, Communications |
| Tooling | Log aggregation, monitoring dashboards, ticketing system |
| Documentation | Response playbooks for the most common scenarios |
| Communication | Predefined contact lists, escalation paths, templates |
| Exercises | At least annually tabletop exercise or simulation |

### Phase 2: Detection and Analysis

| Detection Method | Description | Response Time |
|-----------------|-------------|---------------|
| Automated monitoring | Log-based anomaly detection, threshold alerts | Real-time |
| Vulnerability alerts | CVE feeds, dependency monitoring, vendor advisories | < 4 hours |
| Employee reports | Phishing suspicion, unusual behavior | Immediately upon detection |
| External reports | Customers, partners, security researchers, BSI | Immediately upon receipt |

**Analysis steps:**

1. Initial assessment: Is the incident real? (Triage)
2. Classification by severity (Critical / High / Medium / Low)
3. Impact analysis: Which systems, data and customers are affected?
4. Reporting obligation check: Does the incident constitute a significant incident per §32 BSIG?
5. Initial forensic assessment: Attack vector, timeframe, indicators of compromise (IoC)

### Phase 3: Containment

| Strategy | Application | Example |
|----------|------------|---------|
| **Short-term** | Immediate damage limitation | Isolate network segment, lock account |
| **Long-term** | Sustained containment | Take affected system offline, firewall rule |
| **Evidence preservation** | Before any remediation | Memory dump, log export, disk image |

::: warning EVIDENCE PRESERVATION
Always secure forensic evidence before initiating any cleanup or remediation measures. Evidence is critical for root cause analysis, regulatory reporting and potential law enforcement involvement.
:::

### Phase 4: Eradication and Recovery

| Step | Description |
|------|-------------|
| Eliminate root cause | Remove malware, deactivate compromised accounts, patch vulnerability |
| Clean systems | Reinstall or verified restore from clean backup |
| Rotate credentials | All potentially compromised passwords, API keys, certificates |
| Verify integrity | Confirm system integrity before returning to production |
| Enhance monitoring | Increased surveillance for 30 days after recovery |

### Phase 5: Post-Incident

| Activity | Deadline | Responsible |
|----------|----------|-------------|
| Post-mortem meeting | Within 5 business days | CISO |
| Root cause analysis | Within 10 business days | CISO + IT |
| Lessons learned document | Within 15 business days | CISO |
| Action plan | Within 20 business days | CISO + Executive Management |
| Risk analysis update | Within 30 days | CISO |

## Playbooks

Predefined response playbooks exist for the most common scenarios:

| Scenario | Immediate Actions | Escalation |
|----------|------------------|------------|
| **Ransomware** | Network isolation, verify backup integrity, DO NOT pay ransom | Immediately: CISO + Exec. Management + law enforcement if applicable |
| **Data leak** | Close access path, determine scope, assess GDPR reporting | Immediately: CISO + Exec. Management + DPO |
| **Phishing (successful)** | Lock account, reset password, verify MFA | < 1h: CISO |
| **DDoS** | Activate CDN/WAF, contact upstream provider | Immediately: IT Ops + CISO |
| **Supply chain compromise** | Isolate affected component, review SBOM | Immediately: CISO + Development |
