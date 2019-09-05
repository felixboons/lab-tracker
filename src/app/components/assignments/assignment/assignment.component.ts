import {Component, Input, OnInit} from '@angular/core';
import {Assignment} from '../../../models/assignment.model';
import * as moment from 'moment';
import {Action} from '../assignments.component';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit {
  @Input() action: Action;
  @Input() assignment: Assignment = null;

  constructor() { }

  ngOnInit() {
  }

  parseDate(date: Date): string {
    return moment(date, 'ddd LT').toString();
  }

  deadlineHasPassed(date: Date): boolean {
    return moment(date).isAfter(new Date());
  }

}
