import { Component,Inject } from '@angular/core';
import { from } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student-app-mgt';
  students:Student[]=[];
  constructor(@Inject(HttpClient) private http:HttpClient){
  }

  ngOnInit(){
    this.http.get("http://localhost:9090/api/student/all").subscribe(
    (response: Array<Student>) =>{
     this.students = response;
      });
    
  }
}
