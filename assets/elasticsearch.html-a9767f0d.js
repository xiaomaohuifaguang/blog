import{_ as t,r as i,o as r,c as o,a as s,b as n,e as a,w as p,d as c}from"./app-c3071a03.js";const d={},m=c('<h1 id="elasticsearch" tabindex="-1"><a class="header-anchor" href="#elasticsearch" aria-hidden="true">#</a> elasticsearch</h1><div class="hint-container tip"><p class="hint-container-title">摘要</p><p>elasticsearch 使用记录</p></div><h2 id="网址" tabindex="-1"><a class="header-anchor" href="#网址" aria-hidden="true">#</a> 网址</h2>',3),v={href:"https://www.elastic.co/cn/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/medcl/elasticsearch-analysis-ik/releases",target:"_blank",rel:"noopener noreferrer"},u=c(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><h3 id="centos-docker" tabindex="-1"><a class="header-anchor" href="#centos-docker" aria-hidden="true">#</a> centos docker</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># docker hub 查看 镜像 </span>
<span class="token function">docker</span> pull elasticsearch:8.7.0 <span class="token comment"># 选择的版本 最好和分词器版本对一下 es 版本迭代很快 </span>
<span class="token function">docker</span> run <span class="token parameter variable">--network</span> cat-net <span class="token parameter variable">--name</span> es8.7.0 <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">ES_JAVA_OPTS</span><span class="token operator">=</span><span class="token string">&quot;-Xms512m -Xmx512m&quot;</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;discovery.type=single-node&quot;</span> <span class="token parameter variable">-p</span> <span class="token number">9200</span>:9200 elasticsearch:8.7.0
<span class="token comment"># 浏览器访问 ip+9200 当前版本默认 https 即 https://ip:port 此时需要登录 即启动成功</span>
<span class="token comment"># 修改密码</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> es8.7.0 /bin/bash
<span class="token builtin class-name">cd</span> /usr/share/elasticsearch/bin
elasticsearch-reset-password <span class="token parameter variable">--username</span> elastic <span class="token parameter variable">-i</span> <span class="token comment"># 根据提示修改密码即可</span>
<span class="token comment"># 退出容器 exit</span>
<span class="token builtin class-name">exit</span>
<span class="token comment"># 浏览器访问 ip+9200 当前版本默认 https 即 https://ip:port  账号密码 elastic/修改的密码</span>

<span class="token comment"># 中文分词器ik</span>
<span class="token comment"># 下载 wget https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v8.7.0/elasticsearch-analysis-ik-8.7.0.zip</span>
<span class="token comment"># 复制到容器根目录下</span>
<span class="token function">docker</span> <span class="token function">cp</span> elasticsearch-analysis-ik-8.7.0.zip es8.7.0:/usr/share/elasticsearch/plugins
<span class="token comment"># 进入容器</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> es8.7.0 /bin/bash
<span class="token builtin class-name">cd</span> /usr/share/elasticsearch/plugins
<span class="token comment"># 创建插件位置目录</span>
<span class="token function">mkdir</span> /usr/share/elasticsearch/plugins/ik
<span class="token comment"># 移动到上面的文件夹中</span>
<span class="token function">mv</span> elasticsearch-analysis-ik-8.7.0.zip /usr/share/elasticsearch/plugins/ik
<span class="token builtin class-name">cd</span> ik
<span class="token function">unzip</span> elasticsearch-analysis-ik-8.7.0.zip
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> elasticsearch-analysis-ik-8.7.0.zip
<span class="token comment"># 退出容器并重启容器</span>
<span class="token builtin class-name">exit</span>
<span class="token function">docker</span> restart es8.7.0
<span class="token comment"># 安装kibana 配置遇到问题 停滞</span>
<span class="token comment"># 下载 对应版本 </span>
<span class="token function">docker</span> pull kibana:8.7.0
<span class="token comment"># 运行</span>
<span class="token function">docker</span> run <span class="token parameter variable">-itd</span> <span class="token parameter variable">--name</span> kibana8.7.0 <span class="token parameter variable">--network</span> cat-net <span class="token parameter variable">-p</span> <span class="token number">5601</span>:5601 kibana:8.7.0
<span class="token comment"># 在es 镜像中 生成链接 将链接填入kibana页面中 进行登录</span>
bin/elasticsearch-create-enrollment-token <span class="token parameter variable">--scope</span> kibana
<span class="token comment"># 生成填写验证码 进入 kibana容器中</span>
bin/kibana-verification-code
<span class="token comment"># 登录账号密码 为 es 创建是设置的</span>
<span class="token comment"># 配置中文 将容器内配置文件复制到本机</span>
<span class="token function">docker</span> <span class="token function">cp</span> kibana8.7.0:/usr/share/kibana/config/kibana.yml ./
<span class="token comment"># 编辑 vim kibana.yml 增加配置</span>
i18n.locale: <span class="token string">&quot;zh-CN&quot;</span>
<span class="token comment"># 复制回容器</span>
<span class="token function">docker</span> <span class="token function">cp</span> kibana.yml kibana8.7.0:/usr/share/kibana/config
<span class="token comment"># 重启容器</span>
<span class="token function">docker</span> restart kibana8.7.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> java</h2>`,4);function b(h,f){const e=i("ExternalLinkIcon"),l=i("RouterLink");return r(),o("div",null,[m,s("ul",null,[s("li",null,[n("官网 "),s("a",v,[n("https://www.elastic.co/cn/"),a(e)])]),s("li",null,[n("分词器ik "),s("a",k,[n("https://github.com/medcl/elasticsearch-analysis-ik/releases"),a(e)])])]),u,s("p",null,[a(l,{to:"/posts/record/java/elasticsearch.html"},{default:p(()=>[n("java中使用")]),_:1})])])}const g=t(d,[["render",b],["__file","elasticsearch.html.vue"]]);export{g as default};
