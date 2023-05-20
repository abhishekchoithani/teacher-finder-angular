package com.example.teacherfinder.model;

import javax.persistence.*;

@Entity
public class TeacherCourseTiming {

    @EmbeddedId
    TeacherCourseTimingKey id;

    @ManyToOne
    @MapsId("courseId")
    @JoinColumn(name = "course_id")
    Course course;

    @ManyToOne
    @MapsId("teacherId")
    @JoinColumn(name = "teacher_id")
    Teacher teacher;


    @ManyToOne
    @MapsId("timeSlotId")
    @JoinColumn(name = "time_slot_id")
    TimeSlots timeSlots;

    public TeacherCourseTimingKey getId() {
        return id;
    }

    public void setId(TeacherCourseTimingKey id) {
        this.id = id;
    }

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }

    public Teacher getTeacher() {
        return teacher;
    }

    public void setTeacher(Teacher teacher) {
        this.teacher = teacher;
    }

    public TimeSlots getCourseTimeSlots() {
        return timeSlots;
    }

    public void setCourseTimeSlots(TimeSlots timeSlots) {
        this.timeSlots = timeSlots;
    }
}
