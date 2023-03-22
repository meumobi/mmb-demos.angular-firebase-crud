import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TaskListPage } from './task-list/task-list.page';
import { IonicModule } from '@ionic/angular';
import { TaskDetailPage } from './task-detail/task-detail.page';

@NgModule({
  declarations: [TaskListPage, TaskDetailPage],
  imports: [CommonModule, TasksRoutingModule, IonicModule],
})
export class TasksModule {}
