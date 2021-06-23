package com.issuetracker.domain.elasticsearch;

import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.data.jpa.repository.Query;

public interface IssueDocumentRepository extends ElasticsearchRepository<IssueDocument, Long> {
}
