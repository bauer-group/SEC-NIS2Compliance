# Audit Program

## Audit Types

| Type | Description | Interval | Conducted by |
|------|-------------|----------|-------------|
| **Internal Audit** | Review of ISMS conformity and measure implementation | Annually | ISO |
| **Technical Audit** | Configuration review, hardening check, vulnerability assessment | Semi-annually | IT + ISO |
| **Penetration Test** | Simulated attack on infrastructure and applications | Annually | External provider |
| **Authorization Audit** | Review of all access rights for currency and necessity | Semi-annually | ISO |
| **Backup Audit** | Restore tests and backup integrity verification | Quarterly | IT Operations |
| **Vendor Audit** | Review of critical vendors for contractual compliance | Annually | ISO + Procurement |

## Audit Scope

### Internal ISMS Audit

| Review Area | Audit Points |
|-------------|-------------|
| Information security policy | Currency, management sign-off, dissemination |
| Risk analysis | Completeness, currency, risk treatment plans |
| Incident management | Process documentation, exercises, reporting deadlines |
| Access control | MFA enforcement, permissions, on-/offboarding |
| Training | Completion rates, content currency |
| Business continuity | Backup tests, DR plan, crisis exercises |

### Penetration Test Scope

| Scope | Description |
|-------|-------------|
| **External attack surface** | Publicly reachable services, web applications, APIs |
| **Internal infrastructure** | Network segmentation, lateral movement, privilege escalation |
| **Social engineering** | Phishing simulation (optional, by arrangement) |
| **Excluded** | Denial-of-service tests against production systems |

## Audit Documentation

Every audit is documented with:

- Audit scope and timeframe
- Audit methodology
- Findings with severity rating (Critical / High / Medium / Low / Informational)
- Recommended remediation measures
- Responsible party and remediation deadline
- Follow-up date

## Finding Management

| Severity | Remediation Deadline | Escalation |
|----------|---------------------|------------|
| Critical | 48 hours | Immediate escalation to management |
| High | 30 days | To ISO in next regular report |
| Medium | 90 days | Quarterly report |
| Low | Next audit cycle | None |
