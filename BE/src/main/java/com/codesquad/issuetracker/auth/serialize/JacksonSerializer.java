package com.codesquad.issuetracker.auth.serialize;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.io.SerializationException;
import io.jsonwebtoken.io.Serializer;

public class JacksonSerializer<T> implements Serializer<T> {

    static final ObjectMapper DEFAULT_OBJECT_MAPPER = new ObjectMapper();

    private final ObjectMapper objectMapper;

    private JacksonSerializer() {
        this(DEFAULT_OBJECT_MAPPER);
    }

    private JacksonSerializer(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    public static JacksonSerializer getInstance(){
        return new JacksonSerializer();
    }

    public byte[] serialize(T t) throws SerializationException {
        try {
            return writeValueAsBytes(t);
        } catch (JsonProcessingException e) {
            String msg = "Unable to serialize object: " + e.getMessage();
            throw new SerializationException(msg, e);
        }
    }

    protected byte[] writeValueAsBytes(T t) throws JsonProcessingException {
        return this.objectMapper.writeValueAsBytes(t);
    }
}
