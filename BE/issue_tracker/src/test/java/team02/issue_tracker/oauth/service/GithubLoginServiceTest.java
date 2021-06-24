package team02.issue_tracker.oauth.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import okhttp3.mockwebserver.MockResponse;
import okhttp3.mockwebserver.MockWebServer;
import okhttp3.mockwebserver.RecordedRequest;
import org.json.JSONException;
import org.json.JSONObject;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpHeaders;
import org.springframework.http.client.reactive.ClientHttpConnector;
import org.springframework.http.client.reactive.ReactorClientHttpConnector;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;
import reactor.test.StepVerifier;
import team02.issue_tracker.oauth.dto.AccessToken;
import team02.issue_tracker.oauth.dto.SocialProfile;
import team02.issue_tracker.oauth.dto.github.GithubAccessTokenRequest;
import team02.issue_tracker.oauth.dto.github.GithubAccessToken;
import team02.issue_tracker.oauth.dto.github.GithubUserProfile;

import java.io.IOException;
import java.util.function.Consumer;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class GithubLoginServiceTest {

    private MockWebServer mockWebServer;
    private WebClient webClient;
    private ClientHttpConnector connector;
    private ObjectMapper objectMapper;

    private GithubLoginService githubLoginService;

    @AfterEach
    void shutdown() throws IOException {
        this.mockWebServer.shutdown();
    }

    private void startServer() {
        this.mockWebServer = new MockWebServer();
        this.connector = new ReactorClientHttpConnector();
        this.objectMapper = new ObjectMapper();
        this.webClient = WebClient.builder()
                .clientConnector(connector)
                .baseUrl(mockWebServer.url("/").toString())
                .build();
    }

    @DisplayName("mock 서버에 mock access token request를 보내서 mock access token response를 받는다.")
    @Test
    void requestGithubAccessToken() {
        startServer();

        githubLoginService = new GithubLoginService(webClient);

        // mock 응답 바디 데이터 설정
        GithubAccessToken expectedMockResponse = GithubAccessToken
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
        GithubAccessTokenRequest mockAccessTokenRequest = GithubAccessTokenRequest
                .builder()
                .clientId("mock client id")
                .clientSecret("mock client secret")
                .redirectUri("mock redirect uri")
                .code("mock code")
                .build();

        // mock 요청을 mock 서버에 보내서 가져온 응답
        AccessToken receivedResponse =
                githubLoginService.getAccessToken(mockAccessTokenRequest, "/mock/access_token");

        // 반환된 응답이 설정한 mock 응답과 일치하는지 검증
        StepVerifier.create(Mono.just(receivedResponse))
                .consumeNextWith(body -> assertThat(body).usingRecursiveComparison()
                        .isEqualTo(expectedMockResponse));

        // mock 요청 전체 검증
        expectRequestCount(1);
        expectRequest(request -> {
            assertThat(request.getPath()).isEqualTo("/mock/access_token");
            assertThat(request.getHeader(HttpHeaders.ACCEPT)).isEqualTo("application/json");

            try {
                JSONObject jsonObject = new JSONObject(request.getBody().readUtf8());
                assertThat(jsonObject.get("client_id")).isEqualTo("mock client id");
                assertThat(jsonObject.get("client_secret")).isEqualTo("mock client secret");
                assertThat(jsonObject.get("redirect_uri")).isEqualTo("mock redirect uri");
                assertThat(jsonObject.get("code")).isEqualTo("mock code");
            } catch (JSONException e) {
                e.printStackTrace();
            }
        });
    }

    @DisplayName("mock 서버에 mock user info request를 보내 mock user info response를 받는다")
    @Test
    void requestGithubUser() {
        startServer();

        githubLoginService = new GithubLoginService(webClient);

        GithubUserProfile expectedResponse = GithubUserProfile.builder()
                .email("mock email")
                .login("mock login")
                .avatarUrl("mock url")
                .build();

        prepareResponse(response -> {
            try {
                response.addHeader("Content-Type", "application/json");
                response.setBody(objectMapper.writeValueAsString(expectedResponse));
            } catch (JsonProcessingException e) {
                e.printStackTrace();
            }
        });

        GithubAccessToken mockAccessToken =
                GithubAccessToken.builder()
                .accessToken("mock access token")
                .build();

        SocialProfile receivedResponse =
                githubLoginService.getUserProfile(mockAccessToken, "/mock/userInfo");

        StepVerifier.create(Mono.just(receivedResponse))
                .consumeNextWith(body -> assertThat(body).usingRecursiveComparison()
                        .isEqualTo(expectedResponse));

        expectRequestCount(1);
        expectRequest(request -> {
            assertThat(request.getPath()).isEqualTo("/mock/userInfo");
            assertThat(request.getHeader(HttpHeaders.AUTHORIZATION))
                    .isEqualTo("token " + mockAccessToken.value());
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