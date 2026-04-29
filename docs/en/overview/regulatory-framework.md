# Regulatory Framework

## Legal Sources

| Legal Source | Status | Relevance |
|--------------|--------|-----------|
| NIS 2 Directive (EU) 2022/2555 | In force since 16.01.2023 | EU framework directive |
| NIS2UmsuCG (Omnibus Act) | In force since 06.12.2025 | German implementation |
| BSIG (Revised) | In force since 06.12.2025 | Central obligations |
| Implementing Regulation (EU) 2024/2690 | In force | Detailed technical requirements |
| KRITIS Umbrella Act (KRITIS-DachG) | In force since 17.03.2026 | Physical resilience (CER implementation) |

## Applicability

The NIS2 Directive distinguishes two categories:

| Category | Criteria | Sanctions |
|----------|----------|-----------|
| **Essential entities** | Annex I sectors, ≥250 employees or ≥€50M turnover | Up to €10M or 2% of global annual turnover |
| **Important entities** | Annex I/II sectors, ≥50 employees or ≥€10M turnover | Up to €7M or 1.4% of global annual turnover |

## §30 BSIG – Ten Risk Management Measures

| No. | Measure | Documentation |
|-----|---------|---------------|
| 1 | Risk analysis and information system security concepts | [Risk Management](/en/risk-management/) |
| 2 | Incident handling | [Incident Management](/en/incident-management/) |
| 3 | Business continuity (BCM, backup, disaster recovery, crisis management) | [Business Continuity](/en/business-continuity/) |
| 4 | Supply chain security | [Supply Chain Security](/en/supply-chain/) |
| 5 | Security in acquisition, development and maintenance | [Vulnerability Management](/en/vulnerability-management/) |
| 6 | Effectiveness assessment concepts and procedures | [Effectiveness Review](/en/effectiveness-review/) |
| 7 | Basic cyber hygiene practices and training | [Training & Awareness](/en/training/) |
| 8 | Cryptography concepts and procedures | [Cryptography](/en/cryptography/) |
| 9 | Personnel security, access control concepts | [Access Control](/en/access-control/) |
| 10 | Multi-factor authentication, secured communication | [Access Control](/en/access-control/) |

## Additional Obligations

| Section | Obligation | Documentation |
|---------|-----------|---------------|
| §32 BSIG | Reporting obligations for significant security incidents | [Incident Management](/en/incident-management/) |
| §33 BSIG | Registration obligation with BSI | Organizationally implemented |
| §38 BSIG | Approval, supervision and training obligations of management | [Governance](/en/governance/) |

::: info KRITIS-DachG Deadlines

- **17.03.2026** – Entry into force (Bundesrat approval on 06.03.2026)
- **17.07.2026** – Earliest start of registration obligation for identified critical entities (3-month deadline after identification, not before this date)
- The KRITIS-DachG complements NIS2 with **physical resilience** and transposes the EU CER Directive ((EU) 2022/2557) into German law.

:::

## NIS2 vs CRA Demarcation

| Criterion | NIS2 | CRA |
|-----------|------|-----|
| **Regulatory subject** | Operators (entities) | Products with digital elements |
| **Legal form** | Directive (national transposition) | Regulation (directly applicable) |
| **Focus** | Operational security (risk management) | Product security (security by design) |
| **Reporting** | CSIRT (24h/72h/1 month) | ENISA (24h/72h/14d) |

::: tip CRA Synergy
CRA-compliant processes (vulnerability management, incident response, supply chain) largely fulfil the corresponding NIS2 requirements. Details in the [CRA Compliance Documentation](https://cra.docs.bauer-group.com/en/overview/nis2-integration).
:::
