package team02.issue_tracker.domain;

public enum Filter {
    MY_ISSUE, MY_COMMENT, MY_ASSIGN;

    public String getName() {
        return this.name().toLowerCase();
    }
}
