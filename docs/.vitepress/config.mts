import { defineConfig } from 'vitepress'

type SidebarItem = { text?: string; link?: string; items?: SidebarItem[] }

const chineseSidebar: Record<string, SidebarItem[]> = {
      "/infrastructure/": [
            {
                  "text": "Infrastructure",
                  "link": "/infrastructure/"
            },
            {
                  "text": "资源与环境",
                  "items": [
                        {
                              "text": "基础资源清单与环境拓扑",
                              "link": "/infrastructure/01-resource-inventory"
                        }
                  ]
            },
            {
                  "text": "服务器与网络",
                  "items": [
                        {
                              "text": "Ubuntu 服务器基线",
                              "link": "/infrastructure/04-server-baseline"
                        },
                        {
                              "text": "容器镜像与运行基线",
                              "link": "/infrastructure/05-container-runtime"
                        },
                        {
                              "text": "网络、DNS、证书与 TLS",
                              "link": "/infrastructure/06-network-and-dns"
                        }
                  ]
            },
            {
                  "text": "运行保障",
                  "items": [
                        {
                              "text": "存储、备份与保留",
                              "link": "/infrastructure/08-storage-and-backup"
                        },
                        {
                              "text": "服务器监控、容量、告警与日志",
                              "link": "/infrastructure/10-infrastructure-monitoring"
                        },
                        {
                              "text": "容量规划、成本归属与资源回收",
                              "link": "/infrastructure/11-capacity-and-cost"
                        }
                  ]
            }
      ],
      "/dev/": [
            {
                  "text": "Dev",
                  "link": "/dev/"
            },
            {
                  "text": "研发平台",
                  "items": [
                        {
                              "text": "代码仓库服务、权限与仓库结构",
                              "link": "/dev/01-source-code-repositories"
                        },
                        {
                              "text": "容器镜像仓库、包仓库与构建制品",
                              "link": "/dev/02-image-and-artifact-registry"
                        },
                        {
                              "text": "开发机、IDE、命令行工具与本地环境",
                              "link": "/dev/03-developer-tools"
                        },
                        {
                              "text": "研发人员开通、变更与离职回收",
                              "link": "/dev/04-access-and-onboarding"
                        }
                  ]
            },
            {
                  "text": "共用服务与环境管理",
                  "items": [
                        {
                              "text": "共享 Nginx 网关、路由与配置发布",
                              "link": "/dev/05-nginx-gateway"
                        },
                        {
                              "text": "Dev、Test、Prod 的部署目标与访问管理",
                              "link": "/dev/06-dev-test-prod-management"
                        },
                        {
                              "text": "共享配置、密钥服务与凭据使用",
                              "link": "/dev/07-configuration-and-secrets-platform"
                        },
                        {
                              "text": "集中日志、指标、链路追踪与告警平台",
                              "link": "/dev/08-observability-platform"
                        }
                  ]
            },
            {
                  "text": "Git 与版本管理",
                  "link": "/dev/git/",
                  "items": [
                        { "text": "Quickstart", "link": "/dev/git/quickstart" },
                        { "text": "分支、Commit 与代码提交规范", "link": "/dev/git/09-git-workflow" },
                        { "text": "版本号、标签、镜像和制品追溯", "link": "/dev/git/10-version-and-artifact-policy" }
                  ]
            },
            {
                  "text": "工程协作与自动化",
                  "items": [
                        {
                              "text": "CI、集成测试与 CD 流水线",
                              "link": "/dev/11-ci-cd-platform"
                        },
                        {
                              "text": "文档即代码、知识库、模板与归档",
                              "link": "/dev/13-documentation-as-code"
                        },
                        {
                              "text": "团队职责、规范例外、评审与更新",
                              "link": "/dev/14-team-governance"
                        }
                  ]
            }
      ],
      "/app/": [
            {
                  "text": "APP：AI 研发",
                  "link": "/app/"
            },
            {
                  "text": "目标愿景",
                  "items": [
                        { "text": "借助 AI 能力推进数字化转型", "link": "/app/01-vision" }
                  ]
            },
            {
                  "text": "借助 AI 进行传统软件研发",
                  "items": [
                        { "text": "路径概览", "link": "/app/ai-assisted-development/" },
                        { "text": "身份权限与 SSO", "link": "/app/ai-assisted-development/01-identity-and-sso" },
                        { "text": "前端 Web", "link": "/app/ai-assisted-development/02-frontend-web" },
                        { "text": "后端服务", "link": "/app/ai-assisted-development/03-backend-services" },
                        { "text": "案例研究", "link": "/app/ai-assisted-development/04-case-studies" }
                  ]
            },
            {
                  "text": "Agentic Application",
                  "items": [
                        { "text": "路径概览", "link": "/app/agentic-application/" },
                        { "text": "Roadmap", "link": "/app/agentic-application/01-roadmap" },
                        { "text": "Architecture", "link": "/app/agentic-application/02-architecture" },
                        { "text": "Build", "link": "/app/agentic-application/03-build" },
                        { "text": "Runtime", "link": "/app/agentic-application/04-runtime" },
                        { "text": "Governance", "link": "/app/agentic-application/05-governance" },
                        { "text": "Optimization", "link": "/app/agentic-application/06-optimization" },
                        { "text": "Case Study", "link": "/app/agentic-application/07-case-studies" }
                  ]
            }
      ]

}

const englishLabels: Record<string, string> = {
      '资源与环境': 'Resources and Environments',
      '基础资源清单与环境拓扑': 'Resource Inventory and Environment Topology',
      '服务器与网络': 'Servers and Network',
      'Ubuntu 服务器基线': 'Ubuntu Server Baseline',
      '容器镜像与运行基线': 'Container Images and Runtime Baseline',
      '网络、DNS、证书与 TLS': 'Network, DNS, Certificates and TLS',
      '运行保障': 'Operations',
      '存储、备份与保留': 'Storage, Backup and Retention',
      '服务器监控、容量、告警与日志': 'Server Monitoring, Capacity, Alerts and Logs',
      '容量规划、成本归属与资源回收': 'Capacity, Cost Allocation and Resource Reclamation',
      '研发平台': 'Engineering Platform',
      '代码仓库服务、权限与仓库结构': 'Source Repositories, Access and Structure',
      '容器镜像仓库、包仓库与构建制品': 'Image and Package Registries and Build Artifacts',
      '开发机、IDE、命令行工具与本地环境': 'Developer Workstations, IDEs and Local Environments',
      '研发人员开通、变更与离职回收': 'Developer Access and Offboarding',
      '共用服务与环境管理': 'Shared Services and Environments',
      '共享 Nginx 网关、路由与配置发布': 'Shared Nginx Gateway and Routing',
      'Dev、Test、Prod 的部署目标与访问管理': 'Dev, Test and Prod Deployment and Access',
      '共享配置、密钥服务与凭据使用': 'Shared Configuration, Secrets and Credentials',
      '集中日志、指标、链路追踪与告警平台': 'Observability Platform',
      '工程协作与自动化': 'Engineering Collaboration and Automation',
      'Git 与版本管理': 'Git and Release Management',
      '分支、Commit 与代码提交规范': 'Branches, Commits and Contributions',
      '版本号、标签、镜像和制品追溯': 'Versions, Tags and Artifact Traceability',
      'CI、集成测试与 CD 流水线': 'CI, Integration Testing and CD',
      '文档即代码、知识库、模板与归档': 'Documentation as Code and Knowledge Base',
      '团队职责、规范例外、评审与更新': 'Team Responsibilities and Governance',
      'APP：AI 研发': 'APP: AI Development',
      '目标愿景': 'Vision',
      '借助 AI 能力推进数字化转型': 'Digital Transformation with AI',
      '借助 AI 进行传统软件研发': 'AI-Assisted Software Development',
      '路径概览': 'Overview',
      '身份权限与 SSO': 'Identity, Access and SSO',
      '前端 Web': 'Web Frontend',
      '后端服务': 'Backend Services',
      '案例研究': 'Case Studies',
}

function localizeItems(items: SidebarItem[], prefix: string, english: boolean): SidebarItem[] {
      return items.map((item) => ({
            ...item,
            text: english && item.text ? (englishLabels[item.text] ?? item.text) : item.text,
            link: item.link?.startsWith('/') ? `${prefix}${item.link}` : item.link,
            items: item.items ? localizeItems(item.items, prefix, english) : undefined,
      }))
}

function localizeSidebar(prefix: string, english: boolean): Record<string, SidebarItem[]> {
      return Object.fromEntries(
            Object.entries(chineseSidebar).map(([path, items]) => [
                  `${prefix}${path}`,
                  localizeItems(items, prefix, english),
            ]),
      )
}

export default defineConfig({
      base: '/dev-guides/',
      locales: {
            root: {
                  label: 'English',
                  lang: 'en-US',
                  title: 'Balco Development Standards',
                  description: 'Balco engineering standards and guidance',
                  themeConfig: {
                        nav: [
                              { text: 'Home', link: '/' },
                              { text: 'Infrastructure', link: '/infrastructure/' },
                              { text: 'Dev', link: '/dev/' },
                              { text: 'APP', link: '/app/' },
                        ],
                        sidebar: localizeSidebar('', true),
                        docFooter: { prev: 'Previous', next: 'Next' },
                  },
            },
            zh: {
                  label: '简体中文',
                  lang: 'zh-CN',
                  title: 'Balco 研发规范',
                  description: 'Balco 研发规范文档',
                  themeConfig: {
                        nav: [
                              { text: '首页', link: '/zh/' },
                              { text: 'Infrastructure', link: '/zh/infrastructure/' },
                              { text: 'Dev', link: '/zh/dev/' },
                              { text: 'APP', link: '/zh/app/' },
                        ],
                        sidebar: localizeSidebar('/zh', false),
                        docFooter: { prev: '上一篇', next: '下一篇' },
                        outline: { label: '本页目录' },
                        langMenuLabel: '切换语言',
                        returnToTopLabel: '返回顶部',
                        sidebarMenuLabel: '菜单',
                  },
            },
      },
      themeConfig: {
            search: {
                  provider: 'local',
                  options: {
                        locales: {
                              zh: {
                                    translations: {
                                          button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
                                          modal: { noResultsText: '没有结果' },
                                    },
                              },
                        },
                  },
            },
      },
})
