package com.jane_eno.issue_tracker.domain.comment;


import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@RequiredArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NonNull
    private String comment;

    @NonNull
    private LocalDateTime createdDateTime;
}
