# 博客搭建指南

> 基于 VuePress Theme Hope 的静态博客项目

## 🌟 项目简介

使用 [VuePress Theme Hope](https://theme-hope.vuejs.press/) 构建的现代化技术博客，支持：
- Markdown 写作扩展
- 自动生成文档导航
- Gitalk 评论系统
- 自动部署到 GitHub Pages

## 🧰 技术栈

- 📦 VuePress 2.x
- 📜 Vue 3 + TypeScript
- 💎 Vite 构建工具
- 🌐 GitHub Actions 自动部署
- 📚 VuePress Theme Hope 主题

## 📂 项目结构
```bash
blog/
├── src/          # 博客内容源文件
│   ├── posts/    # 文章目录
│   └── config.ts # 站点配置
├── public/       # 静态资源
├── .vuepress/    # VuePress 配置
│   ├── config.ts
│   └── theme/    # 主题定制
└── README.md     # 本说明文件
```

## 🚀 使用指南

### 安装依赖
```bash
npm install
```

### 本地开发
```bash
npm run dev
```

### 构建生产
```bash
npm run build
```

### 部署到 GitHub Pages
1. 配置 `.github/workflows/deploy.yml`
2. 设置 `GITHUB_TOKEN` 权限
3. 提交代码到远程仓库

## 🌐 部署说明

### GitHub Pages 配置
1. 在项目 Settings -> Pages 中：
   - 选择 `gh-pages` 分支
   - 保存后获取部署地址
2. 访问地址格式：
   `https://<用户名>.github.io/<项目名>/`

### Gitee Pages 配置
- 当前维护中（记录时间 2026-03-21）
- 建议使用 GitHub Actions 同步部署

## 🤝 贡献指南

1. Fork 项目并创建 Feature 分支
2. 提交 PR 前确保：
   - 通过 `npm run lint` 检查
   - 更新相关文档
3. 使用 [Conventional Commits](https://conventionalcommits.org/) 规范提交

## 📄 许可证

MIT License © 2024-present 小猫会发光