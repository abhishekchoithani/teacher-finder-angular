package com.example.teacherfinder.dto;

public class Authentication {
    private String message;

    public Authentication(String message) {
        this.message = message;
    }

    public Authentication() {
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
