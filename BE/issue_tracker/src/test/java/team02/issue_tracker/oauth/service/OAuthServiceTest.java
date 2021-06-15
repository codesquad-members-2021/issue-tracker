package team02.issue_tracker.oauth.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import okhttp3.mockwebserver.MockResponse;
import okhttp3.mockwebserver.MockWebServer;
import okhttp3.mockwebserver.RecordedRequest;
import org.json.JSONException;
import org.json.JSONObject;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpHeaders;
import org.springframework.http.client.reactive.ClientHttpConnector;
import org.springframework.http.client.reactive.ReactorClientHttpConnector;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;
import reactor.test.StepVerifier;
import team02.issue_tracker.oauth.dto.GithubAccessTokenRequestDto;
import team02.issue_tracker.oauth.dto.GithubAccessTokenResponseDto;
import team02.issue_tracker.oauth.utils.GithubApiProperties;
import team02.issue_tracker.oauth.utils.JwtUtils;
import team02.issue_tracker.service.UserService;

import java.io.IOException;
import java.time.Duration;
import java.util.function.Consumer;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class OAuthServiceTest {

    private MockWebServer mockWebServer;
    private WebClient webClient;
    private ClientHttpConnector connector;
    private ObjectMapper objectMapper;

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtils jwtUtils;

    @Autowired
    private GithubApiProperties githubApiProperties;

    private OAuthService oauthService;

    @BeforeEach
    void setup() {
        this.mockWebServer = new MockWebServer();
        this.connector = new ReactorClientHttpConnector();
        this.objectMapper = new ObjectMapper();
    }

    @AfterEach
    void shutdown() throws IOException {
        this.mockWebServer.shutdown();
    }

    private void startServer() {
        this.webClient = WebClient.builder()
                .clientConnector(connector)
                .baseUrl(mockWebServer.url("/").toString())
                .build();
    }

    @Test
    void retrieve() {
        startServer();

        prepareResponse(mockResponse -> mockResponse
                .addHeader("Content-Type", "text/plain")
                .setBody("Hello Spring!!"));

        Mono<String> result = this.webClient.get()
                .uri("/greeting")
                .cookie("testkey", "testvalue")
                .header("X-Test-Header", "testvalue")
                .retrieve()
                .bodyToMono(String.class);

        StepVerifier.create(result)
                .expectNext("Hello Spring!!")
                .expectComplete()
                .verify(Duration.ofSeconds(3));


    }

    @Test
    void retrieveJson() {
        startServer();
        oauthService = new OAuthService(userService, jwtUtils, githubApiProperties, webClient);
        // mock 응답 바디 데이터 설정
        GithubAccessTokenResponseDto expectedMockResponse = GithubAccessTokenResponseDto
                .builder()
                .accessToken("mock access token")
                .scope("mock scope")
                .tokenType("mock token type")
                .build();

        // mock 응답 전체 설정
        prepareResponse(mockResponse -> {
            try {
                mockResponse
                        .setHeader("Content-Type", "application/json")
                        .setBody(objectMapper.writeValueAsString(expectedMockResponse));
            } catch (JsonProcessingException e) {
                e.printStackTrace();
            }
        });

        // mock 요청 바디 데이터 설정
        GithubAccessTokenRequestDto mockAccessTokenRequest = GithubAccessTokenRequestDto
                .builder()
                .clientId("mock client id")
                .clientSecret("mock client secret")
                .redirectUri("mock redirect uri")
                .code("mock code")
                .build();

        // mock 요청을 mock 서버에 보내서 가져온 mock 응답
        GithubAccessTokenResponseDto actualMockResponse =
                oauthService.accessTokenFrom(mockAccessTokenRequest, "/mock/access_token");

        // 위의 mock 응답이 설정한 mockd 응답과 일치하는지 검증
        StepVerifier.create(Mono.just(actualMockResponse))
                .consumeNextWith(body -> assertThat(body).usingRecursiveComparison()
                        .isEqualTo(expectedMockResponse));

        // mock 요청 전체 검증
        expectRequestCount(1);
        expectRequest(request -> {
            assertThat(request.getPath()).isEqualTo("/mock/access_token");
            assertThat(request.getHeader(HttpHeaders.ACCEPT)).isEqualTo("application/json");
//            try {
//                assertThat(new JSONObject(request.getBody().readUtf8())).usingRecursiveComparison().isEqualTo
//                System.out.println("@@@ result : " + result);
//            } catch (JSONException e) {
//                e.printStackTrace();
//            }
        });
    }

    private void prepareResponse(Consumer<MockResponse> consumer) {
        MockResponse response = new MockResponse();
        consumer.accept(response);
        this.mockWebServer.enqueue(response);
    }

    private void expectRequestCount(int count) {
        assertThat(this.mockWebServer.getRequestCount()).isEqualTo(count);
    }

    private void expectRequest(Consumer<RecordedRequest> consumer) {
        try {
            consumer.accept(this.mockWebServer.takeRequest());
        } catch (InterruptedException ex) {
            throw new IllegalStateException(ex);
        }
    }
}