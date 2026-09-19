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

The BSIG distinguishes two categories. The decisive factors are the entity type (Annexes 1 and 2 BSIG) and company size (§28 BSIG):

| Category | Criteria (simplified) | Fine range (§65 BSIG) |
|----------|-----------------------|-----------------------|
| **Essential entities** (besonders wichtige Einrichtungen) | Annex 1, at least 250 employees **or** both annual turnover above €50M **and** annual balance sheet total above €43M; regardless of size, operators of critical facilities, among others | Up to €10M; for entities with total turnover of more than €500M, up to 2% of worldwide total turnover |
| **Important entities** (wichtige Einrichtungen) | Annex 1 or 2, at least 50 employees **or** annual turnover **and** annual balance sheet total each above €10M | Up to €7M; for entities with total turnover of more than €500M, up to 1.4% of worldwide total turnover |

::: tip Small Companies and Suppliers
Micro and small enterprises are in principle not covered – except in size-independent special cases. As suppliers to regulated entities, however, they are routinely obliged by contract to implement security measures. Size classes, special cases and scenarios: [Applicability & Size Classes](/en/overview/applicability).
:::

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
| §§28, 29 BSIG | Classification as an essential or important entity | [Applicability & Size Classes](/en/overview/applicability) |
| §32 BSIG | Reporting obligations for significant security incidents | [Incident Management](/en/incident-management/) |
| §33 BSIG | Registration obligation with BSI | Organizationally implemented |
| §38 BSIG | Implementation, supervision and training obligations of management | [Governance](/en/governance/) |

::: info KRITIS-DachG Deadlines

- **17.03.2026** – Entry into force (Act of 11.03.2026, BGBl. 2026 I No. 66)
- **17.07.2026** – CER Directive deadline by which Member States identify their critical entities (Art. 6(1) (EU) 2022/2557) – not a deadline for operators
- **Registration** – at the latest three months after a facility qualifies as a critical facility (§8(1) KRITIS-DachG). Which facilities are critical will only be determined by the statutory ordinance under §4(3) and §5(1) KRITIS-DachG, which according to the BBK is still being drafted and coordinated and has not yet been promulgated in the Federal Law Gazette (as of 19.09.2026). Until it enters into force, the BSI KRITIS Ordinance (BSI-KritisV) determines critical facilities for the purposes of the BSIG (§66 BSIG; §12 BSI-KritisV).
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
