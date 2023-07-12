import{_ as e,r as i,o as t,c,a as n,b as l,e as p,d as s}from"./app-c3071a03.js";const r={},o=s(`<h1 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> docker</h1><div class="hint-container tip"><p class="hint-container-title">摘要</p><p>docker 使用记录</p></div><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 参考 https://www.runoob.com/docker/centos-docker-install.html  </span>
<span class="token comment"># 卸载旧版本  </span>
<span class="token function">sudo</span> yum remove <span class="token function">docker</span> <span class="token punctuation">\\</span>
                  docker-client <span class="token punctuation">\\</span>
                  docker-client-latest <span class="token punctuation">\\</span>
                  docker-common <span class="token punctuation">\\</span>
                  docker-latest <span class="token punctuation">\\</span>
                  docker-latest-logrotate <span class="token punctuation">\\</span>
                  docker-logrotate <span class="token punctuation">\\</span>
                  docker-engine  
<span class="token comment"># 安装所需的软件包  </span>
<span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils <span class="token punctuation">\\</span>
  device-mapper-persistent-data <span class="token punctuation">\\</span>
  lvm2
<span class="token comment"># 设置国内源地址 阿里云  </span>
<span class="token function">sudo</span> yum-config-manager <span class="token punctuation">\\</span>
    --add-repo <span class="token punctuation">\\</span>
    http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
<span class="token comment"># 安装最新版  </span>
<span class="token function">sudo</span> yum <span class="token function">install</span> docker-ce docker-ce-cli containerd.io docker-compose-plugin  
<span class="token comment"># 启动</span>
<span class="token function">sudo</span> systemctl start <span class="token function">docker</span>
<span class="token comment"># 卸载  </span>
yum remove docker-ce
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/docker

<span class="token comment">## deepin/ubuntu 安装</span>
<span class="token comment"># 卸载</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> remove <span class="token function">docker</span> docker-engine docker.io containerd runc
<span class="token comment"># 更新 apt 包索引</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token comment"># 安装 apt 依赖包，用于通过HTTPS来获取仓库:</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token punctuation">\\</span>
    apt-transport-https <span class="token punctuation">\\</span>
    ca-certificates <span class="token punctuation">\\</span>
    <span class="token function">curl</span> <span class="token punctuation">\\</span>
    gnupg-agent <span class="token punctuation">\\</span>
    software-properties-common

<span class="token comment"># 添加 Docker 的官方 GPG 密钥：</span>
<span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://mirrors.ustc.edu.cn/docker-ce/linux/ubuntu/gpg <span class="token operator">|</span> <span class="token function">sudo</span> apt-key <span class="token function">add</span> -
<span class="token comment"># 9DC8 5822 9FC7 DD38 854A E2D8 8D81 803C 0EBF CD88 通过搜索指纹的后8个字符，验证您现在是否拥有带有指纹的密钥</span>
<span class="token function">sudo</span> apt-key fingerprint 0EBFCD88
<span class="token comment"># 使用以下指令设置稳定版仓库</span>
<span class="token function">sudo</span> add-apt-repository <span class="token punctuation">\\</span>
   <span class="token string">&quot;deb [arch=amd64] https://mirrors.ustc.edu.cn/docker-ce/linux/ubuntu/ \\
  <span class="token variable"><span class="token variable">$(</span>lsb_release <span class="token parameter variable">-cs</span><span class="token variable">)</span></span> \\
  stable&quot;</span>

<span class="token comment"># 上一步如果报错执行下面两步 没报错忽略</span>
<span class="token function">sudo</span> <span class="token function">vim</span> /etc/apt/sources.list
<span class="token comment"># 添加</span>
deb <span class="token punctuation">[</span>arch<span class="token operator">=</span>amd64<span class="token punctuation">]</span> https://download.docker.com/linux/debian stretch stable


<span class="token comment"># 更新 apt 包索引。</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token comment"># 安装最新版本的 Docker Engine-Community 和 containerd ，或者转到下一步安装特定版本：</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> docker-ce docker-ce-cli containerd.io

<span class="token comment"># 查看版本</span>
<span class="token function">sudo</span> <span class="token function">docker</span> version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用记录" tabindex="-1"><a class="header-anchor" href="#使用记录" aria-hidden="true">#</a> 使用记录</h2>`,5),d={href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"},v=s(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建网络</span>
<span class="token function">docker</span> network create cat-net

<span class="token comment"># mysql</span>
<span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">6101</span>:3306 <span class="token parameter variable">--network</span> cat-net <span class="token parameter variable">--name</span> mysql8.0.23 <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>six6 <span class="token parameter variable">-d</span> mysql:8.0.23 --character-set-server<span class="token operator">=</span>utf8mb4 --collation-server<span class="token operator">=</span>utf8mb4_unicode_ci

<span class="token comment"># redis</span>
<span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">6201</span>:6379 <span class="token parameter variable">-it</span> <span class="token parameter variable">--network</span> cat-net <span class="token parameter variable">--name</span> redis7.0.0 <span class="token parameter variable">-d</span> redis:7.0.0 <span class="token parameter variable">--requirepass</span> six6

<span class="token comment"># rabbitmq</span>
<span class="token function">docker</span> run <span class="token parameter variable">--network</span> cat-net <span class="token parameter variable">--name</span> rabbitmq3.9.28 <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">6301</span>:15672 <span class="token parameter variable">-p</span> <span class="token number">6302</span>:5672 <span class="token parameter variable">-e</span> <span class="token assign-left variable">RABBITMQ_DEFAULT_USER</span><span class="token operator">=</span>rabbitmq <span class="token parameter variable">-e</span> <span class="token assign-left variable">RABBITMQ_DEFAULT_PASS</span><span class="token operator">=</span>rabbitmq rabbitmq:3.9.28-management

<span class="token comment"># elasticsearch</span>
<span class="token function">docker</span> run <span class="token parameter variable">--network</span> cat-net <span class="token parameter variable">--name</span> elasticsearch7.17.0 <span class="token parameter variable">-d</span> <span class="token parameter variable">-e</span> <span class="token assign-left variable">ES_JAVA_OPTS</span><span class="token operator">=</span><span class="token string">&quot;-Xms512m -Xmx512m&quot;</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;discovery.type=single-node&quot;</span> <span class="token parameter variable">-p</span> <span class="token number">6401</span>:9200 <span class="token parameter variable">-p</span> <span class="token number">9300</span>:9300 elasticsearch:7.17.0
<span class="token comment"># 添加 ik 分词器 下载压缩包</span>
<span class="token comment"># https://github.com/medcl/elasticsearch-analysis-ik/tags</span>
<span class="token comment"># 上传到 docker 容器中</span>
<span class="token function">docker</span> <span class="token function">cp</span> elasticsearch-analysis-ik-7.17.0.zip elasticsearch7.17.0:/usr/share/elasticsearch/plugins

<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> elasticsearch7.17.0 /bin/bash

<span class="token function">mkdir</span> /usr/share/elasticsearch/plugins/ik

<span class="token function">mv</span> /usr/share/elasticsearch/plugins/elasticsearch-analysis-ik-7.17.0.zip /usr/share/elasticsearch/plugins/ik

<span class="token builtin class-name">cd</span> /usr/share/elasticsearch/plugins/ik
<span class="token function">unzip</span> elasticsearch-analysis-ik-7.17.0.zip
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> elasticsearch-analysis-ik-7.17.0.zip
<span class="token builtin class-name">exit</span>
<span class="token function">docker</span> restart elasticsearch7.17.0

<span class="token comment"># kibana</span>
<span class="token function">docker</span> run <span class="token parameter variable">--network</span> cat-net <span class="token parameter variable">--name</span> kibana7.17.0 <span class="token parameter variable">-e</span> <span class="token assign-left variable">ELASTICSEARCH_HOSTS</span><span class="token operator">=</span>http://192.168.0.123:6401 <span class="token parameter variable">-p</span> <span class="token number">6501</span>:5601 <span class="token parameter variable">-d</span> kibana:7.17.0

<span class="token comment"># 启动脚本</span>
<span class="token function">docker</span> run mysql8.0.23
<span class="token function">docker</span> run redis7.0.0
<span class="token function">docker</span> run rabbitmq3.9.28
<span class="token function">docker</span> run elasticsearch7.17.0
<span class="token function">docker</span> run kibana7.17.0


<span class="token comment"># jenkins</span>
<span class="token function">docker</span> pull jenkins/jenkins:2.402
<span class="token comment"># 加权访问容器卷映射到的宿主机文件</span>
<span class="token function">chown</span> <span class="token parameter variable">-R</span> <span class="token number">1000</span>:1000 /home/root/jenkins/jenkins_home
<span class="token function">chown</span> <span class="token parameter variable">-R</span> <span class="token number">1000</span>:1000 /usr/local/maven

<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--network</span> cat-net <span class="token parameter variable">--name</span> jenkins <span class="token parameter variable">-v</span> /home/root/jenkins/jenkins_home:/var/jenkins_home  <span class="token parameter variable">-v</span>  /usr/local/maven:/usr/local/maven <span class="token parameter variable">-v</span> /soft/git/bin/git:/usr/local/git <span class="token parameter variable">-v</span>  /etc/localtime:/etc/localtime  <span class="token parameter variable">-p</span> <span class="token number">8080</span>:8080   jenkins/jenkins:2.402

<span class="token function">docker</span> logs jenkins 
<span class="token comment">#查看密钥</span>
cat_server-1.0.jar

<span class="token builtin class-name">echo</span> <span class="token string">&quot;准备停止cat_server.jar&quot;</span>
<span class="token assign-left variable">pid</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> cat_server.jar <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">\`</span></span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$pid</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
   <span class="token function">kill</span> <span class="token parameter variable">-9</span> <span class="token variable">$pid</span>
<span class="token keyword">fi</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;停止cat_server.jar完毕&quot;</span>


clean package <span class="token parameter variable">-P</span> prod <span class="token parameter variable">-Dmaven.test.skip</span><span class="token operator">=</span>true

<span class="token comment"># pre</span>

<span class="token assign-left variable">BUILD_ID</span><span class="token operator">=</span>DONTKILLME
<span class="token builtin class-name">echo</span> <span class="token string">&quot;移动jar包到/var/jenkins_home/cat/cat_server,并去掉版本号名称&quot;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;/var/jenkins_home/cat/cat_server&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
  <span class="token function">mkdir</span> /var/jenkins_home/cat/cat_server
  <span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;文件夹已经存在&quot;</span>
<span class="token keyword">fi</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;/var/jenkins_home/cat/cat_server/cat_server.jar&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;文件不存在&quot;</span>
  <span class="token keyword">else</span>
  <span class="token function">rm</span> <span class="token parameter variable">-f</span> /var/jenkins_home/cat/cat_server/cat_server.jar
<span class="token keyword">fi</span>

<span class="token comment"># post</span>
<span class="token function">mv</span> <span class="token parameter variable">-f</span> /var/jenkins_home/workspace/cat_server/target/cat_server-1.0.jar /var/jenkins_home/cat/cat_server/cat_server.jar
<span class="token builtin class-name">echo</span> <span class="token string">&quot;移动jar包完成&quot;</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;启动cat_server服务&quot;</span>
<span class="token function">nohup</span> <span class="token function">java</span> <span class="token parameter variable">-jar</span> /home/root/jenkins/jenkins_home/cat/cat_server/cat_server.jar <span class="token parameter variable">--server.port</span><span class="token operator">=</span><span class="token number">777</span><span class="token operator"><span class="token file-descriptor important">7</span>&gt;</span> /home/root/jenkins/jenkins_home/cat/cat_server/server.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;启动cat_server服务完成&quot;</span>

<span class="token function">nohup</span> /home/root/jdk/jdk-17.0.7/bin/java <span class="token parameter variable">-jar</span> /home/root/jenkins/jenkins_home/cat/cat_server/cat_server.jar <span class="token parameter variable">--server.port</span><span class="token operator">=</span><span class="token number">777</span><span class="token operator"><span class="token file-descriptor important">7</span>&gt;</span> /home/root/jenkins/jenkins_home/cat/cat_server/server.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>

<span class="token comment"># 日志持续输出</span>
<span class="token function">docker</span> logs <span class="token parameter variable">-f</span> mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="windows-docker-wsl-配置存储位置" tabindex="-1"><a class="header-anchor" href="#windows-docker-wsl-配置存储位置" aria-hidden="true">#</a> windows docker wsl 配置存储位置</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看信息</span>
wsl <span class="token parameter variable">-l</span> <span class="token parameter variable">-v</span> <span class="token parameter variable">--all</span>
<span class="token comment"># 退出windows docker 再次查看 状态为stopped 开始下一步</span>
<span class="token comment"># 到处当前存储信息 d:\\docker 自己创建</span>
wsl <span class="token parameter variable">--export</span> docker-desktop d:<span class="token punctuation">\\</span>docker<span class="token punctuation">\\</span>docker-desktop.tar
wsl <span class="token parameter variable">--export</span> docker-desktop-data d:<span class="token punctuation">\\</span>docker<span class="token punctuation">\\</span>docker-desktop-data.tar
<span class="token comment"># 注销当前存储</span>
wsl <span class="token parameter variable">--unregister</span> docker-desktop
wsl <span class="token parameter variable">--unregister</span> docker-desktop-data
<span class="token comment"># 新建两个文件夹 docker-desktop 和 docker-desktop-data  重新导入</span>
wsl <span class="token parameter variable">--import</span> docker-desktop D:<span class="token punctuation">\\</span>docker<span class="token punctuation">\\</span>docker-desktop D:<span class="token punctuation">\\</span>docker<span class="token punctuation">\\</span>docker-desktop.tar <span class="token parameter variable">--version</span> <span class="token number">2</span>
wsl <span class="token parameter variable">--import</span> docker-desktop-data D:<span class="token punctuation">\\</span>docker<span class="token punctuation">\\</span>docker-desktop-data D:<span class="token punctuation">\\</span>docker<span class="token punctuation">\\</span>docker-desktop-data.tar <span class="token parameter variable">--version</span> <span class="token number">2</span>
<span class="token comment"># 验证 查看是否存在 wsl -l -v --all</span>
<span class="token comment"># 再次启动docker即可</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dockerfile" tabindex="-1"><a class="header-anchor" href="#dockerfile" aria-hidden="true">#</a> Dockerfile</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建一个文件夹 当前文件夹 为工作空间 创建文件名称为 Dockerfile 注意： Dockerfile 无后缀</span>
<span class="token function">mkdir</span> <span class="token builtin class-name">test</span>
<span class="token builtin class-name">cd</span> <span class="token builtin class-name">test</span>
<span class="token function">touch</span> Dockerfile
<span class="token comment"># 内容写完后执行</span>
<span class="token comment"># 当前工作文件夹下 image_name 自己要生成的镜像名称 tag 版本信息 注意 末尾的.</span>
<span class="token function">docker</span> build <span class="token parameter variable">-t</span> image_name:tag <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dockerfile样例" tabindex="-1"><a class="header-anchor" href="#dockerfile样例" aria-hidden="true">#</a> Dockerfile样例</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>FROM centos:centos7.9.2009
<span class="token comment"># 工作目录 类似于cd</span>
WORKDIR /
<span class="token comment"># 创建时执行 即 docker build 同一空间内 尽量用一个 RUN 执行 多个命令 可用 &amp;&amp; 连接 如 RUN mkdir test1.txt &amp;&amp; mkdir /home/test2.txt</span>
RUN <span class="token function">mkdir</span> test.txt
WORKDIR /
<span class="token comment"># 运行时执行 即 docker run</span>
CMD <span class="token function">ping</span> baidu.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="打包-容器-镜像" tabindex="-1"><a class="header-anchor" href="#打包-容器-镜像" aria-hidden="true">#</a> 打包 容器/镜像</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 打包最终的仍是镜像 所以 容器打包需要先生成镜像</span>
<span class="token comment"># 容器生成镜像</span>
<span class="token function">docker</span> commit <span class="token builtin class-name">test</span> test:v2
<span class="token comment"># 打包镜像并输出位置</span>
<span class="token function">docker</span> save test:v2 <span class="token parameter variable">-o</span> D:<span class="token punctuation">\\</span>docker<span class="token punctuation">\\</span>Dockerfile<span class="token punctuation">\\</span>test<span class="token punctuation">\\</span>testv2.tar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function u(m,k){const a=i("ExternalLinkIcon");return t(),c("div",null,[o,n("p",null,[n("a",d,[l("https://hub.docker.com/"),p(a)])]),v])}const h=e(r,[["render",u],["__file","docker.html.vue"]]);export{h as default};
