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
article: false
timeline: false
# sidebar: "heading"
---

# Maven

::: tip 摘要
Maven 使用记录
:::

## Windows下载地址

（https://maven.apache.org/download.cgi)[https://maven.apache.org/download.cgi]

```shell
#添加环境变量
MAVEN_HOME	D:\maven\apache-maven-3.9.1
PATH		%MAVEN_HOME%\bin
#验证
mvn -v
# 修改conf/setting.xml
# 查找 <localRepository>/path/to/local/repo</localRepository>
# 设置 仓库地址 注释打开 替换为<localRepository>D:\maven\repo</localRepository>
# 设置远程仓库
# 查找 mirrors
# 添加 
 	<!-- 阿里云镜像-->
    <mirror>
        <id>alimaven</id>
        <name>aliyun maven</name>
        <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
        <mirrorOf>central</mirrorOf>
    </mirror>
    <!-- 阿里云镜像-->
    
# 验证
mvn help:system 
# 查看本地仓库是否有包
```

## Linux 安装配置

```shell
# 下载 https://mirrors.tuna.tsinghua.edu.cn/apache/maven/maven-3/3.9.1/binaries/
wget https://mirrors.tuna.tsinghua.edu.cn/apache/maven/maven-3/3.9.1/binaries/apache-maven-3.9.1-bin.tar.gz
# 解压
tar -zxvf /home/root/tar/apache-maven-3.9.1-bin.tar.gz -C maven/
# 环境变量
MAVEN_HOME=/usr/local/maven/apache-maven-3.9.1
PATH=$MAVEN_HOME/bin:$PATH
# 验证
mvn -v
mvn help:system 
```

