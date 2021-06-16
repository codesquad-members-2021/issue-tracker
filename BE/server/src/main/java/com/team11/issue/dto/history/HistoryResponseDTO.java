package com.team11.issue.dto.history;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.team11.issue.domain.History;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;

@JsonPropertyOrder({"userName", "historyDateTime", "flag"})
@RequiredArgsConstructor
@Builder
@Getter
public class HistoryResponseDTO {

    @JsonProperty("userName")
    private final String userName;
    private final LocalDateTime historyDateTime;
    private final String flag;

    public static HistoryResponseDTO from(History history) {
        return HistoryResponseDTO.builder()
                .userName(history.getUser().getName())
                .historyDateTime(history.getHistoryDateTime())
                .flag(history.getFlag())
                .build();
    }
}
