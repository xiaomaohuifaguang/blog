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

# Nginx

::: tip 摘要
Nginx 使用记录
:::

## 下载地址

[http://nginx.org/en/download.html](http://nginx.org/en/download.html)

## Linux 

```shell
# 安装依赖
yum -y install gcc gcc-c++ make libtool zlib zlib-devel openssl openssl-devel pcre pcre-devel
#下载
wget http://nginx.org/download/nginx-1.24.0.tar.gz
# 配置安装路径
./configure --prefix=/usr/local/nginx --with-http_stub_status_module --with-http_ssl_module
# 编译安装
make
make install
# 验证 编译
/usr/local/nginx/sbin/nginx -t
# 启动
/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf
# 停止
/usr/local/nginx/sbin/nginx -s stop
```

