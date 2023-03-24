import { Component, OnInit } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Task, TaskStatus } from '../shared/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.page.html',
  styleUrls: ['./task-list.page.scss'],
})
export class TaskListPage implements OnInit {
  taskStatus = TaskStatus;
  tasks$ = collectionData(collection(this.firestore, 'tasks')) as Observable<
    Task[]
  >;

  constructor(private readonly firestore: Firestore) {}

  ngOnInit(): void {}
}
