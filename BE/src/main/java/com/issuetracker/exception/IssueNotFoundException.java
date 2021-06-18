package com.issuetracker.exception;

public class IssueNotFoundException extends ElementNotFoundException {

    public IssueNotFoundException() {
        super("Cannot find issue.");
    }
}
