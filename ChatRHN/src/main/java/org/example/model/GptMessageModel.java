package org.example.model;


public class GptMessageModel {
    private String role;
    private String content;

    public GptMessageModel(String role, String content) {
        this.role = role;
        this.content = content;
    }

    public GptMessageModel() {
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
