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
推荐使用具有管理员权限的普通账户安装
:::

# 目录
[[toc]]

## 官网
- [https://docs.docker.com/](https://docs.docker.com/)


## centos  
1. [官网文档](https://docs.docker.com/engine/install/centos/)  
2. 建议用有管理员权限的用户操作 建议不要直接用root
3. 安装过程
```shell
# 卸载旧版本旧版本的Docker被命名为dockerordocker-engine，
# 在尝试安装新版本之前卸载任何旧版本，以及相关的依赖项。
sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine

# 安装yum-utils包(它提供yum-config-manager实用程序)
sudo yum install -y yum-utils
# 设置存储库 选择一个 国内推荐阿里云的
# 官方存储库
sudo yum-config-manager --add-repo \
https://download.docker.com/linux/centos/docker-ce.repo
# 阿里云存储库
sudo yum-config-manager --add-repo \
http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

# 安装最新版
sudo yum install docker-ce \
docker-ce-cli containerd.io \
docker-buildx-plugin \
docker-compose-plugin

# 测试验证
sudo docker --version

# 启动docker
sudo systemctl start docker

# 卸载
sudo yum remove docker-ce docker-ce-cli \
containerd.io docker-buildx-plugin \
docker-compose-plugin docker-ce-rootless-extras
# 主机上的映像、容器、卷或自定义配置文件不会自动删除。
# 删除所有镜像、容器和卷。
sudo rm -rf /var/lib/docker
sudo rm -rf /var/lib/containerd
```



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


## ubuntu  
ubuntu 22.04.2


1. 简述
  - ubuntu docker最新官方推荐 为桌面版
  - ubuntu 服务安装 非桌面版 [https://docs.docker.com/engine/install/ubuntu/](https://docs.docker.com/engine/install/ubuntu/)
2. 参考
  - 官网安装 [https://docs.docker.com/desktop/install/ubuntu/](https://docs.docker.com/desktop/install/ubuntu/)
  - 报错 docker-desktop : Depends: docker-ce-cli but it is not installable
    - 没报错忽略
    - [https://www.saoniuhuo.com/question/detail-2306127.html](https://www.saoniuhuo.com/question/detail-2306127.html)

## docker镜像加速  
- docker拉去镜像慢可以设置国内镜像
- 获取镜像地址
  - 阿里云[https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors](https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors)
  - 注册登录或登录
  - 可以看到镜像地址下面也有对应教程
- 过程
```shell
# centos
sudo mkdir -p /etc/docker

sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["你的地址"]
}
EOF

sudo systemctl daemon-reload

sudo systemctl restart docker

# 验证
sudo docker info # 返回信息如下
# Registry Mirrors:
#  你的地址
# Live Restore Enabled: false
```