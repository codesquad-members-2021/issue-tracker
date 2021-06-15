package com.issuetracker.config;

import com.issuetracker.auth.dto.UserAgentDTO;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class UserAgentHeaderConverter implements Converter<String, UserAgentDTO> {

    @Override
    public UserAgentDTO convert(String userAgent) {
        UserAgentDTO user = new UserAgentDTO();
        user.setUserAgent(userAgent);
        return user;
    }
}
