---
## 信息
icon: article
author: $1x6VI
isOriginal: true   # 是否原创 默认false
date: 2023-05-01    # 格式: YYYY-MM-DD 或 YYYY-MM-DD hh:mm:ss
category: 
  - 组件
tag: 
  - 安装教程
  - 使用教程
sticky: false       # 列表是否置顶 默认 false
star: false         # 是否收藏 默认 false
article: true      # 收录到文章 默认 true
timeline: true     # 是否将该文章添加至时间线中 默认 true
# sidebar: "heading"
---


# Gradle

::: tip 摘要
Gradle 使用记录
:::

## 下载地址

[https://gradle.org/releases/](https://gradle.org/releases/)

```shell
# 添加环境变量
GRADLE_HOME			D:\gradle\gradle-8.0.2
GRADLE_USER_HOME	D:\gradle\repo
PATH				D:\gradle\gradle-8.0.2\bin
# 配置镜像源
# 在gradle的init.d目录下新建init.gradle文件，加入如下配置
allprojects {
	repositories {
		mavenLocal()
		maven { name "Alibaba"; url "https://maven.aliyun.com/repository/public" }
		maven { name "Bstek"; url "https://nexus.bsdn.org/content/groups/public/" }
		mavenCentral()
	}
	buildscript {
		repositories {
			maven { name "Alibaba"; url 'https://maven.aliyun.com/repository/public' }
			maven { name "Bstek"; url 'https://nexus.bsdn.org/content/groups/public/' }
			maven { name "M2"; url 'https://plugins.gradle.org/m2/' }
		}
	}
}
# 验证
gradle -v
```

