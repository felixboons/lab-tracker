import {Component, Input, OnInit} from '@angular/core';
import {AssignmentService} from '../../services/assignment.service';
import {Assignment} from '../../models/assignment.model';

export enum Action {
  VIEW, CREATE
}

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent implements OnInit {
  action: Action = Action.VIEW;
  assignments: Assignment[] = [];

  constructor(private assignmentService: AssignmentService) {
    this.assignmentService.getAssignments().subscribe((assignments => {
      this.assignments = assignments;
    }));
  }

  ngOnInit() {

  }
}
