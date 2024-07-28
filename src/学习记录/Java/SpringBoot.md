---
title: SpringBoot
shortTitle: SpringBoot
icon: note-sticky
isOriginal: true # 非必填 是否原创
date: 2024-06-19 # 非必填 写作时间
order: 2
category:
  - 学习记录
tag:
  - java
  - SpringBoot
feed:
  - title: SpringBoot
---

# SpringBoot

## 构建项目

选择合适版本引入到pom文件

> [spring 官网](https://spring.io/)  
> [mvn仓库](https://mvnrepository.com/)

## 热部署
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-devtools</artifactId>
    <version>版本</version>
</dependency>
```

## 常见 pom.xml 配置

### 打包指定主启动类

> ！该问题常出现在打包后，启动jar包找不到启动类

```xml
<build>
    <plugins>
        <plugin>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-maven-plugin</artifactId>
            <configuration>
                // <mainClass>主启动类型路径（包.启动类）</mainClass>
                // 样例
                <mainClass>com.cat.auth.AuthServerApplication</mainClass>
            </configuration>
            <executions>
                <execution>
                    <goals>
                        <goal>repackage</goal>
                    </goals>
                </execution>
            </executions>
        </plugin>
    </plugins>
</build>
```

## 接口文档doc

### Knife4j
> [https://doc.xiaominfo.com/](https://doc.xiaominfo.com/)