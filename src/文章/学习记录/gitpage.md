---
icon: article
author: $1x6VI
isOriginal: true   # 是否原创 默认false
date: 2023-05-26   # 格式: YYYY-MM-DD 或 YYYY-MM-DD hh:mm:ss
category: 
  - 组件
tag: 
  - 部署
  - gitpage
---

# gitpage

## github 部署 page  

1. 生成个人令牌
    - github -> setting -> Developer settings -> Personal access tokens -> Token(classic)  
    - 选择 Generate new token -> Generate new token(classic)
    - Note:起一个别名
    - Expiration:令牌过期时间 注：长一点好，但不要永久
    - 勾选 repo里全部 和 workflow
    - 拉到最下边 -> 点击 Generate token
    - 复制令牌
2. 配置仓库Actions令牌
    - 进入代码仓库 -> Settings -> Secrets and variables -> Actions
    - 点击 New repository secret
    - Name: 名称 注意：不要起名 GITHUB_TOKEN 
    - Secret: 粘贴刚才的令牌进去
    - 点击 Add secret
3. 配置代码workflow
    - 替换GITHUB_TOKEN 其中 secrets.GITHUB_TOKEN 替换为第二步在仓库中配置的名称