package com.team11.issue.repository;

import com.team11.issue.domain.IssueHasLabel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IssueHasLabelRepository extends CrudRepository<IssueHasLabel, Long> {
    @Override
    <S extends IssueHasLabel> Iterable<S> saveAll(Iterable<S> entities);

    void deleteAllByIssueId(Long issueId);

    List<IssueHasLabel> findAllByIssueId(Long issueId);
}
