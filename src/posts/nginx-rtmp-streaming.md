---
title: Nginx RTMP 模块搭建直播流服务
date: 2026-03-21
category: DevOps
tags: [Nginx, RTMP, Streaming]
description: 使用 nginx-rtmp-module 搭建直播流服务，支持 HLS/FLV 播放
---

# Nginx RTMP 模块搭建直播流服务

## 🎯 功能概述

`nginx-rtmp-module` 是一个 Nginx 的第三方模块，用于实现实时媒体流协议（RTMP、HLS、HTTP-FLV）的支持。

## 📦 安装方式

### 方式一：使用编译好的 Nginx（推荐）

```bash
# CentOS/RHEL
sudo yum install epel-release
sudo yum install nginx-rtmp-module

# Ubuntu/Debian
sudo apt-get update
sudo apt-get install nginx-extras
```

### 方式二：从源码编译

```bash
# 克隆 Nginx RTMP 模块
git clone https://github.com/arut/nginx-rtmp-module.git

# 编译 Nginx
./configure --add-module=/path/to/nginx-rtmp-module
make
sudo make install
```

## ⚙️ 配置文件示例

```nginx
# /etc/nginx/conf.d/rtmp.conf

worker_processes  1;

events {
    worker_connections  1024;
}

rtmp {
    server {
        listen 1935;
        chunk_size 4096;

        # 推流地址：rtmp://your-ip/live/stream
        application live {
            live on;
            record off;
            
            # HLS 配置
            hls on;
            hls_path /var/www/hls;
            hls_fragment 2s;
            hls_playlist_length 60s;
            
            # HTTP-FLV 配置
            push http://your-ip:8080/stream.flv;
        }
        
        # 点播应用
        application vod {
            play /var/www/flv;
        }
    }
}

http {
    server {
        listen 80;
        
        # 静态文件服务
        location /hls {
            types {
                application/vnd.apple.mpegurl m3u8;
                video/mp2t ts;
            }
            root /var/www;
            add_header Cache-Control no-cache;
        }
        
        # FLV 流访问
        location /stream.flv {
            proxy_pass http://localhost:1935;
            proxy_buffering on;
        }
    }
}
```

## ▶️ 推流客户端

### OBS Studio 配置

1. **推流地址**: `rtmp://your-server-ip/live`
2. **流名称**: `stream_key` (完整的流地址：`rtmp://ip/live/stream_key`)
3. **视频编码**: H.264
4. **音频编码**: AAC

### FFmpeg 推流

```bash
# 录制本地视频推流
ffmpeg -re -i input.mp4 -c:v libx264 -preset veryfast -b:v 2000k -maxrate 2000k \
       -bufsize 4000k -g 50 -c:a aac -b:a 128k -f flv rtmp://server/live/stream

# 推流屏幕内容
ffmpeg -f gdigrab -framerate 30 -i desktop -c:v libx264 -preset ultrafast \
       -f flv rtmp://server/live/screen
```

## 🎬 播放器集成

### HTML5 播放 HLS

```html
<!-- 需要引入 hls.js -->
<script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
<script>
  var video = document.getElementById('video');
  var hlsUrl = 'http://your-ip/hls/stream.m3u8';
  
  if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource(hlsUrl);
    hls.attachMedia(video);
  } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = hlsUrl;
  }
</script>
<video id="video" controls autoplay></video>
```

### Flash 播放器（已淘汰，仅参考）

```html
<object type="application/x-shockwave-flash" 
        data="http://your-ip/stream.flv" 
        width="640" height="480">
</object>
```

## 📊 监控与日志

```nginx
# 启用访问日志
access_log /var/log/nginx/rtmp_access.log combined;

# 错误日志
error_log /var/log/nginx/rtmp_error.log warn;

# 状态页面
location /status {
    stub_status on;
}

location /stats {
    xml on;
}
```

## 💡 常见问题

### Q1: 为什么推流失败？
- 检查防火墙是否开放 1935 端口
- 确认推流客户端配置正确

### Q2: HLS 延迟过高？
- 调整 `hls_fragment` 为更小的值（如 1-2 秒）
- 但会增大带宽消耗

### Q3: 如何防盗链？
```nginx
location /hls {
    valid_referers none blocked your-domain.com;
    if ($invalid_referer) {
        return 403;
    }
}
```

---

::: tip 提示
生产环境建议使用 CDN 加速分发，减少服务器负载。
:::
