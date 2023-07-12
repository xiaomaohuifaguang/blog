import{_ as l,r as i,o as c,c as t,a,b as n,e as o,d as s}from"./app-c3071a03.js";const r={},p=s('<h1 id="内网穿透" tabindex="-1"><a class="header-anchor" href="#内网穿透" aria-hidden="true">#</a> 内网穿透</h1><div class="hint-container tip"><p class="hint-container-title">摘要</p><p>内网穿透，即你的设备没有固定可在公网访问的ip，但是你需要在公网访问</p></div><h2 id="使用cpolar" tabindex="-1"><a class="header-anchor" href="#使用cpolar" aria-hidden="true">#</a> 使用cpolar</h2>',3),d={href:"https://www.cpolar.com/",target:"_blank",rel:"noopener noreferrer"},u=s(`<h3 id="linux系统安装" tabindex="-1"><a class="header-anchor" href="#linux系统安装" aria-hidden="true">#</a> linux系统安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 切换root</span>
<span class="token function">su</span>
<span class="token builtin class-name">cd</span> ~
<span class="token comment"># 一键安装</span>
<span class="token function">curl</span> <span class="token parameter variable">-L</span> https://www.cpolar.com/static/downloads/install-release-cpolar.sh <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">bash</span>
<span class="token comment"># 验证</span>
cpolar version
<span class="token comment"># 登录cpolar官网后台，点击左侧的验证，查看自己的认证token，之后将token贴在命令行里</span>
cpolar authtoken xxxxxxx
<span class="token comment"># 启动</span>
cpolar <span class="token function">service</span> start
<span class="token comment"># 关闭</span>
cpolar <span class="token function">service</span> stop
<span class="token comment"># 卸载</span>
<span class="token function">curl</span> <span class="token parameter variable">-L</span> https://www.cpolar.com/static/downloads/install-release-cpolar.sh <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">bash</span> <span class="token parameter variable">-s</span> -- <span class="token parameter variable">--remove</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用方式" tabindex="-1"><a class="header-anchor" href="#使用方式" aria-hidden="true">#</a> 使用方式</h3><ol><li>配置文件配置（配置文件为连接账户是创建的 cpolar.yml）</li><li>UI 页面 服务启动后 默认 Web UI 为 9200 可以访问</li></ol><hr><h3 id="修改ui访问ip和端口" tabindex="-1"><a class="header-anchor" href="#修改ui访问ip和端口" aria-hidden="true">#</a> 修改UI访问ip和端口</h3><ul><li>编辑token验证时返回的文件</li><li>在 authtoken 下一行添加 自己想要的ip 和 端口</li><li>client_dashboard_addr: 127.0.0.1:9300</li><li>重启</li></ul>`,7);function h(m,v){const e=i("ExternalLinkIcon");return c(),t("div",null,[p,a("ul",null,[a("li",null,[n("官网地址 "),a("a",d,[n("https://www.cpolar.com/"),o(e)])])]),u])}const k=l(r,[["render",h],["__file","内网穿透.html.vue"]]);export{k as default};
