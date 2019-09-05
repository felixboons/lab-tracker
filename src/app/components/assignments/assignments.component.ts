import { Component, OnInit } from '@angular/core';
import {AssignmentService} from '../../services/assignment.service';
import {Assignment} from '../../models/assignment.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent implements OnInit {
  assignments: Assignment[] = [];

  constructor(private assignmentService: AssignmentService) {
    this.assignmentService.assignmentObs.subscribe((assignments => {
      this.assignments = assignments;
    }));
  }

  ngOnInit() {

  }

}
