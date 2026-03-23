# Incident-Response-Prozess

## 5-Phasen-Modell

Der Incident-Response-Prozess der BAUER GROUP folgt dem etablierten NIST SP 800-61-Framework, angepasst an die Anforderungen des §30 Abs. 2 Nr. 2 BSIG.

### Phase 1: Vorbereitung

| Maßnahme | Beschreibung |
|----------|-------------|
| Incident-Response-Team | Definierte Rollen: ISB (Leitung), IT-Ops, Entwicklung, Kommunikation |
| Tooling | Log-Aggregation, Monitoring-Dashboards, Ticketing-System |
| Dokumentation | Response-Playbooks für die häufigsten Szenarien |
| Kommunikation | Vordefinierte Kontaktlisten, Eskalationspfade, Templates |
| Übungen | Mindestens jährlich Tabletop-Exercise oder Simulation |

### Phase 2: Erkennung und Analyse

| Erkennungsmethode | Beschreibung | Reaktionszeit |
|-------------------|-------------|---------------|
| Automatisiertes Monitoring | Log-basierte Anomalieerkennung, Schwellenwert-Alerts | Echtzeit |
| Schwachstellen-Alerts | CVE-Feeds, Dependency-Monitoring, Vendor-Advisories | < 4 Stunden |
| Mitarbeitermeldung | Phishing-Verdacht, ungewöhnliches Verhalten | Sofort bei Erkennung |
| Externe Meldung | Kunden, Partner, Sicherheitsforscher, BSI | Sofort bei Eingang |

**Analyseschritte:**

1. Erstbewertung: Ist der Vorfall real? (Triage)
2. Klassifikation nach Schweregrad (Kritisch / Hoch / Mittel / Niedrig)
3. Betroffenheitsanalyse: Welche Systeme, Daten, Kunden sind betroffen?
4. Meldepflichtprüfung: Liegt ein erheblicher Vorfall nach §32 BSIG vor?
5. Forensische Erstbewertung: Angriffsvektor, Zeitraum, Indikatoren (IoC)

### Phase 3: Eindämmung

| Strategie | Anwendung | Beispiel |
|-----------|-----------|---------|
| **Kurzfristig** | Sofortige Schadensbegrenzung | Netzwerksegment isolieren, Account sperren |
| **Langfristig** | Nachhaltige Eindämmung | Betroffenes System vom Netz nehmen, Firewall-Regel |
| **Beweissicherung** | Vor jeder Bereinigung | Speicherabbild, Log-Export, Festplattenkopie |

### Phase 4: Beseitigung und Wiederherstellung

| Schritt | Beschreibung |
|---------|-------------|
| Ursache beseitigen | Malware entfernen, kompromittierte Accounts deaktivieren, Schwachstelle patchen |
| Systeme bereinigen | Neuinstallation oder verifizierte Wiederherstellung aus sauberem Backup |
| Credentials rotieren | Alle potenziell kompromittierten Passwörter, API-Keys, Zertifikate |
| Integrität prüfen | Systemintegrität vor Wiederinbetriebnahme verifizieren |
| Monitoring verstärken | Erhöhte Überwachung für 30 Tage nach Wiederherstellung |

### Phase 5: Nachbereitung

| Aktivität | Frist | Verantwortlich |
|-----------|-------|---------------|
| Post-Mortem-Meeting | Innerhalb von 5 Arbeitstagen | ISB |
| Root-Cause-Analyse | Innerhalb von 10 Arbeitstagen | ISB + IT |
| Lessons-Learned-Dokument | Innerhalb von 15 Arbeitstagen | ISB |
| Maßnahmenplan | Innerhalb von 20 Arbeitstagen | ISB + Geschäftsleitung |
| Risikoanalyse-Update | Innerhalb von 30 Tagen | ISB |

## Playbooks

Für die häufigsten Szenarien bestehen vordefinierte Response-Playbooks:

| Szenario | Sofortmaßnahmen | Eskalation |
|----------|----------------|------------|
| **Ransomware** | Netzwerkisolierung, Backup-Integrität prüfen, KEIN Lösegeld | Sofort: ISB + GL + ggf. Strafverfolgung |
| **Datenleak** | Zugangsweg schließen, Umfang bestimmen, DSGVO-Meldung prüfen | Sofort: ISB + GL + DSB |
| **Phishing (erfolgreich)** | Account sperren, Passwort zurücksetzen, MFA prüfen | < 1h: ISB |
| **DDoS** | CDN/WAF aktivieren, Upstream-Provider kontaktieren | Sofort: IT-Ops + ISB |
| **Supply-Chain-Kompromittierung** | Betroffene Komponente isolieren, SBOM prüfen | Sofort: ISB + Entwicklung |
