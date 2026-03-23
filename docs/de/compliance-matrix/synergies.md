# CRA- & AI-Act-Synergien (Detail)

## Detaillierte Anforderungszuordnung

### §30 Nr. 2 – Vorfallmanagement ↔ CRA Art. 14

| Aspekt | NIS2 (§32 BSIG) | CRA (Art. 14) | Synergie |
|--------|-----------------|-------------|----------|
| Auslöser | Erheblicher Betriebsvorfall | Produktschwachstelle / Vorfall | Gemeinsamer Erstbewertungsprozess |
| Frühwarnung | 24h an BSI | 24h an ENISA | Parallele Meldung mit gemeinsamer Vorlage |
| Detailmeldung | 72h | 72h | Daten wiederverwendbar |
| Abschluss | 1 Monat | 14 Tage | Separate Berichte, gemeinsame Root-Cause-Analyse |
| Templates | [NIS2 Meldepflichten](/de/incident-management/reporting) | [CRA ENISA-Meldung](https://cra.docs.bauer-group.com/de/incident-response/enisa-reporting) | Kompatibel gestaltet |

### §30 Nr. 4 – Lieferkette ↔ CRA Annex I Teil II Nr. 1

| Aspekt | NIS2 | CRA | Synergie |
|--------|------|-----|----------|
| Software-Abhängigkeiten | — (NIS2 referenziert CRA) | [SBOM + Dependency Policy](https://cra.docs.bauer-group.com/de/supply-chain/) | CRA führend |
| IT-Dienstleister | [Dienstleisterbewertung](/de/supply-chain/vendor-assessment) | — | NIS2 führend |
| Vertragliche Anforderungen | [Sicherheitsklauseln](/de/supply-chain/contractual-requirements) | Annex I Teil II Nr. 1 | Gemeinsame Vertragsstandards |

### §30 Nr. 5 – Schwachstellen ↔ CRA Art. 10/11

| Aspekt | NIS2 | CRA | Synergie |
|--------|------|-----|----------|
| CVE-Monitoring (Produkte) | — (NIS2 referenziert CRA) | [CRA Vulnerability Management](https://cra.docs.bauer-group.com/de/vulnerability-management/) | CRA führend |
| CVE-Monitoring (Infrastruktur) | [Scanning](/de/vulnerability-management/scanning) | — | NIS2 führend |
| Patch Management | [Patch Management](/de/vulnerability-management/patch-management) | CRA: Produktupdates | Gemeinsame Fristen |
| Secure Development | [Secure Development](/de/vulnerability-management/secure-development) | CRA: Security by Design | Gemeinsame Entwicklungsstandards |

### AI-Act-Synergien

| NIS2-Maßnahme | AI-Act-Artikel | Beschreibung |
|---------------|---------------|-------------|
| Nr. 1 – Risikomanagement | Art. 9 (Risikomanagement-System) | NIS2-ISMS bildet methodische Grundlage für KI-Risikomanagement |
| Nr. 7 – Schulung | Art. 4 (AI Literacy) | [AI-Act Schulungsprogramm](https://ai-act.docs.bauer-group.com/de/governance/) als Erweiterung |
| Nr. 8 – Kryptografie | Art. 15 (Cybersicherheit) | Kryptografie-Standards gelten auch für KI-Systeme |
| Nr. 9 – Zugriffskontrolle | Art. 14 (Menschliche Aufsicht) | Zugriffskontrollkonzepte als Grundlage für KI-Oversight |

## Gesamtbild

```
NIS2 (Organisation & Betrieb)
  ├── Risikomanagement ←──── AI Act (KI-Risikomanagement, Art. 9)
  ├── Vorfallmanagement ←──── CRA (Produkt-Incidents, Art. 14)
  ├── Supply Chain ←──── CRA (Software-SBOM, Annex I)
  ├── Schwachstellen ←──── CRA (Produkt-CVEs, Art. 10/11)
  ├── Schulung ←──── AI Act (AI Literacy, Art. 4)
  └── Kryptografie ←──── AI Act (Cybersicherheit, Art. 15)
                    ←──── CRA (Produktverschlüsselung, Annex I)
```
