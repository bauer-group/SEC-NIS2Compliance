# Reporting Obligations per §32 BSIG

## Three-Tier Reporting Model

### Tier 1: Early Warning (24 Hours)

| Field | Content |
|-------|---------|
| **Deadline** | Without undue delay, at the latest 24 hours after becoming aware of the significant incident (§32(1) No. 1 BSIG) |
| **Recipient** | BSI via reporting platform |
| **Content** | Nature of the incident, initial suspicion of cause |
| **Specifics** | Indicate whether an unlawful or malicious act is suspected; whether cross-border impact is possible |

### Tier 2: Update Report (72 Hours)

| Field | Content |
|-------|---------|
| **Deadline** | Without undue delay, at the latest 72 hours after becoming aware (§32(1) No. 2 BSIG) |
| **Recipient** | BSI via reporting platform |
| **Content** | Initial assessment of the incident: severity, impact |
| **Specifics** | Indicators of compromise (IoC) where available; update of initial assessment |

### Tier 3: Final Report (1 Month)

| Field | Content |
|-------|---------|
| **Deadline** | At the latest 1 month after submission of the 72-hour notification (§32(1) No. 4 BSIG) |
| **Recipient** | BSI via reporting platform |
| **Content** | Detailed description including severity and impact, type of threat or root cause, applied and ongoing mitigation measures, cross-border impact where applicable |
| **Specifics** | If the incident is still ongoing at that time: progress report instead of final report; the final report follows once the incident has been fully handled (§32(2) BSIG) |

::: info REPORTING DEADLINES
The 24-hour and 72-hour deadlines run from the moment the entity becomes aware of the significant incident. "Awareness" means the point at which the CISO or a member of the incident response team has confirmed that the event constitutes a significant incident per the criteria below. The deadline for the final report, by contrast, only starts with the submission of the 72-hour notification. At the BSI's request, an interim report on relevant status updates must additionally be submitted (§32(1) No. 3 BSIG).
:::

## Criteria for Significant Security Incidents

In principle, a security incident is significant if it has caused or is capable of causing severe operational disruption of the services or financial losses for the entity, or has affected or is capable of affecting other persons by causing considerable material or non-material damage (§2 No. 11 BSIG). For BAUER GROUP as a DNS service provider and managed service provider, the directly applicable Implementing Regulation (EU) 2024/2690 specifies this definition with fixed thresholds. An incident is considered significant if at least one of the following criteria is met; for the damage criteria under Art. 3(1)(a) to (d), it is sufficient that the incident is capable of causing the damage:

| Criterion | Threshold | Implementing Regulation (EU) 2024/2690 |
|-----------|-----------|----------------------------------------|
| Financial damage | Direct loss of more than €500,000 or 5% of the previous year's annual turnover – whichever is lower | Art. 3(1)(a) |
| Trade secrets | Exfiltration of trade secrets | Art. 3(1)(b) |
| Harm to persons | Death or considerable damage to a person's health | Art. 3(1)(c), (d) |
| Unauthorized access | Successful, suspectedly malicious and unauthorized access to network and information systems that is capable of causing severe operational disruption | Art. 3(1)(e) |
| Recurring incidents | At least two incidents that are not significant in themselves, occurring within six months with the same apparent root cause, which together exceed the financial loss threshold (Art. 3(1)(a)) | Art. 4 |
| DNS services | Authoritative or recursive domain name resolution completely unavailable for more than 30 minutes; average response time above 10 seconds for more than one hour; or integrity, confidentiality or authenticity of the data of the authoritative DNS service compromised (except for misconfigurations affecting fewer than 1,000 and at most 1% of the managed domains) | Art. 5 |
| Managed services | Service completely unavailable for more than 30 minutes; availability limited for more than 5% of users in the EU or more than 1 million users (whichever is lower) for more than one hour; or integrity, confidentiality or authenticity of data compromised by a suspectedly malicious act or for more than 5% or 1 million users | Art. 10 |

Scheduled interruptions of service and planned consequences of scheduled maintenance operations carried out by or on behalf of BAUER GROUP are not considered significant security incidents (Art. 3(2) Implementing Regulation). Unplanned effects of maintenance are not covered by this exception.

## Internal Reporting Flow

```
Incident detected
  → CISO informed (< 1h)
    → Initial assessment: Significant yes/no? (< 4h)
      → If yes: Prepare BSI early warning (< 24h)
        → Inform executive management
          → Assess GDPR reporting (Art. 33(1): 72h to supervisory authority;
             Art. 33(2): as processor, without undue delay to the customer)
            → Assess CRA reporting (Art. 14: 24h via the ENISA reporting platform)
```

## Notification of Service Recipients (§35 BSIG)

As an entity in the digital infrastructure sector, BAUER GROUP informs the customers potentially affected by a significant cyber threat and the BSI without undue delay of any measures or remedies the customers can take, and informs them of the threat itself – insofar as the customers' interests prevail (§35(2) BSIG). In addition, the BSI may order that customers be notified of a significant security incident (§35(1) BSIG).

## Parallel Reporting Obligations

| Regulation | Trigger | Deadline | Recipient |
|-----------|---------|----------|-----------|
| **NIS2 / §32 BSIG** | Significant security incident | 24h / 72h / 1 month after the 72h notification | BSI |
| **GDPR Art. 33(1)** | Personal data breach for which BAUER GROUP is the controller | Without undue delay, where feasible within 72 hours | Competent supervisory authority |
| **GDPR Art. 33(2)** | Personal data breach affecting data BAUER GROUP processes for customers as a processor (hosting, managed services) | Without undue delay after becoming aware; deadline per data processing agreement | Customer as controller |
| **CRA Art. 14(1)** | Actively exploited vulnerability in a product with digital elements | 24h / 72h / 14 days after a corrective measure is available | Coordinating CSIRT via the single reporting platform (simultaneously to ENISA) |
| **CRA Art. 14(3)** | Severe incident having an impact on the security of a product | 24h / 72h / 1 month after the 72h notification | Coordinating CSIRT via the single reporting platform (simultaneously to ENISA) |

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
