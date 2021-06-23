package com.issuetracker.domain.elasticsearch;

import org.springframework.data.elasticsearch.annotations.CountQuery;
import org.springframework.data.elasticsearch.annotations.Query;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

import java.util.List;

public interface IssueDocumentRepository extends ElasticsearchRepository<IssueDocument, Long> {

    @CountQuery("{\"match\": {\"title\": \"?0\"}}")
    long countIssueDocumentByIsOpen(String title, boolean isOpen);

    @Query("{\"match\": {\"title\": \"?0\"}}")
    List<IssueDocument> findAllByTitle(String title);
}
