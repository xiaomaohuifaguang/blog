---
category: 
  - 操作系统
tag: 
  - 操作系统
date: 2023-05-27
author: $1x6VI
comment: true
---


# Linux

::: tip 摘要
记录linux 各分支版本 安装 使用 过程中 指令 
:::

## 文件/文件夹操作  

### 基本操作  
```shell  
# 进入指定目录
cd 路径
# 进入当前用户目录
cd ~
```

## 网络
```shell
# 查看网络信息
ifconfig
```

## SSH服务
```shell
# 开启ssh
sudo /etc/init.d/ssh start
# 或
sudo service ssh start
# 查看是否开启
ps -e | grep ssh
# 如果没有ssh 需安装
# debian/ubuntu
sudo apt install openssh-server
```

## 用户
```shell
# 修改 用户 密码 使用有管理权限的账户去修改
sudo passwd 用户名
```

## 系统信息
```shell
# 查看系统信息
cat /etc/os-release
# 查看源配置文件
cat /etc/apt/sources.list
```

## SWAP  
SWAP就是LINUX下的虚拟内存分区，它的作用是在物理内存使用完之后,将磁盘空间(也就是SWAP分区)虚拟成内存来使用  
```shell
# 关闭swap
swapoff -a #临时关闭
# 永久关闭
sudo vim /etc/fstab
# deepin debian 系统 在类似如下 修改后面为defaults,noauto 0 0 
UUID=f96e71e3-a4b7-4dbb-9576-9ef9ae498717  none  swap  defaults,noauto 0 0
# 验证 永久关闭验证需重启再执行
free -m
```