---
category:
  - 杂记
tag:
  - AI
  - 画图
  - AI画图
date: 2023-05-29
author: $1x6VI
comment: true
article: true
timeline: true
---

# Stable Diffusion

::: tip 摘要
AI画图  

官网 [https://stability.ai/blog/stable-diffusion-public-release](https://stability.ai/blog/stable-diffusion-public-release)  

WebUI [https://github.com/AUTOMATIC1111/stable-diffusion-webui](https://github.com/AUTOMATIC1111/stable-diffusion-webui)  
参考 
- [https://blog.csdn.net/SweetHeartHuaZai/article/details/129741856](https://blog.csdn.net/SweetHeartHuaZai/article/details/129741856)  
- [https://www.bilibili.com/read/cv23098823](https://www.bilibili.com/read/cv23098823)  

模型网站 
- [https://civitai.com/](https://civitai.com/)
- [https://huggingface.co/](https://huggingface.co/)

其他  
- [https://www.freedidi.com/8621.html](https://www.freedidi.com/8621.html)  
- [https://www.freedidi.com/8474.html](https://www.freedidi.com/8474.html)
:::

## 准备
  - 下载源码
  ```git
  git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git
  ```
  - 安装conda创建虚拟环境 python 3.10.6  
    - [安装教程](Conda.md)
  - 安装cuda
    - cuda是NVIDIA显卡用来跑算法的依赖程序，所以我们需要它。  
    - 下载地址 [https://developer.nvidia.com/cuda-toolkit-archive](https://developer.nvidia.com/cuda-toolkit-archive)  
    - 选择版本  
      - 虚拟环境安装好后 进入 执行
      ```shell
      nvidia-smi
      # 查看右上角 CUDA Version: 12.1 这是我的
      ```
      ![](/image/StableDiffusion/2023052901.png)  
    - 因为很大没必要一点安在C盘 当然没分盘忽略
    - 验证
    ```shell
    NVCC -V
    ```
  - 下载模型
    - [https://huggingface.co/CompVis/stable-diffusion-v-1-4-original](https://huggingface.co/CompVis/stable-diffusion-v-1-4-original)  
    - 点击下载 sd-v1-4.ckpt
  - 下载人脸修复
    - 这是腾讯旗下的一个开源项目，可以用于修复和绘制人脸，减少stable diffusion人脸的绘制扭曲变形问题
    - [https://github.com/TencentARC/GFPGAN](https://github.com/TencentARC/GFPGAN)
    - 下拉到V1.4 model 点击下载  
    ![](/image/StableDiffusion/2023052902.png)  

## 模型安装
  - sd-v1-4.ckpt 放置在 git 克隆的目录stable-diffusion-webui/models/stable-diffusion下
  - 人脸修复的下载文件V1.4 model(文件名叫GFPGANv1.4.pth) 放置在目录stable-diffusion-webui 就是根目录下

## 启动
  - 使用conda的虚拟环境
  - 进入stable-diffusion-webui 目录
  ```shell
  # 大概命令
  # 进入你的环境
  conda activate 你的环境名称
  # 进入你的stable-diffusion-webui 盘例如放在D盘
  D:
  # 进入你的目录
  cd stable-diffusion-webui
  ```
  - 执行
  ```shell
  # 执行
  webui-user.bat
  # 过程中可能会出错 关闭科学上网 或开启科学上网 再次执行
  # 大概意思出错就 开启/关门 你的科学上网 在执行
  ```

## 问题  
1. ERROR: No matching distribution found for gradio==3.31.0
  - 再次执行下
  ```shell
  # 主要是为了看一下配置文件在哪如果你已经知道就不用了
  pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
  ```
  - 把这个配置文件清空
  - 再次执行webui-user.bat 这里我开着科学上网的 