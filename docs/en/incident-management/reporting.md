# Reporting Obligations per §32 BSIG

## Three-Tier Reporting Model

### Tier 1: Early Warning (24 Hours)

| Field | Content |
|-------|---------|
| **Deadline** | 24 hours after becoming aware of the significant incident |
| **Recipient** | BSI via reporting platform |
| **Content** | Nature of the incident, initial suspicion of cause |
| **Specifics** | Indicate whether an unlawful or malicious act is suspected; whether cross-border impact is possible |

### Tier 2: Update Report (72 Hours)

| Field | Content |
|-------|---------|
| **Deadline** | 72 hours after becoming aware |
| **Recipient** | BSI via reporting platform |
| **Content** | Initial assessment of the incident: severity, impact |
| **Specifics** | Indicators of compromise (IoC) where available; update of initial assessment |

### Tier 3: Final Report (1 Month)

| Field | Content |
|-------|---------|
| **Deadline** | 1 month after becoming aware (extension upon request possible) |
| **Recipient** | BSI via reporting platform |
| **Content** | Detailed description: root cause, measures taken, cross-border impact |
| **Specifics** | If the incident is still ongoing: interim report instead of final report; final report after resolution |

::: info REPORTING DEADLINES
All deadlines run from the moment the entity becomes aware of the significant incident. "Awareness" means the point at which the CISO or a member of the incident response team has confirmed that the event constitutes a significant incident per the criteria below.
:::

## Criteria for Significant Security Incidents

An incident is considered significant if at least one of the following criteria is met:

| Criterion | Threshold |
|-----------|-----------|
| Serious operational disruption | Services to customers are restricted or unavailable |
| Financial losses | Direct or indirect losses above the materiality threshold |
| Harm to third parties | Other persons or entities are significantly affected |
| Data loss | Personal or business-critical data compromised |

## Internal Reporting Flow

```
Incident detected
  → CISO informed (< 1h)
    → Initial assessment: Significant yes/no? (< 4h)
      → If yes: Prepare BSI early warning (< 24h)
        → Inform executive management
          → Assess GDPR reporting (Art. 33: 72h to supervisory authority)
            → Assess CRA reporting (Art. 14: 24h to ENISA)
```

## Parallel Reporting Obligations

| Regulation | Trigger | Deadline | Recipient |
|-----------|---------|----------|-----------|
| **NIS2 / §32 BSIG** | Significant security incident | 24h / 72h / 1 month | BSI |
| **GDPR Art. 33** | Personal data breach | 72 hours | Competent supervisory authority |
| **CRA Art. 14** | Actively exploited product vulnerability | 24h / 72h / 14d | ENISA + national CSIRT |

::: warning PARALLEL REPORTING OBLIGATIONS
A single incident may trigger reporting obligations under multiple regulations simultaneously. The initial assessment process evaluates all applicable frameworks. Templates are designed to be compatible to ensure efficient parallel reporting. See also [CRA & AI Act Synergies](/en/overview/synergies).
:::

## Documentation Requirements

Every reportable incident must be fully documented:

- Chronological sequence of events with timestamps
- All decisions with rationale
- Communication with BSI (report IDs, correspondence)
- Measures taken and their effectiveness
- Lessons learned and follow-up actions

**Retention period:** At least 3 years after closure of the incident.
