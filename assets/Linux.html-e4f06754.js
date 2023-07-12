import{_ as s,o as n,c as a,d as e}from"./app-c3071a03.js";const i={},l=e(`<h1 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> Linux</h1><div class="hint-container tip"><p class="hint-container-title">摘要</p><p>记录linux 安装 使用 过程中 指令<br> 命令已在centos7 中验证<br> 其他分支linux 可能会有小的差别</p></div><h2 id="文件-文件夹操作" tabindex="-1"><a class="header-anchor" href="#文件-文件夹操作" aria-hidden="true">#</a> 文件/文件夹操作</h2><h3 id="基本操作" tabindex="-1"><a class="header-anchor" href="#基本操作" aria-hidden="true">#</a> 基本操作</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入指定目录</span>
<span class="token builtin class-name">cd</span> 路径
<span class="token comment"># 进入当前用户目录</span>
<span class="token builtin class-name">cd</span> ~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="网络" tabindex="-1"><a class="header-anchor" href="#网络" aria-hidden="true">#</a> 网络</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看网络信息</span>
<span class="token function">ifconfig</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ssh服务" tabindex="-1"><a class="header-anchor" href="#ssh服务" aria-hidden="true">#</a> SSH服务</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 开启ssh</span>
<span class="token function">sudo</span> /etc/init.d/ssh start
<span class="token comment"># 或</span>
<span class="token function">sudo</span> <span class="token function">service</span> <span class="token function">ssh</span> start
<span class="token comment"># 查看是否开启</span>
<span class="token function">ps</span> <span class="token parameter variable">-e</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token function">ssh</span>
<span class="token comment"># 如果没有ssh 需安装</span>
<span class="token comment"># debian/ubuntu</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> openssh-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="用户" tabindex="-1"><a class="header-anchor" href="#用户" aria-hidden="true">#</a> 用户</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查询所有用户</span>
compgen <span class="token parameter variable">-u</span>
<span class="token function">cat</span> /etc/passwd
<span class="token comment"># 添加用户 并指定生成目录</span>
<span class="token function">useradd</span> <span class="token parameter variable">-m</span> user1
<span class="token comment"># 设置密码</span>
<span class="token function">passwd</span> user1

<span class="token comment"># 添加管理员权限 start</span>
<span class="token comment"># 将sudoers文件的权限修改成可编辑</span>
<span class="token function">chmod</span> <span class="token parameter variable">-v</span> u+w /etc/sudoers
<span class="token comment"># 编辑 添加用户权限</span>
<span class="token function">vim</span> /etc/sudoers
找到 root    <span class="token assign-left variable">ALL</span><span class="token operator">=</span><span class="token punctuation">(</span>ALL<span class="token punctuation">)</span>       ALL
然后添加 user1    <span class="token assign-left variable">ALL</span><span class="token operator">=</span><span class="token punctuation">(</span>ALL<span class="token punctuation">)</span>       ALL
<span class="token comment"># 将sudoers文件的权限修改成不可编辑</span>
<span class="token function">chmod</span> <span class="token parameter variable">-v</span> u-w /etc/sudoers
<span class="token comment"># 添加管理员权限 end</span>

<span class="token comment"># 修改 用户 密码 使用有管理权限的账户去修改</span>
<span class="token function">sudo</span> <span class="token function">passwd</span> 用户名
<span class="token comment"># 切换指定用户</span>
<span class="token function">su</span> 用户名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="系统信息" tabindex="-1"><a class="header-anchor" href="#系统信息" aria-hidden="true">#</a> 系统信息</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看系统信息</span>
<span class="token function">cat</span> /etc/os-release
<span class="token comment"># 查看源配置文件</span>
<span class="token function">cat</span> /etc/apt/sources.list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="swap" tabindex="-1"><a class="header-anchor" href="#swap" aria-hidden="true">#</a> SWAP</h2><p>SWAP就是LINUX下的虚拟内存分区，它的作用是在物理内存使用完之后,将磁盘空间(也就是SWAP分区)虚拟成内存来使用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 关闭swap</span>
swapoff <span class="token parameter variable">-a</span> <span class="token comment">#临时关闭</span>
<span class="token comment"># 永久关闭</span>
<span class="token function">sudo</span> <span class="token function">vim</span> /etc/fstab
<span class="token comment"># deepin debian 系统 在类似如下 修改后面为defaults,noauto 0 0 </span>
<span class="token assign-left variable">UUID</span><span class="token operator">=</span>f96e71e3-a4b7-4dbb-9576-9ef9ae498717  none  swap  defaults,noauto <span class="token number">0</span> <span class="token number">0</span>
<span class="token comment"># 验证 永久关闭验证需重启再执行</span>
<span class="token function">free</span> <span class="token parameter variable">-m</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="内存" tabindex="-1"><a class="header-anchor" href="#内存" aria-hidden="true">#</a> 内存</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看</span>
<span class="token function">free</span> <span class="token comment"># -m 或 -h</span>
<span class="token comment"># 清除缓存buff/cache 需切换root账户</span>
<span class="token builtin class-name">echo</span> <span class="token number">1</span> <span class="token operator">&gt;</span> /proc/sys/vm/drop_caches <span class="token comment"># 释放页缓存</span>
<span class="token builtin class-name">echo</span> <span class="token number">2</span> <span class="token operator">&gt;</span> /proc/sys/vm/drop_caches <span class="token comment"># 释放dentries和inodes</span>
<span class="token builtin class-name">echo</span> <span class="token number">3</span> <span class="token operator">&gt;</span> /proc/sys/vm/drop_caches <span class="token comment"># 释放所有缓存</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="防火墙" tabindex="-1"><a class="header-anchor" href="#防火墙" aria-hidden="true">#</a> 防火墙</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看防火墙状态</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置hosts" tabindex="-1"><a class="header-anchor" href="#设置hosts" aria-hidden="true">#</a> 设置hosts</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/hosts
<span class="token function">vim</span> /etc/hosts
<span class="token comment"># 添加  www.baidu.com为自己想起的别名</span>
<span class="token number">127.0</span>.0.1 www.baidu.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="command-not-found" tabindex="-1"><a class="header-anchor" href="#command-not-found" aria-hidden="true">#</a> ** command not found</h2><ul><li>centos中绝大部分该问题都可以用 yum install **</li></ul>`,24),c=[l];function t(d,o){return n(),a("div",null,c)}const p=s(i,[["render",t],["__file","Linux.html.vue"]]);export{p as default};
