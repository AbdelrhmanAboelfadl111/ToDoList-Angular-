import { Component, inject, Inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { UsersComponent } from './components/users/users.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { TaskComponent } from './components/task/task.component';
import { UsersService } from './services/users.service';
import { userModle } from './models/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ HeaderComponent, TasksComponent, UsersComponent, NewTaskComponent, TaskComponent, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  public users!: userModle[];

  public usersService = inject(UsersService);

  public selectedUser: userModle | null = null;

  constructor() {
    this.users = this.usersService.getUsersFromServices();
  }

  public updateSelectedUser(user:userModle) {
    this.selectedUser = user;
  }

}
