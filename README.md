# 一个博客的搭建
## 简介
> 这是一篇关于博客搭建的文章。  

## 相关网站
> [VuePress Theme Hope](https://theme-hope.vuejs.press/)开源博客主题网站内容更详细   
[gitee同步github](https://gitee.com/help/articles/4336)说明文档  
[主题部署文档](https://theme-hope.vuejs.press/zh/get-started/deploy.html)
[vuepress官方部署文档](https://vuejs.press/zh/guide/deployment.html)  
[默认GITHUB_TOKEN权限说明](https://docs.github.com/zh/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token)



## 创建项目
本文旨在搭建可访问博客，具体博客内容及样式请自行根据[VuePress Theme Hope](https://theme-hope.vuejs.press/)研究(或[其它框架](https://www.baidu.com/s?wd=开源博客框架))
- src/.vuepress/config.ts 中 base 配置 要与远程仓库项目名同名 不需要远程部署可忽略


## 部署

### 准备
1. 提交项目代码到远程仓库（github/gitee） 本文项目名称 blog  
2. 双远程仓库推荐gitee同步功能https://gitee.com/help/articles/4336
- 注意：gitee同步功能会有延迟
3. 项目里创建workflows配置文件根据vuepress官方部署文档  
- [主题部署文档](https://theme-hope.vuejs.press/zh/get-started/deploy.html)  
- [vuepress官方部署文档](https://vuejs.press/zh/guide/deployment.html)（直接看这个）  
- 需要注意在yml中 build_dir 配置是docs还是src 默认创建项目时选的博客的话应该是src看你项目中文件夹名称

### github工作流配置
1. 在yml中配置的GITHUB_TOKEN 默认值为GITHUB_TOKEN（[权限说明](https://docs.github.com/zh/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token)） 为GITHUB默认有的 其权限可在项目的  
Settings->Actions->General中配置
- 需要配置
  - 打勾 -> Workflow permissions -> Read and write permissions 
  - 打勾 -> Allow GitHub Actions to create and approve pull requests 
2. 配置Pages
- 工作流执行成功后分支会出现一个gh-pages（在yml中配置的可改）
- GITHUB配置Pages
  - Settings->Pages->Branch->选择gh-pages->Save(保存)
  - 刷新下当前页面会出现生成的博客地址  
  默认格式为https://你的账号.github.io/项目名称/

3. gitee配置Pages
- 目前gitee维护调整 记录日期 2024-06-11

## 傻瓜式部署
敬请期待