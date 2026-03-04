import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { CourseService } from '../pages/course/course.service';
import { UserService } from '../pages/user/user.service';

//Criar esses exports
export interface Params {
  [key: string]: any;
}

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  users: Array<{ id: string; first_name: string }> = [];
  courses: Array<{ id: string; name: string }> = [];

  userLabel: Array<{ value: string; label: string }> = [];
  courseLabel: Array<{ value: string; label: string }> = [];

  async convertUserToOption(): Promise<any[]> {
    this.users.forEach((user: { id: string; first_name: string }) => {
      let u = {
        value: user.id.toString(),
        label: user.first_name,
      };
      this.userLabel.push(u);
    });
    return this.userLabel;
  }

  async convertCourseToOption(): Promise<any[]> {
    this.courses.forEach((course: { id: string; name: string }) => {
      let c = {
        value: course.id.toString(),
        label: course.name,
      };
      this.courseLabel.push(c);
    });
    return this.courseLabel;
  }

  constructor(
    private userService: UserService,
    private courseService: CourseService,
  ) {}
}
