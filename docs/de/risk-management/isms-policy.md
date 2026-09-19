# Informationssicherheitspolitik

## Zweck

Die Informationssicherheitspolitik definiert den Rahmen für den Schutz aller informationstechnischen Systeme, Komponenten und Prozesse der BAUER GROUP. Sie ist die oberste Leitlinie des ISMS und wird durch die Geschäftsleitung freigegeben.

## Schutzziele

| Schutzziel | Definition | Maßnahmen |
|-----------|-----------|-----------|
| **Vertraulichkeit** | Informationen sind nur für autorisierte Personen zugänglich | Zugriffskontrolle, Verschlüsselung, Klassifizierung |
| **Integrität** | Informationen sind vollständig und unverändert | Hashprüfung, Versionierung, Änderungskontrolle |
| **Verfügbarkeit** | Systeme und Daten sind bei Bedarf zugänglich | Redundanz, Backup, Monitoring |
| **Authentizität** | Identität von Nutzern und Systemen ist verifiziert | MFA, Zertifikate, digitale Signaturen |

## Geltungsbereich

Die Informationssicherheitspolitik gilt für:

- Alle Mitarbeiter, Geschäftsleitung und externe Dienstleister mit Systemzugriff
- Alle informationstechnischen Systeme im Eigenbetrieb und bei Drittanbietern
- Alle Standorte und Remote-Arbeitsplätze
- Alle Phasen des Informationslebenszyklus (Erstellung, Verarbeitung, Speicherung, Löschung)

## Verantwortlichkeiten

| Rolle | Verantwortung |
|-------|--------------|
| **Geschäftsleitung** | Freigabe der Politik, Bereitstellung von Ressourcen (§38 BSIG) |
| **ISB** | Erstellung, Pflege und Überwachung der Einhaltung |
| **IT-Leitung** | Technische Umsetzung der Vorgaben |
| **Alle Mitarbeiter** | Einhaltung der Richtlinien, Meldung von Verstößen |

::: info §38 BSIG – GESCHÄFTSLEITUNGSPFLICHTEN
Die Geschäftsleitung muss die Risikomanagementmaßnahmen nach §30 umsetzen und ihre Umsetzung überwachen (§38 Abs. 1 BSIG); nach der Gesetzesbegründung hat sie die Maßnahmen zuvor als geeignet zu billigen. Geschäftsleitungen, die diese Pflichten verletzen, haften ihrer Einrichtung für schuldhaft verursachte Schäden nach dem Gesellschaftsrecht der jeweiligen Rechtsform (§38 Abs. 2 BSIG). Zudem muss die Geschäftsleitung regelmäßig an Cybersicherheitsschulungen teilnehmen (§38 Abs. 3 BSIG). Details: [Geschäftsleitungspflichten](/de/governance/management-duties).
:::

## Überprüfungszyklus

| Aktivität | Intervall | Verantwortlich |
|-----------|-----------|---------------|
| Review der Politik | Jährlich | ISB + Geschäftsleitung |
| Anlassbezogenes Review | Bei wesentlichen Änderungen oder Vorfällen | ISB |
| Freigabe | Nach jedem Review | Geschäftsleitung |
| Kommunikation | Nach Freigabe an alle Mitarbeiter | ISB |

## Klassifizierungsschema

| Stufe | Beschreibung | Beispiele | Maßnahmen |
|-------|-------------|----------|-----------|
| **Öffentlich** | Keine Einschränkung | Marketingmaterial, veröffentlichte Dokumentation | Keine besonderen Maßnahmen |
| **Intern** | Nur für BAUER GROUP Mitarbeiter | Interne Prozesse, Organigramme | Zugriffskontrolle |
| **Vertraulich** | Geschäftskritisch, eingeschränkter Zugriff | Kundendaten, Verträge, Credentials | Verschlüsselung + Zugriffskontrolle |
| **Streng vertraulich** | Höchste Schutzstufe | Schlüsselmaterial, Sicherheitsarchitektur | Verschlüsselung + Need-to-Know + Audit-Trail |
