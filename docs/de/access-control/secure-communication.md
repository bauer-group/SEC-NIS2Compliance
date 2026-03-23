# Sichere Kommunikation

::: info RECHTSGRUNDLAGE
**§30 Abs. 2 Nr. 10 BSIG** – Gesicherte Sprach-, Video- und Textkommunikation sowie gegebenenfalls gesicherte Notfallkommunikationssysteme innerhalb der Einrichtung
:::

## Kommunikationskanäle

| Kanal | Verschlüsselung | Authentifizierung | Einsatzzweck |
|-------|-----------------|-------------------|-------------|
| **E-Mail** | TLS in Transit, optional S/MIME | SPF/DKIM/DMARC | Standard-Geschäftskommunikation |
| **Verschlüsselter Messenger** | Ende-zu-Ende (E2E) | Account-basiert + MFA | Sensible interne Kommunikation, Incident Response |
| **Videokonferenz** | TLS, Transportverschlüsselung | Meeting-Codes + Warteraum | Meetings, Kundenkommunikation |
| **VPN** | IPsec / WireGuard | Zertifikat + MFA | Remote-Zugriff auf interne Systeme |
| **Telefon** | Standardnetz (unverschlüsselt) | Rufnummernerkennung | Nicht für vertrauliche Informationen |

## E-Mail-Sicherheit im Detail

### DNS-basierte Authentifizierung

| Mechanismus | Konfiguration | Zweck |
|-------------|-------------|-------|
| **SPF** | TXT-Record mit autorisierten Mailservern | Verhindert Sender-Spoofing |
| **DKIM** | Signierung ausgehender E-Mails (≥ 2048 Bit) | Integritätsprüfung |
| **DMARC** | Policy: `reject`, Reporting an ISB | Erzwingt SPF+DKIM, meldet Verstöße |
| **MTA-STS** | Erzwungenes TLS für eingehende E-Mails | Verhindert Downgrade-Angriffe |
| **DANE/TLSA** | DNS-basierte Zertifikatsbindung | Zusätzliche TLS-Verifikation |

### Handling vertraulicher Daten per E-Mail

| Klassifizierung | Erlaubt per E-Mail? | Zusätzliche Maßnahmen |
|----------------|--------------------|-----------------------|
| Öffentlich | Ja | Keine |
| Intern | Ja | Standard TLS |
| Vertraulich | Nur wenn nötig | Verschlüsselter Anhang oder sichere Austauschplattform |
| Streng vertraulich | Nein | Nur über E2E-verschlüsselte Kanäle |

## Notfallkommunikation

### Fallback-Kanäle

Für den Fall, dass primäre Kommunikationskanäle kompromittiert oder nicht verfügbar sind:

| Priorität | Kanal | Verfügbarkeit |
|-----------|-------|--------------|
| 1 | Mobiltelefon (persönlich) | 24/7 |
| 2 | Alternativer Messenger (vordefiniert) | 24/7 |
| 3 | Festnetz | Geschäftszeiten |

### Vorbereitungsmaßnahmen

- Aktuelle Kontaktlisten der Schlüsselpersonen offline verfügbar (gedruckt oder auf separatem Gerät)
- Vordefinierte Codewörter für Echtheitsprüfung bei telefonischer Kommunikation
- Jährliche Erreichbarkeitsübung mit allen Krisenstabsmitgliedern
- Backup-Kommunikationsplan ist Teil der Krisenmanagement-Dokumentation
