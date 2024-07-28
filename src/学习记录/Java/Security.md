---
title: Spring Security
shortTitle: Spring Security
icon: note-sticky
isOriginal: true # 非必填 是否原创
date: 2024-06-21 # 非必填 写作时间
order: 3
category:
  - 学习记录
tag:
  - java
  - SpringBoot
  - Security
feed:
  - title: Spring Security
---

# Spring Security

## 集成Security

### maven
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
    <version>版本</version>
</dependency>
```
## 配置
### SecurityConfig
```java
import com.cat.common.entity.LoginUser;
import jakarta.annotation.Resource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import java.util.UUID;

/***
 * SpringSecurity配置
 * @title SecurityConfig
 * @description SpringSecurity配置
 * @author xiaomaohuifaguang
 * @create 2024/6/19 23:14
 **/
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    /**
     * 认证过滤器
     */
    @Resource
    private AuthFilter authFilter;

    /**
     * 授权处理器
     */
    @Resource
    private AuthorizationManagerImpl authorizationManager;

    /**
     * 认证失败 异常处理
     */
    @Resource
    private AuthenticationEntryPointImpl authenticationEntryPoint;
    /**
     * 授权失败 异常处理
     */
    @Resource
    private AccessDeniedHandlerImpl accessDeniedHandler;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .addFilterBefore(authFilter, UsernamePasswordAuthenticationFilter.class)
                .csrf(AbstractHttpConfigurer::disable)
                // 禁用session
                .sessionManagement(sessionManagement->{
                    sessionManagement.sessionCreationPolicy(SessionCreationPolicy.STATELESS);
                })
                .authorizeHttpRequests(authorize -> {
                            // 白名单
                            authorize.requestMatchers("/doc.html").permitAll();
                            authorize.requestMatchers("/webjars/**").permitAll();
                            authorize.requestMatchers("/favicon.ico").permitAll();
                            authorize.requestMatchers("/v3/api-docs/**").permitAll();
                            authorize.anyRequest().authenticated();
//                            authorize.anyRequest().access(authorizationManager);
                        }
                )
                .exceptionHandling(exceptionHandling -> {
                    // 认证失败
                    exceptionHandling.authenticationEntryPoint(authenticationEntryPoint);
                    // 授权失败
                    exceptionHandling.accessDeniedHandler(accessDeniedHandler);
                })
                .httpBasic(AbstractHttpConfigurer::disable)
                // 屏蔽原有登录
                .formLogin(AbstractHttpConfigurer::disable)
                // 屏蔽原有登出
                .logout(AbstractHttpConfigurer::disable);
        return http.build();
    }

    @Bean
    public UserDetailsService userDetailsService() {
        LoginUser loginUser = new LoginUser();
        loginUser.setUserId(UUID.randomUUID().toString());
        loginUser.setUsername(UUID.randomUUID().toString());
        loginUser.setNickname(UUID.randomUUID().toString());
        UserDetails userDetails = User.withUserDetails(new UserDetailsImpl(loginUser)).build();
        return new InMemoryUserDetailsManager(userDetails);
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }


}
```

### 实现UserDetails
```java
import com.cat.common.entity.LoginUser;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Collection;
import java.util.List;
import java.util.UUID;

/***
 * <TODO description class purpose>
 * @title UserDetailsImpl
 * @description <TODO description class purpose>
 * @author xiaomaohuifaguang
 * @create 2024/6/20 0:36
 **/
public class UserDetailsImpl implements UserDetails {

    private final LoginUser loginUser;

    public UserDetailsImpl(LoginUser loginUser) {
        this.loginUser = loginUser;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority("USER"));
    }

    @Override
    public String getPassword() {
        return new BCryptPasswordEncoder().encode(UUID.randomUUID().toString());
    }

    @Override
    public String getUsername() {
        return loginUser.getNickname();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
```

### 自定义过滤器
```java
import com.cat.common.entity.LoginUser;
import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;


/***
 * 登录过滤器
 * @title AuthFilter
 * @description <TODO description class purpose>
 * @author xiaomaohuifaguang
 * @create 2024/6/20 0:48
 **/
@Component
public class AuthFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        // 这里实际应该从request 中取得 请求的参数（包括请求头等） 去完成鉴权保存用户信息 到SecurityContextHolder
        LoginUser loginUser = new LoginUser();
        loginUser.setUserId("admin");
        loginUser.setUsername("admin");
        loginUser.setNickname("超级管理员");

        UserDetailsImpl userDetails = new UserDetailsImpl(loginUser);

        // 保存用户信息 到SecurityContextHolder
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
        SecurityContextHolder.getContext().setAuthentication(authenticationToken);

        filterChain.doFilter(request, response);

    }
}
```

### 自定义授权管理器AuthorizationManager
```java
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.security.authorization.AuthorizationDecision;
import org.springframework.security.authorization.AuthorizationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.web.access.intercept.RequestAuthorizationContext;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.function.Supplier;

/***
 * 授权处理器
 * @title AuthorizationManagerImpl
 * @description <TODO description class purpose>
 * @author xiaomaohuifaguang
 * @create 2024/6/20 1:31
 **/
@Component
public class AuthorizationManagerImpl implements AuthorizationManager<RequestAuthorizationContext> {
    @Override
    public void verify(Supplier<Authentication> authentication, RequestAuthorizationContext object) {
        AuthorizationManager.super.verify(authentication, object);
    }
    @Override
    public AuthorizationDecision check(Supplier<Authentication> authentication, RequestAuthorizationContext object) {
        HttpServletRequest request = object.getRequest();
        String path = request.getServletPath();
        Collection<? extends GrantedAuthority> authorities = authentication.get().getAuthorities();
        // 这里要对 path 和当前用户的角色做匹配 true 通过 false 不通过
        return new AuthorizationDecision(true);
    }
}
```

### 自定义鉴权失败异常处理器AuthenticationEntryPoint
```java
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.io.PrintWriter;

/***
 * 认证失败处理器
 * @title AuthenticationEntryPointImpl
 * @description <TODO description class purpose>
 * @author xiaomaohuifaguang
 * @create 2023/8/8 21:23
 **/
@Component
public class AuthenticationEntryPointImpl implements AuthenticationEntryPoint {
    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException {
        response.setStatus(HttpStatus.UNAUTHORIZED.value());
        response.setContentType("application/json;utf-8");
        PrintWriter printWriter = response.getWriter();
        printWriter.write("{}");
        printWriter.flush();
        printWriter.close();
    }
}
```

### 自定义权限不通过异常处理器AccessDeniedHandler
```java
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.io.PrintWriter;

/***
 * 授权失败处理器
 * @title AccessDeniedHandlerImpl
 * @description <TODO description class purpose>
 * @author xiaomaohuifaguang
 * @create 2023/8/8 21:26
 **/
@Component
public class AccessDeniedHandlerImpl implements AccessDeniedHandler {
    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response, AccessDeniedException accessDeniedException) throws IOException {
        response.setStatus(HttpStatus.FORBIDDEN.value());
        response.setContentType("application/json;utf-8");
        PrintWriter printWriter = response.getWriter();
        printWriter.write("{}");
        printWriter.flush();
        printWriter.close();
    }
}
```