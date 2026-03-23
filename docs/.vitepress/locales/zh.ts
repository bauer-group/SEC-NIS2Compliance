import type { LocaleSpecificConfig } from 'vitepress'
import type { ThemeConfig } from '../theme/types'

export const zh: LocaleSpecificConfig<ThemeConfig> & { label: string; link: string } = {
  label: '简体中文',
  lang: 'zh-CN',
  link: '/zh/',
  description: 'NIS2指令 – 合规文档 | BAUER GROUP',

  themeConfig: {
    announcement: {
      text: '本文档正在积极开发中，尚未最终定稿。',
      type: 'warning',
      dismissible: true,
    },

    nav: [
      { text: '概述', link: '/zh/overview/' },
      {
        text: '风险管理',
        items: [
          { text: '风险分析与ISMS', link: '/zh/risk-management/' },
          { text: '事件管理', link: '/zh/incident-management/' },
          { text: '业务连续性', link: '/zh/business-continuity/' },
          { text: '供应链安全', link: '/zh/supply-chain/' },
        ]
      },
      {
        text: '技术措施',
        items: [
          { text: '漏洞管理', link: '/zh/vulnerability-management/' },
          { text: '加密技术', link: '/zh/cryptography/' },
          { text: '访问控制与MFA', link: '/zh/access-control/' },
        ]
      },
      {
        text: '治理',
        items: [
          { text: '有效性审查', link: '/zh/effectiveness-review/' },
          { text: '培训与意识', link: '/zh/training/' },
          { text: '管理层职责', link: '/zh/governance/' },
        ]
      },
      { text: '合规矩阵', link: '/zh/compliance-matrix/' },
    ],

    sidebar: {
      '/zh/': [
        {
          text: '1. 概述',
          collapsed: false,
          items: [
            { text: '概述', link: '/zh/overview/' },
            { text: '监管框架', link: '/zh/overview/regulatory-framework' },
            { text: 'CRA和AI法案协同', link: '/zh/overview/synergies' },
          ]
        },
        {
          text: '2. 风险管理',
          collapsed: true,
          items: [
            { text: '概述', link: '/zh/risk-management/' },
            { text: '信息安全政策', link: '/zh/risk-management/isms-policy' },
            { text: '风险分析', link: '/zh/risk-management/risk-analysis' },
            { text: '资产清单', link: '/zh/risk-management/asset-inventory' },
          ]
        },
        {
          text: '3. 事件管理',
          collapsed: true,
          items: [
            { text: '概述', link: '/zh/incident-management/' },
            { text: '事件响应流程', link: '/zh/incident-management/response-process' },
            { text: '报告义务（§32）', link: '/zh/incident-management/reporting' },
            { text: '升级与沟通', link: '/zh/incident-management/escalation' },
          ]
        },
        {
          text: '4. 业务连续性',
          collapsed: true,
          items: [
            { text: '概述', link: '/zh/business-continuity/' },
            { text: '备份策略', link: '/zh/business-continuity/backup-strategy' },
            { text: '灾难恢复', link: '/zh/business-continuity/disaster-recovery' },
            { text: '危机管理', link: '/zh/business-continuity/crisis-management' },
          ]
        },
        {
          text: '5. 供应链安全',
          collapsed: true,
          items: [
            { text: '概述', link: '/zh/supply-chain/' },
            { text: '供应商评估', link: '/zh/supply-chain/vendor-assessment' },
            { text: '合同安全要求', link: '/zh/supply-chain/contractual-requirements' },
          ]
        },
        {
          text: '6. 漏洞管理',
          collapsed: true,
          items: [
            { text: '概述', link: '/zh/vulnerability-management/' },
            { text: '扫描与CVE监控', link: '/zh/vulnerability-management/scanning' },
            { text: '补丁管理', link: '/zh/vulnerability-management/patch-management' },
            { text: '安全开发', link: '/zh/vulnerability-management/secure-development' },
          ]
        },
        {
          text: '7. 有效性审查',
          collapsed: true,
          items: [
            { text: '概述', link: '/zh/effectiveness-review/' },
            { text: '审计计划', link: '/zh/effectiveness-review/audit-program' },
            { text: 'KPI与指标', link: '/zh/effectiveness-review/kpis' },
          ]
        },
        {
          text: '8. 培训与意识',
          collapsed: true,
          items: [
            { text: '概述', link: '/zh/training/' },
            { text: '培训计划', link: '/zh/training/training-program' },
            { text: '意识与网络卫生', link: '/zh/training/awareness' },
          ]
        },
        {
          text: '9. 加密技术',
          collapsed: true,
          items: [
            { text: '概述', link: '/zh/cryptography/' },
            { text: '加密标准', link: '/zh/cryptography/encryption-standards' },
            { text: '密钥管理', link: '/zh/cryptography/key-management' },
          ]
        },
        {
          text: '10. 访问控制',
          collapsed: true,
          items: [
            { text: '概述', link: '/zh/access-control/' },
            { text: '认证与MFA', link: '/zh/access-control/authentication' },
            { text: '授权与权限管理', link: '/zh/access-control/authorization' },
            { text: '安全通信', link: '/zh/access-control/secure-communication' },
          ]
        },
        {
          text: '11. 治理',
          collapsed: true,
          items: [
            { text: '概述', link: '/zh/governance/' },
            { text: '管理层职责（§38）', link: '/zh/governance/management-duties' },
            { text: '报告与结构', link: '/zh/governance/reporting-structure' },
          ]
        },
        {
          text: '12. 合规矩阵',
          collapsed: false,
          items: [
            { text: '要求映射', link: '/zh/compliance-matrix/' },
            { text: 'CRA和AI法案协同', link: '/zh/compliance-matrix/synergies' },
          ]
        },
      ],
    },

    editLink: {
      pattern: 'https://github.com/bauer-group/SEC-NIS2Compliance/edit/main/docs/:path',
      text: '编辑此页面'
    },
    lastUpdated: {
      text: '最后更新',
      formatOptions: { dateStyle: 'long', timeStyle: 'short' }
    },
    outline: { label: '本页内容', level: [2, 3] },
    docFooter: { prev: '上一页', next: '下一页' },
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '外观',
    langMenuLabel: '语言',

    footer: {
      message: '文档采用 <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank">CC BY-NC 4.0</a> 许可 · 代码采用 <a href="https://opensource.org/licenses/MIT" target="_blank">MIT</a> 许可',
      copyright: `© ${new Date().getFullYear()} BAUER GROUP。禁止商业使用本文档。`
    },
  }
}
