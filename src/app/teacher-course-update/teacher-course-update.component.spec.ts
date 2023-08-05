import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCourseUpdateComponent } from './teacher-course-update.component';

describe('TeacherCourseUpdateComponent', () => {
  let component: TeacherCourseUpdateComponent;
  let fixture: ComponentFixture<TeacherCourseUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherCourseUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherCourseUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
