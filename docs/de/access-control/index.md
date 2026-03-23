# Zugriffskontrolle & Sichere Kommunikation

::: info RECHTSGRUNDLAGE
**§30 Abs. 2 Nr. 9 BSIG** – Sicherheit des Personals, Konzepte für die Zugriffskontrolle und Management von Anlagen

**§30 Abs. 2 Nr. 10 BSIG** – Verwendung von Lösungen zur Multi-Faktor-Authentifizierung oder kontinuierlichen Authentifizierung, gesicherte Sprach-, Video- und Textkommunikation sowie gegebenenfalls gesicherte Notfallkommunikationssysteme
:::

## Zugriffskontrollprinzipien

| Prinzip | Umsetzung |
|---------|-----------|
| **Least Privilege** | Minimalrechte nach Aufgabenerfordernis |
| **Need-to-Know** | Datenzugriff nur bei geschäftlicher Notwendigkeit |
| **Separation of Duties** | Kritische Operationen erfordern mehrere Personen |
| **Vier-Augen-Prinzip** | Sicherheitsrelevante Änderungen mit Review |

## Authentifizierung

### Multi-Faktor-Authentifizierung (MFA)

MFA ist verpflichtend für:

- Alle externen Zugriffe (VPN, Web-Portale)
- Administrative Systemzugriffe
- Cloud-Dienste und SaaS-Anwendungen
- E-Mail-Zugang

Bevorzugte MFA-Methoden: Hardware-Token (FIDO2/WebAuthn), Authenticator-App (TOTP). SMS-basierte MFA ist nicht zulässig.

### Serverzugriff

- SSH mit Key-basierter Authentifizierung (Ed25519)
- Passwort-basierter SSH-Login deaktiviert
- Root-Login deaktiviert, Zugriff nur über personalisierte Accounts

## Passwort-Management

| Anforderung | Mindeststandard |
|-------------|----------------|
| Mindestlänge | 16 Zeichen (Passphrase empfohlen) |
| Passwort-Manager | Verpflichtend für alle Mitarbeiter |
| Passwort-Wiederverwendung | Verboten |
| Kompromittierte Passwörter | Automatische Prüfung gegen Known-Breach-Listen |

## On-/Offboarding

| Prozess | Maßnahme | Frist |
|---------|----------|-------|
| **Onboarding** | Einrichtung personalisierter Accounts, MFA-Setup, Basisschulung | Vor erstem Arbeitstag |
| **Rollenänderung** | Anpassung der Berechtigungen, Review alter Rechte | Innerhalb von 5 Arbeitstagen |
| **Offboarding** | Deaktivierung aller Zugänge, Rückgabe von Hardware, Schlüsselrotation | Am letzten Arbeitstag |

## Sichere Kommunikation

### Kommunikationskanäle

| Kanal | Sicherheit | Einsatz |
|-------|-----------|---------|
| **E-Mail** | TLS-Transportverschlüsselung, SPF/DKIM/DMARC | Standard-Geschäftskommunikation |
| **Verschlüsselter Messenger** | Ende-zu-Ende-Verschlüsselung | Sensible interne Kommunikation |
| **Videokonferenz** | TLS-verschlüsselt, Zugangskontrollen | Meetings, Kunden-Calls |
| **VPN** | IPsec/WireGuard | Remote-Zugriff auf interne Systeme |

### E-Mail-Sicherheit

- **SPF** – Sender Policy Framework für alle Domains konfiguriert
- **DKIM** – DomainKeys Identified Mail für Signaturprüfung
- **DMARC** – Domain-based Message Authentication, Reporting and Conformance (Policy: reject)

### Notfallkommunikation

Für den Fall, dass primäre Kommunikationskanäle kompromittiert oder nicht verfügbar sind:

- Vordefinierte Fallback-Kommunikationswege (Telefon, alternativer Messenger)
- Aktuelle Kontaktlisten der Schlüsselpersonen offline verfügbar
- Regelmäßige Überprüfung der Erreichbarkeit
