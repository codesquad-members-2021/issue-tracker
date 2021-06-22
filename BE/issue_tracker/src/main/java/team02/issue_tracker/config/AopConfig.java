package team02.issue_tracker.config;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.*;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.stereotype.Component;
import org.springframework.util.StopWatch;
import team02.issue_tracker.dto.ApiResult;
import team02.issue_tracker.oauth.dto.AuthJwt;


/**
 * @date 2021.06.18
 * @author Shion
 */
@Slf4j
@EnableAspectJAutoProxy
@Aspect
@Component
public class AopConfig {

    private final StopWatch stopWatch;

    public AopConfig(StopWatch stopWatch) {
        this.stopWatch = stopWatch;
    }

    @Pointcut("execution(* team02.issue_tracker.oauth.controller.OAuthController.*issue*(..))")
    private void login() {}

    /**
     * 깃헙으로부터 받아온 인증코드를 출력한다.
     * @param joinPoint
     */
    @Before("login()")
    public void authorizationCodeLog(JoinPoint joinPoint) {
        log.info("Authorization code : {}", joinPoint.getArgs());
    }

    /**
     * target 메소드의 동작 시간을 출력한다.
     * @param proceedingJoinPoint
     * @return Object
     * @throws Throwable
     */
    @Around("@annotation(team02.issue_tracker.annotation.LogExecutionTime)")
    public Object jwtIssueTimeLog(ProceedingJoinPoint proceedingJoinPoint) throws Throwable{
        stopWatch.start(proceedingJoinPoint.getSignature().getName());

        Object result = proceedingJoinPoint.proceed();

        stopWatch.stop();

        log.info(stopWatch.prettyPrint());

        return result;
    }

    /**
     * 발행한 jwt를 출력한다.
     * @param joinPoint
     * @param authJwt
     */
    @AfterReturning(pointcut = "login()", returning = "authJwt")
    public void jwtLog(JoinPoint joinPoint, ApiResult<AuthJwt> authJwt) {
        log.info("jwt : {}", authJwt.getData().getJwt());
    }
}
