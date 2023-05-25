--- 
author: $1x6
icon: article
isOriginal: true
date: 2023-05-20
category: 
  - 组件
tag: 
  - 安装教程
  - 使用教程
sticky: false       # 列表是否置顶 默认 false
star: false         # 是否收藏 默认 false
article: true      # 收录到文章 默认 true
timeline: true     # 是否将该文章添加至时间线中 默认 true
---

# docker  

## 安装

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

## 使用记录

[https://hub.docker.com/](https://hub.docker.com/)

```shell
# 创建网络
docker network create cat-net

# mysql
docker run -p 6101:3306 --network cat-net --name mysql8.0.23 -e MYSQL_ROOT_PASSWORD=six6 -d mysql:8.0.23 --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci

# redis
docker run -p 6201:6379 -it --network cat-net --name redis7.0.0 -d redis:7.0.0 --requirepass six6

# rabbitmq
docker run --network cat-net --name rabbitmq3.9.28 -d -p 6301:15672 -p 6302:5672 -e RABBITMQ_DEFAULT_USER=rabbitmq -e RABBITMQ_DEFAULT_PASS=rabbitmq rabbitmq:3.9.28-management

# elasticsearch
docker run --network cat-net --name elasticsearch7.17.0 -d -e ES_JAVA_OPTS="-Xms512m -Xmx512m" -e "discovery.type=single-node" -p 6401:9200 -p 9300:9300 elasticsearch:7.17.0
# 添加 ik 分词器 下载压缩包
# https://github.com/medcl/elasticsearch-analysis-ik/tags
# 上传到 docker 容器中
docker cp elasticsearch-analysis-ik-7.17.0.zip elasticsearch7.17.0:/usr/share/elasticsearch/plugins

docker exec -it elasticsearch7.17.0 /bin/bash

mkdir /usr/share/elasticsearch/plugins/ik

mv /usr/share/elasticsearch/plugins/elasticsearch-analysis-ik-7.17.0.zip /usr/share/elasticsearch/plugins/ik

cd /usr/share/elasticsearch/plugins/ik
unzip elasticsearch-analysis-ik-7.17.0.zip
rm -rf elasticsearch-analysis-ik-7.17.0.zip
exit
docker restart elasticsearch7.17.0

# kibana
docker run --network cat-net --name kibana7.17.0 -e ELASTICSEARCH_HOSTS=http://192.168.0.123:6401 -p 6501:5601 -d kibana:7.17.0

# 启动脚本
docker run mysql8.0.23
docker run redis7.0.0
docker run rabbitmq3.9.28
docker run elasticsearch7.17.0
docker run kibana7.17.0


# jenkins
docker pull jenkins/jenkins:2.402
# 加权访问容器卷映射到的宿主机文件
chown -R 1000:1000 /home/root/jenkins/jenkins_home
chown -R 1000:1000 /usr/local/maven

docker run -d --network cat-net --name jenkins -v /home/root/jenkins/jenkins_home:/var/jenkins_home  -v  /usr/local/maven:/usr/local/maven -v /soft/git/bin/git:/usr/local/git -v  /etc/localtime:/etc/localtime  -p 8080:8080   jenkins/jenkins:2.402

docker logs jenkins 
#查看密钥
cat_server-1.0.jar

echo "准备停止cat_server.jar"
pid=`ps -ef | grep cat_server.jar | grep -v grep | awk '{print $2}'`
if [ -n "$pid" ]
then
   kill -9 $pid
fi
echo "停止cat_server.jar完毕"


clean package -P prod -Dmaven.test.skip=true

# pre

BUILD_ID=DONTKILLME
echo "移动jar包到/var/jenkins_home/cat/cat_server,并去掉版本号名称"
if [ ! -d "/var/jenkins_home/cat/cat_server" ];then
  mkdir /var/jenkins_home/cat/cat_server
  else
  echo "文件夹已经存在"
fi

if [ ! -f "/var/jenkins_home/cat/cat_server/cat_server.jar" ];then
  echo "文件不存在"
  else
  rm -f /var/jenkins_home/cat/cat_server/cat_server.jar
fi

# post
mv -f /var/jenkins_home/workspace/cat_server/target/cat_server-1.0.jar /var/jenkins_home/cat/cat_server/cat_server.jar
echo "移动jar包完成"

echo "启动cat_server服务"
nohup java -jar /home/root/jenkins/jenkins_home/cat/cat_server/cat_server.jar --server.port=7777> /home/root/jenkins/jenkins_home/cat/cat_server/server.log 2>&1 &
echo "启动cat_server服务完成"

nohup /home/root/jdk/jdk-17.0.7/bin/java -jar /home/root/jenkins/jenkins_home/cat/cat_server/cat_server.jar --server.port=7777> /home/root/jenkins/jenkins_home/cat/cat_server/server.log 2>&1 &

# 日志持续输出
docker logs -f mysql
```