# KPIs & Metrics

## Security KPIs

### Vulnerability Management

| KPI | Definition | Target | Measurement |
|-----|-----------|--------|-------------|
| Patch compliance | % of vulnerabilities patched within defined deadlines | ≥ 95% | Monthly |
| Open critical vulnerabilities | Count of unpatched CVSS ≥ 9.0 vulnerabilities | 0 | Weekly |
| Mean Time to Patch (MTTP) | Average days until patch deployment | Critical: < 2d, High: < 7d | Monthly |

### Incident Management

| KPI | Definition | Target | Measurement |
|-----|-----------|--------|-------------|
| Mean Time to Detect (MTTD) | Time from attack onset to detection | < 24 hours | Per incident |
| Mean Time to Respond (MTTR) | Time from detection to containment | Critical: < 4h, High: < 24h | Per incident |
| Reporting compliance | % of incidents reported to BSI within required deadlines | 100% | Per incident |

### Access Control

| KPI | Definition | Target | Measurement |
|-----|-----------|--------|-------------|
| MFA coverage | % of accounts with active MFA | 100% (external access) | Monthly |
| Orphaned accounts | Count of active accounts without a corresponding employee | 0 | Monthly |
| Offboarding compliance | % of accounts deactivated within 24h of departure | 100% | Per event |

### Business Continuity

| KPI | Definition | Target | Measurement |
|-----|-----------|--------|-------------|
| Backup success rate | % of successful backup jobs | ≥ 99% | Daily |
| Restore success rate | % of successful restore tests | 100% | Quarterly |
| RTO compliance | Recovery time within defined target | 100% | Per test / incident |

### Training

| KPI | Definition | Target | Measurement |
|-----|-----------|--------|-------------|
| Training completion | % of employees who completed mandatory training | 100% | Annually |
| Management training | Management has completed cybersecurity training | Yes | Annually |
| Phishing click rate | % of employees clicking on simulated phishing | < 5% | Semi-annually |

## Reporting Structure

| Report | Content | Recipient | Interval |
|--------|---------|-----------|----------|
| Security Dashboard | All KPIs at a glance | ISO | Continuous |
| Monthly Security Report | KPI trends, open findings, incidents | ISO + IT Lead | Monthly |
| Quarterly Management Report | KPI summary, risk status, measures | Management | Quarterly |
| Annual Security Report | Overall assessment, audit results, improvement plan | Management | Annually |
