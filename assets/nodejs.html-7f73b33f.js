import{_ as e,r as t,o as i,c as l,a as n,b as o,e as c,d as s}from"./app-c3071a03.js";const p={},r=s('<h1 id="node-js" tabindex="-1"><a class="header-anchor" href="#node-js" aria-hidden="true">#</a> Node.js</h1><div class="hint-container tip"><p class="hint-container-title">摘要</p><p>Node.js 使用记录</p></div><h2 id="下载地址" tabindex="-1"><a class="header-anchor" href="#下载地址" aria-hidden="true">#</a> 下载地址</h2>',3),d={href:"https://nodejs.org/en",target:"_blank",rel:"noopener noreferrer"},m=s(`<h2 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> windows</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 验证</span>
<span class="token function">node</span> <span class="token parameter variable">-v</span>
<span class="token comment">#显示node.js的版本说明已经安装成功</span>
<span class="token function">npm</span> <span class="token parameter variable">-v</span>
<span class="token comment">#显示自带的npm的版本</span>
<span class="token comment"># 安装目录新建文件夹 node_cache 和 node_global</span>
<span class="token comment"># 配置 </span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> prefix <span class="token string">&quot;D:<span class="token entity" title="\\n">\\n</span>odejs<span class="token entity" title="\\n">\\n</span>ode_global&quot;</span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> cache <span class="token string">&quot;D:<span class="token entity" title="\\n">\\n</span>odejs<span class="token entity" title="\\n">\\n</span>ode_cache&quot;</span>
<span class="token comment"># 添加环境变量</span>
NODE_PATH	D:<span class="token punctuation">\\</span>nodejs<span class="token punctuation">\\</span>node_modules
<span class="token environment constant">PATH</span>		D:<span class="token punctuation">\\</span>nodejs<span class="token punctuation">;</span>	D:<span class="token punctuation">\\</span>nodejs<span class="token punctuation">\\</span>node_global<span class="token punctuation">;</span>
<span class="token comment"># 验证</span>
<span class="token function">npm</span> <span class="token function">install</span> express <span class="token parameter variable">-g</span>
<span class="token comment"># 安装文件夹 添加权限</span>
<span class="token comment"># 更换 淘宝镜像</span>
<span class="token function">npm</span> config get registry       //查看初始npm源
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npm.taobao.org/				//更换镜像为淘宝镜像
<span class="token function">npm</span> config get registry  					//检查配置是否成功 
<span class="token comment">#全局安装cnpm</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> cnpm <span class="token parameter variable">--registry</span><span class="token operator">=</span>https://registry.npm.taobao.org
<span class="token comment"># 验证 重新打开cmd</span>
cnpm <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> Linux</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载</span>
<span class="token comment"># https://nodejs.org/en</span>
<span class="token function">wget</span> https://nodejs.org/dist/v18.16.0/node-v18.16.0-linux-x64.tar.xz
<span class="token comment"># 解压</span>
<span class="token function">tar</span> xvf node-v18.16.0-linux-x64.tar.xz <span class="token parameter variable">-C</span> <span class="token punctuation">..</span>/nodejs
<span class="token comment"># 配置软连接</span>
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /home/root/nodejs/node-v16.20.0-linux-x64/bin/node /usr/local/bin/node
<span class="token comment"># 验证</span>
<span class="token function">node</span> <span class="token parameter variable">-v</span>

<span class="token function">ln</span> <span class="token parameter variable">-s</span> /home/root/nodejs/node-v16.20.0-linux-x64/bin/npm /usr/local/bin/npm
<span class="token comment"># 验证</span>
<span class="token function">npm</span> <span class="token parameter variable">-v</span>

<span class="token comment"># 安装cnpm</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> cnpm <span class="token parameter variable">--registry</span><span class="token operator">=</span>https://registry.npm.taobao.org
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /home/root/nodejs/node-v16.20.0-linux-x64/bin/cnpm /usr/local/bin/cnpm
<span class="token comment"># 验证</span>
cnpm <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function v(u,b){const a=t("ExternalLinkIcon");return i(),l("div",null,[r,n("p",null,[n("a",d,[o("https://nodejs.org/en"),c(a)])]),m])}const h=e(p,[["render",v],["__file","nodejs.html.vue"]]);export{h as default};
