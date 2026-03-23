# Compliance Matrix

Complete mapping of all NIS2 requirements to documentation, implementation and synergies.

## §30 BSIG – Risk Management Measures

| No. | Measure | Documentation | Status |
|-----|---------|---------------|--------|
| 1 | Risk analysis and IT security concepts | [Risk Management](/en/risk-management/) | ✅ Implemented |
| 2 | Incident handling | [Incident Management](/en/incident-management/) | ✅ Implemented |
| 3 | Business continuity / BCM | [Business Continuity](/en/business-continuity/) | ✅ Implemented |
| 4 | Supply chain security | [Supply Chain Security](/en/supply-chain/) | ✅ Implemented |
| 5 | Secure acquisition, development, maintenance | [Vulnerability Management](/en/vulnerability-management/) | ✅ Implemented |
| 6 | Effectiveness review | [Effectiveness Review](/en/effectiveness-review/) | ✅ Implemented |
| 7 | Training & awareness | [Training & Awareness](/en/training/) | ✅ Implemented |
| 8 | Cryptography | [Cryptography](/en/cryptography/) | ✅ Implemented |
| 9 | Access control & personnel security | [Access Control](/en/access-control/) | ✅ Implemented |
| 10 | MFA & secure communication | [Access Control](/en/access-control/) | ✅ Implemented |

## Additional BSIG Obligations

| Section | Obligation | Documentation | Status |
|---------|-----------|---------------|--------|
| §32 | Reporting obligations | [Incident Management](/en/incident-management/) | ✅ Implemented |
| §33 | Registration obligation | Organizationally implemented | ✅ Implemented |
| §38 | Management duties | [Governance](/en/governance/) | ✅ Implemented |

## CRA Synergies

| NIS2 Measure | CRA Documentation | Synergy |
|-------------|-------------------|---------|
| No. 2 – Incidents | [CRA Incident Response](https://cra.docs.bauer-group.com/en/incident-response/) | Product incidents via CRA, operational incidents via NIS2 |
| No. 4 – Supply chain | [CRA Supply Chain](https://cra.docs.bauer-group.com/en/supply-chain/) | Software supply chain via CRA, service providers via NIS2 |
| No. 5 – Vulnerabilities | [CRA Vulnerability Management](https://cra.docs.bauer-group.com/en/vulnerability-management/) | Product CVEs via CRA, infra CVEs via NIS2 |
| No. 5 – SBOM | [CRA SBOM & Signing](https://cra.docs.bauer-group.com/en/sbom-signing/) | SBOM generation and signing via CRA |

## AI Act Synergies

| NIS2 Measure | AI Act Reference | Synergy |
|-------------|-----------------|---------|
| No. 1 – Risk management | Art. 9 AI Act (risk management) | NIS2 ISMS as foundation for AI risk management |
| No. 8 – Cryptography | Art. 15 AI Act (cybersecurity) | Cryptography standards also apply to AI systems |
| No. 9 – Access control | Art. 14 AI Act (human oversight) | Access control as foundation for AI oversight |
