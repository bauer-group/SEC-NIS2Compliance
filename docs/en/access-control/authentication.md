# Authentication & MFA

## Multi-Factor Authentication

### MFA Requirements

| Access Type | MFA Required | Preferred Method |
|------------|-------------|-----------------|
| External access (VPN, portals) | Yes -- mandatory | FIDO2 / WebAuthn |
| Administrative system access | Yes -- mandatory | FIDO2 / TOTP |
| Cloud services / SaaS | Yes -- mandatory | TOTP / FIDO2 |
| Email access | Yes -- mandatory | TOTP / FIDO2 |
| Internal applications (LAN) | Risk-based | TOTP (if required) |

### MFA Methods (Ranking)

| Method | Security Level | Application |
|--------|---------------|-------------|
| **FIDO2 / WebAuthn** | Highest (phishing-resistant) | Preferred for all access |
| **TOTP (Authenticator app)** | High | Standard alternative |
| **Push notification** | Medium | Only with number matching |
| **SMS OTP** | Low -- **not permitted** | Not allowed (SIM swapping risk) |

### MFA Exceptions

Exceptions to the MFA requirement are only possible in justified cases:

- Documented justification required
- ISO approval mandatory
- Compensating controls defined
- Time-limited with scheduled review
- Service accounts: IP allowlisting + API key instead of MFA

## Password Policy

| Requirement | Standard |
|-------------|---------|
| Minimum length | 16 characters |
| Recommendation | Passphrase (4+ words) |
| Complexity | No forced special characters (length > complexity) |
| Password manager | Mandatory for all employees |
| Reuse | Prohibited (unique password per service) |
| Breach check | Automatic verification against HaveIBeenPwned / known-breach lists |
| Expiry | No forced expiry (per NIST 800-63B), rotation only upon suspected compromise |

## Service Accounts

| Requirement | Implementation |
|-------------|---------------|
| No shared accounts | Every service account has a documented owner |
| Minimal privileges | Least privilege, only required API scopes |
| Rotation | API keys rotated at least annually |
| Monitoring | Anomaly detection for service account usage |
| Documentation | Purpose, owner, permissions, creation date |
