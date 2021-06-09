package com.codesquad.issuetracker.label.repository;

import com.codesquad.issuetracker.label.domain.Label;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface LabelRepository extends CrudRepository<Label, UUID> {

}
