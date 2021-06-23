package com.codesquad.issuetracker.domain.label;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;


@DataJpaTest
class LabelRepositorySupportTest {

    @Autowired
    private LabelRepository labelRepository;

    @Autowired
    private LabelRepositorySupport labelRepositorySupport;

    @Test
    public void findByTitle() {
        Long id = 1L;
        String title = "Test";
        String color = "FFFFFF";
        labelRepository.save(new Label(id, title, null, color));

        List<Label> result = labelRepositorySupport.findByTitle(title);

        assertThat(result).hasSize(1);
        assertThat(result.get(0).getTitle()).isEqualTo(title);
    }
}
