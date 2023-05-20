package com.example.teacherfinder.dto;

import com.example.teacherfinder.model.Authority;

import java.util.Arrays;
import java.util.Set;

public class UserDTO {

    private Long id;
    private String email;
    private String firstName;
    private String lastName;
    private Set<String> authorities;
    private String phoneNumber;
    private byte[] profilePhoto;

    public UserDTO() {
    }

    public UserDTO(Long id, String email, String firstName, String lastName, Set<String> authorities, String phoneNumber, byte[] profilePhoto) {
        this.id = id;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.authorities = authorities;
        this.phoneNumber = phoneNumber;
        this.profilePhoto = profilePhoto;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Set<String> getAuthorities() {
        return authorities;
    }

    public void setAuthorities(Set<String> authorities) {
        this.authorities = authorities;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public byte[] getProfilePhoto() {
        return profilePhoto;
    }

    public void setProfilePhoto(byte[] profilePhoto) {
        this.profilePhoto = profilePhoto;
    }

    @Override
    public String toString() {
        return "UserDTO{" +
                "email='" + email + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", authorities=" + authorities +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", profilePhoto=" + Arrays.toString(profilePhoto) +
                '}';
    }
}
