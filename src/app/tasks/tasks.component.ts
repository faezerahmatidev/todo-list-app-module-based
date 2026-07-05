import { Component, inject, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTask } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
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
