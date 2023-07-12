import{_ as e,r as i,o as t,c as r,a as n,b as l,e as c,d as s}from"./app-c3071a03.js";const p={},o=s(`<h1 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> docker</h1><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 参考 https://www.runoob.com/docker/centos-docker-install.html  </span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用记录" tabindex="-1"><a class="header-anchor" href="#使用记录" aria-hidden="true">#</a> 使用记录</h2>`,4),d={href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"},v=s(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建网络</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function k(m,u){const a=i("ExternalLinkIcon");return t(),r("div",null,[o,n("p",null,[n("a",d,[l("https://hub.docker.com/"),c(a)])]),v])}const h=e(p,[["render",k],["__file","docker.html.vue"]]);export{h as default};
