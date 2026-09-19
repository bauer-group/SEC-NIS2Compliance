# Betroffenheit & Größenklassen

Ob ein Unternehmen **unmittelbar** unter das BSIG fällt, entscheiden ausschließlich Merkmale des Unternehmens selbst: in der Regel seine **Einrichtungsart** (Anlagen 1 und 2 BSIG) und seine **Größe** (§28 BSIG), in Sonderfällen der Betrieb einer kritischen Anlage (§28 Abs. 1 Nr. 1 BSIG) oder die Zugehörigkeit zur Bundesverwaltung (§29 BSIG). Wer die Kunden sind – Bundesbehörden, Konzerne oder Betreiber kritischer Anlagen – spielt für die Einstufung keine Rolle.

Über die Lieferkettenpflicht der regulierten Kunden (§30 Abs. 2 Nr. 4 BSIG) wirken die Anforderungen jedoch **mittelbar** auch auf Unternehmen, die selbst nicht erfasst sind – und zwar über Verträge.

::: info RECHTSGRUNDLAGE
**§28 BSIG** – Einstufung als besonders wichtige oder wichtige Einrichtung, Größenschwellen und Berechnungsregeln

**§29 BSIG** – Einrichtungen der Bundesverwaltung

**Anlagen 1 und 2 BSIG** – Sektoren und Einrichtungsarten

**Empfehlung 2003/361/EG** – KMU-Definition, anzuwenden über §28 Abs. 4 BSIG

Rechtsstand: BSIG vom 02.12.2025 (BGBl. 2025 I Nr. 301), zuletzt geändert durch Art. 8 Abs. 1 des Gesetzes vom 23.07.2026 (BGBl. 2026 I Nr. 226). Geprüft am 19.09.2026.
:::

## Auf einen Blick {#at-a-glance}

| Frage | Antwort | Grundlage |
|-------|---------|-----------|
| Wer ist unmittelbar NIS2-pflichtig? | Wer einer Einrichtungsart der Anlage 1 oder 2 angehört **und** mindestens ein mittleres Unternehmen ist – oder unter einen größenunabhängigen Sonderfall fällt | §28 Abs. 1 und 2, §29 BSIG |
| Sind kleine Unternehmen befreit? | Ja. Kleinst- und Kleinunternehmen sind grundsätzlich nicht erfasst – außer in den größenunabhängigen Sonderfällen. Konzerngesellschaften rechnen dabei die Daten verbundener Unternehmen und Partnerunternehmen mit ein (siehe [Ermittlung der Kennzahlen](#calculation)) | §28 Abs. 1, 2 und 4 BSIG i. V. m. Art. 2 Abs. 1 NIS2 |
| Macht ein regulierter Kunde den Zulieferer NIS2-pflichtig? | Nein. Eine Lieferbeziehung ist kein Tatbestand des §28 BSIG | §28 BSIG; BSI-FAQ |
| Ist der Zulieferer trotzdem betroffen? | In der Regel ja – vertraglich, wenn er sicherheitsrelevanter unmittelbarer Anbieter einer regulierten Einrichtung ist | §30 Abs. 2 Nr. 4 BSIG |

## Prüfschema {#assessment}

Das BSI teilt die Betroffenheit nicht mit. Jedes Unternehmen prüft selbst und dokumentiert das Ergebnis – auch ein negatives.

```
Schritt 1  Größenunabhängiger Sonderfall?
           (KRITIS-Betreiber, Vertrauensdienste, TLD-Registry, DNS-Dienst,
            öffentliche TK-Netze/-Dienste, Bundesverwaltung)
             → ja:   betroffen, unabhängig von der Größe
             → nein: weiter mit Schritt 2

Schritt 2  Einrichtungsart nach Anlage 1 oder 2 BSIG?
           (entgeltliches Angebot an Dritte, auch an Konzerngesellschaften; vernachlässigbare
            Nebentätigkeiten können außer Betracht bleiben)
             → nein: nicht unmittelbar betroffen → mittelbare Betroffenheit prüfen
             → ja:   weiter mit Schritt 3

Schritt 3  Größe nach KMU-Empfehlung ermitteln
           (inkl. Partner- und verbundener Unternehmen)
             → Kleinst- oder Kleinunternehmen: nicht unmittelbar betroffen
             → mittleres Unternehmen:          wichtige Einrichtung
             → Großunternehmen, Anlage 1:      besonders wichtige Einrichtung
             → Großunternehmen, Anlage 2:      wichtige Einrichtung

Schritt 4  Ergebnis dokumentieren
             → bei Betroffenheit: Registrierung beim BSI spätestens drei Monate
               nach Eintritt der Betroffenheit (§33 BSIG)
```

::: tip Orientierungshilfe des BSI
Die [NIS-2-Betroffenheitsprüfung](https://betroffenheitspruefung-nis-2.bsi.de/) des BSI führt anonym durch diese Fragen. Ihr Ergebnis ist rechtlich nicht bindend und ersetzt die eigene Prüfung nicht.
:::

## Größenklassen {#size-classes}

### KMU-Definition der EU

Die Größenklassen ergeben sich aus Art. 2 des Anhangs der Empfehlung 2003/361/EG. Die Mitarbeitergrenze muss **immer** eingehalten werden, bei den Finanzkennzahlen genügt **eine** der beiden. Mitarbeiter werden in Jahresarbeitseinheiten (JAE) gezählt, nicht nach Köpfen (siehe [Ermittlung der Kennzahlen](#calculation)).

| Größenklasse | Mitarbeiter | Finanzkennzahlen |
|--------------|-------------|------------------|
| **Kleinstunternehmen** | weniger als 10 | Jahresumsatz **oder** Jahresbilanzsumme höchstens 2 Mio. EUR |
| **Kleinunternehmen** | weniger als 50 | Jahresumsatz **oder** Jahresbilanzsumme höchstens 10 Mio. EUR |
| **Mittleres Unternehmen** | weniger als 250 | Jahresumsatz höchstens 50 Mio. EUR **oder** Jahresbilanzsumme höchstens 43 Mio. EUR |
| **Großunternehmen** | alle übrigen Unternehmen | – |

### Schwellenwerte im BSIG

Das BSIG formuliert dieselben Grenzen als Überschreitungsregeln:

| Einstufung | Einrichtungsart | Schwelle | Norm |
|------------|-----------------|----------|------|
| **Besonders wichtige Einrichtung** | Anlage 1 | mindestens 250 Mitarbeiter **oder** sowohl Jahresumsatz über 50 Mio. EUR **als auch** Jahresbilanzsumme über 43 Mio. EUR | §28 Abs. 1 Nr. 4 |
| **Wichtige Einrichtung** | Anlage 1 oder 2 | mindestens 50 Mitarbeiter **oder** Jahresumsatz **und** Jahresbilanzsumme jeweils über 10 Mio. EUR | §28 Abs. 2 Nr. 3 |
| **Nicht erfasst** | Anlage 1 oder 2 | unterhalb beider Schwellen (Kleinst- und Kleinunternehmen) | – |

Über die Größe allein werden Einrichtungen der Anlage 2 nie besonders wichtige Einrichtungen. Das ist nur als Betreiber kritischer Anlagen oder über eine zusätzliche Tätigkeit nach Anlage 1 möglich.

::: warning Häufiger Fehler: ODER statt UND bei der Finanzschwelle
Die finanzielle Schwelle ist erst überschritten, wenn Umsatz **und** Bilanzsumme darüber liegen. Ein Unternehmen mit 35 Mitarbeitern, 14 Mio. EUR Umsatz und 6 Mio. EUR Bilanzsumme bleibt ein Kleinunternehmen und ist nicht erfasst.
:::

::: warning Konzerngesellschaften sind nicht automatisch „klein“
Maßgeblich sind die Zahlen einschließlich verbundener Unternehmen (100 %) und Partnerunternehmen (anteilig). Eine Tochtergesellschaft mit drei Mitarbeitern in einem großen Konzern ist deshalb kein Kleinunternehmen – es sei denn, sie ist bei ihrer IT unabhängig (§28 Abs. 4 Satz 2 BSIG, siehe [Ermittlung der Kennzahlen](#calculation)).
:::

### Rechenbeispiele

| Beispiel | Mitarbeiter (JAE) | Umsatz | Bilanzsumme | Einrichtungsart | Ergebnis |
|----------|-------------------|--------|-------------|-----------------|----------|
| IT-Dienstleister mit Kundenadministration | 35 | 14 Mio. EUR | 6 Mio. EUR | Managed Service Provider (Anlage 1 Nr. 6.1.10) | **Nicht erfasst** – Bilanzsumme unter 10 Mio. EUR |
| IT-Dienstleister mit Kundenadministration | 35 | 14 Mio. EUR | 12 Mio. EUR | Managed Service Provider (Anlage 1 Nr. 6.1.10) | **Wichtige Einrichtung** – beide Finanzwerte über 10 Mio. EUR |
| Maschinenbauer | 60 | 8 Mio. EUR | 5 Mio. EUR | Maschinenbau (Anlage 2 Nr. 5.4) | **Wichtige Einrichtung** – mindestens 50 Mitarbeiter |
| Maschinenbauer | 300 | 80 Mio. EUR | 60 Mio. EUR | Maschinenbau (Anlage 2 Nr. 5.4) | **Wichtige Einrichtung** – über die Größe allein keine besonders wichtige Einrichtung (Anlage 2) |
| Cloud-Anbieter (SaaS) | 300 | 40 Mio. EUR | 30 Mio. EUR | Cloud-Computing-Dienst (Anlage 1 Nr. 6.1.4) | **Besonders wichtige Einrichtung** – mindestens 250 Mitarbeiter |
| Webhoster mit autoritativen DNS-Servern für Kunden | 3 | 0,4 Mio. EUR | 0,2 Mio. EUR | DNS-Diensteanbieter (Anlage 1 Nr. 6.1.2) | **Besonders wichtige Einrichtung** – größenunabhängig |
| Softwarehaus (nur Entwicklung und Lizenzierung) | 120 | 20 Mio. EUR | 15 Mio. EUR | keine Einrichtungsart | **Nicht unmittelbar erfasst** – Softwareentwicklung ist keine Einrichtungsart |

## Ermittlung der Kennzahlen {#calculation}

§28 Abs. 4 BSIG verweist für Mitarbeiterzahl, Umsatz und Bilanzsumme auf die Empfehlung 2003/361/EG. Daraus folgen diese Regeln:

| Thema | Regel | Grundlage |
|-------|-------|-----------|
| **Mitarbeiter** | Gezählt werden Jahresarbeitseinheiten (JAE). Teilzeit- und Saisonkräfte zählen anteilig. Inhaber, die im Unternehmen mitarbeiten, und regelmäßig tätige Teilhaber zählen mit. Auszubildende sowie Zeiten von Mutterschutz und Elternzeit zählen nicht. | Art. 5 Anhang Empf. 2003/361/EG |
| **Datenbasis** | Maßgeblich ist der letzte Rechnungsabschluss, berechnet auf Jahresbasis. Der Umsatz zählt ohne Umsatzsteuer. | Art. 4 Abs. 1 Anhang |
| **Zwei-Jahres-Regel** | Die Größenklasse ändert sich erst, wenn die Schwelle in zwei aufeinanderfolgenden Geschäftsjahren über- oder unterschritten wird. Ein einzelnes Jahr über der Schwelle löst die Betroffenheit noch nicht aus. Neugründungen schätzen ihre Daten nach Treu und Glauben. | Art. 4 Abs. 2 und 3 Anhang; BSI-FAQ |
| **Verbundene Unternehmen** | Bei Stimmrechtsmehrheit, beherrschendem Einfluss oder vergleichbarer Kontrolle werden die Daten zu 100 % hinzugerechnet – auch von Gesellschaften außerhalb der EU. | Art. 3 Abs. 3, Art. 6 Anhang |
| **Partnerunternehmen** | Bei einer Beteiligung ab 25 % ohne Verbindung werden die Daten anteilig hinzugerechnet. | Art. 3 Abs. 2, Art. 6 Anhang |
| **IT-Unabhängigkeit** | Partner- und verbundene Unternehmen werden **nicht** hinzugerechnet, wenn das Unternehmen über Beschaffenheit und Betrieb seiner IT rechtlich, wirtschaftlich und tatsächlich unabhängig entscheidet. Betreibt die Konzernmutter die IT vollständig, fehlt diese Unabhängigkeit in der Regel. | §28 Abs. 4 Satz 2 BSIG; BT-Drs. 21/1501 |
| **Öffentliche Beteiligung** | Die Regel, dass ein Unternehmen mit mindestens 25 % öffentlicher Beteiligung kein KMU ist, gilt für NIS2 nicht. | §28 Abs. 4 Satz 1 BSIG; Art. 2 Abs. 1 NIS2 |
| **Nebentätigkeiten** | Geschäftstätigkeiten, die im Verhältnis zur gesamten Geschäftstätigkeit vernachlässigbar sind, können bei der Zuordnung zur Einrichtungsart unberücksichtigt bleiben. Indizien sind Mitarbeiter, Umsatz und Bilanzanteil des Bereichs. Wird die Tätigkeit im Gesellschaftsvertrag oder in der Satzung genannt, spricht das gegen Vernachlässigbarkeit. Nach Auffassung des BSI gilt die Regel nicht für Betreiber kritischer Anlagen, Vertrauensdiensteanbieter, TLD-Registries, DNS-Diensteanbieter und TK-Anbieter. | §28 Abs. 3 BSIG; BT-Drs. 21/1501; BSI-FAQ |

::: info Konzern: Zahlenquelle, nicht Pflichtenträger
Die Betroffenheit wird für jede Einrichtung einzeln geprüft. Mutter- oder Schwestergesellschaften werden nicht automatisch pflichtig, nur weil eine Konzerngesellschaft betroffen ist. Für die Größenberechnung sind sie nur „Zahlenquelle“. Umgekehrt können Gesellschaften derselben Inhaber, die im selben oder in einem benachbarten Markt tätig sind, auch ohne formale Beteiligungsbeziehung als verbundene Unternehmen gelten, wenn sie eine wirtschaftliche Einheit bilden (EuGH, Urteil vom 27.02.2014, C-110/13). Eine Aufteilung auf mehrere Gesellschaften senkt die maßgebliche Größe dann nur, wenn die einzelne Gesellschaft bei ihrer IT unabhängig ist (§28 Abs. 4 Satz 2 BSIG).
:::

## Größenunabhängige Sonderfälle {#size-independent}

In diesen Fällen gilt die Ausnahme für Kleinst- und Kleinunternehmen **nicht**:

| Fall | Einstufung | Norm | Hinweis |
|------|------------|------|---------|
| **Betreiber kritischer Anlagen** | besonders wichtig | §28 Abs. 1 Nr. 1 BSIG | Kritische Anlagen werden bis zum Inkrafttreten der Verordnung nach dem KRITIS-Dachgesetz weiter nach der BSI-Kritisverordnung bestimmt (§66 BSIG). Zusätzlich gelten §31 und §39 BSIG. |
| **Qualifizierte Vertrauensdiensteanbieter, TLD-Name-Registries, DNS-Diensteanbieter** | besonders wichtig | §28 Abs. 1 Nr. 2 BSIG | DNS-Diensteanbieter ist, wer autoritative Namensauflösung für Dritte oder öffentliche rekursive Resolver anbietet – auch als Einzelunternehmer. |
| **Anbieter öffentlich zugänglicher TK-Dienste, Betreiber öffentlicher TK-Netze** | besonders wichtig ab 50 Mitarbeitern oder bei Umsatz und Bilanzsumme von jeweils über 10 Mio. EUR, sonst wichtig | §28 Abs. 1 Nr. 3, Abs. 2 Nr. 2 BSIG | Die Sicherheitspflichten folgen überwiegend aus dem TKG (§28 Abs. 5 BSIG). Die Registrierung beim BSI bleibt. |
| **Sonstige (nicht qualifizierte) Vertrauensdiensteanbieter** | wichtig | §28 Abs. 2 Nr. 1 BSIG | – |
| **Einrichtungen der Bundesverwaltung** | Regeln für besonders wichtige Einrichtungen, ohne §§38, 40 Abs. 3, 61 und 65 | §29 BSIG | Bundesbehörden, öffentlich-rechtlich organisierte IT-Dienstleister des Bundes, weitere Bundeseinrichtungen auf Anordnung. Keine Größenschwelle. Sonderregeln für die Geschäftsbereiche von AA und BMVg sowie für BND und BfV (§29 Abs. 3). |
| **Domain-Name-Registry-Dienstleister** (Registrare, Reseller) | keine Einstufung | §§33, 49–51 BSIG | Nur Registrierungspflicht und Pflichten zu Domain-Registrierungsdaten. |
| **Betreiber von Energieversorgungsnetzen** | unterhalb der Schwellen keine Einstufung; darüber besonders wichtig oder wichtig, mit Sicherheitspflichten überwiegend aus dem EnWG (§28 Abs. 5 Nr. 2 BSIG) | §§5c, 5d EnWG | Jeder Netzbetreiber muss den IT-Sicherheitskatalog der Bundesnetzagentur erfüllen und sich beim BSI registrieren – auch unterhalb der BSIG-Schwellen. |

::: info Nicht im BSIG: „alleiniger Anbieter eines wesentlichen Dienstes“
Nach Art. 2 Abs. 2 Buchst. b bis e NIS2 gilt die Richtlinie unabhängig von der Größe auch für bestimmte Einrichtungen mit Schlüsselrolle, etwa den einzigen Anbieter eines Dienstes, der für kritische gesellschaftliche oder wirtschaftliche Tätigkeiten unerlässlich ist. Das BSIG setzt diese Fälle **nicht** als eigene Kategorie um. Der nächstliegende Mechanismus ist die Einzelfallfeststellung einer kritischen Anlage durch das BMI nach §5 Abs. 3 KRITIS-Dachgesetz. Für das BSIG greift sie erst mit Inkrafttreten der zugehörigen Rechtsverordnung (§66 BSIG).
:::

::: warning Falle für kleine IT-Dienstleister
Managed Service Provider, Cloud- und Rechenzentrumsanbieter unterliegen der Größenschwelle. Wer aber für Kunden **autoritative DNS-Server** betreibt, ist DNS-Diensteanbieter – und damit unabhängig von der Größe besonders wichtige Einrichtung. Der eigene Nameserver für ausschließlich eigene Domains ist nicht erfasst.
:::

## Häufige Irrtümer {#misconceptions}

| Annahme | Rechtslage |
|---------|------------|
| „Unser Kunde ist KRITIS-Betreiber, Konzern oder Bundesbehörde – also sind wir NIS2-pflichtig.“ | **Nein.** §28 BSIG knüpft nur an Merkmale des Unternehmens selbst an – Einrichtungsart und Größe oder den Betrieb einer kritischen Anlage –, nicht an seine Kunden. Betreiber einer kritischen Anlage ist, wer bestimmenden Einfluss auf die Anlage ausübt. Ein Zulieferer oder Dienstleister ist das in der Regel nicht – anders, wenn er die Anlage eigenverantwortlich betreibt; im Finanzwesen genügt die tatsächliche Sachherrschaft (§2 Nr. 1 KRITIS-Dachgesetz). Die BSI-FAQ beschreibt für Zulieferer eine „mittelbare“ Wirkung über die Lieferkettenpflicht des Kunden. |
| „Wir haben keine Post vom BSI bekommen – also sind wir nicht betroffen.“ | **Falsch.** Das BSI teilt Betroffenheit nicht mit. Jede Einrichtung prüft selbst und muss sich bei Betroffenheit selbst registrieren. |
| „Unsere Muttergesellschaft ist betroffen – also wir auch.“ | **Nicht automatisch.** Die Betroffenheit wird je Einrichtung geprüft. Konzerndaten zählen nur für die Größenberechnung. |
| „Wir beantragen eine Ausnahme.“ | **Für gewöhnliche Unternehmen nicht möglich.** §37 BSIG kennt kein Antragsverfahren. Ausnahmebescheide erlässt nur das BMI – und nur für Einrichtungen, die in den Bereichen nationale Sicherheit, öffentliche Sicherheit, Verteidigung oder Strafverfolgung tätig sind oder ausschließlich für Behörden in diesen Bereichen arbeiten und gleichwertige Vorgaben einhalten. |
| „Wir entwickeln Software – also sind wir NIS2-pflichtig.“ | **Nicht als solche.** Softwareentwicklung ist keine Einrichtungsart. Erfasst sein können aber Cloud- und SaaS-Betrieb, MSP-Leistungen mit Zugriff auf Kundensysteme, die Herstellung von Hardware oder die Herstellung von Software, die selbst ein Medizinprodukt ist (Anlage 2 Nr. 5.1 BSIG i. V. m. Art. 2 Nr. 1 MDR). Der Cyber Resilience Act gilt dagegen größenunabhängig für Produkte mit digitalen Elementen; seine Meldepflichten (Art. 14 CRA) gelten seit dem 11.09.2026. |
| „Wir sind klein – NIS2 betrifft uns nicht.“ | **Gesetzlich meist zutreffend, wirtschaftlich nicht.** Siehe [mittelbare Betroffenheit](#indirect). |

## Mittelbare Betroffenheit: vertragliche Weitergabe {#indirect}

Besonders wichtige und wichtige Einrichtungen müssen die „Sicherheit der Lieferkette einschließlich sicherheitsbezogener Aspekte der Beziehungen zu unmittelbaren Anbietern oder Diensteanbietern“ gewährleisten (§30 Abs. 2 Nr. 4 BSIG). Die Gesetzesbegründung nennt als Mittel ausdrücklich vertragliche Vereinbarungen mit Zulieferern und Dienstleistern zu Risikomanagementmaßnahmen, Vorfallbewältigung und Patchmanagement sowie zu Security by Design und Security by Default.

Die BSI-FAQ beantwortet die Frage „Mein Unternehmen fällt nicht unter NIS-2, aber ich verkaufe Waren/Dienstleistungen an von NIS-2 betroffene Unternehmen. Muss ich hierbei etwas beachten?“ so:

> „Bei Geschäftsbeziehungen zu von NIS-2 betroffenen Unternehmen können Regelungen des BSIG sich mittelbar auch auf nicht von NIS-2 betroffene Unternehmen auswirken. […] Sofern Unternehmen selbst eine Betroffenheit nach § 28 BSIG für sich ausschließen können, jedoch für von NIS-2 betroffenen Einrichtungen Dienstleistungen erbringen, kann es sich anbieten, die unternehmensinterne Einhaltung von Risikomanagementmaßnahmen nach § 30 Abs. 2 BSIG für etwaige Vereinbarungen mit den Auftraggebern zu prüfen.“

Im Infopaket „Sichere Lieferkette“ wird das BSI deutlicher: Regulierte Einrichtungen sollten ihre Zulieferer „in jedem Fall“ vertraglich zu Sicherheitsmaßnahmen verpflichten und sich deren Einhaltung nachweisen lassen. Unter Umständen können sie „nicht mehr mit jedem Anbieter zusammenarbeiten“, ohne selbst Pflichtverstöße zu riskieren. Eine Vertragsklausel allein reicht dem BSI nicht: Nach der BSI-FAQ (Frage zur vollständig ausgelagerten IT) muss die regulierte Einrichtung sicherstellen, dass ihre Dienstleister die NIS-2-Vorgaben umsetzen und regelmäßig überprüft werden („Verträge allein genügen nicht“). Die Gesetzesbegründung nennt dafür ausdrücklich auch Scans der aus dem Internet erreichbaren Angriffsfläche (External Attack Surface Scans).

### Konstellationen

| Kunde | Pflicht beim Kunden | Typische Anforderungen an den Zulieferer |
|-------|---------------------|------------------------------------------|
| **Besonders wichtige oder wichtige Einrichtung** | §30 Abs. 2 Nr. 4 BSIG | Sicherheitsanlage zum Vertrag, Lieferantenfragebogen, Nachweise (z. B. ISO/IEC 27001), Meldung von Sicherheitsvorfällen, Audit-Rechte, Patch-Zusagen, Security by Design |
| **Digitaler Anbieter** (Cloud, Rechenzentrum, MSP, MSSP, DNS, Online-Plattformen, Vertrauensdienste) | zusätzlich Anhang Nr. 5.1.4 DVO (EU) 2024/2690, vorrangig nach §30 Abs. 3 BSIG | Soweit angemessen vertraglich festgelegt: Cybersicherheitsanforderungen, Schulung und Qualifikation, Zuverlässigkeitsüberprüfung, unverzügliche Vorfallmeldung, Prüfrecht oder Prüfberichte, Schwachstellenbehebung, Regeln für Unterauftragnehmer, Pflichten bei Vertragsende |
| **Betreiber kritischer Anlagen** | zusätzlich §31 BSIG (erhöhtes Schutzniveau, Systeme zur Angriffserkennung) und Nachweis alle drei Jahre (§39 BSIG) | Strengere Vorgaben für Fernzugriff, Protokollierung und Nachweise, Mitwirkung an Audits |
| **Einrichtung der Bundesverwaltung** | §43 Abs. 3 BSIG: Wer mit IT-Leistungen für den Bund beauftragt wird, **muss** vertraglich zur Informationssicherheit verpflichtet werden – unabhängig von seiner Größe. §44 BSIG: IT-Grundschutz und BSI-Mindeststandards; BSI-Vorgaben fließen in die Vergabe ein | Eignungsanforderungen in der Ausschreibung, IT-Grundschutz und BSI-Mindeststandards, bei Cloud-Diensten C5-Kriterien, vertragliche Meldepflichten |
| **Landes- oder Kommunalverwaltung** | nicht das BSIG, sondern Landesrecht | Anforderungen nach dem jeweiligen Landesrecht und den Vergabeunterlagen – je nach Land unterschiedlich |
| **Betreiber eines Energieversorgungsnetzes** (z. B. Stadtwerke) | §5c Abs. 1 EnWG: Der angemessene Schutz „ist bereits bei der Beschaffung von Anlagengütern und Dienstleistungen sicherzustellen“ | Anforderungen aus dem IT-Sicherheitskatalog der Bundesnetzagentur für Systeme, Komponenten und Dienstleistungen im Netzbetrieb |
| **Finanzunternehmen** | Art. 28–30 DORA (verdrängt nach §28 Abs. 6 BSIG die §§30–32, 35, 36, 38 und 39 BSIG; die Registrierung nach §33 BSIG bleibt) | Gesetzlich vorgeschriebene Mindestvertragsinhalte: Leistungsorte, Unterstützung bei IKT-Vorfällen, Zusammenarbeit mit Aufsichtsbehörden, Kündigungsrechte, Schulungsteilnahme. Bei kritischen oder wichtigen Funktionen zusätzlich uneingeschränkte Zugangs- und Auditrechte, Mitwirkung an Penetrationstests (TLPT) und Ausstiegsstrategien |
| **Hersteller von Produkten mit digitalen Elementen** | Art. 13 Abs. 5 CRA (Sorgfalt bei Drittkomponenten, ab 11.12.2027) | Nachweise zu gelieferten Komponenten, z. B. Schwachstellenbehandlung und Supportzeiträume |

::: info Warum „in der Regel“ und nicht „immer“
Die Pflicht des Kunden ist risikobasiert und zielt auf **unmittelbare** Anbieter; die DVO (EU) 2024/2690 verlangt die Vertragsinhalte „soweit angemessen“. IT-Dienstleister, Software- und Cloud-Anbieter sowie Zulieferer mit Zugriff auf Systeme oder Daten werden praktisch immer adressiert, Lieferanten ohne IT-Bezug meist nicht. Unterauftragnehmer weiter unten in der Kette erreichen die Anforderungen über Weitergabeklauseln. Bei Bundesbehörden ist die vertragliche Verpflichtung von IT-Dienstleistern gesetzlich vorgeschrieben (§43 Abs. 3 BSIG).

Den Hebel hält der Kunde: Er riskiert Bußgelder nach §65 BSIG, wenn er seine Lieferkette nicht absichert. Einen nicht erfassten Zulieferer beaufsichtigt das BSI dagegen nicht.
:::

### Gesetzliche und vertragliche Pflicht im Vergleich

| Aspekt | Unmittelbar betroffen (§28 BSIG) | Mittelbar betroffen (Vertrag) |
|--------|----------------------------------|-------------------------------|
| **Pflichtenquelle** | Gesetz | Vertrag mit dem Auftraggeber |
| **Umfang** | alle Maßnahmen nach §30, Meldepflichten nach §32, Registrierung nach §33, Geschäftsleitungspflichten nach §38 | das vertraglich Vereinbarte, meist ein Ausschnitt aus §30 |
| **Vorfallmeldung** | an das BSI (24 Stunden / 72 Stunden / 1 Monat) | an den Auftraggeber, Frist nach Vertrag |
| **Kontrolle** | BSI (§§61, 62 BSIG) | Auftraggeber: Fragebögen, Nachweise, Audits |
| **Folgen bei Verstößen** | Bußgelder nach §65 BSIG | Vertragsstrafe, Schadensersatz, Kündigung, Ausschluss aus Vergabe oder Lieferantenliste |
| **Registrierung beim BSI** | ja | nein |

## Praxis: Was kleine Zulieferer vorbereiten sollten {#small-suppliers}

Für nicht regulierte Unternehmen prüft nicht das BSI, sondern der Kunde. Die Anforderungen kommen als Fragebogen, Vertragsanlage oder Eignungskriterium. Ein allgemeines Zertifikat, das die Anforderungen nach §30 BSIG pauschal nachweist, gibt es laut BSI nicht.

Diese Fragebogenpunkte sind bei kleinen Zulieferern häufig offen:

| Fragebogenpunkt | Typische Lücke | Mindestmaßnahme | §30 Abs. 2 BSIG |
|-----------------|----------------|-----------------|-----------------|
| Unterstützte und gepatchte Systeme | Windows 10 ohne Extended Security Updates (ESU) – seit dem Supportende am 14.10.2025 ohne Sicherheitsupdates | Migration oder kostenpflichtiges ESU, dokumentierter Patchprozess | Nr. 5 |
| Netzsegmentierung | Gäste-WLAN im selben Netz wie Arbeitsplätze und Server | Getrenntes Gästenetz, Trennung von Büro- und Servernetz | Nr. 1, Nr. 9 |
| Multi-Faktor-Authentifizierung | Admin-, Fernwartungs- und Cloud-Zugänge nur mit Passwort | MFA für alle Fernzugriffe und administrativen Konten | Nr. 10 |
| Datensicherung | Keine Offline-Kopie, Wiederherstellung nie getestet | 3-2-1-Backup mit regelmäßigem Wiederherstellungstest | Nr. 3 |
| Vorfallmeldung | Kein Ansprechpartner, keine Meldekette zum Kunden | Benannter Kontakt, Meldeprozess mit vertraglicher Frist | Nr. 2 |
| Zugriffe und Inventar | Unklar, wer auf welche Systeme und Kundendaten zugreift | Asset-Liste und Berechtigungskonzept | Nr. 1, Nr. 9 |
| Sensibilisierung | Keine Schulung der Mitarbeiter | Jährliche Awareness-Schulung mit Nachweis | Nr. 7 |

::: tip Einstiegshilfen für kleine Unternehmen

- **CyberRisikoCheck nach DIN SPEC 27076** – IT-Sicherheitsberatung für Unternehmen mit weniger als 50 Mitarbeitern: Interview mit einem IT-Dienstleister, 27 Anforderungen aus sechs Themenbereichen. Laut BSI eine Ersteinschätzung, keine Zertifizierung und kein Nachweis der NIS2-Konformität.
- **BSI-Angebote für KMU** – Leitfäden, IT-Notfallkarte und IT-Grundschutz-Profile auf der [KMU-Seite des BSI](https://www.bsi.bund.de/dok/KMU).
- **Infopaket Sichere Lieferkette** – zeigt, was regulierte Kunden von Zulieferern erwarten: [bsi.bund.de/dok/nis-2-sichere-lieferkette](https://www.bsi.bund.de/dok/nis-2-sichere-lieferkette).

:::

## Einordnung der BAUER GROUP {#bauer-group}

Die BAUER GROUP ist von NIS2 in drei Rollen berührt:

| Rolle | Einordnung | Umsetzung |
|-------|------------|-----------|
| **Als Einrichtung** | Mit dem Geschäftsbereich Managed Services fällt die BAUER GROUP unter die Einrichtungsart Managed Service Provider (Anlage 1 Nr. 6.1.10 BSIG). Ob sie als wichtige oder besonders wichtige Einrichtung gilt, richtet sich nach den Größenschwellen (siehe [Größenklassen](#size-classes)); diese Einstufung ist Grundlage der Registrierung nach §33 BSIG. Für MSPs gilt zusätzlich die DVO (EU) 2024/2690 (§30 Abs. 3 BSIG). Die Softwareentwicklung allein wäre keine Einrichtungsart. | Kapitel 2–12 dieser Dokumentation; Registrierung nach §33 siehe [Compliance-Matrix](/de/compliance-matrix/) |
| **Als Zulieferer** | Regulierte Kunden, Bundesbehörden und Finanzunternehmen geben ihre Anforderungen vertraglich an die BAUER GROUP weiter. | Nachweise aus dieser Dokumentation, vertragliche Vorfallmeldung an Kunden |
| **Als Auftraggeber** | Die BAUER GROUP gibt Sicherheitsanforderungen an die eigenen Dienstleister weiter (§30 Abs. 2 Nr. 4 BSIG). | [Lieferkettensicherheit](/de/supply-chain/) |

## Ausblick {#outlook}

::: info Geplante Änderung der NIS2-Richtlinie
Die Europäische Kommission hat am 20.01.2026 eine gezielte Änderung der NIS2-Richtlinie vorgeschlagen (COM(2026) 13). Danach wären Einrichtungen der in Anhang I NIS2 (entspricht Anlage 1 BSIG) genannten Art über die Größe nur noch besonders wichtig, wenn sie die Obergrenzen für „kleine Midcap-Unternehmen“ überschreiten (weniger als 750 Mitarbeiter und Jahresumsatz höchstens 150 Mio. EUR oder Jahresbilanzsumme höchstens 129 Mio. EUR, Empfehlung (EU) 2025/1099). Der Vorschlag ist noch kein geltendes Recht. Das BSIG gilt bis zu einer Anpassung unverändert.
:::

## Quellen {#sources}

| Quelle | Fundstelle |
|--------|------------|
| BSI-Gesetz (BSIG), insbesondere §§28–30, 33, 43, 44 und Anlagen 1–2 | [gesetze-im-internet.de/bsig_2025](https://www.gesetze-im-internet.de/bsig_2025/) |
| Empfehlung 2003/361/EG (KMU-Definition) | [EUR-Lex CELEX 32003H0361](https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32003H0361) |
| Benutzerleitfaden zur KMU-Definition (Europäische Kommission, 2020) | [single-market-economy.ec.europa.eu](https://single-market-economy.ec.europa.eu/smes/sme-fundamentals/sme-definition_en) |
| Energiewirtschaftsgesetz (EnWG), §§5c, 5d | [gesetze-im-internet.de/enwg_2005](https://www.gesetze-im-internet.de/enwg_2005/) |
| KRITIS-Dachgesetz (KRITISDachG) | [gesetze-im-internet.de/kritisdachg](https://www.gesetze-im-internet.de/kritisdachg/) |
| Gesetzesbegründung NIS2UmsuCG | [BT-Drs. 21/1501](https://dserver.bundestag.de/btd/21/015/2101501.pdf) |
| BSI: Fragen und Antworten zu NIS-2 | [bsi.bund.de – NIS-2-FAQ](https://www.bsi.bund.de/DE/Themen/Regulierte-Wirtschaft/NIS-2-regulierte-Unternehmen/NIS-2-FAQ/NIS-2-FAQ-allgemein/FAQ-zu-NIS-2.html) |
| BSI: Infopaket Sichere Lieferkette | [bsi.bund.de/dok/nis-2-sichere-lieferkette](https://www.bsi.bund.de/dok/nis-2-sichere-lieferkette) |
| Durchführungsverordnung (EU) 2024/2690 | [EUR-Lex CELEX 32024R2690](https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32024R2690) |
| Verordnung (EU) 2022/2554 (DORA) | [EUR-Lex CELEX 32022R2554](https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32022R2554) |
| Verordnung (EU) 2024/2847 (Cyber Resilience Act) | [EUR-Lex CELEX 32024R2847](https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32024R2847) |

Alle Quellen wurden am 19.09.2026 abgerufen. BSI-FAQ-Einträge werden nach ihrem Fragetext zitiert, da sich die Nummerierung ändern kann.
