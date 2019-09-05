import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-create-assignment',
  templateUrl: './create-assignment.component.html',
  styleUrls: ['./create-assignment.component.scss']
})
export class CreateAssignmentComponent implements OnInit {
  @Output() actionCanceled = new EventEmitter<boolean>();
  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.initializeForm();
  }

  filterHistoricDates = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  submit() {
    const input = this.form.value;
    input.deadline = this.getDatepickerValue();
    console.log(input);
  }

  private initializeForm() {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      deadline: new FormControl(null, Validators.required)
    });
  }

  getDatepickerValue(): Date {
    const date = $('#datepicker').find(".active").attr("data-date")
    console.log(date);
    return date;
  }

  cancel() {
    this.actionCanceled.emit(true);
  }
}
