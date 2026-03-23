# CRA & AI Act Synergies

## Fundamental Principle

The BAUER GROUP is subject to three complementary EU cybersecurity regulations. To avoid duplication of effort and minimize internal compliance overhead, synergies are leveraged systematically: existing processes from CRA and AI Act compliance are referenced for NIS2 purposes, not duplicated.

## Synergy Overview

| NIS2 Measure (§30) | CRA Coverage | AI Act Coverage | NIS2-Specific |
|---------------------|-------------|-----------------|---------------|
| No. 1 – Risk management | Partial (product-related, Art. 10) | Art. 9 (AI risk management) | ISMS, organizational risk analysis |
| No. 2 – Incident management | Art. 14 (product vulnerabilities) | — | Operational incidents, §32 reporting |
| No. 3 – Business continuity | — | — | Entirely NIS2-specific |
| No. 4 – Supply chain | Art. 10(4), Annex I Part II No. 1 | — | Vendor assessment |
| No. 5 – Vulnerabilities | Art. 10(6), Art. 11 (product CVEs) | — | Infrastructure CVEs |
| No. 6 – Effectiveness | — | — | Entirely NIS2-specific |
| No. 7 – Training | — | Art. 4 (AI Literacy) | Cyber hygiene, BSIG-specific |
| No. 8 – Cryptography | Annex I Part II (product encryption) | Art. 15 (AI cybersecurity) | Infrastructure encryption |
| No. 9 – Access control | — | Art. 14 (human oversight) | Personnel security, MFA |
| No. 10 – Secure communication | — | — | Entirely NIS2-specific |

## Detailed Synergies

### Vulnerability Management (No. 5)

| Aspect | CRA Process | NIS2 Supplement |
|--------|------------|-----------------|
| CVE monitoring | [CRA: Trivy + Grype + OSV-Scanner](https://cra.docs.bauer-group.com/en/vulnerability-management/) | Infrastructure scanners (network, servers) |
| SBOM | [CRA: CycloneDX generation + Cosign signing](https://cra.docs.bauer-group.com/en/sbom-signing/) | Reference to CRA SBOM |
| Patch management | CRA: product updates | NIS2: infrastructure patches (OS, firmware) |
| Disclosure | [CRA: ENISA reporting](https://cra.docs.bauer-group.com/en/incident-response/enisa-reporting) | NIS2: BSI reporting |

### Reporting Obligations (No. 2 / §32)

| Aspect | CRA (Art. 14) | NIS2 (§32 BSIG) |
|--------|-------------|-----------------|
| Trigger | Actively exploited vulnerability in products | Significant security incident in operations |
| Early warning | 24 hours to ENISA | 24 hours to BSI |
| Detailed report | 72 hours | 72 hours |
| Final report | 14 days | 1 month |
| Reporting authority | ENISA Single Reporting Platform | BSI reporting platform |

::: warning PARALLEL REPORTING OBLIGATIONS
An incident may trigger **both** reporting obligations. The shared initial assessment process automatically determines whether a CRA and/or NIS2 report is required. The templates are designed to be compatible.
:::

### Supply Chain (No. 4)

| Aspect | CRA Process | NIS2 Supplement |
|--------|------------|-----------------|
| Software dependencies | [CRA: Dependency Policy + SBOM](https://cra.docs.bauer-group.com/en/supply-chain/) | Reference to CRA |
| Service providers | — | NIS2: hosting, cloud, support partners |
| Audit rights | CRA: supplier audits | NIS2: service provider audits |

## Effort Optimization

Through consistent use of existing CRA groundwork, the NIS2-specific additional effort is reduced to:

| Area | Effort without Synergies | Effort with Synergies | Savings |
|------|-------------------------|----------------------|---------|
| Vulnerability management | Full build-out | Infrastructure supplement only | ~60% |
| Incident response | Full build-out | Operational incidents + §32 only | ~40% |
| Supply chain | Full build-out | Vendor assessment only | ~50% |
| Training | Full build-out | Reference AI Literacy (Art. 4) | ~20% |
