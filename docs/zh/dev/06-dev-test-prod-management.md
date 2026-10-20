# Dev、Test、Prod 的部署目标与访问管理

Dev、Test、Prod 是**应用部署环境**，不能只靠 Git 分支名称区分。每个环境要有独立的部署目标、配置、身份授权和数据源；候选制品通过 Test 验证后，以同一制品部署到 Prod。基础资源和服务器归属见[资源清单](/zh/infrastructure/01-resource-inventory)。

## 环境用途

| 环境 | 用途 | 访问者 | 数据 | 发布入口 |
| --- | --- | --- | --- | --- |
| Dev | 日常开发、联调 | 项目开发者 | 合成或脱敏数据 | 自动或按需部署 |
| Test | 集成、回归和业务验收 | 测试与业务验收人员 | 专用测试数据 | 从通过 CI 的版本部署 |
| Prod | 正式业务运行 | 获授权的业务用户 | 正式数据 | 审批后的发布流水线 |

环境配置包含站点/API 地址、Entra 应用注册、Graph 权限、SharePoint 站点或数据库、日志工作区和告警接收人。Dev/Test 不直连 Prod 数据；必须使用真实数据时，先完成脱敏和审批。

## GitHub 与 Azure 的绑定

- GitHub 建立 `dev`、`test`、`prod` Environments；各自绑定允许部署的分支或标签、目标 Azure 资源与必要审批。
- CI 执行快速质量检查；集成测试流水线从 `main` 构建候选制品并在 Test 验证。通过后，CD 将同一制品部署到 Prod，不在生产环境重新构建。构建记录包含 Git 提交、运行编号和镜像或包的摘要。
- 部署身份按环境分离。Dev 身份不能部署 Prod，生产身份只通过受保护的工作流使用。优先采用 GitHub OIDC 与 Azure 联合身份，减少长期密钥。[GitHub 官方指南](https://docs.github.com/en/actions/how-tos/secure-your-work/security-harden-deployments/oidc-in-azure)说明了 Azure OIDC 与环境保护规则。
- Prod 发布需要应用负责人批准，部署后执行健康检查和关键业务验证；失败使用上一个已验证制品回滚。

## TODO

有待真实项目实践验证
