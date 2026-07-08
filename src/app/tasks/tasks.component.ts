import { Component, inject, Input } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  taskService = inject(TasksService);

  @Input({ required: true }) userId!: string;
  @Input({ required: true }) userName!: string;
  isAddingTask: boolean = false;

  get selectedUserTasks() {
    return this.taskService.getUsersTask(this.userId);
  }

  onStartAddNewTask() {
    this.isAddingTask = true;
  }

  onCloseAddNewTask() {
    this.isAddingTask = false;
  }
}
