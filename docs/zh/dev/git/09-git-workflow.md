# 分支、Commit 与代码提交规范

Balco 使用 GitHub 进行研发协作。改动应能从需求或缺陷追溯到分支、Commit、Pull Request（PR）和发布版本。仓库权限与结构见[代码仓库规范](/zh/dev/01-source-code-repositories)。分支名参考 [Conventional Branch](https://conventionalbranch.org/) 的 `<type>/<description>` 格式，并使用下表前缀；其中 `dev/` 是 Balco 自定义扩展。

## 分支规范

| 分支 | 用途 | 合并方向 | 示例 |
| --- | --- | --- | --- |
| `main` | 受保护的集成分支和发布制品的源码来源 | 接受普通工作分支及 `release/*` 的已评审 PR | `main` |
| `dev/*` | 一般开发工作 |  | `dev/su` |
| `feat/*` | 新功能 | 从 `main` 创建，向 `main` 提 PR | `feat/report-export` |
| `hotfix/*` | 发布版本的紧急修复 | 从目标 `release/*` 创建，向该发布分支提 PR | `hotfix/security-patch` |
| `release/*` | 发布准备与稳定化，如 `release/v1.2` | 从 `main` 创建，发布修改评审后向 `main` 提 PR | `release/v1.2` |
| `ai/*` | AI 编码代理参与完成的工作 | 从 `main` 创建，向 `main` 提 PR | `ai/refactor-auth` |

斜杠后使用简短的小写描述，以连字符分隔单词，例如 `feat/report-export` 或 `ai/refactor-auth`。`dev/` 是工作分支前缀，不存在长期的 `dev` 分支。工作分支和发布分支合并后删除；继续开发时从最新 `main` 创建或同步。`main` 和活动中的 `release/*` 均受保护，不直接推送。日常流向为 **工作分支 → main**；发布修复流向为 **release/* → hotfix/* → release/* → main**。

## Commit 规范

一个 Commit 只处理一个明确目的。提交信息采用 `类型(可选范围): 简短描述`，范围可写模块或组件名称。按改动的主要目的选择类型：

| 类型 | 适用改动 | 示例 |
| --- | --- | --- |
| `feat` | 新增功能或用户可见的能力 | `feat: 增加导出功能` |
| `fix` | 修复缺陷 | `fix: 修复登录失败` |
| `docs` | 只修改文档 | `docs: 补充认证说明` |
| `refactor` | 调整代码结构，不改变外部行为 | `refactor: 拆分订单服务` |
| `test` | 新增或调整测试，不改变业务代码 | `test: 补充导出测试` |
| `perf` | 改善性能 | `perf: 减少重复查询` |
| `build` | 调整依赖、构建或打包配置 | `build: 固定 Bun 版本` |
| `ci` | 调整持续集成或部署流水线 | `ci: 增加测试步骤` |
| `chore` | 其他不影响功能的维护工作 | `chore: 更新代码所有者` |

如果改动对应 GitHub Issue，在提交信息末尾或正文写出 Issue 编号，例如 `feat: 增加导出功能 (#123)`；涉及多个 Issue 时在正文逐一列出。没有 Issue 时不必虚构编号。描述应说明实际变化，避免只写“update”“修改”或“WIP”。涉及不兼容变更时，在 Commit 正文说明影响和迁移方式。

提交前检查改动范围，不把密码、令牌、证书私钥、生产数据或包含内部信息的构建结果写入 Git 历史。发现误提交时，立即撤销凭据并按[密钥规范](/zh/dev/07-configuration-and-secrets-platform)处理；只在后续 Commit 中删除文件不足以消除历史泄露。

## 提交与评审规范

1. 开发者在工作分支完成代码、测试和相关文档，本地运行项目要求的检查，再推送并创建指向 `main` 的 PR。紧急发布修复则由 `hotfix/*` 向目标 `release/*` 提 PR。
2. PR 描述关联工作项，说明改动范围、验证结果、配置或数据迁移影响及回滚方式。界面变更附截图；API 或数据库变更附兼容性说明。
3. 作者自检并等待必需检查通过；至少一名非作者评审。关键配置、权限、基础设施和流水线改动由对应负责人评审，可用 `CODEOWNERS` 指定审阅团队。阻断意见解决后才能合并。
4. 需要发布准备时，发布负责人从 `main` 创建 `release/*`。发布修改经评审后，创建 `release/* → main` PR；合并后从合并结果对应的 `main` 提交构建并验证候选制品，再按[版本与制品追溯](./10-version-and-artifact-policy.md)发布或回滚。

GitHub Ruleset 应保护 `main` 和活动中的 `release/*`：限制直接推送，要求 PR 评审、必需状态检查和对话解决。

## TODO

- 增加图片
- 在 GitHub 为 `main` 和 `release/*` 设置分支保护规则。
