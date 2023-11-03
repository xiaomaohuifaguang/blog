import{_ as o,r as l,o as r,c as i,a,b as n,e,d as t}from"./app-1045305f.js";const p={},c=t('<h1 id="maven" tabindex="-1"><a class="header-anchor" href="#maven" aria-hidden="true">#</a> Maven</h1><div class="hint-container tip"><p class="hint-container-title">摘要</p><p>Maven 使用记录</p></div><h2 id="windows下载地址" tabindex="-1"><a class="header-anchor" href="#windows下载地址" aria-hidden="true">#</a> Windows下载地址</h2>',3),d={href:"https://maven.apache.org/download.cgi",target:"_blank",rel:"noopener noreferrer"},m={href:"https://maven.apache.org/download.cgi",target:"_blank",rel:"noopener noreferrer"},v=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#添加环境变量</span>
MAVEN_HOME	D:<span class="token punctuation">\\</span>maven<span class="token punctuation">\\</span>apache-maven-3.9.1
<span class="token environment constant">PATH</span>		%MAVEN_HOME%<span class="token punctuation">\\</span>bin
<span class="token comment">#验证</span>
mvn <span class="token parameter variable">-v</span>
<span class="token comment"># 修改conf/setting.xml</span>
<span class="token comment"># 查找 &lt;localRepository&gt;/path/to/local/repo&lt;/localRepository&gt;</span>
<span class="token comment"># 设置 仓库地址 注释打开 替换为&lt;localRepository&gt;D:\\maven\\repo&lt;/localRepository&gt;</span>
<span class="token comment"># 设置远程仓库</span>
<span class="token comment"># 查找 mirrors</span>
<span class="token comment"># 添加 </span>
 	<span class="token operator">&lt;</span><span class="token operator">!</span>-- 阿里云镜像--<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>mirror<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>id<span class="token operator">&gt;</span>alimaven<span class="token operator">&lt;</span>/id<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span>aliyun maven<span class="token operator">&lt;</span>/name<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>url<span class="token operator">&gt;</span>http://maven.aliyun.com/nexus/content/groups/public/<span class="token operator">&lt;</span>/url<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>mirrorOf<span class="token operator">&gt;</span>central<span class="token operator">&lt;</span>/mirrorOf<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>/mirror<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">!</span>-- 阿里云镜像--<span class="token operator">&gt;</span>
    
<span class="token comment"># 验证</span>
mvn help:system 
<span class="token comment"># 查看本地仓库是否有包</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="linux-安装配置" tabindex="-1"><a class="header-anchor" href="#linux-安装配置" aria-hidden="true">#</a> Linux 安装配置</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载 https://mirrors.tuna.tsinghua.edu.cn/apache/maven/maven-3/3.9.1/binaries/</span>
<span class="token function">wget</span> https://mirrors.tuna.tsinghua.edu.cn/apache/maven/maven-3/3.9.1/binaries/apache-maven-3.9.1-bin.tar.gz
<span class="token comment"># 解压</span>
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> /home/root/tar/apache-maven-3.9.1-bin.tar.gz <span class="token parameter variable">-C</span> maven/
<span class="token comment"># 环境变量</span>
<span class="token assign-left variable">MAVEN_HOME</span><span class="token operator">=</span>/usr/local/maven/apache-maven-3.9.1
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$MAVEN_HOME</span>/bin:<span class="token environment constant">$PATH</span>
<span class="token comment"># 验证</span>
mvn <span class="token parameter variable">-v</span>
mvn help:system 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function u(k,b){const s=l("ExternalLinkIcon");return r(),i("div",null,[c,a("p",null,[n("（"),a("a",d,[n("https://maven.apache.org/download.cgi"),e(s)]),n(")["),a("a",m,[n("https://maven.apache.org/download.cgi"),e(s)]),n("]")]),v])}const g=o(p,[["render",u],["__file","maven.html.vue"]]);export{g as default};
