package team02.issue_tracker.config;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.*;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.stereotype.Component;
import team02.issue_tracker.dto.ApiResult;
import team02.issue_tracker.oauth.dto.AuthJwt;


@Slf4j
@EnableAspectJAutoProxy
@Aspect
@Component
public class AopConfig {

    // 깃헙으로부터 받아온 인증코드를 출력한다.
    @Before("execution(* team02.issue_tracker.oauth.OAuthController.*(..))")
    public void codeLog(JoinPoint joinPoint) {
        log.info("Authorization code from GitHub : {}", joinPoint.getArgs());
    }

    // target 메소드의 동작 시간을 출력한다.
    @Around("execution(* team02.issue_tracker.oauth.OAuthController.*(..))")
    public Object timeLog(ProceedingJoinPoint proceedingJoinPoint) throws Throwable{
        long startTime = System.currentTimeMillis();

        Object result = proceedingJoinPoint.proceed();

        long endTime = System.currentTimeMillis();

        log.info(proceedingJoinPoint.getSignature().getName() + " running time : {}ms", (endTime - startTime));

        return result;
    }

    // 발행한 jwt를 출력한다.
    @AfterReturning(value = "execution(* team02.issue_tracker.oauth.OAuthController.*(..))", returning = "authJwt")
    public void jwtLog(JoinPoint joinPoint, ApiResult<AuthJwt> authJwt) {
        log.info("jwt : {}", authJwt.getData().getJwt());
    }
}
