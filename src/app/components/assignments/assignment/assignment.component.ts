import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Assignment} from '../../../models/assignment.model';
import * as moment from 'moment';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit {
  @Output() assignmentSelected = new EventEmitter<number>();
  @Input() assignment: Assignment = null;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

  viewAssignment(): void {
    this.assignmentSelected.emit(this.index);
  }

  parseDate(date: Date): string {
    moment.locale('nl');
    return moment(date).format('LLLL');
  }

  deadlineHasPassed(date: Date): boolean {
    return moment(date).isAfter(new Date());
  }
}
