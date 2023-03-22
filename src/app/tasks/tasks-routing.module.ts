import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskDetailPage } from './task-detail/task-detail.page';
import { TaskListPage } from './task-list/task-list.page';

const routes: Routes = [
  { path: '', component: TaskListPage },
  { path: ':id', component: TaskDetailPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {}
