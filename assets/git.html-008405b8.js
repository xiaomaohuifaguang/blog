import{_ as n,o as s,c as a,d as e}from"./app-c3071a03.js";const i={},t=e(`<h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> Git</h1><div class="hint-container tip"><p class="hint-container-title">摘要</p><p>Git 使用记录</p></div><h2 id="windows配置" tabindex="-1"><a class="header-anchor" href="#windows配置" aria-hidden="true">#</a> Windows配置</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#配置用户名：</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;s1x6&quot;</span>
<span class="token comment">#配置邮箱</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;xiaomaohuifaguang@163.com&quot;</span>
<span class="token comment">#查看配置是否成功</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--list</span> 
<span class="token comment">#成成ssh</span>
ssh-keygen <span class="token parameter variable">-t</span> rsa
<span class="token comment"># id_rsa.pub 公钥 去远程仓库配置</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="linux-安装配置" tabindex="-1"><a class="header-anchor" href="#linux-安装配置" aria-hidden="true">#</a> Linux 安装配置</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 先查看卸载 原有的git -&gt; linux 卸载软件</span>
<span class="token comment"># 下载编译工具</span>
yum <span class="token parameter variable">-y</span> groupinstall <span class="token string">&quot;Development Tools&quot;</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> zlib-devel perl-ExtUtils-MakeMaker asciidoc xmlto openssl-devel
<span class="token comment"># 下载源码</span>
<span class="token comment"># 地址 https://mirrors.edge.kernel.org/pub/software/scm/git/ 或 https://github.com/git/git/tags</span>
<span class="token function">wget</span> https://mirrors.edge.kernel.org/pub/software/scm/git/git-2.40.1.tar.gz
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> v2.40.1.tar.gz <span class="token parameter variable">-C</span> <span class="token punctuation">..</span>/git
<span class="token comment"># 设置git安装文件夹，prefix的文件可自定义指定位置但要记住位置，后面会用到</span>
./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/soft/git
<span class="token comment"># 编译git</span>
<span class="token function">make</span>
<span class="token comment"># 安装git，-j 2可选择不要，此代表使用2个核心去安装，速度会比较快</span>
<span class="token function">make</span> <span class="token function">install</span> <span class="token parameter variable">-j</span> <span class="token number">2</span>
<span class="token comment"># 配置环境变量</span>
<span class="token function">vi</span> /etc/profile
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/soft/git/bin:<span class="token environment constant">$PATH</span>
<span class="token builtin class-name">source</span> /etc/profile
<span class="token comment"># 验证</span>
<span class="token function">git</span> <span class="token parameter variable">--version</span>

<span class="token comment"># 查询代理</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--get</span> http.proxy
<span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--get</span> https.proxy
<span class="token comment"># 配置socks5代理</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> http.proxy socks5 <span class="token number">127.0</span>.0.1:10808
<span class="token function">git</span> config <span class="token parameter variable">--global</span> https.proxy socks5 <span class="token number">127.0</span>.0.1:10808
<span class="token comment"># 配置http代理</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> http.proxy <span class="token number">127.0</span>.0.1:10809
<span class="token function">git</span> config <span class="token parameter variable">--global</span> https.proxy <span class="token number">127.0</span>.0.1:10809
<span class="token comment"># 取消代理命令</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--unset</span> http.proxy
<span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--unset</span> https.proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),l=[t];function p(c,o){return s(),a("div",null,l)}const d=n(i,[["render",p],["__file","git.html.vue"]]);export{d as default};
