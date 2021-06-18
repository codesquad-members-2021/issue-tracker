package com.codesqaude.cocomarco.common.auth;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;

@Getter
public class JwtKey {

    @Value("${jwt-key}")
    private String key;
}
