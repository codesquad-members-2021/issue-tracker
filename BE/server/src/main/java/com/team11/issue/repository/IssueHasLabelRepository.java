package com.team11.issue.repository;

import com.team11.issue.domain.IssueHasLabel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IssueHasLabelRepository extends CrudRepository<IssueHasLabel, Long> {
    @Override
    <S extends IssueHasLabel> Iterable<S> saveAll(Iterable<S> entities);

}
