import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Assignment} from '../../../models/assignment.model';
import * as moment from 'moment';

@Component({
  selector: 'app-assignment-details',
  templateUrl: './assignment-details.component.html',
  styleUrls: ['./assignment-details.component.scss']
})
export class AssignmentDetailsComponent implements OnInit {
  @Input() assignment: Assignment;
  @Output() actionCanceled = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  parseDate(date: Date): string {
    moment.locale('nl');
    return moment(date).format('LLLL');
  }

  deadlineHasPassed(date: Date): boolean {
    return moment(date).isAfter(new Date());
  }
}
