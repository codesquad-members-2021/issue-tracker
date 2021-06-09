package com.codesquad.issuetracker.label.repository;

import com.codesquad.issuetracker.label.domain.BackgroundColor;
import com.codesquad.issuetracker.label.domain.Label;
import com.codesquad.issuetracker.label.domain.LabelName;
import com.codesquad.issuetracker.label.domain.TextColor;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
class LabelRepositoryTest {
    private final Logger logger = LoggerFactory.getLogger(LabelRepositoryTest.class);
    @Autowired
    private LabelRepository labelRepository;

    @PersistenceContext
    private EntityManager entityManager;

    @Test
    void create() {
        Label label = Label.newLabel(BackgroundColor.of("#000000"), LabelName.of("description", TextColor.LIGHT), "description");
        label = labelRepository.save(label);
        entityManager.flush();

        Label selectedLabel = labelRepository.findById(label.getId()).orElseThrow(RuntimeException::new);

        assertThat(label).isEqualTo(selectedLabel);
    }

}
