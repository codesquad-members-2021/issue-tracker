package com.issuetracker.config;

import com.issuetracker.auth.dto.HostDTO;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class HostHeaderConverter implements Converter<String, HostDTO> {

    @Override
    public HostDTO convert(String host) {
        HostDTO user = new HostDTO();
        user.setHost(host);
        return user;
    }
}
