# Supply Chain Security

::: info LEGAL BASIS
**§30(2) No. 4 BSIG** – Supply chain security including security-related aspects of the relationships with direct suppliers or service providers
:::

## Vendor Overview

All external service providers and vendors are categorized:

| Category | Examples | Risk Assessment |
|----------|----------|-----------------|
| **Infrastructure** | Hetzner, Netcup (hosting, servers) | High – availability |
| **Cloud services** | Object storage, DNS | High – confidentiality |
| **Software suppliers** | Third-party libraries, SaaS | Medium – supply chain risk |
| **Support partners** | Maintenance, consulting | Low – limited access |

## Assessment Criteria

Before engagement and during the annual review, service providers are assessed against the following criteria:

| Criterion | Description |
|-----------|-------------|
| **Security certifications** | ISO 27001, SOC 2, BSI C5 or equivalent |
| **Location / jurisdiction** | EU jurisdiction preferred, third-country transfers only with guarantees |
| **Incident response capability** | Documented process, reporting timelines compatible with §32 BSIG |
| **Contract design** | Security requirements, audit rights, termination clauses |
| **Subcontractors** | Transparency regarding further subcontractors |

## Contractual Security Requirements

Contracts with service providers include:

- Minimum information security requirements
- Obligation to immediately report security incidents
- Audit and inspection rights
- Data retention and deletion provisions
- Exit strategy and data return

## Review Cycle

| Activity | Interval |
|----------|----------|
| Re-assessment of critical providers | Annually |
| Contract review | On renewal / change |
| Event-driven review | On security incident or material change |

## Perspective as a Supplier

BAUER GROUP is on both sides of the supply chain: it sets requirements for its own service providers and is at the same time a supplier to regulated customers. These customers pass their requirements under §30(2) No. 4 BSIG on to BAUER GROUP by contract – for example as a security annex to the contract, a supplier questionnaire or an obligation to report security incidents. [Applicability & Size Classes](/en/overview/applicability#indirect) describes the possible scenarios and explains why a supply relationship alone does not give rise to a NIS2 obligation of its own. BAUER GROUP's own classification is set out under [BAUER GROUP Classification](/en/overview/applicability#bauer-group).

## Dependency Management

For software dependencies:

- Automated dependency monitoring (Dependabot)
- Assessment of vulnerabilities in third-party libraries
- Preference for actively maintained projects with a transparent security process

::: tip CRA Synergy
Software supply chain management (SBOM, signing, dependency policy) is described in the [CRA Supply Chain Documentation](https://cra.docs.bauer-group.com/en/supply-chain/). NIS2 supplements this with IT service provider and infrastructure vendor assessment.
:::
