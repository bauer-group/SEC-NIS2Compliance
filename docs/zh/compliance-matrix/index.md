# 合规矩阵

所有NIS2要求到文档、实施和协同效应的完整映射。

## §30 BSIG – 风险管理措施

| 编号 | 措施 | 文档 | 状态 |
|-----|------|------|------|
| 1 | 风险分析和IT安全概念 | [风险管理](/zh/risk-management/) | ✅ 已实施 |
| 2 | 事件处理 | [事件管理](/zh/incident-management/) | ✅ 已实施 |
| 3 | 业务连续性 / BCM | [业务连续性](/zh/business-continuity/) | ✅ 已实施 |
| 4 | 供应链安全 | [供应链安全](/zh/supply-chain/) | ✅ 已实施 |
| 5 | 安全采购、开发、维护 | [漏洞管理](/zh/vulnerability-management/) | ✅ 已实施 |
| 6 | 有效性审查 | [有效性审查](/zh/effectiveness-review/) | ✅ 已实施 |
| 7 | 培训与意识 | [培训与意识](/zh/training/) | ✅ 已实施 |
| 8 | 加密技术 | [加密技术](/zh/cryptography/) | ✅ 已实施 |
| 9 | 访问控制与人员安全 | [访问控制](/zh/access-control/) | ✅ 已实施 |
| 10 | MFA与安全通信 | [访问控制](/zh/access-control/) | ✅ 已实施 |

## 其他BSIG义务

| 条款 | 义务 | 文档 | 状态 |
|------|------|------|------|
| §32 | 报告义务 | [事件管理](/zh/incident-management/) | ✅ 已实施 |
| §33 | 注册义务 | 已在组织层面实施 | ✅ 已实施 |
| §38 | 管理层职责 | [治理](/zh/governance/) | ✅ 已实施 |

## CRA协同效应

| NIS2措施 | CRA文档 | 协同 |
|---------|---------|------|
| 第2项 – 事件 | [CRA事件响应](https://cra.docs.bauer-group.com/zh/incident-response/) | 产品事件通过CRA，运营事件通过NIS2 |
| 第4项 – 供应链 | [CRA供应链](https://cra.docs.bauer-group.com/zh/supply-chain/) | 软件供应链通过CRA，服务提供商通过NIS2 |
| 第5项 – 漏洞 | [CRA漏洞管理](https://cra.docs.bauer-group.com/zh/vulnerability-management/) | 产品CVE通过CRA，基础设施CVE通过NIS2 |

## AI法案协同效应

| NIS2措施 | AI法案参考 | 协同 |
|---------|-----------|------|
| 第1项 – 风险管理 | AI法案第9条（风险管理） | NIS2 ISMS作为AI风险管理的基础 |
| 第8项 – 加密技术 | AI法案第15条（网络安全） | 加密标准也适用于AI系统 |
| 第9项 – 访问控制 | AI法案第14条（人类监督） | 访问控制作为AI监督的基础 |
