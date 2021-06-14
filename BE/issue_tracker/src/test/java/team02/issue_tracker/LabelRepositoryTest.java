package team02.issue_tracker;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;
import team02.issue_tracker.domain.Label;
import team02.issue_tracker.repository.LabelRepository;

import java.util.List;

@SpringBootTest
@Transactional
public class LabelRepositoryTest {

    @Autowired
    private LabelRepository labelRepository;

    @Test
    @DisplayName("findAll 메소드가 잘 동작하는지 확인한다.")
    public void findAll() {
        List<Label> labels = labelRepository.findAll();
        Assertions.assertThat(labels.size()).isEqualTo(1);
    }
}
