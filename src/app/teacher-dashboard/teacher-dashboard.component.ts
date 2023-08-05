import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { Teacher } from '../model/Teacher';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent implements OnInit {

  public teacher = {} as Teacher; //teacher
  selectedFile!: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message!: string;
  imageName: any;
  teacherId : any;
  
  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit(): void {
    if(localStorage.getItem('teacherId') != null ) {
      this.teacherId = localStorage.getItem('teacherId');

       this.apiService.getTeacherById(Number(this.teacherId)).subscribe(
        {
          next:(value) => {
            this.teacher = value;
            this.retrievedImage = 'data:image/jpeg;base64,' + this.teacher.profilePicture;
            
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
          alert("updated");
      }, error: (err) => {
        alert("not updated");
      },
    });
  }

  logout() {
    this.apiService.logout();
    this.router.navigate(['']);
   // this.isAuthenticated = false;
  }

  //Gets called when the user selects an image
  public onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
  }

   //Gets called when the user clicks on submit to upload the image
   onUpload() {
    console.log(this.selectedFile);
    
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  
     //Make a call to the Spring Boot Application to save the image
     this.httpClient.post('http://localhost:8080/teacher/profile-upload/'+this.teacherId, uploadImageData, { observe: 'response' })
     .subscribe((response) => {
       if (response.status === 200) {
         this.message = 'Image uploaded successfully';
       } else {
         this.message = 'Image not uploaded successfully';
       }
     }
     );
  
  }


     //Gets called when the user clicks on retieve image button to get the image from back end
     getImage() {
      //Make a call to Sprinf Boot to get the Image Bytes.
      this.httpClient.get('http://localhost:8080/image/get/' + this.imageName)
        .subscribe(
          res => {
            this.retrieveResonse = res;
            this.base64Data = this.retrieveResonse.picByte;
            this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
          }
        );
    }


}
