# Asset Inventory

## Purpose

The asset inventory records all information technology systems, components and processes of the BAUER GROUP. It provides the foundation for risk analysis and enables the assignment of protective measures to specific assets.

## Asset Categories

### Server Systems

| Attribute | Description |
|-----------|-------------|
| Hostname / ID | Unique identification |
| Type | Physical / Virtual / Container |
| Location | Data center, provider |
| Operating system | Including version and patch level |
| Purpose | Production, staging, backup |
| Responsible | Assigned administrator |
| Protection requirement | Normal / High / Very High |

### Network Components

- Firewalls with ruleset version and last review date
- Switches and routers with firmware version
- VPN gateways and access points
- DNS servers and load balancers

### Applications

| Attribute | Description |
|-----------|-------------|
| Name / Version | Application with current version |
| Type | In-house development / Third-party / SaaS |
| License | License type and expiry date |
| Support | Support status and contact |
| Data classification | Which data classes are processed |
| Dependencies | Other systems, libraries, APIs |

### Cloud Services

- Provider with location and legal jurisdiction
- Contract term and SLAs
- Data classification of stored data
- Exit strategy and data portability

### Data Assets

| Classification | Storage Location | Backup | Encryption |
|---------------|-----------------|--------|------------|
| Public | Any | Optional | Optional |
| Internal | Access-controlled | Yes | In transit |
| Confidential | Access-controlled + encrypted | Yes + encrypted | At rest + in transit |
| Strictly Confidential | Isolated + encrypted | Yes + encrypted + offsite | At rest + in transit + audit |

## Maintenance Schedule

| Activity | Interval |
|----------|----------|
| Inventory update | Upon every change (deployment, decommissioning) |
| Completeness check | Semi-annually |
| Protection requirement assessment | Annually or upon change |
| Responsibility review | Upon personnel change |
