import { Component, OnInit } from '@angular/core';
import { course } from '../model/course';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-teacher-course-update',
  templateUrl: './teacher-course-update.component.html',
  styleUrls: ['./teacher-course-update.component.css']
})
export class TeacherCourseUpdateComponent implements OnInit {

  existingCourseList: course[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAllCourses().subscribe(
      (data) => {
        this.existingCourseList = data;
      },
      (error: Error) => {
        console.error(error);
      }
    )
  }

}
