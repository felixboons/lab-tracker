import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AssignmentsComponent} from './components/assignments/assignments.component';
import {CreateAssignmentComponent} from './components/assignments/create-assignment/create-assignment.component';
import {AssignmentComponent} from './components/assignments/assignment/assignment.component';
import {HomeComponent} from './components/home/home.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {StudentsComponent} from './components/students/students.component';
import {StudentComponent} from './components/students/student/student.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AssignmentDetailsComponent} from './components/assignments/assignment-details/assignment-details.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AssignmentsComponent,
    CreateAssignmentComponent,
    AssignmentComponent,
    HomeComponent,
    NavbarComponent,
    StudentsComponent,
    StudentComponent,
    AssignmentDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'art-client'),
    AngularFireDatabaseModule, BrowserAnimationsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
