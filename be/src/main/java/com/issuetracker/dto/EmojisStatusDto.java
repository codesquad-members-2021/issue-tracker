package com.issuetracker.dto;

public class EmojisStatusDto {
    private String code;
    private boolean selected;

    public EmojisStatusDto(String code, boolean selected) {
        this.code = code;
        this.selected = selected;
    }

    public String getCode() {
        return code;
    }

    public boolean isSelected() {
        return selected;
    }

    @Override
    public String toString() {
        return "EmojisStatusDto{" +
                "code='" + code + '\'' +
                ", selected=" + selected +
                '}';
    }
}
