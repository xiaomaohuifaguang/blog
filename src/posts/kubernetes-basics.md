---
title: Kubernetes 基础概念与实践
date: 2026-03-21
category: DevOps
tags: [K8s, Container, Orchestration]
description: Kubernetes 入门：Pod、Service、Deployment 基本概念与实践
---

# Kubernetes 基础概念与实践

## 📚 核心概念速览

| 概念 | 说明 |
|------|------|
| **Pod** | K8s 中最小部署单元，包含一个或多个容器 |
| **Node** | 集群中的工作节点（物理机/虚拟机） |
| **Namespace** | 资源命名空间，用于隔离不同环境 |
| **Service** | 服务抽象层，提供稳定的网络访问入口 |
| **Deployment** | 应用部署管理，实现滚动更新/回滚 |
| **ConfigMap** | 配置信息存储 |
| **Secret** | 敏感信息加密存储 |

## 🏗️ 架构组成

```
┌─────────────────────────────────────┐
│          Master Node                │
│  ┌──────────┐    ┌──────────────┐  │
│  │  API     │◄───│  etcd        │  │
│  │  Server  │    │  (数据库)     │  │
│  └─────┬────┘    └──────────────┘  │
│        │                             │
│  ┌─────▼─────┐    ┌──────────────┐  │
│  │Controller │    │   Scheduler  │  │
│  │ Manager   │    │              │  │
│  └───────────┘    └──────────────┘  │
│           \                          │
└────────────┼─────────────────────────┘
             │
      ┌──────▼───────┐    ┌──────────────┐
      │    Node 1    │    │    Node 2    │
      │ ┌──────────┐ │    │ ┌──────────┐ │
      │ │ kubelet  │ │    │ │ kubelet  │ │
      │ └──────────┘ │    │ └──────────┘ │
      │ ┌──────────┐ │    │ ┌──────────┐ │
      │ │kube-proxy│ │    │ │kube-proxy│ │
      │ └──────────┘ │    │ └──────────┘ │
      │ ┌──────────┐ │    │ ┌──────────┐ │
      │ │  Pod     │ │    │ │  Pod     │ │
      │ │ Container│ │    │ │ Container│ │
      │ └──────────┘ │    │ └──────────┘ │
      └──────────────┘    └──────────────┘
```

## 🎯 常用 YAML 示例

### 1. Pod 定义

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
  namespace: default
spec:
  containers:
  - name: nginx
    image: nginx:latest
    ports:
    - containerPort: 80
    resources:
      requests:
        memory: "128Mi"
        cpu: "100m"
      limits:
        memory: "256Mi"
        cpu: "200m"
```

### 2. Service 定义

```yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  selector:
    app: nginx
  ports:
  - protocol: TCP
    port: 80
    targetPort: 80
  type: ClusterIP  # ClusterIP/NodePort/LoadBalancer
```

### 3. Deployment 定义

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.21
        ports:
        - containerPort: 80
```

## 💻 常用命令速查

### Pod 操作

```bash
# 创建 Pod
kubectl apply -f pod.yaml

# 查看 Pod
kubectl get pods
kubectl get pods -o wide

# 删除 Pod
kubectl delete pod nginx-pod

# 进入 Pod 内部
kubectl exec -it nginx-pod -- /bin/sh

# 日志查看
kubectl logs nginx-pod
kubectl logs -f nginx-pod
```

### Deployment 操作

```bash
# 创建 Deployment
kubectl create deployment nginx --image=nginx

# 扩缩容
kubectl scale deployment nginx --replicas=5

# 更新镜像
kubectl set image deployment/nginx nginx=nginx:1.22

# 回滚
kubectl rollout undo deployment/nginx

# 查看状态
kubectl rollout status deployment/nginx
```

### Service 操作

```bash
# 获取服务列表
kubectl get svc

# 暴露当前 Pod
kubectl expose deployment nginx --port=80 --type=NodePort

# 端口转发（本地访问）
kubectl port-forward svc/nginx-service 8080:80
```

### Namespace 操作

```bash
# 查看命名空间
kubectl get namespaces

# 创建命名空间
kubectl create namespace dev

# 在指定命名空间操作
kubectl get pods -n dev
kubectl run nginx --image=nginx -n dev
```

## 📊 监控与调试

### 查看资源使用

```bash
# CPU/内存使用率
kubectl top pods
kubectl top nodes
```

### 事件查看

```bash
# 查看最近事件
kubectl get events
kubectl describe pod nginx-pod
```

### 排查问题

```bash
# 检查容器状态
kubectl get pod nginx-pod -o yaml

# 查看重启次数
kubectl get pod nginx-pod

# 日志轮询
kubectl logs --previous nginx-pod
```

## 🛡️ 安全最佳实践

1. **RBAC 权限控制**：最小权限原则
2. **NetworkPolicy**：限制 Pod 间网络通信
3. **Pod Security Policies**：禁止特权容器
4. **Secret 管理**：使用外部密钥管理系统（如 Vault）
5. **镜像签名验证**：确保镜像来源可信

---

::: tip 推荐
生产环境建议使用官方文档作为基准：[Kubernetes Docs](https://kubernetes.io/docs/)
:::
