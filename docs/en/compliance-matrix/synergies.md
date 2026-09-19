# CRA & AI Act Synergies (Detail)

## Detailed Requirement Mapping

### §30(2) No. 2 -- Incident Management vs. CRA Art. 14

| Aspect | NIS2 (§32 BSIG) | CRA (Art. 14) | Synergy |
|--------|-----------------|---------------|---------|
| Trigger | Significant operational incident | Product vulnerability / incident | Shared initial assessment process |
| Early warning | 24h to BSI | 24h to coordinating CSIRT and ENISA (single reporting platform) | Parallel notification using shared template |
| Detailed report | 72h | 72h | Data reusable |
| Final report | 1 month after the 72h notification | 14 days after a corrective measure is available (vulnerability), 1 month (severe incident) | Separate reports, shared root cause analysis |
| Templates | [NIS2 Reporting Obligations](/en/incident-management/reporting) | [CRA ENISA Reporting](https://cra.docs.bauer-group.com/en/incident-response/enisa-reporting) | Designed for compatibility |

### §30(2) No. 4 -- Supply Chain vs. CRA Art. 13(5), Annex I Part II No. 1

| Aspect | NIS2 | CRA | Synergy |
|--------|------|-----|---------|
| Software dependencies | -- (NIS2 references CRA) | [SBOM + Dependency Policy](https://cra.docs.bauer-group.com/en/supply-chain/) | CRA leading |
| IT service providers | [Vendor Assessment](/en/supply-chain/vendor-assessment) | -- | NIS2 leading |
| Contractual requirements | [Security Clauses](/en/supply-chain/contractual-requirements) | Art. 13(5) (due diligence for third-party components) | Shared contractual standards |

### §30(2) No. 5 -- Vulnerabilities vs. CRA Art. 13(8), Annex I Part II

| Aspect | NIS2 | CRA | Synergy |
|--------|------|-----|---------|
| CVE monitoring (products) | -- (NIS2 references CRA) | [CRA Vulnerability Management](https://cra.docs.bauer-group.com/en/vulnerability-management/) | CRA leading |
| CVE monitoring (infrastructure) | [Scanning](/en/vulnerability-management/scanning) | -- | NIS2 leading |
| Patch management | [Patch Management](/en/vulnerability-management/patch-management) | CRA: Product updates | Shared timelines |
| Secure development | [Secure Development](/en/vulnerability-management/secure-development) | CRA: Security by design | Shared development standards |

### AI Act Synergies

| NIS2 Measure | AI Act Article | Description |
|-------------|---------------|-------------|
| No. 1 -- Risk management | Art. 9 (Risk management system) | NIS2 ISMS provides the methodological foundation for AI risk management |
| No. 7 -- Training | Art. 4 (AI Literacy) | [AI Act Training Program](https://ai-act.docs.bauer-group.com/en/governance/) as extension |
| No. 8 -- Cryptography | Art. 15 (Cybersecurity) | Cryptography standards also apply to AI systems |
| No. 9 -- Access control | Art. 14 (Human oversight) | Access control concepts as foundation for AI oversight |

## Overall Architecture

```
NIS2 (Organization & Operations)
  +-- Risk Management <---- AI Act (AI Risk Management, Art. 9)
  +-- Incident Management <---- CRA (Product Incidents, Art. 14)
  +-- Supply Chain <---- CRA (Software SBOM, Annex I)
  +-- Vulnerabilities <---- CRA (Product CVEs, Art. 13, Annex I Part II)
  +-- Training <---- AI Act (AI Literacy, Art. 4)
  +-- Cryptography <---- AI Act (Cybersecurity, Art. 15)
                    <---- CRA (Product Encryption, Annex I)
```
