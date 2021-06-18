package com.issuetracker.exception;

public class MilestoneNotFoundException extends ElementNotFoundException {

    public MilestoneNotFoundException() {
        super("Cannot find milestone.");
    }
}
