package com.codesquad.issuetracker.jwt;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.deser.std.UntypedObjectDeserializer;
import com.fasterxml.jackson.databind.module.SimpleModule;
import io.jsonwebtoken.io.DeserializationException;
import io.jsonwebtoken.io.Deserializer;
import io.jsonwebtoken.lang.Assert;

import java.io.IOException;
import java.util.Collections;
import java.util.Map;

public class JacksonDeserializer<T> implements Deserializer<T> {

    private final Class<T> returnType;
    private final ObjectMapper objectMapper;

    public JacksonDeserializer() throws NoSuchFieldException, IllegalAccessException {
        this((ObjectMapper) JacksonSerializer.class
                .getDeclaredField("DEFAULT_OBJECT_MAPPER").get(null));
    }

    public JacksonDeserializer(ObjectMapper objectMapper) {
        this(objectMapper, (Class<T>) Object.class);
    }

    private JacksonDeserializer(ObjectMapper objectMapper, Class<T> returnType) {
        this.objectMapper = objectMapper;
        this.returnType = returnType;
    }

    public JacksonDeserializer(Map<String, Class> claimTypeMap) {
        this(new ObjectMapper());
        Assert.notNull(claimTypeMap, "Claim type map cannot be null.");
        // register a new Deserializer
        SimpleModule module = new SimpleModule();
        module.addDeserializer(Object.class, new MappedTypeDeserializer(Collections.unmodifiableMap(claimTypeMap)));
        objectMapper.registerModule(module);
    }

    @Override
    public T deserialize(byte[] bytes) throws DeserializationException {
        try {
            return readValue(bytes);
        } catch (IOException e) {
            String msg = "Unable to deserialize bytes into a " + returnType.getName() + " instance: " + e.getMessage();
            throw new DeserializationException(msg, e);
        }
    }

    protected T readValue(byte[] bytes) throws IOException {
        return objectMapper.readValue(bytes, returnType);
    }

    private static class MappedTypeDeserializer extends UntypedObjectDeserializer {

        private final Map<String, Class> claimTypeMap;

        private MappedTypeDeserializer(Map<String, Class> claimTypeMap) {
            super(null, null);
            this.claimTypeMap = claimTypeMap;
        }

        @Override
        public Object deserialize(JsonParser parser, DeserializationContext context) throws IOException {
            String name = parser.currentName();
            if (claimTypeMap != null && name != null && claimTypeMap.containsKey(name)) {
                Class type = claimTypeMap.get(name);
                return parser.readValueAsTree().traverse(parser.getCodec()).readValueAs(type);
            }
            return super.deserialize(parser, context);
        }
    }
}
