import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AssignmentsComponent} from './components/assignments/assignments.component';
import {AssignmentComponent} from './components/assignments/assignment/assignment.component';
import {StudentComponent} from './components/students/student/student.component';
import {StudentsComponent} from './components/students/students.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'opdrachten', component: AssignmentsComponent },
  { path: 'studenten', component: StudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
