# 版本号、标签、镜像和制品追溯

每次发布都必须对应一个确定的 `main` 提交，以及从该提交构建的一组制品。GitHub 保存源码、Git 标签和发布记录；ACR 保存容器镜像。仓库与权限规则见[制品仓库](/zh/dev/02-image-and-artifact-registry)。

## 版本与标签

- 使用 `v<主版本>.<次版本>[.<修订版本>][-<预发布标识>]`，例如 `v0.1`、`v1.0.2`、`v0.2.0-alpha` 或 `v5.9-beta.3`。不兼容变更提升主版本，兼容功能提升次版本，单独发布修复时增加修订版本。预发布后缀表示候选版本；正式发布时移除后缀并创建新标签。数字部分的镜像标签形式沿用[容器运行规范](/zh/infrastructure/05-container-runtime)。
- 发布分支命名为 `release/<版本号>`（例如 `release/v1.0.2`），对应的 Git 标签命名为 `<版本号>`（例如 `v1.0.2`）。发布准备期间分支可以继续变化；已发布标签不可变，且必须指向通过验证的 `main` 提交，而不是合并前的发布分支提交。已发布标签不移动、不覆盖；修正时创建新版本。

## 构建与发布

1. `main` 或 `release/*` 分支发生变更，或手动创建 Git 标签时，CI 自动打包并发布制品。如果 CI 不支持某个项目，则按照该项目的构建与发布手册手动打包并发布制品。
2. CD 将已验证制品部署到 Prod。如果 CD 尚未就绪或不支持某个项目，则严格按照该项目的部署手册手动部署该制品。
3. 在 IT Team 的 [Publication Logs](https://balcoaustralia.sharepoint.com/sites/ITTeam/Lists/Publication%20Logs/AllItems.aspx) 中创建或更新发布记录。

## 发布记录

IT Team SharePoint 站点中的 [Publication Logs](https://balcoaustralia.sharepoint.com/sites/ITTeam/Lists/Publication%20Logs/AllItems.aspx) 列表是正式发布台账。每个项目版本创建一条记录，记录以下信息：

| SharePoint 字段 | 必填信息 | 示例 |
| --- | --- | --- |
| Title | 项目名称和发布标签 | `Development Guides v0.1` |
| Git Repo | 源码仓库地址 | `https://github.com/Balco-Australia/dev-guides` |
| CI | 流水线运行链接 | `https://github.com/Balco-Australia/dev-guides/actions/runs/39519478617` |
| Commit SHA | `main` 的完整 Commit SHA | `3174ca7b5131edab6c03386fdb344712570be89f` |
| Artifact Location | 镜像仓库及摘要，或构建包位置 |  |
| Server Deployment Details | 目标服务器 | `GitHub Pages` |
| Service Deployment Details | 已发布服务 | `https://balco-australia.github.io/dev-guides/` |

发布负责人在部署后补齐部署与运行结果。回滚时使用上一已验证的制品及兼容配置。涉及不可逆数据迁移时，应在发布前写明恢复方案。生产环境或回滚计划仍引用的制品不得清理。
