---
## 信息
icon: article
author: $1x6VI
isOriginal: true   # 是否原创 默认false
date: 2023-05-20    # 格式: YYYY-MM-DD 或 YYYY-MM-DD hh:mm:ss
category: 
  - 操作系统
tag: 
  - 安装教程
  - 使用教程
  - 操作系统
sticky: false       # 列表是否置顶 默认 false
star: false         # 是否收藏 默认 false
article: true      # 收录到文章 默认 true
timeline: true     # 是否将该文章添加至时间线中 默认 true
# sidebar: "heading"
---

# linux

::: tip 摘要
linux 使用记录 
centos 基础命令
:::

## 软件卸载

```shell
# 软件卸载 例子java
# 查询已安装的 java 意思是查询所安装的带有java的rpm软件包。
rpm -qa | grep -i java
# 去删除
rpm -qa | grep -i java | xargs -n1 rpm -e --nodeps
# 环境变量 重置生效
source /etc/profile
```

## 防火墙端口

```shell
# 查看防火墙状态
firewall-cmd --state
# 开启(关闭)防火墙
systemctl start firewalld
systemctl stop firewalld
# 查看防火墙已经开放的端口号
firewall-cmd --list-ports
# 查看指定端口是否开放
firewall-cmd --query-port=7777/tcp
# 开启指定端口
firewall-cmd --zone=public --add-port=7777/tcp --permanent
# 关闭指定端口
firewall-cmd --remove-port=7777/tcp --permanent
# 重启防火墙
firewall-cmd --reload
```

## WGET

```shell
# wget 下载慢 换下载源
cd /etc/yum.repos.d/ 
mv CentOS-Base.repo CentOS-Base.repo.back #建议备份或者改名 
wget -O CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo 
yum makecache #生成缓存
```

## 开机启动脚本配置  
```shell
# 准备脚本.sh 并赋予脚本可执行权限
chmod +x /??/??/??.sh
# 打开 /etc/rc.d/rc.local
vim /etc/rc.d/rc.local
# 末尾添加/??/??/??.sh
# 在centos7中，/etc/rc.d/rc.local的权限被降低了，所以需要执行如下命令赋予其可执行权限
chmod +x /etc/rc.d/rc.local
```


## 内存
```shell
free -m
free -h

# 清理 释放内存
echo 3 > /proc/sys/vm/drop_caches
```