import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as n,o as l}from"./app-TVxRU3eW.js";const t={};function e(h,i){return l(),a("div",null,i[0]||(i[0]=[n(`<h1 id="git使用记录" tabindex="-1"><a class="header-anchor" href="#git使用记录"><span>Git使用记录</span></a></h1><h2 id="windows配置" tabindex="-1"><a class="header-anchor" href="#windows配置"><span>Windows配置</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#配置用户名：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> user.name</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;s1x6&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#配置邮箱</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> user.email</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;xiaomaohuifaguang@163.com&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#查看配置是否成功</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --list</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#成成ssh</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">ssh-keygen</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> rsa</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># id_rsa.pub 公钥 去远程仓库配置</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="linux-安装配置" tabindex="-1"><a class="header-anchor" href="#linux-安装配置"><span>Linux 安装配置</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 先查看卸载 原有的git -&gt; linux 卸载软件</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 下载编译工具</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">yum</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> groupinstall</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;Development Tools&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">yum</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> zlib-devel</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> perl-ExtUtils-MakeMaker</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> asciidoc</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> xmlto</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> openssl-devel</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 下载源码</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 地址 https://mirrors.edge.kernel.org/pub/software/scm/git/ 或 https://github.com/git/git/tags</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">wget</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> https://mirrors.edge.kernel.org/pub/software/scm/git/git-2.40.1.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -zxvf</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> v2.40.1.tar.gz</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -C</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ../git</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 设置git安装文件夹，prefix的文件可自定义指定位置但要记住位置，后面会用到</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">./configure</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --prefix=/soft/git</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 编译git</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">make</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 安装git，-j 2可选择不要，此代表使用2个核心去安装，速度会比较快</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">make</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -j</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 2</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 配置环境变量</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">vi</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /etc/profile</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">/soft/git/bin:</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">$PATH</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">source</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /etc/profile</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 验证</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --version</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查询代理</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --get</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> http.proxy</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --get</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> https.proxy</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 配置socks5代理</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> http.proxy</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> socks5</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 127.0.0.1:10808</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> https.proxy</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> socks5</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 127.0.0.1:10808</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 配置http代理</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> http.proxy</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 127.0.0.1:10809</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> https.proxy</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 127.0.0.1:10809</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 取消代理命令</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --unset</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> http.proxy</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --unset</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> https.proxy</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)]))}const r=s(t,[["render",e],["__file","使用记录.html.vue"]]),d=JSON.parse('{"path":"/%E5%AD%A6%E4%B9%A0%E8%AE%B0%E5%BD%95/Git/%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html","title":"Git使用记录","lang":"zh-CN","frontmatter":{"title":"Git使用记录","shortTitle":"使用记录","icon":"note-sticky","isOriginal":true,"date":"2024-06-16T00:00:00.000Z","order":1,"category":["学习记录"],"tag":["git","使用记录"],"feed":[{"title":"Git使用记录"}],"description":"Git使用记录 Windows配置 Linux 安装配置","head":[["meta",{"property":"og:url","content":"https://xiaomaohuifaguang.github.io/blog/%E5%AD%A6%E4%B9%A0%E8%AE%B0%E5%BD%95/Git/%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"}],["meta",{"property":"og:site_name","content":"小猫会发光"}],["meta",{"property":"og:title","content":"Git使用记录"}],["meta",{"property":"og:description","content":"Git使用记录 Windows配置 Linux 安装配置"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-17T16:34:48.000Z"}],["meta",{"property":"article:author","content":"小猫会发光"}],["meta",{"property":"article:tag","content":"git"}],["meta",{"property":"article:tag","content":"使用记录"}],["meta",{"property":"article:published_time","content":"2024-06-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-17T16:34:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Git使用记录\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-06-16T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-17T16:34:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"小猫会发光\\",\\"url\\":\\"https://github.com/xiaomaohuifaguang\\"}]}"]]},"headers":[{"level":2,"title":"Windows配置","slug":"windows配置","link":"#windows配置","children":[]},{"level":2,"title":"Linux 安装配置","slug":"linux-安装配置","link":"#linux-安装配置","children":[]}],"git":{"createdTime":1718530901000,"updatedTime":1718642088000,"contributors":[{"name":"小猫会发光","email":"xiaomaohuifaguang@163.com","commits":2}]},"readingTime":{"minutes":1.09,"words":327},"filePathRelative":"学习记录/Git/使用记录.md","localizedDate":"2024年6月16日","excerpt":"\\n<h2>Windows配置</h2>\\n<div class=\\"language-shell line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"shell\\" data-title=\\"shell\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">#配置用户名：</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">git</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> config</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> --global</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> user.name</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> \\"s1x6\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">#配置邮箱</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">git</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> config</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> --global</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> user.email</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> \\"xiaomaohuifaguang@163.com\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">#查看配置是否成功</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">git</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> config</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> --global</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> --list</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> </span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">#成成ssh</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">ssh-keygen</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> -t</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> rsa</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># id_rsa.pub 公钥 去远程仓库配置</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{r as comp,d as data};
