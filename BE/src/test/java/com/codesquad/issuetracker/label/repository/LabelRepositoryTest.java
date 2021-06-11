package com.codesquad.issuetracker.label.repository;

import com.codesquad.issuetracker.label.domain.Colors;
import com.codesquad.issuetracker.label.domain.Label;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
class LabelRepositoryTest {

    private final Colors blackWhite = new Colors.Builder()
            .backgroundColor("#000000")
            .textColor("#ffffff")
            .build();

    @Autowired
    private LabelRepository labelRepository;

    @PersistenceContext
    private EntityManager entityManager;

    @Test
    void create() {
        Label label = Label.create("document", "문서에 대한 레이블", blackWhite);
        label = labelRepository.save(label);

        entityManager.flush();
        entityManager.detach(label);

        Label selectedLabel = labelRepository.findById(label.getId()).orElseThrow(RuntimeException::new);

        assertThat(label).isEqualTo(selectedLabel);
    }

}
