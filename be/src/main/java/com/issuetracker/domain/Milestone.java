package com.issuetracker.domain;

import java.time.LocalDate;

public class Milestone {
    private Long id;
    private String title;
    private String description;
    private LocalDate dueDate;
    private boolean closed;
    private boolean opened;

    public Milestone() {
    }

    public Milestone(Long id, String title, String description, LocalDate dueDate, boolean closed, boolean opened) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.closed = closed;
        this.opened = opened;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getDueDate() {
        return dueDate;
    }

    public void setDueDate(LocalDate dueDate) {
        this.dueDate = dueDate;
    }

    public boolean isClosed() {
        return closed;
    }

    public void setClosed(boolean closed) {
        this.closed = closed;
    }

    public boolean isOpened() {
        return opened;
    }

    public void setOpened(boolean opened) {
        this.opened = opened;
    }
}
