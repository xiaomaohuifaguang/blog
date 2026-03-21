---
title: Docker 安装与使用记录
date: 2026-03-21
category: DevOps
tags: [Docker, DevOps]
description: CentOS/Ubuntu 环境下的 Docker 安装步骤及使用记录
---

# Docker 安装与使用记录

## 🐳 CentOS/RHEL 安装步骤

### 1. 卸载旧版本

```bash
sudo yum remove docker \
                 docker-client \
                 docker-client-latest \
                 docker-common \
                 docker-latest \
                 docker-latest-logrotate \
                 docker-logrotate \
                 docker-engine
```

### 2. 安装所需软件包

```bash
sudo yum install -y yum-utils \
                    device-mapper-persistent-data \
                    lvm2
```

### 3. 设置国内源（阿里云）

```bash
sudo yum-config-manager \
    --add-repo \
    http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

### 4. 安装最新版

```bash
sudo yum install docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

### 5. 启动并开机自启

```bash
sudo systemctl start docker
sudo systemctl enable docker
```

### 6. 验证安装

```bash
docker version
docker info
```

## 🐧 Ubuntu/Debian 安装步骤

### 1. 卸载旧版本

```bash
sudo apt-get remove docker docker-engine docker.io containerd runc
```

### 2. 更新包索引并安装依赖

```bash
sudo apt-get update

sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common
```

### 3. 添加官方 GPG 密钥

```bash
curl -fsSL https://mirrors.ustc.edu.cn/docker-ce/linux/ubuntu/gpg | sudo apt-key add -
# 指纹验证：9DC8 5822 9FC7 DD38 854A E2D8 8D81 803C 0EBF CD88
```

### 4. 添加稳定版仓库

```bash
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```

### 5. 安装 Docker Engine

```bash
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io
```

### 6. 测试运行 hello-world

```bash
sudo docker run hello-world
```

## ⚡ 常用命令速查

| 命令 | 说明 |
|------|------|
| `docker ps` | 查看运行的容器 |
| `docker images` | 查看本地镜像 |
| `docker pull nginx` | 拉取镜像 |
| `docker run -d -p 80:80 nginx` | 后台运行容器 |
| `docker build -t myapp .` | 构建镜像 |
| `docker stop <container>` | 停止容器 |
| `docker rm <container>` | 删除容器 |
| `docker rmi <image>` | 删除镜像 |

## 💡 国内镜像加速配置

编辑 `/etc/docker/daemon.json`：

```json
{
  "registry-mirrors": [
    "https://docker.mirrors.ustc.edu.cn",
    "https://hub-mirror.c.163.com"
  ]
}
```

重启 Docker：

```bash
sudo systemctl daemon-reload
sudo systemctl restart docker
```

---

::: tip 提示
参考文档：[Runoob Docker 安装教程](https://www.runoob.com/docker/centos-docker-install.html)
:::
