import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherProfileUpdateComponent } from './teacher-profile-update.component';

describe('TeacherProfileUpdateComponent', () => {
  let component: TeacherProfileUpdateComponent;
  let fixture: ComponentFixture<TeacherProfileUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherProfileUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherProfileUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
