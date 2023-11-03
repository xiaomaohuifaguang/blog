import{_ as a,o as n,c as s,d as e}from"./app-1045305f.js";const i={},l=e(`<h1 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> linux</h1><div class="hint-container tip"><p class="hint-container-title">摘要</p><p>linux 使用记录 centos 基础命令</p></div><h2 id="软件卸载" tabindex="-1"><a class="header-anchor" href="#软件卸载" aria-hidden="true">#</a> 软件卸载</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 软件卸载 例子java</span>
<span class="token comment"># 查询已安装的 java 意思是查询所安装的带有java的rpm软件包。</span>
<span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-i</span> <span class="token function">java</span>
<span class="token comment"># 去删除</span>
<span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-i</span> <span class="token function">java</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-n1</span> <span class="token function">rpm</span> <span class="token parameter variable">-e</span> <span class="token parameter variable">--nodeps</span>
<span class="token comment"># 环境变量 重置生效</span>
<span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="防火墙端口" tabindex="-1"><a class="header-anchor" href="#防火墙端口" aria-hidden="true">#</a> 防火墙端口</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看防火墙状态</span>
firewall-cmd <span class="token parameter variable">--state</span>
<span class="token comment"># 开启(关闭)防火墙</span>
systemctl start firewalld
systemctl stop firewalld
<span class="token comment"># 查看防火墙已经开放的端口号</span>
firewall-cmd --list-ports
<span class="token comment"># 查看指定端口是否开放</span>
firewall-cmd --query-port<span class="token operator">=</span><span class="token number">7777</span>/tcp
<span class="token comment"># 开启指定端口</span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">7777</span>/tcp <span class="token parameter variable">--permanent</span>
<span class="token comment"># 关闭指定端口</span>
firewall-cmd --remove-port<span class="token operator">=</span><span class="token number">7777</span>/tcp <span class="token parameter variable">--permanent</span>
<span class="token comment"># 重启防火墙</span>
firewall-cmd <span class="token parameter variable">--reload</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wget" tabindex="-1"><a class="header-anchor" href="#wget" aria-hidden="true">#</a> WGET</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># wget 下载慢 换下载源</span>
<span class="token builtin class-name">cd</span> /etc/yum.repos.d/ 
<span class="token function">mv</span> CentOS-Base.repo CentOS-Base.repo.back <span class="token comment">#建议备份或者改名 </span>
<span class="token function">wget</span> <span class="token parameter variable">-O</span> CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo 
yum makecache <span class="token comment">#生成缓存</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="开机启动脚本配置" tabindex="-1"><a class="header-anchor" href="#开机启动脚本配置" aria-hidden="true">#</a> 开机启动脚本配置</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 准备脚本.sh 并赋予脚本可执行权限</span>
<span class="token function">chmod</span> +x /??/??/??.sh
<span class="token comment"># 打开 /etc/rc.d/rc.local</span>
<span class="token function">vim</span> /etc/rc.d/rc.local
<span class="token comment"># 末尾添加/??/??/??.sh</span>
<span class="token comment"># 在centos7中，/etc/rc.d/rc.local的权限被降低了，所以需要执行如下命令赋予其可执行权限</span>
<span class="token function">chmod</span> +x /etc/rc.d/rc.local
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="内存" tabindex="-1"><a class="header-anchor" href="#内存" aria-hidden="true">#</a> 内存</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">free</span> <span class="token parameter variable">-m</span>
<span class="token function">free</span> <span class="token parameter variable">-h</span>

<span class="token comment"># 清理 释放内存</span>
<span class="token builtin class-name">echo</span> <span class="token number">3</span> <span class="token operator">&gt;</span> /proc/sys/vm/drop_caches
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),c=[l];function r(t,p){return n(),s("div",null,c)}const o=a(i,[["render",r],["__file","linux.html.vue"]]);export{o as default};
