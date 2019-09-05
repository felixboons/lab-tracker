import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Assignment} from '../models/assignment.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
  private assignmentRef: AngularFireList<any> = this.db.list('/assignments');
  assignmentObs;

  constructor(private db: AngularFireDatabase) {
    this.assignmentObs = this.assignmentRef.snapshotChanges().pipe(map(changes => {
      return changes
        .map(c => ({key: c.payload.key, ...c.payload.val()}))
        .sort((a, b) => -1
        );
    }));
  }

  getAssignments() {
    return this.assignmentRef.snapshotChanges().pipe(map(changes => {
      return changes
        .map(c => ({key: c.payload.key, ...c.payload.val()}))
        .sort((a, b) => -1);
    }));
  }

  getAssignmentsByTitle(title: string) {
    return this.assignmentRef.snapshotChanges().pipe(map(changes => {
    return changes
      .map(c => ({key: c.payload.key, ...c.payload.val()}))
      .filter(c => console.log(c))
      .sort((a, b) => -1
      );
    }));
  }

  createAssignment(input: any): Promise<string> {
    const assignment = new Assignment(input);

    return new Promise((resolve, reject) => {
      this.assignmentRef.push(assignment)
        .then(() => resolve('Opdracht aangemaakt'))
        .catch(() => reject('Kon de opdracht niet aanmaken'));
    });
  }
}
