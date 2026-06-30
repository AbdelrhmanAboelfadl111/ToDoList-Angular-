import { Component, inject, input, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {

  public tasksService = inject(TasksService);
  
  public isPopUp = output<boolean>();

  public selectedUserId = input.required<string>();

  public fire() {
    this.isPopUp.emit(false);
  }

  public addTask(ele: NgForm) {
    console.log(ele);
    if (ele.invalid) return;
    this.tasksService.addTask(ele.value, this.selectedUserId());
    this.fire()

  }
}
