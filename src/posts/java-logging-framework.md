---
title: Java 日志框架实践指南
date: 2026-03-21
category: Java
tags: [Java, Logging, Log4j2]
description: 对比 Logback、Log4j2 等日志框架，搭建企业级日志系统
---

# Java 日志框架实践指南

## 📚 主流日志框架对比

| 框架 | 实现 | 特点 |
|------|------|------|
| **SLF4J** | API 层 | 统一日志门面接口 |
| **Logback** | 实现 | Spring Boot 默认集成 |
| **Log4j2** | 实现 | 高性能，插件化架构 |
| **java.util.logging** | JDK 自带 | 原生支持，功能简单 |

## 🛠️ Log4j2 集成

### Maven 依赖

```xml
<dependency>
    <groupId>org.apache.logging.log4j</groupId>
    <artifactId>log4j-core</artifactId>
    <version>2.22.0</version>
</dependency>
<dependency>
    <groupId>org.apache.logging.log4j</groupId>
    <artifactId>log4j-api</artifactId>
    <version>2.22.0</version>
</dependency>
<dependency>
    <groupId>org.apache.logging.log4j</groupId>
    <artifactId>log4j-slf4j2-impl</artifactId>
    <version>2.22.0</version>
</dependency>
```

### log4j2.xml 配置

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Configuration status="WARN">
    <Appenders>
        <!-- 控制台输出 -->
        <Console name="Console" target="SYSTEM_OUT">
            <PatternLayout pattern="%d{yyyy-MM-dd HH:mm:ss} %-5level %logger{36} - %msg%n"/>
        </Console>
        
        <!-- 文件输出 -->
        <RollingFile name="File" 
                     fileName="logs/app.log"
                     filePattern="logs/app-%d{yyyy-MM-dd}.log.gz">
            <PatternLayout pattern="%d{HH:mm:ss.SSS} [%t] %-5level %logger{36} - %msg%n"/>
            <Policies>
                <TimeBasedTriggeringPolicy/>
                <SizeBasedTriggeringPolicy size="50MB"/>
            </Policies>
            <DefaultRolloverStrategy max="30"/>
        </RollingFile>
    </Appenders>
    
    <Loggers>
        <Root level="info">
            <AppenderRef ref="Console"/>
            <AppenderRef ref="File"/>
        </Root>
        <!-- 业务包日志 -->
        <Logger name="com.example" level="debug" additivity="false">
            <AppenderRef ref="File"/>
        </Logger>
    </Loggers>
</Configuration>
```

## 💡 使用示例

```java
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class UserService {
    private static final Logger logger = LogManager.getLogger(UserService.class);
    
    public void createUser(String username) {
        logger.info("开始创建用户：{}", username);
        try {
            // 业务逻辑...
            logger.debug("用户创建成功");
        } catch (Exception e) {
            logger.error("用户创建失败", e);
            throw new RuntimeException(e);
        }
    }
}
```

## 🎨 最佳实践

1. **日志级别**：DEBUG（开发）→ INFO（生产）
2. **异常记录**：必须记录堆栈信息
3. **脱敏处理**：敏感数据（密码、手机号）需脱敏
4. **性能考虑**：避免在日志中使用字符串拼接

---

::: tip 推荐
Spring Boot 项目推荐使用 Logback，复杂场景建议使用 Log4j2。
:::
