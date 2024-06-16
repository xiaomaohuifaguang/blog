# 指定基础镜像
FROM nginx:1.24.0

# 设置工作目录
WORKDIR /usr/share/nginx/html

# 自定义nginx配置
COPY nginx.conf /etc/nginx/nginx.conf

# COPY ./src/.vuepress/dist/ .

# 设置静态文件服务的端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]