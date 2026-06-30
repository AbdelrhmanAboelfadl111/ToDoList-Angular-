import { Component, inject, input } from '@angular/core';
import { TaskComponent } from "../task/task.component";
import { NewTaskComponent } from '../new-task/new-task.component';
import { userModle } from '../../models/user.model';
import { TasksService } from '../../services/tasks.service';
import { TaskModel } from '../../models/task.model';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent,NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {

  public ispopUp: boolean = false;

  public tasks: TaskModel[] = [];
  
  public selectedUser = input.required<userModle>();

  private TasksService = inject(TasksService);

  get getTasks() {
    return this.TasksService.getTasksFromService(this.selectedUser().id);
  }

  public togglePopup() {
    this.ispopUp = !this.ispopUp;
  }

 

}
