package com.team11.issue.repository;

import com.team11.issue.domain.Label;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LabelRepository extends CrudRepository<Label, Long> {

    @Override
    List<Label> findAll();
}
