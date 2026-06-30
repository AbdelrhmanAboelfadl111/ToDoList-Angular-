import { Component, inject, input } from '@angular/core';
import { TaskModel } from '../../models/task.model';
import { CommonModule } from '@angular/common';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-task',
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {

  public currentTask = input.required<TaskModel>();
  private tasksServices = inject(TasksService);

  public compeletTask(taskId: string) {
    this.tasksServices.deleteTask(taskId)
  }
}
