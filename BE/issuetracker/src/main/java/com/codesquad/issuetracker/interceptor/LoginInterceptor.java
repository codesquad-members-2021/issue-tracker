package com.codesquad.issuetracker.interceptor;

import com.codesquad.issuetracker.exception.AuthorizationNotFoundException;
import com.codesquad.issuetracker.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public class LoginInterceptor implements HandlerInterceptor {

    private UserService userService;

    @Autowired
    public LoginInterceptor(UserService userService) {
        this.userService = userService;
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String authorization = request.getHeader("Authorization");
        if (authorization == null) {
            throw new AuthorizationNotFoundException();
        }

        request.setAttribute("user", userService.getUserFromToken(authorization));

        return true;
    }
}
