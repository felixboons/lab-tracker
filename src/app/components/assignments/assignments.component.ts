import {Component, OnInit} from '@angular/core';
import {AssignmentService} from '../../services/assignment.service';
import {Assignment} from '../../models/assignment.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent implements OnInit {
  assignments: Assignment[] = [];
  currentAssignment: Assignment = null;
  creating = false;
  searchQuery: string = null;

  constructor(private assignmentService: AssignmentService) {
    this.assignmentService.getAssignments().subscribe((assignments => {
      this.assignments = assignments;
    }));
  }

  ngOnInit() {
  }

  setAssignment(index: number) {
    this.currentAssignment = this.assignments[index];
  }

  startCreating(): void {
    this.creating = true;
  }

  cancelCreation(): void {
    this.creating = false;
  }

  filterAssignments(title: string): void {
    this.assignmentService.getAssignmentsByTitle(title).subscribe((assignments) => {
      this.assignments = assignments;
    })
  }

  searchAssignments() {
    console.log(this.searchQuery);
    this.assignmentService.getAssignmentsByTitle(this.searchQuery);
  }
}
