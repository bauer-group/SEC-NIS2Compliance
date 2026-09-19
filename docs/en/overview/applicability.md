# Applicability & Size Classes

Whether a company falls **directly** under the BSIG (German BSI Act) is determined exclusively by characteristics of the company itself: as a rule, its **entity type** (Annexes 1 and 2 BSIG) and its **size** (§28 BSIG); in special cases, the operation of a critical facility (kritische Anlage, §28(1) No. 1 BSIG) or membership of the federal administration (§29 BSIG). Who the customers are – federal authorities, corporate groups or operators of critical facilities – plays no role in the classification.

Through the supply chain obligation of regulated customers (§30(2) No. 4 BSIG), however, the requirements also have an **indirect** effect on companies that are not covered themselves – namely via contracts.

::: info LEGAL BASIS
**§28 BSIG** – Classification as an essential entity (besonders wichtige Einrichtung) or important entity (wichtige Einrichtung), size thresholds and calculation rules

**§29 BSIG** – Federal administration entities

**Annexes 1 and 2 BSIG** – Sectors and entity types

**Recommendation 2003/361/EC** – SME definition, applicable via §28(4) BSIG

Legal status: BSIG of 02.12.2025 (BGBl. 2025 I No. 301), last amended by Art. 8(1) of the Act of 23.07.2026 (BGBl. 2026 I No. 226). Checked on 19.09.2026.
:::

## At a Glance {#at-a-glance}

| Question | Answer | Basis |
|----------|--------|-------|
| Who is directly subject to NIS2? | Any company that belongs to an entity type listed in Annex 1 or 2 **and** is at least a medium-sized enterprise – or that falls under a size-independent special case | §28(1) and (2), §29 BSIG |
| Are small companies exempt? | Yes. Micro and small enterprises are in principle not covered – except in the size-independent special cases. When determining their size, group companies also include the data of linked enterprises and partner enterprises (see [Determining the Figures](#calculation)) | §28(1), (2) and (4) BSIG in conjunction with Art. 2(1) NIS2 |
| Does a regulated customer make the supplier subject to NIS2? | No. A supply relationship is not a criterion under §28 BSIG | §28 BSIG; BSI FAQ |
| Is the supplier affected nonetheless? | As a rule, yes – contractually, if it is a security-relevant direct supplier of a regulated entity | §30(2) No. 4 BSIG |

## Assessment Scheme {#assessment}

The BSI does not notify companies whether they are covered. Every company carries out the assessment itself and documents the result – including a negative one.

```
Step 1  Size-independent special case?
        (KRITIS operator, trust services, TLD registry, DNS service,
         public telecom networks/services, federal administration)
          → yes: covered, regardless of size
          → no:  continue with step 2

Step 2  Entity type under Annex 1 or 2 BSIG?
        (offered to third parties against payment, including to group companies;
         negligible ancillary activities may be disregarded)
          → no:  not directly covered → check indirect impact
          → yes: continue with step 3

Step 3  Determine size under the SME Recommendation
        (incl. partner and linked enterprises)
          → micro or small enterprise:  not directly covered
          → medium-sized enterprise:    important entity
          → large enterprise, Annex 1:  essential entity
          → large enterprise, Annex 2:  important entity

Step 4  Document the result
          → if covered: registration with the BSI no later than three months
            after becoming covered (§33 BSIG)
```

::: tip BSI Orientation Aid
The BSI's [NIS-2 applicability check](https://betroffenheitspruefung-nis-2.bsi.de/) guides you anonymously through these questions. Its result is not legally binding and does not replace your own assessment.
:::

## Size Classes {#size-classes}

### EU SME Definition

The size classes are derived from Art. 2 of the Annex to Recommendation 2003/361/EC. The employee ceiling must **always** be met; for the financial figures, **one** of the two is sufficient. Employees are counted in annual work units (AWU), not by headcount (see [Determining the Figures](#calculation)).

| Size class | Employees | Financial figures |
|------------|-----------|-------------------|
| **Micro enterprise** | fewer than 10 | Annual turnover **or** annual balance sheet total at most €2M |
| **Small enterprise** | fewer than 50 | Annual turnover **or** annual balance sheet total at most €10M |
| **Medium-sized enterprise** | fewer than 250 | Annual turnover at most €50M **or** annual balance sheet total at most €43M |
| **Large enterprise** | all other enterprises | – |

### Thresholds in the BSIG

The BSIG expresses the same limits as rules on exceeding thresholds:

| Classification | Entity type | Threshold | Provision |
|----------------|-------------|-----------|-----------|
| **Essential entity** | Annex 1 | at least 250 employees **or** both annual turnover above €50M **and** annual balance sheet total above €43M | §28(1) No. 4 |
| **Important entity** | Annex 1 or 2 | at least 50 employees **or** annual turnover **and** annual balance sheet total each above €10M | §28(2) No. 3 |
| **Not covered** | Annex 1 or 2 | below both thresholds (micro and small enterprises) | – |

Based on size alone, Annex 2 entities never become essential entities. That is only possible as an operator of critical facilities or through an additional activity under Annex 1.

::: warning Common Mistake: OR Instead of AND for the Financial Threshold
The financial threshold is only exceeded if turnover **and** balance sheet total are both above it. A company with 35 employees, €14M turnover and a €6M balance sheet total remains a small enterprise and is not covered.
:::

::: warning Group Companies Are Not Automatically "Small"
The relevant figures are those including linked enterprises (100%) and partner enterprises (pro rata). A subsidiary with three employees in a large group is therefore not a small enterprise – unless it is independent with regard to its IT (§28(4) sentence 2 BSIG, see [Determining the Figures](#calculation)).
:::

### Calculation Examples

| Example | Employees (AWU) | Turnover | Balance sheet total | Entity type | Result |
|---------|-----------------|----------|---------------------|-------------|--------|
| IT service provider administering customer systems | 35 | €14M | €6M | Managed service provider (Annex 1 No. 6.1.10) | **Not covered** – balance sheet total below €10M |
| IT service provider administering customer systems | 35 | €14M | €12M | Managed service provider (Annex 1 No. 6.1.10) | **Important entity** – both financial figures above €10M |
| Machinery manufacturer | 60 | €8M | €5M | Manufacture of machinery (Annex 2 No. 5.4) | **Important entity** – at least 50 employees |
| Machinery manufacturer | 300 | €80M | €60M | Manufacture of machinery (Annex 2 No. 5.4) | **Important entity** – not an essential entity based on size alone (Annex 2) |
| Cloud provider (SaaS) | 300 | €40M | €30M | Cloud computing service (Annex 1 No. 6.1.4) | **Essential entity** – at least 250 employees |
| Web hoster with authoritative DNS servers for customers | 3 | €0.4M | €0.2M | DNS service provider (Annex 1 No. 6.1.2) | **Essential entity** – regardless of size |
| Software house (development and licensing only) | 120 | €20M | €15M | no entity type | **Not directly covered** – software development is not an entity type |

## Determining the Figures {#calculation}

§28(4) BSIG refers to Recommendation 2003/361/EC for the number of employees, turnover and balance sheet total. The following rules result from this:

| Topic | Rule | Basis |
|-------|------|-------|
| **Employees** | Annual work units (AWU) are counted. Part-time and seasonal workers count pro rata. Owners who work in the enterprise and partners who are regularly active in it are included. Apprentices as well as periods of maternity leave and parental leave are not counted. | Art. 5 Annex Rec. 2003/361/EC |
| **Data basis** | The figures for the latest approved accounting period are decisive, calculated on an annual basis. Turnover is counted excluding VAT. | Art. 4(1) Annex |
| **Two-year rule** | The size class only changes if the enterprise exceeds or falls below the threshold in two consecutive financial years. A single year above the threshold does not yet trigger coverage. Newly established enterprises estimate their data in good faith. | Art. 4(2) and (3) Annex; BSI FAQ |
| **Linked enterprises** | In the case of a majority of voting rights, dominant influence or comparable control, the data are added at 100% – including those of companies outside the EU. | Art. 3(3), Art. 6 Annex |
| **Partner enterprises** | Where there is a holding of 25% or more without a link, the data are added pro rata. | Art. 3(2), Art. 6 Annex |
| **IT independence** | Partner and linked enterprises are **not** added if the enterprise decides on the nature and operation of its IT independently – legally, economically and in fact. If the parent company operates the IT entirely, this independence is, as a rule, lacking. | §28(4) sentence 2 BSIG; BT-Drs. 21/1501 |
| **Public ownership** | The rule that an enterprise with at least 25% public ownership is not an SME does not apply for the purposes of NIS2. | §28(4) sentence 1 BSIG; Art. 2(1) NIS2 |
| **Ancillary activities** | Business activities that are negligible in relation to the overall business activity may be disregarded when assigning the entity type. Indicators are the business area's employees, turnover and share of the balance sheet total. If the activity is named in the articles of association or statutes, this argues against negligibility. In the BSI's view, the rule does not apply to operators of critical facilities, trust service providers, TLD registries, DNS service providers and telecommunications providers. | §28(3) BSIG; BT-Drs. 21/1501; BSI FAQ |

::: info Group: Source of Figures, Not Bearer of Obligations
Applicability is assessed separately for each entity. Parent or sister companies do not automatically become subject to obligations just because one group company is covered. For the size calculation, they are merely a "source of figures". Conversely, companies owned by the same persons that operate in the same or an adjacent market may be regarded as linked enterprises even without a formal shareholding relationship if they form an economic unit (CJEU, judgment of 27.02.2014, C-110/13). Splitting the business across several companies then only reduces the relevant size if the individual company is independent with regard to its IT (§28(4) sentence 2 BSIG).
:::

## Size-Independent Special Cases {#size-independent}

In these cases, the exemption for micro and small enterprises does **not** apply:

| Case | Classification | Provision | Note |
|------|----------------|-----------|------|
| **Operators of critical facilities** | essential | §28(1) No. 1 BSIG | Until the ordinance under §4(3) and §5(1) of the KRITIS Umbrella Act (KRITIS-DachG) enters into force (as of 19.09.2026: not promulgated), critical facilities continue to be determined under the BSI KRITIS Ordinance (§66 BSIG; §12 BSI-KritisV). §31 and §39 BSIG also apply. |
| **Qualified trust service providers, TLD name registries, DNS service providers** | essential | §28(1) No. 2 BSIG | A DNS service provider is anyone who offers public recursive resolvers or authoritative name resolution for third parties – even as a sole proprietor. |
| **Providers of publicly available telecommunications services, operators of public telecommunications networks** | essential with at least 50 employees or with turnover and balance sheet total each above €10M, otherwise important | §28(1) No. 3, (2) No. 2 BSIG | The security obligations derive predominantly from the TKG, the German Telecommunications Act (§28(5) BSIG). The obligation to register with the BSI still applies. |
| **Other (non-qualified) trust service providers** | important | §28(2) No. 1 BSIG | – |
| **Federal administration entities** | rules for essential entities, excluding §§38, 40(3), 61 and 65 | §29 BSIG | Federal authorities, IT service providers of the Federation organized under public law, further federal institutions by order. No size threshold. Special rules for the areas of responsibility of the Federal Foreign Office (AA) and the Federal Ministry of Defence (BMVg) as well as for the Federal Intelligence Service (BND) and the Federal Office for the Protection of the Constitution (BfV) (§29(3)). |
| **Domain name registration service providers** (registrars, resellers) | no classification | §§33, 49–51 BSIG | Only the registration obligation and obligations regarding domain registration data. |
| **Operators of energy supply networks** | below the thresholds no classification; above them essential or important, with security obligations deriving predominantly from the EnWG (§28(5) No. 2 BSIG) | §§5c, 5d EnWG | Every network operator must comply with the IT security catalog of the Federal Network Agency (Bundesnetzagentur) and register with the BSI – even below the BSIG thresholds. |

::: info Not in the BSIG: "Sole Provider of an Essential Service"
Under Art. 2(2)(b) to (e) NIS2, the Directive also applies, regardless of size, to certain entities with a key role, such as the sole provider of a service that is essential for critical societal or economic activities. The BSIG does **not** implement these cases as a separate category. The closest mechanism is the case-by-case designation of a critical facility by the BMI (Federal Ministry of the Interior) under §5(3) KRITIS-DachG. For the BSIG, it only takes effect once the associated statutory ordinance enters into force (§66 BSIG).
:::

::: warning Trap for Small IT Service Providers
Managed service providers, cloud providers and data center providers are subject to the size threshold. However, anyone who operates **authoritative DNS servers** for customers is a DNS service provider – and thus an essential entity regardless of size. An in-house name server used exclusively for the company's own domains is not covered.
:::

## Common Misconceptions {#misconceptions}

| Assumption | Legal position |
|------------|----------------|
| "Our customer is a KRITIS operator, a corporate group or a federal authority – so we are subject to NIS2." | **No.** §28 BSIG only refers to characteristics of the company itself – entity type and size or the operation of a critical facility – not to its customers. The operator of a critical facility is whoever exercises decisive influence over the facility. As a rule, a supplier or service provider is not – unless it operates the facility on its own responsibility; in the financial sector, actual control is sufficient (§2 No. 1 KRITIS-DachG). For suppliers, the BSI FAQ describes an "indirect" effect via the customer's supply chain obligation. |
| "We haven't received any letter from the BSI – so we are not affected." | **Wrong.** The BSI does not notify entities whether they are covered. Every entity carries out the assessment itself and, if covered, must register itself. |
| "Our parent company is affected – so we are too." | **Not automatically.** Applicability is assessed per entity. Group data only count for the size calculation. |
| "We will apply for an exemption." | **Not possible for ordinary companies.** §37 BSIG provides for no application procedure. Exemption decisions are issued only by the BMI – and only for entities that are active in the areas of national security, public security, defense or law enforcement, or that work exclusively for authorities in these areas and comply with equivalent requirements. |
| "We develop software – so we are subject to NIS2." | **Not as such.** Software development is not an entity type. However, cloud and SaaS operation, MSP services with access to customer systems, the manufacture of hardware or the manufacture of software that is itself a medical device (Annex 2 No. 5.1 BSIG in conjunction with Art. 2 No. 1 MDR) may be covered. The Cyber Resilience Act, by contrast, applies to products with digital elements regardless of size; its reporting obligations (Art. 14 CRA) have applied since 11.09.2026. |
| "We are small – NIS2 does not concern us." | **Legally mostly correct, economically not.** See [indirect impact](#indirect). |

## Indirect Impact: Contractual Flow-Down {#indirect}

Essential and important entities must ensure "supply chain security, including security-related aspects of the relationships with direct suppliers or service providers" (§30(2) No. 4 BSIG). The explanatory memorandum explicitly names contractual agreements with suppliers and service providers as a means – covering risk management measures, incident handling and patch management as well as security by design and security by default.

The BSI FAQ answers the question "My company does not fall under NIS-2, but I sell goods/services to companies affected by NIS-2. Do I need to consider anything?" as follows:

> "In business relationships with companies affected by NIS-2, provisions of the BSIG may also have an indirect effect on companies not affected by NIS-2. […] Where companies can rule out that they are themselves affected under §28 BSIG but provide services to entities affected by NIS-2, it may be advisable to review the company-internal compliance with risk management measures under §30(2) BSIG with a view to any agreements with the clients." *(unofficial translation)*

In the "Secure Supply Chain" information package (Infopaket "Sichere Lieferkette"), the BSI is more explicit: regulated entities should "in any case" contractually oblige their suppliers to implement security measures and have them demonstrate compliance. Under certain circumstances, they may "no longer be able to work with every provider" without risking breaches of their own obligations. For the BSI, a contractual clause alone is not enough: according to the BSI FAQ (question on fully outsourced IT), the regulated entity must ensure that its service providers implement the NIS-2 requirements and are regularly reviewed ("contracts alone are not sufficient"). For this purpose, the explanatory memorandum also explicitly names scans of the attack surface reachable from the internet (external attack surface scans).

### Scenarios

| Customer | Obligation of the customer | Typical requirements for the supplier |
|----------|----------------------------|---------------------------------------|
| **Essential or important entity** | §30(2) No. 4 BSIG | Security annex to the contract, supplier questionnaire, evidence (e.g. ISO/IEC 27001), reporting of security incidents, audit rights, patch commitments, security by design |
| **Digital provider** (cloud, data center, MSP, MSSP, DNS, online platforms, trust services) | additionally No. 5.1.4 of the Annex to Implementing Regulation (EU) 2024/2690, taking precedence under §30(3) BSIG | Where appropriate, laid down in the contract: cybersecurity requirements, training and qualifications, background checks, notification of incidents without undue delay, right to audit or audit reports, remediation of vulnerabilities, rules on subcontractors, obligations upon termination of the contract |
| **Operator of critical facilities** | additionally §31 BSIG (higher level of protection, attack detection systems) and evidence every three years (§39 BSIG) | Stricter requirements for remote access, logging and evidence, participation in audits |
| **Federal administration entity** | §43(3) BSIG: anyone commissioned with IT services for the Federation **must** be contractually obliged to ensure information security – regardless of their size. §44 BSIG: IT-Grundschutz and BSI minimum standards; BSI requirements are incorporated into procurement | Suitability requirements in the tender, IT-Grundschutz and BSI minimum standards, C5 criteria for cloud services, contractual reporting obligations |
| **State or municipal administration** | not the BSIG, but state law | Requirements under the respective state law and the tender documents – differing from state to state |
| **Operator of an energy supply network** (e.g. municipal utilities) | §5c(1) EnWG: appropriate protection "must already be ensured when procuring plant equipment and services" | Requirements from the Federal Network Agency's IT security catalog for systems, components and services in network operation |
| **Financial entity** | Art. 28–30 DORA (under §28(6) BSIG, supersedes §§30–32, 35, 36, 38 and 39 BSIG; registration under §33 BSIG still applies) | Statutory minimum contract content: service locations, assistance with ICT incidents, cooperation with supervisory authorities, termination rights, participation in training. For critical or important functions additionally unrestricted access and audit rights, participation in penetration testing (TLPT) and exit strategies |
| **Manufacturer of products with digital elements** | Art. 13(5) CRA (due diligence for third-party components, from 11.12.2027) | Evidence on supplied components, e.g. vulnerability handling and support periods |

::: info Why "As a Rule" and Not "Always"
The customer's obligation is risk-based and targets **direct** suppliers; Implementing Regulation (EU) 2024/2690 requires the contract contents "where appropriate". IT service providers, software and cloud providers as well as suppliers with access to systems or data are addressed practically always, suppliers without an IT connection mostly not. Subcontractors further down the chain are reached by the requirements through flow-down clauses. For federal authorities, contractually obliging IT service providers is required by law (§43(3) BSIG).

The customer holds the lever: it risks fines under §65 BSIG if it does not secure its supply chain. The BSI, by contrast, does not supervise a supplier that is not covered.
:::

### Statutory and Contractual Obligations Compared

| Aspect | Directly covered (§28 BSIG) | Indirectly affected (contract) |
|--------|-----------------------------|--------------------------------|
| **Source of obligations** | Law | Contract with the client |
| **Scope** | all measures under §30, reporting obligations under §32, registration under §33, management duties under §38 | what has been contractually agreed, usually a subset of §30 |
| **Incident reporting** | to the BSI (24 hours / 72 hours / 1 month after the 72-hour notification) | to the client, deadline as per contract |
| **Oversight** | BSI (§§61, 62 BSIG) | Client: questionnaires, evidence, audits |
| **Consequences of violations** | Fines under §65 BSIG | Contractual penalty, damages, termination, exclusion from tenders or supplier lists |
| **Registration with the BSI** | yes | no |

## In Practice: What Small Suppliers Should Prepare {#small-suppliers}

For non-regulated companies, it is not the BSI that checks, but the customer. The requirements arrive as a questionnaire, a contract annex or a suitability criterion. According to the BSI, there is no general certificate that provides blanket proof of the requirements under §30 BSIG.

These questionnaire items are frequently unresolved at small suppliers:

| Questionnaire item | Typical gap | Minimum measure | §30(2) BSIG |
|--------------------|-------------|-----------------|-------------|
| Supported and patched systems | Windows 10 without Extended Security Updates (ESU) – no security updates since end of support on 14.10.2025 | Migration or paid ESU, documented patch process | No. 5 |
| Network segmentation | Guest Wi-Fi on the same network as workstations and servers | Separate guest network, separation of office and server networks | No. 1, No. 9 |
| Multi-factor authentication | Admin, remote maintenance and cloud access protected by password only | MFA for all remote access and administrative accounts | No. 10 |
| Data backup | No offline copy, restore never tested | 3-2-1 backup with regular restore tests | No. 3 |
| Incident reporting | No contact person, no reporting chain to the customer | Named contact, reporting process with contractual deadline | No. 2 |
| Access and inventory | Unclear who accesses which systems and customer data | Asset list and authorization concept | No. 1, No. 9 |
| Awareness | No employee training | Annual awareness training with evidence | No. 7 |

::: tip Starting Points for Small Companies

- **CyberRisikoCheck under DIN SPEC 27076** – IT security consultation for companies with fewer than 50 employees: interview with an IT service provider, 27 requirements from six topic areas. According to the BSI, an initial assessment – not a certification and not proof of NIS2 compliance.
- **BSI offerings for SMEs** – guides, IT emergency card and IT-Grundschutz profiles on the [BSI's SME page](https://www.bsi.bund.de/dok/KMU).
- **"Secure Supply Chain" information package** – shows what regulated customers expect from suppliers: [bsi.bund.de/dok/nis-2-sichere-lieferkette](https://www.bsi.bund.de/dok/nis-2-sichere-lieferkette).

:::

## BAUER GROUP Classification {#bauer-group}

BAUER GROUP is **directly subject to NIS2** – as an **essential entity**, regardless of its size. The reason is DNS hosting: BAUER GROUP offers its customers authoritative DNS services for their domains and is therefore a DNS service provider (§2 No. 8 BSIG). Under §28(1) No. 2 BSIG, DNS service providers always qualify as essential entities; in the BSI's view, the rule on negligible ancillary activities (§28(3) BSIG) does not apply here. The Commission's proposal to amend the NIS2 Directive would remove this size-independent coverage; the classification stands until the BSIG is amended (see [Outlook](#outlook)).

In addition, NIS2 concerns BAUER GROUP in three roles:

| Role | Classification | Implementation |
|------|----------------|----------------|
| **As an entity** | Essential entity as a DNS service provider (Annex 1 No. 6.1.2, §28(1) No. 2 BSIG). With its hosting and managed services, it additionally provides services of the entity type managed service provider (Annex 1 No. 6.1.10 BSIG). For DNS service providers and MSPs, Implementing Regulation (EU) 2024/2690 takes precedence (§30(3) BSIG). Software development alone would not be an entity type. | Chapters 2–12 of this documentation; for registration status, see [Compliance Matrix](/en/compliance-matrix/) |
| **As a supplier** | Regulated customers, federal authorities and financial entities pass their requirements on to BAUER GROUP by contract. | Evidence from this documentation, contractual incident reporting to customers |
| **As a client** | BAUER GROUP passes security requirements on to its own service providers (§30(2) No. 4 BSIG). | [Supply Chain Security](/en/supply-chain/) |

::: info Consequences of Classification as an Essential Entity

- **Supervision without specific cause:** The BSI can order audits, inspections or certifications and check compliance on site even without any indication of violations (§61 BSIG).
- **Fine range:** up to €10M; for total turnover of more than €500M, up to 2% of worldwide total turnover (§65 BSIG).
- **Registration:** in addition to the information under §33 BSIG, additional information under §34 BSIG, which applies to DNS service providers, managed service providers and other digital entity types; the competent Member State is the one in which the main establishment in the EU is located (§60 BSIG).
- **Technical requirements:** The details of the risk management measures under §30 BSIG are governed by the Annex to Implementing Regulation (EU) 2024/2690.

:::

## Outlook {#outlook}

::: info Planned Amendment to the NIS2 Directive
On 20.01.2026, the European Commission proposed a targeted amendment to the NIS2 Directive (COM(2026) 13, procedure 2026/0012(COD)). Two points matter for this page:

- Entities of a type referred to in Annex I NIS2 (corresponding to Annex 1 BSIG) would, based on size, only be essential if they exceed the ceilings for "small mid-cap enterprises" (currently fewer than 750 employees and annual turnover at most €150M or annual balance sheet total at most €129M, Recommendation (EU) 2025/1099).
- DNS service providers would no longer be covered regardless of size. The general size cap would apply to them; micro and small DNS service providers would fall outside the scope.

As of 19.09.2026, the proposal is not applicable law: the lead committee of the European Parliament (ITRE) has not yet presented a draft report, and the Council has not yet adopted a general approach. The thresholds may still change – in the parallel Omnibus IV procedure, Parliament and Council provisionally agreed on 09.06.2026 on higher small mid-cap ceilings (fewer than 1,000 employees and annual turnover at most €200M or annual balance sheet total at most €172M). Once the amending directive enters into force, Member States would have twelve months to transpose it. Until then, the BSIG applies unchanged; DNS service providers remain essential entities regardless of their size.
:::

## Sources {#sources}

| Source | Reference |
|--------|-----------|
| BSI Act (BSIG), in particular §§28–30, 33, 43, 44 and Annexes 1–2 | [gesetze-im-internet.de/bsig_2025](https://www.gesetze-im-internet.de/bsig_2025/) |
| Recommendation 2003/361/EC (SME definition) | [EUR-Lex CELEX 32003H0361](https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32003H0361) |
| User guide to the SME definition (European Commission, 2020) | [single-market-economy.ec.europa.eu](https://single-market-economy.ec.europa.eu/smes/sme-fundamentals/sme-definition_en) |
| Energy Industry Act (EnWG), §§5c, 5d | [gesetze-im-internet.de/enwg_2005](https://www.gesetze-im-internet.de/enwg_2005/) |
| KRITIS Umbrella Act (KRITISDachG) | [gesetze-im-internet.de/kritisdachg](https://www.gesetze-im-internet.de/kritisdachg/) |
| Explanatory memorandum to the NIS2UmsuCG | [BT-Drs. 21/1501](https://dserver.bundestag.de/btd/21/015/2101501.pdf) |
| BSI: Questions and answers on NIS-2 | [bsi.bund.de – NIS-2 FAQ](https://www.bsi.bund.de/DE/Themen/Regulierte-Wirtschaft/NIS-2-regulierte-Unternehmen/NIS-2-FAQ/NIS-2-FAQ-allgemein/FAQ-zu-NIS-2.html) |
| BSI: "Secure Supply Chain" information package | [bsi.bund.de/dok/nis-2-sichere-lieferkette](https://www.bsi.bund.de/dok/nis-2-sichere-lieferkette) |
| Implementing Regulation (EU) 2024/2690 | [EUR-Lex CELEX 32024R2690](https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32024R2690) |
| Regulation (EU) 2022/2554 (DORA) | [EUR-Lex CELEX 32022R2554](https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32022R2554) |
| Regulation (EU) 2024/2847 (Cyber Resilience Act) | [EUR-Lex CELEX 32024R2847](https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32024R2847) |

All sources were accessed on 19.09.2026. BSI FAQ entries are cited by their question text, as the numbering may change.
