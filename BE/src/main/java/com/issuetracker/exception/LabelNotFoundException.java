package com.issuetracker.exception;

public class LabelNotFoundException extends ElementNotFoundException {

    public LabelNotFoundException() {
        super("Cannot find label.");
    }
}
