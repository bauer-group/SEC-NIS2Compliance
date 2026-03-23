# Vendor Assessment

## Assessment Process

### Initial Assessment (Prior to Engagement)

| Step | Description | Responsible |
|------|-------------|-------------|
| 1. Requirements profile | Define security requirements based on protection needs | Business unit + CISO |
| 2. Information gathering | Obtain security documentation, certifications, references | Procurement |
| 3. Evaluation | Review against scoring criteria | CISO |
| 4. Risk assessment | Determine residual risk, define measures | CISO |
| 5. Decision | Approval or rejection | CISO + Executive Management (for critical vendors) |

### Scoring Criteria

| Criterion | Weight | Scoring Scale |
|-----------|--------|---------------|
| Security certifications (ISO 27001, SOC 2, BSI C5) | 25% | 0-3 (none / in progress / available / current) |
| Incident response capability | 20% | 0-3 (no process / basic / documented / tested) |
| Location / legal jurisdiction | 15% | 0-3 (insecure / third country with safeguards / EU / DE) |
| Contract design | 15% | 0-3 (standard / customized / audit rights / comprehensive) |
| Subcontractor transparency | 10% | 0-3 (no info / list / approval required / contractual) |
| Track record | 15% | 0-3 (unknown / < 1 year / 1-3 years / > 3 years) |

**Minimum scores:** 12/18 for standard vendors, 15/18 for critical vendors.

::: info SCORING METHODOLOGY
Each criterion is scored from 0 to 3. The weighted total determines the overall score. Vendors below the minimum threshold must either improve their security posture or be rejected. Exceptions require CISO and executive management approval with documented risk acceptance.
:::

### Reassessment Intervals

| Vendor Category | Assessment Interval |
|----------------|-------------------|
| Critical infrastructure providers | Annually |
| Cloud and SaaS providers | Annually |
| Software suppliers | Upon contract renewal |
| Support partners | Every 2 years |
| Event-driven | Upon security incident or significant change at the vendor |

## Vendor Categorization

| Category | Definition | Examples | Requirements |
|----------|-----------|----------|-------------|
| **Critical** | Outage impacts core business | Hosting, primary cloud services | Highest security requirements, annual audit right |
| **Important** | Outage impacts individual services | SaaS tools, DNS provider | High requirements, incident reporting obligation |
| **Standard** | Outage has low impact | Consulting, maintenance | Basic requirements |
