import{_ as s,r as i,o as l,c as t,a as n,b as c,e as o,d as e}from"./app-c3071a03.js";const r={},d=e('<h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h1><div class="hint-container tip"><p class="hint-container-title">摘要</p><p>Nginx 使用记录</p></div><h2 id="下载地址" tabindex="-1"><a class="header-anchor" href="#下载地址" aria-hidden="true">#</a> 下载地址</h2>',3),p={href:"http://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"},m=e(`<h2 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> Linux</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装依赖</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> gcc gcc-c++ <span class="token function">make</span> libtool zlib zlib-devel openssl openssl-devel pcre pcre-devel
<span class="token comment">#下载</span>
<span class="token function">wget</span> http://nginx.org/download/nginx-1.24.0.tar.gz
<span class="token comment"># 配置安装路径</span>
./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/nginx --with-http_stub_status_module --with-http_ssl_module
<span class="token comment"># 编译安装</span>
<span class="token function">make</span>
<span class="token function">make</span> <span class="token function">install</span>
<span class="token comment"># 验证 编译</span>
/usr/local/nginx/sbin/nginx <span class="token parameter variable">-t</span>
<span class="token comment"># 启动</span>
/usr/local/nginx/sbin/nginx <span class="token parameter variable">-c</span> /usr/local/nginx/conf/nginx.conf
<span class="token comment"># 停止</span>
/usr/local/nginx/sbin/nginx <span class="token parameter variable">-s</span> stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function u(v,h){const a=i("ExternalLinkIcon");return l(),t("div",null,[d,n("p",null,[n("a",p,[c("http://nginx.org/en/download.html"),o(a)])]),m])}const x=s(r,[["render",u],["__file","nginx.html.vue"]]);export{x as default};
