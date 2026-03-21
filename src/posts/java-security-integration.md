---
title: Spring Security 集成实践
date: 2026-03-21
category: Java
tags: [Java, SpringBoot, Security]
description: 在 Spring Boot 项目中集成 Spring Security，实现用户认证与权限控制
---

# Spring Security 集成实践

## 🎯 快速集成

### Maven 依赖

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
    <version>3.2.6</version> <!-- 与项目版本一致 -->
</dependency>
```

## ⚙️ 基础配置示例

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {
    
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/public/**").permitAll()
                .anyRequest().authenticated()
            )
            .formLogin(form -> form
                .loginPage("/login")
                .permitAll()
            )
            .logout(logout -> logout.permitAll());
        
        return http.build();
    }
    
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
```

## 🔐 用户详情实现

```java
@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    
    @Autowired
    private UserService userService;
    
    @Override
    public UserDetails loadUserByUsername(String username) 
            throws UsernameNotFoundException {
        
        User user = userService.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("用户不存在");
        }
        
        return User.withUsername(user.getUsername())
                  .password(passwordEncoder().encode(user.getPassword()))
                  .authorities(user.getRoles())
                  .accountExpired(false)
                  .accountLocked(false)
                  .credentialsExpired(false)
                  .disabled(false)
                  .build();
    }
}
```

## 💡 安全建议

1. **密码加密**：使用 BCrypt 强加密算法
2. **CSRF 保护**：默认开启，REST API 可禁用
3. **CORS 配置**：跨域场景需显式配置
4. **会话管理**：生产环境建议使用无状态 JWT

---

::: warning 安全提醒
切勿将明文密码硬编码在代码中！所有敏感配置应通过环境变量或配置文件管理。
:::
