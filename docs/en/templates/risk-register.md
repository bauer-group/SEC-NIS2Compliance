# Template: Risk Register

## Instructions

The risk register records all information security risks of BAUER GROUP under §30(2) No. 1 BSIG. It is the foundation for risk analysis and the ISMS.

## Risk Entry

```markdown
## Risk Entry

| Field | Value |
|---|---|
| **Risk ID** | RISK-NIS2-XXXX |
| **Short title** | [Risk name] |
| **Description** | [Risk description with threat, vulnerability, impact] |
| **Asset category** | [Data / System / Process / Personnel / Supplier] |
| **Affected protection goals** | [ ] Availability  [ ] Integrity  [ ] Confidentiality  [ ] Authenticity |
| **Likelihood** | [Very low / Low / Medium / High / Very high] |
| **Impact** | [Very low / Low / Medium / High / Very high] |
| **Gross risk level** | [Low / Medium / High / Critical] |
| **Existing controls** | [List with reference to documentation] |
| **Control effectiveness** | [High / Medium / Low] |
| **Net risk level** | [Low / Medium / High / Critical] |
| **Risk treatment** | [Avoid / Mitigate / Transfer / Accept] |
| **Planned actions** | [Description + target date] |
| **Owner** | [Name / role] |
| **Initial assessment** | [Date] |
| **Last review** | [Date] |
| **Next review** | [Date, max. +12 months] |
| **§30 reference** | [No. 1–10] |
| **Notes** | [Free text, e.g. assumptions, external factors] |
```

## Assessment Matrix

| Likelihood × Impact | Very low | Low | Medium | High | Very high |
|---|---|---|---|---|---|
| **Very high** | Medium | High | High | Critical | Critical |
| **High** | Medium | Medium | High | High | Critical |
| **Medium** | Low | Medium | Medium | High | High |
| **Low** | Low | Low | Medium | Medium | High |
| **Very low** | Low | Low | Low | Medium | Medium |

## Notes

- ID format: `RISK-NIS2-XXXX` (sequentially numbered)
- **Critical** risks are reported to management immediately (§38)
- **High** risks appear in the quarterly report
- Risk acceptance requires documented justification and management approval
- The register is fully reviewed at least **annually**
