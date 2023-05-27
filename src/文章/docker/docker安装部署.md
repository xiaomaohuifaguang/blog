---
category:
  - 安装部署记录
tag:
  - 容器
date: 2023-05-27
author: $1x6VI
comment: true
---


# docker安装部署

::: tip 摘要
docker安装部署
:::

# 目录
[[toc]]

## deepin 
::: danger 注意
deepin 没找到更新源 所以下面执行 不是最新版安装  
deepin 作为国产开源linux桌面已经很优秀了  
但是大环境用户数量不足，很多资料检索不到  
deepin的上行版本是debian 绝大部分使用过程可复用，其他部分也可参考  
希望有大神可以深耕吧
:::
Deepin 20.9 参考[菜鸟教程](https://www.runoob.com/docker/debian-docker-install.html)
### 自动安装   
```shell
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```
### 手动安装
```shell
# 卸载旧版本
sudo apt-get remove docker docker-engine docker.io containerd runc
# 更新 apt 包索引
sudo apt-get update
# 安装 apt 依赖包 用于通过 HTTPS 来获取仓库
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg2 \
    software-properties-common
# 添加 Docker 的官方 GPG 密钥
curl -fsSL https://mirrors.ustc.edu.cn/docker-ce/linux/debian/gpg | sudo apt-key add -
# 9DC8 5822 9FC7 DD38 854A E2D8 8D81 803C 0EBF CD88 
# 通过搜索指纹的后8个字符，验证您现在是否拥有带有指纹的密钥。
sudo apt-key fingerprint 0EBFCD88
# 更新 apt 包索引
sudo apt-get update
# 安装最新版本的 Docker Engine-Community 和 containerd 
sudo apt-get install docker-ce docker-ce-cli containerd.io
```
### 卸载
```shell
# 删除安装包
sudo apt-get purge docker-ce
# 删除镜像、容器、配置文件等内容
sudo rm -rf /var/lib/docker
```  
---

## centos

```shell
# 参考 https://www.runoob.com/docker/centos-docker-install.html  
# 卸载旧版本  
sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine  
# 安装所需的软件包  
sudo yum install -y yum-utils \
  device-mapper-persistent-data \
  lvm2
# 设置国内源地址 阿里云  
sudo yum-config-manager \
    --add-repo \
    http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
# 安装最新版  
sudo yum install docker-ce docker-ce-cli containerd.io docker-compose-plugin  
# 启动
sudo systemctl start docker
# 卸载  
yum remove docker-ce
rm -rf /var/lib/docker
```

## ubuntu  
ubuntu 22.04.2


1. 简述
  - ubuntu docker最新官方推荐 为桌面版 官网教程也为桌面版 安装
2. 参考
  - 官网安装 [https://docs.docker.com/desktop/install/ubuntu/](https://docs.docker.com/desktop/install/ubuntu/)
  - 报错 docker-desktop : Depends: docker-ce-cli but it is not installable
    - 没报错忽略
    - [https://www.saoniuhuo.com/question/detail-2306127.html](https://www.saoniuhuo.com/question/detail-2306127.html)