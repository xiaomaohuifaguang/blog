import{_ as t,r as e,o as i,c as p,a as n,b as o,e as l,d as s}from"./app-c3071a03.js";const c={},u=s('<h1 id="gradle" tabindex="-1"><a class="header-anchor" href="#gradle" aria-hidden="true">#</a> Gradle</h1><div class="hint-container tip"><p class="hint-container-title">摘要</p><p>Gradle 使用记录</p></div><h2 id="下载地址" tabindex="-1"><a class="header-anchor" href="#下载地址" aria-hidden="true">#</a> 下载地址</h2>',3),r={href:"https://gradle.org/releases/",target:"_blank",rel:"noopener noreferrer"},d=s(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 添加环境变量</span>
GRADLE_HOME			D:<span class="token punctuation">\\</span>gradle<span class="token punctuation">\\</span>gradle-8.0.2
GRADLE_USER_HOME	D:<span class="token punctuation">\\</span>gradle<span class="token punctuation">\\</span>repo
<span class="token environment constant">PATH</span>				D:<span class="token punctuation">\\</span>gradle<span class="token punctuation">\\</span>gradle-8.0.2<span class="token punctuation">\\</span>bin
<span class="token comment"># 配置镜像源</span>
<span class="token comment"># 在gradle的init.d目录下新建init.gradle文件，加入如下配置</span>
allprojects <span class="token punctuation">{</span>
	repositories <span class="token punctuation">{</span>
		mavenLocal<span class="token punctuation">(</span><span class="token punctuation">)</span>
		maven <span class="token punctuation">{</span> name <span class="token string">&quot;Alibaba&quot;</span><span class="token punctuation">;</span> url <span class="token string">&quot;https://maven.aliyun.com/repository/public&quot;</span> <span class="token punctuation">}</span>
		maven <span class="token punctuation">{</span> name <span class="token string">&quot;Bstek&quot;</span><span class="token punctuation">;</span> url <span class="token string">&quot;https://nexus.bsdn.org/content/groups/public/&quot;</span> <span class="token punctuation">}</span>
		mavenCentral<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	buildscript <span class="token punctuation">{</span>
		repositories <span class="token punctuation">{</span>
			maven <span class="token punctuation">{</span> name <span class="token string">&quot;Alibaba&quot;</span><span class="token punctuation">;</span> url <span class="token string">&#39;https://maven.aliyun.com/repository/public&#39;</span> <span class="token punctuation">}</span>
			maven <span class="token punctuation">{</span> name <span class="token string">&quot;Bstek&quot;</span><span class="token punctuation">;</span> url <span class="token string">&#39;https://nexus.bsdn.org/content/groups/public/&#39;</span> <span class="token punctuation">}</span>
			maven <span class="token punctuation">{</span> name <span class="token string">&quot;M2&quot;</span><span class="token punctuation">;</span> url <span class="token string">&#39;https://plugins.gradle.org/m2/&#39;</span> <span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment"># 验证</span>
gradle <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function v(m,k){const a=e("ExternalLinkIcon");return i(),p("div",null,[u,n("p",null,[n("a",r,[o("https://gradle.org/releases/"),l(a)])]),d])}const g=t(c,[["render",v],["__file","gradle.html.vue"]]);export{g as default};
