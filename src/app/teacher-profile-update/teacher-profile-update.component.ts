import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Teacher } from '../model/Teacher';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-profile-update',
  templateUrl: './teacher-profile-update.component.html',
  styleUrls: ['./teacher-profile-update.component.css']
})
export class TeacherProfileUpdateComponent implements OnInit {

  public teacher = {} as Teacher;

  constructor(private apiService: ApiService, private modalService: NzModalService, private route: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('teacherId') != null ) {
      let teacherId : any = localStorage.getItem('teacherId');

       this.apiService.getTeacherById(Number(teacherId)).subscribe(
        {
          next:(value) => {
            this.teacher = value;
            
          }, error:(err) => {
              console.error(err.message())
          }
        }
       );
    }
  }

  updateTeacher() {
    this.apiService.updateTeacher(this.teacher).subscribe({
      next: (value) => {
          this.successModal();
      }, error: (err) => {
        this.errorModal();
      },
    });
  }

  back() {
    window.history.back();
  }

  successModal(): void {
    const modal = this.modalService.success({
      nzTitle: 'Updated',
      nzContent: 'Teacher details have been updated successfully',
      nzOnOk: () => this.route.navigate(['teacher-dashboard'])
    });

    setTimeout(() => {
      modal.destroy(),
      this.route.navigate(['/teacher-dashboard'])
    }
      , (3000));
  }

  
  errorModal(): void {
    const modal = this.modalService.error({
      nzTitle: 'Unable to update details',
      nzContent: 'Could not update teacher details. Kindly Try Again',
      nzOnOk: () => this.route.navigate(['teacher-dashboard'])
    });

    //setTimeout(() => modal.destroy(), (3*1000));
  }

}
