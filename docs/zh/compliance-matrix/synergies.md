# CRA与AI法案协同效应（详情）

## 详细要求映射

### §30第2项 -- 事件管理 <-> CRA Art. 14

| 方面 | NIS2 (§32 BSIG) | CRA (Art. 14) | 协同效应 |
|--------|-----------------|-------------|----------|
| 触发条件 | 重大运营事件 | 产品漏洞/事件 | 统一初始评估流程 |
| 预警 | 24小时内向BSI报告 | 24小时内向ENISA报告 | 使用共同模板并行报告 |
| 详细报告 | 72小时 | 72小时 | 数据可复用 |
| 结案 | 1个月 | 14天 | 独立报告，共同根因分析 |
| 模板 | [NIS2报告义务](/de/incident-management/reporting) | [CRA ENISA报告](https://cra.docs.bauer-group.com/de/incident-response/enisa-reporting) | 设计为相互兼容 |

### §30第4项 -- 供应链 <-> CRA Annex I第II部分第1项

| 方面 | NIS2 | CRA | 协同效应 |
|--------|------|-----|----------|
| 软件依赖 | —（NIS2引用CRA） | [SBOM + 依赖策略](https://cra.docs.bauer-group.com/de/supply-chain/) | CRA主导 |
| IT服务商 | [供应商评估](/de/supply-chain/vendor-assessment) | — | NIS2主导 |
| 合同要求 | [安全条款](/de/supply-chain/contractual-requirements) | Annex I第II部分第1项 | 共同合同标准 |

### §30第5项 -- 漏洞管理 <-> CRA Art. 10/11

| 方面 | NIS2 | CRA | 协同效应 |
|--------|------|-----|----------|
| CVE监控（产品） | —（NIS2引用CRA） | [CRA漏洞管理](https://cra.docs.bauer-group.com/de/vulnerability-management/) | CRA主导 |
| CVE监控（基础设施） | [漏洞扫描](/de/vulnerability-management/scanning) | — | NIS2主导 |
| 补丁管理 | [补丁管理](/de/vulnerability-management/patch-management) | CRA: 产品更新 | 共同期限 |
| 安全开发 | [安全开发](/de/vulnerability-management/secure-development) | CRA: 安全设计 | 共同开发标准 |

### AI法案协同效应

| NIS2措施 | AI法案条款 | 描述 |
|---------------|---------------|-------------|
| 第1项 -- 风险管理 | Art. 9（风险管理体系） | NIS2 ISMS为AI风险管理提供方法论基础 |
| 第7项 -- 培训 | Art. 4（AI素养） | [AI法案培训计划](https://ai-act.docs.bauer-group.com/de/governance/)作为扩展 |
| 第8项 -- 密码学 | Art. 15（网络安全） | 加密标准同样适用于AI系统 |
| 第9项 -- 访问控制 | Art. 14（人类监督） | 访问控制概念作为AI监督的基础 |

## 总体架构

```
NIS2（组织与运营）
  ├── 风险管理 ←──── AI法案（AI风险管理，Art. 9）
  ├── 事件管理 ←──── CRA（产品事件，Art. 14）
  ├── 供应链 ←──── CRA（软件SBOM，Annex I）
  ├── 漏洞管理 ←──── CRA（产品CVE，Art. 10/11）
  ├── 培训 ←──── AI法案（AI素养，Art. 4）
  └── 密码学 ←──── AI法案（网络安全，Art. 15）
                ←──── CRA（产品加密，Annex I）
```
