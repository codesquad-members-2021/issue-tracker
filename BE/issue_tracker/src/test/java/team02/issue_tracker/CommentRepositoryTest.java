package team02.issue_tracker;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;
import team02.issue_tracker.domain.Comment;
import team02.issue_tracker.domain.CommentEmoji;
import team02.issue_tracker.exception.CommentNotFoundException;
import team02.issue_tracker.repository.CommentEmojiRepository;
import team02.issue_tracker.repository.CommentRepository;

import java.util.List;

@SpringBootTest
@Transactional
public class CommentRepositoryTest {

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private CommentEmojiRepository commentEmojiRepository;

    @Test
    @DisplayName("코멘트의 id로 CommentEmoji 리스트를 잘 반환하는지 확인한다.")
    void findCommentEmojiByCommentId() {
        Comment comment = commentRepository.findById(1L).orElseThrow(CommentNotFoundException::new);
        List<CommentEmoji> commentEmojis = commentEmojiRepository.findByCommentId(comment.getId());

        Assertions.assertThat(commentEmojis.size()).isEqualTo(2);
    }
}
