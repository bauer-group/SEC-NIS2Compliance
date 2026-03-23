# Risk Analysis

## Methodology

The risk analysis follows a structured process, aligned with ISO 27005 and BSI IT-Grundschutz:

```
Establish context → Identify risks → Analyze risks → Evaluate risks → Treat risks
```

## Threat Catalog

| Category | Threats | Relevance |
|----------|---------|-----------|
| **Cyberattacks** | Ransomware, phishing, DDoS, APT, supply chain attack | High |
| **Insider threats** | Intentional data theft, negligent misuse | Medium |
| **Technical failure** | Hardware failure, software defect, network outage | Medium |
| **Natural events** | Power outage, flooding, fire | Low |
| **Third parties** | Compromise of a service provider, SaaS outage | Medium |

## Risk Assessment Matrix

Risks are evaluated by likelihood and impact:

| | Low Impact | Medium Impact | High Impact | Very High Impact |
|---|-----------|--------------|-------------|-----------------|
| **Very likely** | Medium | High | Critical | Critical |
| **Likely** | Low | Medium | High | Critical |
| **Possible** | Low | Low | Medium | High |
| **Unlikely** | Low | Low | Low | Medium |

::: info RISK APPETITE
Risks rated **Critical** or **High** require immediate treatment. Medium risks must be addressed within the next review cycle. Low risks are monitored and documented.
:::

## Risk Treatment Plan

For each identified risk, the following fields are documented:

| Field | Description |
|-------|-------------|
| Risk ID | Unique identifier |
| Description | Nature of the risk and affected assets |
| Assessment | Likelihood x Impact |
| Treatment option | Avoid / Mitigate / Transfer / Accept |
| Measure | Specific technical or organizational measure |
| Responsible | Assigned owner |
| Deadline | Implementation date |
| Residual risk | Risk level after implementation of measures |
| Approval | Executive management approval for risk acceptance |

## Process Integration

| Trigger | Action |
|---------|--------|
| Annual review cycle | Complete review of all risks |
| New system / service provider | Risk analysis prior to go-live |
| Security incident | Event-driven reassessment of affected risks |
| Significant change | Risk analysis for architectural or process changes |
| External threat landscape | Reassessment upon relevant CVEs or advisories |
