import{_ as c,r as o,o as d,c as r,a as n,e,w as i,b as s,d as t}from"./app-1045305f.js";const u={},p=t('<h1 id="docker安装部署" tabindex="-1"><a class="header-anchor" href="#docker安装部署" aria-hidden="true">#</a> docker安装部署</h1><div class="hint-container tip"><p class="hint-container-title">摘要</p><p>docker安装部署<br> 推荐使用具有管理员权限的普通账户安装</p></div><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h1>',3),m={class:"table-of-contents"},v=n("h2",{id:"官网",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#官网","aria-hidden":"true"},"#"),s(" 官网")],-1),k={href:"https://docs.docker.com/",target:"_blank",rel:"noopener noreferrer"},b=n("h2",{id:"centos",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#centos","aria-hidden":"true"},"#"),s(" centos")],-1),h={href:"https://docs.docker.com/engine/install/centos/",target:"_blank",rel:"noopener noreferrer"},f=n("li",null,"建议用有管理员权限的用户操作 建议不要直接用root",-1),_=n("li",null,"安装过程",-1),g=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 卸载旧版本旧版本的Docker被命名为dockerordocker-engine，</span>
<span class="token comment"># 在尝试安装新版本之前卸载任何旧版本，以及相关的依赖项。</span>
<span class="token function">sudo</span> yum remove <span class="token function">docker</span> <span class="token punctuation">\\</span>
                  docker-client <span class="token punctuation">\\</span>
                  docker-client-latest <span class="token punctuation">\\</span>
                  docker-common <span class="token punctuation">\\</span>
                  docker-latest <span class="token punctuation">\\</span>
                  docker-latest-logrotate <span class="token punctuation">\\</span>
                  docker-logrotate <span class="token punctuation">\\</span>
                  docker-engine

<span class="token comment"># 安装yum-utils包(它提供yum-config-manager实用程序)</span>
<span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils
<span class="token comment"># 设置存储库 选择一个 国内推荐阿里云的</span>
<span class="token comment"># 官方存储库</span>
<span class="token function">sudo</span> yum-config-manager --add-repo <span class="token punctuation">\\</span>
https://download.docker.com/linux/centos/docker-ce.repo
<span class="token comment"># 阿里云存储库</span>
<span class="token function">sudo</span> yum-config-manager --add-repo <span class="token punctuation">\\</span>
http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

<span class="token comment"># 安装最新版</span>
<span class="token function">sudo</span> yum <span class="token function">install</span> docker-ce <span class="token punctuation">\\</span>
docker-ce-cli containerd.io <span class="token punctuation">\\</span>
docker-buildx-plugin <span class="token punctuation">\\</span>
docker-compose-plugin

<span class="token comment"># 测试验证</span>
<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token parameter variable">--version</span>

<span class="token comment"># 启动docker</span>
<span class="token function">sudo</span> systemctl start 
<span class="token comment"># 设置开机自启</span>
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> docker.service

<span class="token comment"># 卸载</span>
<span class="token function">sudo</span> yum remove docker-ce docker-ce-cli <span class="token punctuation">\\</span>
containerd.io docker-buildx-plugin <span class="token punctuation">\\</span>
docker-compose-plugin docker-ce-rootless-extras
<span class="token comment"># 主机上的映像、容器、卷或自定义配置文件不会自动删除。</span>
<span class="token comment"># 删除所有镜像、容器和卷。</span>
<span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/docker
<span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/containerd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="deepin" tabindex="-1"><a class="header-anchor" href="#deepin" aria-hidden="true">#</a> deepin</h2><div class="hint-container danger"><p class="hint-container-title">注意</p><p>deepin 没找到更新源 所以下面执行 不是最新版安装<br> deepin 作为国产开源linux桌面已经很优秀了<br> 但是大环境用户数量不足，很多资料检索不到<br> deepin的上行版本是debian 绝大部分使用过程可复用，其他部分也可参考<br> 希望有大神可以深耕吧</p></div>`,3),x={href:"https://www.runoob.com/docker/debian-docker-install.html",target:"_blank",rel:"noopener noreferrer"},y=t(`<h3 id="自动安装" tabindex="-1"><a class="header-anchor" href="#自动安装" aria-hidden="true">#</a> 自动安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://get.docker.com <span class="token parameter variable">-o</span> get-docker.sh
<span class="token function">sudo</span> <span class="token function">sh</span> get-docker.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="手动安装" tabindex="-1"><a class="header-anchor" href="#手动安装" aria-hidden="true">#</a> 手动安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 卸载旧版本</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> remove <span class="token function">docker</span> docker-engine docker.io containerd runc
<span class="token comment"># 更新 apt 包索引</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token comment"># 安装 apt 依赖包 用于通过 HTTPS 来获取仓库</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token punctuation">\\</span>
    apt-transport-https <span class="token punctuation">\\</span>
    ca-certificates <span class="token punctuation">\\</span>
    <span class="token function">curl</span> <span class="token punctuation">\\</span>
    gnupg2 <span class="token punctuation">\\</span>
    software-properties-common
<span class="token comment"># 添加 Docker 的官方 GPG 密钥</span>
<span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://mirrors.ustc.edu.cn/docker-ce/linux/debian/gpg <span class="token operator">|</span> <span class="token function">sudo</span> apt-key <span class="token function">add</span> -
<span class="token comment"># 9DC8 5822 9FC7 DD38 854A E2D8 8D81 803C 0EBF CD88 </span>
<span class="token comment"># 通过搜索指纹的后8个字符，验证您现在是否拥有带有指纹的密钥。</span>
<span class="token function">sudo</span> apt-key fingerprint 0EBFCD88
<span class="token comment"># 更新 apt 包索引</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token comment"># 安装最新版本的 Docker Engine-Community 和 containerd </span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> docker-ce docker-ce-cli containerd.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="卸载" tabindex="-1"><a class="header-anchor" href="#卸载" aria-hidden="true">#</a> 卸载</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 删除安装包</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> purge docker-ce
<span class="token comment"># 删除镜像、容器、配置文件等内容</span>
<span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="ubuntu" tabindex="-1"><a class="header-anchor" href="#ubuntu" aria-hidden="true">#</a> ubuntu</h2><p>ubuntu 22.04.2</p><ol><li>简述</li></ol>`,10),w=n("li",null,"ubuntu docker最新官方推荐 为桌面版",-1),D={href:"https://docs.docker.com/engine/install/ubuntu/",target:"_blank",rel:"noopener noreferrer"},E=n("ol",{start:"2"},[n("li",null,"参考")],-1),C={href:"https://docs.docker.com/desktop/install/ubuntu/",target:"_blank",rel:"noopener noreferrer"},q=n("li",null,"没报错忽略",-1),B={href:"https://www.saoniuhuo.com/question/detail-2306127.html",target:"_blank",rel:"noopener noreferrer"},F=n("h2",{id:"docker镜像加速",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker镜像加速","aria-hidden":"true"},"#"),s(" docker镜像加速")],-1),L=n("li",null,"docker拉去镜像慢可以设置国内镜像",-1),N={href:"https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors",target:"_blank",rel:"noopener noreferrer"},S=n("li",null,"注册登录或登录",-1),V=n("li",null,"可以看到镜像地址下面也有对应教程",-1),T=n("li",null,"过程",-1),z=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># centos</span>
<span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/docker

<span class="token function">sudo</span> <span class="token function">tee</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
{
  &quot;registry-mirrors&quot;: [&quot;你的地址&quot;]
}
EOF</span>

<span class="token function">sudo</span> systemctl daemon-reload

<span class="token function">sudo</span> systemctl restart <span class="token function">docker</span>

<span class="token comment"># 验证</span>
<span class="token function">sudo</span> <span class="token function">docker</span> info <span class="token comment"># 返回信息如下</span>
<span class="token comment"># Registry Mirrors:</span>
<span class="token comment">#  你的地址</span>
<span class="token comment"># Live Restore Enabled: false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function G(I,O){const a=o("router-link"),l=o("ExternalLinkIcon");return d(),r("div",null,[p,n("nav",m,[n("ul",null,[n("li",null,[e(a,{to:"#官网"},{default:i(()=>[s("官网")]),_:1})]),n("li",null,[e(a,{to:"#centos"},{default:i(()=>[s("centos")]),_:1})]),n("li",null,[e(a,{to:"#deepin"},{default:i(()=>[s("deepin")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#自动安装"},{default:i(()=>[s("自动安装")]),_:1})]),n("li",null,[e(a,{to:"#手动安装"},{default:i(()=>[s("手动安装")]),_:1})]),n("li",null,[e(a,{to:"#卸载"},{default:i(()=>[s("卸载")]),_:1})])])]),n("li",null,[e(a,{to:"#ubuntu"},{default:i(()=>[s("ubuntu")]),_:1})]),n("li",null,[e(a,{to:"#docker镜像加速"},{default:i(()=>[s("docker镜像加速")]),_:1})])])]),v,n("ul",null,[n("li",null,[n("a",k,[s("https://docs.docker.com/"),e(l)])])]),b,n("ol",null,[n("li",null,[n("a",h,[s("官网文档"),e(l)])]),f,_]),g,n("p",null,[s("Deepin 20.9 参考"),n("a",x,[s("菜鸟教程"),e(l)])]),y,n("ul",null,[w,n("li",null,[s("ubuntu 服务安装 非桌面版 "),n("a",D,[s("https://docs.docker.com/engine/install/ubuntu/"),e(l)])])]),E,n("ul",null,[n("li",null,[s("官网安装 "),n("a",C,[s("https://docs.docker.com/desktop/install/ubuntu/"),e(l)])]),n("li",null,[s("报错 docker-desktop : Depends: docker-ce-cli but it is not installable "),n("ul",null,[q,n("li",null,[n("a",B,[s("https://www.saoniuhuo.com/question/detail-2306127.html"),e(l)])])])])]),F,n("ul",null,[L,n("li",null,[s("获取镜像地址 "),n("ul",null,[n("li",null,[s("阿里云"),n("a",N,[s("https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors"),e(l)])]),S,V])]),T]),z])}const R=c(u,[["render",G],["__file","docker安装部署.html.vue"]]);export{R as default};
