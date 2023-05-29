---
category:
  - 杂记
tag:
  - 杂记
date: 2023-05-29
author: $1x6VI
comment: true
article: true
timeline: true
---

# Conda

::: tip 摘要
虚拟环境工具  
官网 [https://www.anaconda.com/](https://www.anaconda.com/)  
镜像网站 [https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/?C=N&O=A](https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/?C=N&O=A)
:::

## windows 安装
- 操作系统 windows11
- Anaconda3-2023.03-1-Windows-x86_64.exe

1. 双击可执行文件 Anaconda3-2023.03-1-Windows-x86_64.exe

2. 选择为谁安装
  - Just Me -> 只给当前用户
  - All Users -> 所有用户  
![/image/Conda/2023052901.png](/image/Conda/2023052901.png)

3. 选择安装位置  
![/image/Conda/2023052902.png](/image/Conda/2023052902.png)

4. 高级安装选项  
  - 创建开始菜单
  - 添加环境变量 描述为不推荐所以没勾选 但是一般都要用建议勾选
  - 注册安装3.10，可以被开发工具发现 默认勾选没动
  - 清除缓存包 释放硬盘 默认不勾选这里勾选了 应该没啥问题  
![/image/Conda/2023052903.png](/image/Conda/2023052903.png)

5. 安装完成后验证  
  - 开始菜单有 Anaconda Navigator 双击程序出现cmd闪烁正常
  - 如果添加环境变量可以cmd 执行 conda --version

6. 手动添加环境变量Path (可选择) 
  - D:\anaconda3
  - D:\anaconda3\Library\mingw-w64\bin
  - D:\anaconda3\Library\usr\bin
  - D:\anaconda3\Library\bin
  - D:\anaconda3\Scripts
- 注意配置Path 在安装是选择的如果不是为所有用户 Path 要在自己账号对应的Path

7. .配置库包下载环境，加快网络速度（替换下载库包地址为国内的清华镜像站）
  - CMD 执行
  ```shell
  conda config --set show_channel_urls yes
  ```
  - 执行后会在你的电脑 C盘 用户/Users 下面 自己的账号下有一个.condarc 文件
  - 文本打开全部替换下面内容
  ```txt
  channels:
 - defaults
show_channel_urls: true
default_channels:
 - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
 - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r
 - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/msys2
custom_channels:
 conda-forge: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
 msys2: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
 bioconda: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
 menpo: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
 pytorch: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
 pytorch-lts: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
 simpleitk: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  ```  
  - 清除索引缓存
  ```shell
  conda clean -i 
  # y 确认
  ```

## 使用

```shell
# 创建环境
conda create --name 你的环境名称(自定义) python=你想要的版本
# 激活(进入环境)
conda activate 你的环境名称
# 停用(退出环境)
conda deactivate
# 进入环境后命令行左侧会有(你的环境名称)
# 验证pyhton 是你创建时的版本就对了
python -V
```
### 随便记录  
```shell
# 升级pip，并设置pip的默认库包下载地址为清华镜像。
python -m pip install --upgrade pip
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```  
#### 镜像源
  - 清华：https://pypi.tuna.tsinghua.edu.cn/simple
  - 阿里云：http://mirrors.aliyun.com/pypi/simple/
  - 中国科技大学 https://pypi.mirrors.ustc.edu.cn/simple/
  - 华中理工大学：http://pypi.hustunique.com/
  - 山东理工大学：http://pypi.sdutlinux.org/
  - 豆瓣：http://pypi.douban.com/simple/