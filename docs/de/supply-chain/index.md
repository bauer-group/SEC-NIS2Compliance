# Lieferkettensicherheit

::: info RECHTSGRUNDLAGE
**§30 Abs. 2 Nr. 4 BSIG** – Sicherheit der Lieferkette einschließlich sicherheitsbezogener Aspekte der Beziehungen zwischen den einzelnen Einrichtungen und ihren unmittelbaren Anbietern oder Diensteanbietern
:::

## Dienstleisterübersicht

Alle externen Dienstleister und Anbieter werden kategorisiert:

| Kategorie | Beispiele | Risikobewertung |
|-----------|----------|-----------------|
| **Infrastruktur** | Hetzner, Netcup (Hosting, Server) | Hoch – Verfügbarkeit |
| **Cloud-Dienste** | Object Storage, DNS | Hoch – Vertraulichkeit |
| **Software-Lieferanten** | Drittanbieter-Bibliotheken, SaaS | Mittel – Supply-Chain-Risiko |
| **Supportpartner** | Wartung, Beratung | Niedrig – begrenzter Zugriff |

## Bewertungskriterien

Vor Beauftragung und bei jährlicher Überprüfung werden Dienstleister anhand folgender Kriterien bewertet:

| Kriterium | Beschreibung |
|-----------|-------------|
| **Sicherheitszertifizierungen** | ISO 27001, SOC 2, BSI C5 oder vergleichbar |
| **Standort / Rechtsraum** | EU-Rechtsraum bevorzugt, Drittstaatentransfers nur mit Garantien |
| **Incident-Response-Fähigkeit** | Dokumentierter Prozess, Meldefristen kompatibel mit §32 BSIG |
| **Vertragsgestaltung** | Sicherheitsanforderungen, Audit-Rechte, Kündigungsklauseln |
| **Subunternehmer** | Transparenz über weitere Unterauftragnehmer |

## Vertragliche Sicherheitsanforderungen

Verträge mit Dienstleistern enthalten:

- Mindestanforderungen an Informationssicherheit
- Pflicht zur unverzüglichen Meldung von Sicherheitsvorfällen
- Audit- und Prüfrechte
- Regelungen zu Datenhaltung und -löschung
- Exit-Strategie und Datenrückgabe

## Überprüfungszyklus

| Aktivität | Intervall |
|-----------|-----------|
| Neubewertung kritischer Dienstleister | Jährlich |
| Vertragsprüfung | Bei Verlängerung / Änderung |
| Anlassbezogene Prüfung | Bei Sicherheitsvorfall oder wesentlicher Änderung |

## Dependency Management

Für Software-Abhängigkeiten:

- Automatisiertes Dependency-Monitoring (Dependabot)
- Bewertung von Schwachstellen in Drittanbieter-Bibliotheken
- Bevorzugung aktiv gepflegter Projekte mit transparentem Security-Prozess

::: tip CRA-Synergie
Das Software-Supply-Chain-Management (SBOM, Signierung, Dependency Policy) ist in der [CRA Supply-Chain-Dokumentation](https://cra.docs.bauer-group.com/de/supply-chain/) beschrieben. NIS2 ergänzt dies um die Bewertung von IT-Dienstleistern und Infrastrukturanbietern.
:::
