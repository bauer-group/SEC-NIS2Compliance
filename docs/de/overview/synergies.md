# CRA- & AI-Act-Synergien

## Grundprinzip

Die BAUER GROUP unterliegt drei komplementären EU-Regulierungen zur Cybersicherheit. Um Doppelarbeit zu vermeiden und den internen Compliance-Aufwand zu minimieren, werden Synergien systematisch genutzt: Bestehende Prozesse aus der CRA- und AI-Act-Compliance werden für NIS2 referenziert, nicht dupliziert.

## Synergieübersicht

| NIS2-Maßnahme (§30) | CRA-Abdeckung | AI-Act-Abdeckung | NIS2-spezifisch |
|---------------------|---------------|------------------|-----------------|
| Nr. 1 – Risikomanagement | Teilweise (produktbezogen, Art. 10) | Art. 9 (KI-Risikomanagement) | ISMS, organisatorische Risikoanalyse |
| Nr. 2 – Vorfallmanagement | Art. 14 (Produktschwachstellen) | — | Betriebsvorfälle, §32-Meldung |
| Nr. 3 – Business Continuity | — | — | Vollständig NIS2-spezifisch |
| Nr. 4 – Lieferkette | Art. 10(4), Annex I Teil II Nr. 1 | — | Dienstleisterbewertung |
| Nr. 5 – Schwachstellen | Art. 10(6), Art. 11 (Produkt-CVEs) | — | Infrastruktur-CVEs |
| Nr. 6 – Wirksamkeit | — | — | Vollständig NIS2-spezifisch |
| Nr. 7 – Schulung | — | Art. 4 (AI Literacy) | Cyberhygiene, BSIG-spezifisch |
| Nr. 8 – Kryptografie | Annex I Teil II (Produktverschlüsselung) | Art. 15 (KI-Cybersicherheit) | Infrastrukturverschlüsselung |
| Nr. 9 – Zugriffskontrolle | — | Art. 14 (Menschliche Aufsicht) | Personalsicherheit, MFA |
| Nr. 10 – Sichere Kommunikation | — | — | Vollständig NIS2-spezifisch |

## Detaillierte Synergien

### Schwachstellenmanagement (Nr. 5)

| Aspekt | CRA-Prozess | NIS2-Ergänzung |
|--------|------------|----------------|
| CVE-Monitoring | [CRA: Trivy + Grype + OSV-Scanner](https://cra.docs.bauer-group.com/de/vulnerability-management/) | Infrastruktur-Scanner (Netzwerk, Server) |
| SBOM | [CRA: CycloneDX-Generierung + Cosign-Signierung](https://cra.docs.bauer-group.com/de/sbom-signing/) | Referenz auf CRA-SBOM |
| Patch Management | CRA: Produktupdates | NIS2: Infrastruktur-Patches (OS, Firmware) |
| Disclosure | [CRA: ENISA-Meldung](https://cra.docs.bauer-group.com/de/incident-response/enisa-reporting) | NIS2: BSI-Meldung |

### Meldepflichten (Nr. 2 / §32)

| Aspekt | CRA (Art. 14) | NIS2 (§32 BSIG) |
|--------|-------------|-----------------|
| Auslöser | Aktiv ausgenutzte Schwachstelle in Produkten | Erheblicher Sicherheitsvorfall im Betrieb |
| Frühwarnung | 24 Stunden an ENISA | 24 Stunden an BSI |
| Detailmeldung | 72 Stunden | 72 Stunden |
| Abschluss | 14 Tage | 1 Monat |
| Meldestelle | ENISA Single Reporting Platform | BSI-Meldeplattform |

::: warning PARALLELE MELDEPFLICHTEN
Ein Vorfall kann **beide** Meldepflichten auslösen. Der gemeinsame Erstbewertungsprozess prüft automatisch, ob CRA- und/oder NIS2-Meldung erforderlich ist. Die Templates sind kompatibel gestaltet.
:::

### Lieferkette (Nr. 4)

| Aspekt | CRA-Prozess | NIS2-Ergänzung |
|--------|------------|----------------|
| Software-Abhängigkeiten | [CRA: Dependency Policy + SBOM](https://cra.docs.bauer-group.com/de/supply-chain/) | Referenz auf CRA |
| Dienstleister | — | NIS2: Hosting, Cloud, Support-Partner |
| Audit-Rechte | CRA: Lieferantenaudits | NIS2: Dienstleisteraudits |

## Aufwandsoptimierung

Durch konsequente Nutzung der CRA-Basisarbeit reduziert sich der NIS2-spezifische Mehraufwand auf:

| Bereich | Aufwand ohne Synergien | Aufwand mit Synergien | Einsparung |
|---------|----------------------|---------------------|------------|
| Schwachstellenmanagement | Vollständiger Aufbau | Nur Infrastruktur-Ergänzung | ~60% |
| Incident Response | Vollständiger Aufbau | Nur Betriebsvorfälle + §32 | ~40% |
| Supply Chain | Vollständiger Aufbau | Nur Dienstleisterbewertung | ~50% |
| Schulung | Vollständiger Aufbau | AI-Literacy (Art. 4) referenzieren | ~20% |
