import { Component, OnInit } from '@angular/core';

import { SharedService } from '../../../shared/shared.service';
import { Evaluation } from '../evaluation';

import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  standalone: false,
  selector: 'app-evaluation-list',
  imports: [],
  templateUrl: './evaluation-list.html',
  styleUrl: './evaluation-list.scss',
})
export class EvaluationList implements OnInit {
  faPencil = faPencil;
  faTrash = faTrash;

  evaluations: any[] = [];
  courseLabel: Array<{ value: string; label: string }> = [];
  userLabel: Array<{ value: string; label: string }> = [];

  constructor(
    private sharedService: SharedService,
    private evaluationService: Evaluation,
  ) {}

  async ngOnInit(): Promise<void> {
    this.courseLabel = await this.sharedService.convertCourseToOption();
    this.userLabel = await this.sharedService.convertUserToOption();
  }

  getLabelCourse(value: string): string | undefined {
    let course = this.courseLabel.find((course) => course.value == value);
    return course?.label;
  }

  getLabelUser(value: string): string | undefined {
    let user = this.userLabel.find((user) => user.value == value);
    return user?.label;
  }
}
