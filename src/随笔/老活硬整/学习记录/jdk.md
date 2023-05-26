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
  - 环境变量
sticky: false       # 列表是否置顶 默认 false
star: false         # 是否收藏 默认 false
article: false
timeline: false
# sidebar: "heading"
---

# Java

::: tip 摘要
jdk安装记录
:::


## 下载地址
https://www.oracle.com/java/technologies/downloads/

## windows 配置环境变量

```shell
JAVA _HOME	D:\JDK\jdk-17.0.7
PATH		%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin;
CLASSPATH	.;%JAVA_HOME%\lib;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar

# 验证 cmd
java -version
```
## Linux 安装配置环境变量

```shell
# 解压
tar -zxvf jdk-17_linux-x64_bin.tar.gz -C ../jdk
# 卸载原有jdk 查看linux 卸载已安装软件
# 配置环境变量
vim /etc/profile
# 结尾添加
JAVA_HOME=/home/root/jdk/jdk-17.0.7
CLASSPATH=.:$JAVA_HOME/jre/lib/ext:$JAVA_HOME/lib/tools.jar
PATH=$JAVA_HOME/bin:$PATH
export PATH JAVA_HOME CLASSPATH
# 配置生效
source /etc/profile
# 验证
java -version
```

