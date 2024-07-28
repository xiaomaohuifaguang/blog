---
title: Dockerfile使用记录
shortTitle: Dockerfile
icon: note-sticky
isOriginal: true # 非必填 是否原创
date: 2024-06-29 # 非必填 写作时间
order: 2
category:
  - 学习记录
tag:
  - docker
  - 使用记录
feed: 
  - title: Dockerfile使用记录
---

# Dockerfile使用记录

## jdk镜像
- 准备jdk-21_linux-x64_bin.tar.gz
```shell
FROM centos:centos7.9.2009
#时区设置及中文字符集配置
RUN yum update -y \
    && ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
    && yum -y install kde-l10n-Chinese \
    && localedef -c -f UTF-8 -i zh_CN zh_CN.utf8 \
    && yum clean all
#复制jdk
ADD jdk-21_linux-x64_bin.tar.gz /usr/local/

#设置中文字符集
ENV LC_ALL zh_CN.utf8

#配置Java环境变量
ENV JAVA_HOME="/usr/local/jdk-21.0.3"
ENV PATH="${PATH}:${JAVA_HOME}/bin"
```
### 制作镜像
```shell
docker build --no-cache -t catjdk:21.0.3 .
```
### 保存镜像
```shell
docker save -o catjdk-21.0.3.tar catjdk:21.0.3
```
### 加载镜像
```shell
docker load -i catjdk-21.0.3.tar
```