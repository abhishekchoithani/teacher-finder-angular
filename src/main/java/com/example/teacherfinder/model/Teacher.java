package com.example.teacherfinder.model;


import com.sun.istack.NotNull;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "teacher")
public class Teacher {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name")
    @NotNull
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @OneToMany(mappedBy = "teacher")
    private Set<CourseRating> ratings;

    @OneToMany(mappedBy = "teacher")
    private Set<TeacherCourseTiming> courseTiming;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public Set<CourseRating> getRatings() {
        return ratings;
    }

    public void setRatings(Set<CourseRating> ratings) {
        this.ratings = ratings;
    }

    public Set<TeacherCourseTiming> getCourseTiming() {
        return courseTiming;
    }

    public void setCourseTiming(Set<TeacherCourseTiming> courseTiming) {
        this.courseTiming = courseTiming;
    }

    @Override
    public String toString() {
        return "Teacher{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", ratings=" + ratings +
                ", courseTiming=" + courseTiming +
                '}';
    }
}
