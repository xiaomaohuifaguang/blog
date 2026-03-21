---
title: Dockerfile JDK 21 镜像制作记录
date: 2026-03-21
category: DevOps
tags: [Docker, JDK, Image]
description: 自定义 JDK 21 镜像，基于 tar.gz 包打包 Docker 镜像
---

# Dockerfile JDK 21 镜像制作记录

## 🎯 场景说明

需要将自建的 JDK 21 安装包打包成 Docker 镜像，用于容器化部署。

## 📦 准备资源

### 下载 JDK 21

```bash
# 从 Oracle 官网下载
# jdk-21_linux-x64_bin.tar.gz
```

### 目录结构

```bash
jdk-image/
├── Dockerfile
└── jdk-21_linux-x64_bin.tar.gz
```

## 📝 Dockerfile 编写

```dockerfile
FROM centos:7

MAINTAINER Your Name <your@email.com>

# 设置环境变量
ENV JAVA_HOME=/opt/java/jdk-21 \
    JRE_HOME=$JAVA_HOME/jre \
    PATH=$PATH:$JAVA_HOME/bin:$JRE_HOME/bin \
    LANG=en_US.UTF-8 \
    LC_ALL=en_US.UTF-8

# 复制 JDK 包到容器
COPY jdk-21_linux-x64_bin.tar.gz /tmp/

# 解压并清理
RUN cd /opt/java && \
    tar -xzf /tmp/jdk-21_linux-x64_bin.tar.gz && \
    rm -f /tmp/jdk-21_linux-x64_bin.tar.gz && \
    chown -R root:root /opt/java && \
    ln -sfn jdk-21 /opt/java/latest && \
    echo $JAVA_HOME >> /etc/environment

# 暴露端口（可选）
EXPOSE 8080

# 默认命令
CMD ["java"]

# 健康检查
HEALTHCHECK --interval=30s --timeout=3s \
    CMD java -version || exit 1
```

## 🔨 构建镜像

```bash
# 进入项目目录
cd jdk-image/

# 构建镜像
docker build -t myjdk:21 .

# 验证构建
docker images | grep myjdk

# 运行测试
docker run --rm myjdk:21 java -version
```

## 🚀 推送镜像仓库

```bash
# 登录 Docker Hub
docker login

# 标记镜像
docker tag myjdk:21 username/myjdk:21

# 推送
docker push username/myjdk:21
```

## 💡 优化技巧

### 1. 使用多阶段构建减小体积

```dockerfile
FROM maven:3.9-eclipse-temurin-21 as build

WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

FROM openjdk:21-jre-slim

COPY --from=build /app/target/app.jar /app.jar
CMD ["java", "-jar", "/app.jar"]
```

### 2. 添加镜像标签信息

```dockerfile
LABEL maintainer="Your Name"
LABEL version="1.0"
LABEL description="Custom JDK 21 Image"
```

## ⚠️ 注意事项

1. **文件大小**：JDK 包约 300MB+，构建时间较长
2. **版本管理**：建议打具体版本号，避免使用 `latest`
3. **安全性**：定期更新基础镜像和 JDK 版本

---

::: tip 提示
生产环境建议使用官方或企业级维护的基础镜像。
:::
