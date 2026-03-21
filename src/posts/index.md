---
home: true
title: 博文
icon: blog
layout: Blog
---

<div class="VPBlog">
  <h1>📝 技术博客</h1>
  <p class="description">记录学习与实践，分享技术与心得</p>

  <div class="blog-grid">
    <article class="blog-card">
      <h2><a href="/blog/posts/java/spring-boot-integration.html">Spring Security 集成</a></h2>
      <p>在 Spring Boot 项目中集成 Spring Security，实现用户认证与权限控制。</p>
      <div class="meta">
        <span class="tag">Java</span>
        <span class="tag">SpringBoot</span>
        <span class="tag">Security</span>
        <time datetime="2026-03-21">3 min read</time>
      </div>
    </article>

    <article class="blog-card">
      <h2><a href="/blog/posts/java/logging-framework.html">Java 日志框架实践</a></h2>
      <p>对比 Logback、Log4j2 等日志框架，搭建企业级日志系统。</p>
      <div class="meta">
        <span class="tag">Java</span>
        <span class="tag">Logging</span>
        <span class="tag">Log4j2</span>
        <time datetime="2026-03-21">3 min read</time>
      </div>
    </article>

    <article class="blog-card">
      <h2><a href="/blog/posts/java/springboot-build.html">SpringBoot 项目构建指南</a></h2>
      <p>如何选择合适版本，配置 pom.xml，快速构建 Spring Boot 项目。</p>
      <div class="meta">
        <span class="tag">Java</span>
        <span class="tag">SpringBoot</span>
        <time datetime="2026-03-21">1 min read</time>
      </div>
    </article>

    <article class="blog-card">
      <h2><a href="/blog/posts/docker/installation.html">Docker 安装与使用记录</a></h2>
      <p>CentOS/Ubuntu 环境下的 Docker 安装步骤及使用记录。</p>
      <div class="meta">
        <span class="tag">Docker</span>
        <span class="tag">DevOps</span>
        <time datetime="2026-03-21">4 min read</time>
      </div>
    </article>

    <article class="blog-card">
      <h2><a href="/blog/posts/docker/dockerfile-jdk.html">Dockerfile JDK 镜像制作</a></h2>
      <p>自定义 JDK 21 镜像，基于 tar.gz 包打包 Docker 镜像。</p>
      <div class="meta">
        <span class="tag">Docker</span>
        <span class="tag">JDK</span>
        <time datetime="2026-03-21">1 min read</time>
      </div>
    </article>

    <article class="blog-card">
      <h2><a href="/blog/posts/nginx/plugins.html">Nginx RTMP 直播流插件</a></h2>
      <p>使用 nginx-rtmp-module 搭建直播流服务。</p>
      <div class="meta">
        <span class="tag">Nginx</span>
        <span class="tag">RTMP</span>
        <span class="tag">Streaming</span>
        <time datetime="2026-03-21">1 min read</time>
      </div>
    </article>

    <article class="blog-card">
      <h2><a href="/blog/posts/k8s/basics.html">Kubernetes 基础学习</a></h2>
      <p>K8s 入门：Pod、Service、Deployment 基本概念与实践。</p>
      <div class="meta">
        <span class="tag">K8s</span>
        <span class="tag">容器化</span>
        <time datetime="2026-03-21">1 min read</time>
      </div>
    </article>

    <article class="blog-card">
      <h2><a href="/blog/posts/bpmn/js-bpmn.html">bpmn.js 流程引擎使用记录</a></h2>
      <p>基于 bpmn-js 18.x 版本的前端流程引擎集成与使用记录。</p>
      <div class="meta">
        <span class="tag">BPMN</span>
        <span class="tag">JS</span>
        <span class="tag">Flowable</span>
        <time datetime="2026-03-21">1 min read</time>
      </div>
    </article>
  </div>
</div>

<style scoped>
.VPBlog {
  padding: 2rem 0;
}

.description {
  font-size: 1.25rem;
  color: var(--vp-c-text-2);
  margin-bottom: 2rem;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.blog-card {
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  border: 1px solid var(--vp-c-gutter);
}

.blog-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}

.blog-card h2 {
  font-size: 1.125rem;
  margin: 0 0 0.75rem;
}

.blog-card a {
  color: var(--vp-c-brand);
  text-decoration: none;
}

.blog-card p {
  font-size: 0.9375rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin: 0 0 1rem;
}

.meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  background: var(--vp-c-bg-mute);
  border-radius: 4px;
  color: var(--vp-c-text-1);
}

time {
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
}
</style>
