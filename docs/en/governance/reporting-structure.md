# Reporting & Governance Structure

## Organizational Structure

```
Management
  +-- Information Security Officer (ISO)
  |     +-- Risk Analysis & ISMS
  |     +-- Incident Management & BSI Contact
  |     +-- Audit & Compliance
  |     +-- Training & Awareness
  +-- IT Lead
  |     +-- IT Operations (Server, Network, Cloud)
  |     +-- Software Development
  |     +-- Helpdesk / Support
  +-- Data Protection Officer (DPO)
        +-- GDPR Compliance
```

## ISO -- Role and Authority

| Aspect | Description |
|--------|-------------|
| **Reporting line** | Directly to management (independent of IT Lead) |
| **Responsibilities** | ISMS operation, risk analysis, incident coordination, BSI reporting, audit coordination |
| **Authority** | Authority to order immediate measures during security incidents, escalation to management |
| **Independence** | ISO must not be simultaneously responsible for operational management of the systems under review |

## Reporting Structure

### Regular Reports

| Report | Content | Recipient | Interval | Format |
|--------|---------|-----------|----------|--------|
| **Security KPI Dashboard** | Patch compliance, MTTD/MTTR, MFA coverage, open findings | ISO | Continuous | Dashboard |
| **Monthly Report** | KPI trends, new vulnerabilities, incident overview, measure status | ISO + IT Lead | Monthly | Summary report |
| **Quarterly Report** | Summary, risk status, audit results, budget | Management | Quarterly | Presentation |
| **Annual Report** | Overall assessment, audit results, year-over-year comparison, improvement plan | Management | Annually | Written report |

### Event-Driven Reports

| Trigger | Recipient | Deadline | Format |
|---------|-----------|----------|--------|
| Critical security incident | Management + ISO | Immediately | Verbal + written follow-up |
| BSI notification per §32 | Management | In parallel with notification | Written |
| Critical audit finding | Management | Within 48h | Written |
| Material change in threat landscape | Management + IT | Without delay | Brief notification |

## Documentation Obligations

The following documents are maintained and available at all times:

| Document | Responsible | Review Cycle |
|----------|-------------|-------------|
| Information security policy | ISO, approved by management | Annually |
| Risk analysis and risk treatment plan | ISO | Annually + event-driven |
| Asset inventory | IT + ISO | Continuous |
| Incident response playbooks | ISO + IT | Annually + after incidents |
| Backup and DR documentation | IT Operations | Annually + after changes |
| Permission matrix | IT + Departments | Semi-annually |
| Training records | HR + ISO | Continuous |
| Audit reports and finding tracker | ISO | After each audit |
| BSI reporting documentation | ISO | Per incident |
| Vendor assessments | ISO + Procurement | Annually |
