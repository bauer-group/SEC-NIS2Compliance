# Secure Communication

::: info LEGAL BASIS
**§30(2) No. 10 BSIG** -- Secured voice, video and text communication, and secured emergency communication systems where appropriate within the entity
:::

## Communication Channels

| Channel | Encryption | Authentication | Use |
|---------|-----------|----------------|-----|
| **Email** | TLS in transit, optional S/MIME | SPF/DKIM/DMARC | Standard business communication |
| **Encrypted messenger** | End-to-end (E2E) | Account-based + MFA | Sensitive internal communication, incident response |
| **Video conferencing** | TLS, transport encryption | Meeting codes + waiting room | Meetings, customer communication |
| **VPN** | IPsec / WireGuard | Certificate + MFA | Remote access to internal systems |
| **Telephone** | Standard network (unencrypted) | Caller ID | Not for confidential information |

## Email Security in Detail

### DNS-Based Authentication

| Mechanism | Configuration | Purpose |
|-----------|--------------|---------|
| **SPF** | TXT record with authorized mail servers | Prevents sender spoofing |
| **DKIM** | Signing of outgoing emails (≥ 2048 bit) | Integrity verification |
| **DMARC** | Policy: `reject`, reporting to ISO | Enforces SPF+DKIM, reports violations |
| **MTA-STS** | Enforced TLS for incoming emails | Prevents downgrade attacks |
| **DANE/TLSA** | DNS-based certificate binding | Additional TLS verification |

### Handling Classified Data via Email

| Classification | Permitted via email? | Additional measures |
|---------------|---------------------|---------------------|
| Public | Yes | None |
| Internal | Yes | Standard TLS |
| Confidential | Only if necessary | Encrypted attachment or secure exchange platform |
| Strictly confidential | No | Only via E2E-encrypted channels |

## Emergency Communication

### Fallback Channels

In the event that primary communication channels are compromised or unavailable:

| Priority | Channel | Availability |
|----------|---------|-------------|
| 1 | Mobile phone (personal) | 24/7 |
| 2 | Alternative messenger (predefined) | 24/7 |
| 3 | Landline telephone | Business hours |

### Preparation Measures

- Current contact lists of key personnel available offline (printed or on a separate device)
- Predefined code words for identity verification during telephone communication
- Annual reachability exercise with all crisis team members
- Backup communication plan is part of the crisis management documentation
