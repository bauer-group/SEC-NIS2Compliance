# Template: §32 Incident Report

## Instructions

This template structures the three-stage reporting model under §32 BSIG (early warning 24h / update 72h / final report 1 month). All three stages are consolidated into one document.

## Incident Master Data

| Field | Value |
|---|---|
| **Incident ID** | INC-NIS2-YYYY-XXXX |
| **Title** | [Short title] |
| **BSI report ID** | [Assigned by BSI] |
| **First reported** | [Date + time] |
| **Detected by** | [Name / system / source] |
| **Responsible CISO** | [Name] |
| **Significant (§32)** | [ ] Yes  [ ] No – Reason: |
| **Parallel reports** | [ ] GDPR Art. 33  [ ] CRA Art. 14  [ ] None |

## Stage 1: Early Warning (24 hours)

| Field | Value |
|---|---|
| **Reported on** | [Date + time, max. T+24h] |
| **Type of incident** | [Ransomware / Data exfiltration / DDoS / Insider / Other] |
| **Initial cause hypothesis** | [Free text] |
| **Suspected unlawful/malicious act** | [ ] Yes  [ ] No  [ ] Unclear |
| **Possible cross-border impact** | [ ] Yes  [ ] No  [ ] Unclear |
| **Submitted to BSI by** | [Name + transmission channel] |

## Stage 2: Update (72 hours)

| Field | Value |
|---|---|
| **Reported on** | [Date + time, max. T+72h] |
| **Severity** | [Low / Medium / High / Critical] |
| **Affected systems** | [List] |
| **Affected services** | [List with downtime] |
| **Affected data types** | [PII / Business data / Credentials / Other] |
| **Number of affected persons** | [Estimate] |
| **Indicators of compromise (IoC)** | [Hashes, IPs, domains – if available] |
| **Containment actions to date** | [List with timestamps] |
| **Updated cause hypothesis** | [Free text] |

## Stage 3: Final Report (1 month)

| Field | Value |
|---|---|
| **Reported on** | [Date, max. T+30 days – extension documented: yes/no] |
| **Detailed description** | [Full sequence with timestamps] |
| **Confirmed root cause** | [Root cause] |
| **Actions taken** | [Immediate / Medium-term / Long-term] |
| **Verified effectiveness** | [How was it verified?] |
| **Cross-border impact** | [Yes/No, if yes: affected member states] |
| **Damage to third parties** | [Description] |
| **Damage to BAUER GROUP** | [Direct + indirect, EUR] |
| **Lessons learned** | [Reference to lessons learned protocol] |
| **Preventive measures** | [List with target date + owner] |

## Internal Escalation

| Recipient | When | Format |
|-----------|------|--------|
| CISO | Immediately upon detection | Phone + ticket |
| Management | At High/Critical or reportable | Email + verbal |
| Crisis team | At Critical | Convene immediately |
| Data protection officer | If PII involved | Within 1h |
| Legal department | If unlawful act | Within 4h |

## Retention

- **At least 5 years** after closing the incident
- Archive complete BSI correspondence
- Forensically preserve evidence (chain of custody)
