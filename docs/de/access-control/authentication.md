# Authentifizierung & MFA

## Multi-Faktor-Authentifizierung

### MFA-Pflicht

| Zugriffsart | MFA erforderlich | Bevorzugte Methode |
|------------|-----------------|-------------------|
| Externe Zugriffe (VPN, Portale) | Ja – ausnahmslos | FIDO2 / WebAuthn |
| Administrative Systemzugriffe | Ja – ausnahmslos | FIDO2 / TOTP |
| Cloud-Dienste / SaaS | Ja – ausnahmslos | TOTP / FIDO2 |
| E-Mail-Zugang | Ja – ausnahmslos | TOTP / FIDO2 |
| Interne Anwendungen (LAN) | Risikobasiert | TOTP (wenn erforderlich) |

### MFA-Methoden (Rangfolge)

| Methode | Sicherheitsstufe | Einsatz |
|---------|-----------------|---------|
| **FIDO2 / WebAuthn** | Höchste (phishing-resistent) | Bevorzugt für alle Zugänge |
| **TOTP (Authenticator-App)** | Hoch | Standard-Alternative |
| **Push-Notification** | Mittel | Nur mit Number-Matching |
| **SMS-OTP** | Niedrig – **nicht zulässig** | Nicht erlaubt (SIM-Swapping-Risiko) |

### MFA-Ausnahmen

Ausnahmen von der MFA-Pflicht sind nur in begründeten Fällen möglich:

- Dokumentierte Begründung erforderlich
- ISB-Freigabe zwingend
- Kompensierende Maßnahmen definiert
- Befristet mit Wiedervorlage
- Service-Accounts: IP-Whitelisting + API-Key statt MFA

## Passwort-Richtlinie

| Anforderung | Standard |
|-------------|---------|
| Mindestlänge | 16 Zeichen |
| Empfehlung | Passphrase (4+ Wörter) |
| Komplexität | Keine erzwungenen Sonderzeichen (Länge > Komplexität) |
| Passwort-Manager | Pflicht für alle Mitarbeiter |
| Wiederverwendung | Verboten (jeder Dienst eigenes Passwort) |
| Breach-Check | Automatische Prüfung gegen HaveIBeenPwned / Known-Breach-Listen |
| Ablauf | Kein erzwungener Ablauf (NIST 800-63B), Rotation nur bei Kompromittierungsverdacht |

## Service-Accounts

| Anforderung | Umsetzung |
|-------------|-----------|
| Keine gemeinsamen Accounts | Jeder Service-Account hat einen dokumentierten Eigentümer |
| Minimale Rechte | Least Privilege, nur benötigte API-Scopes |
| Rotation | API-Keys mindestens jährlich rotieren |
| Monitoring | Anomalieerkennung für Service-Account-Nutzung |
| Dokumentation | Zweck, Eigentümer, Berechtigungen, Erstellungsdatum |
