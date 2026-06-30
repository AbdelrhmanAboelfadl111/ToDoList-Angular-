import { Injectable } from '@angular/core';
import { TaskInfoModle, TaskModel } from '../models/task.model';
import { userModle } from '../models/user.model';

@Injectable({
    providedIn:'root'
})
export class TasksService {

    public tasks: TaskModel[] = [];

    constructor() {
        let storedData: string = localStorage.getItem("tasks") ?? JSON.stringify([]);
        this.tasks = JSON.parse(storedData);
        this.updateLocalstorage();
    }

    public getTasksFromService(userId:String): TaskModel[]{
        return this.tasks.filter((task) => task.userId == userId);
    }

    public addTask(task:TaskInfoModle , userid:string) {
        let newTask: TaskModel = {
            id: new Date().getTime().toString(),
            userId:userid,
            ...task
        };
        this.tasks.push(newTask)
    }
    public deleteTask(taskId: string) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
        this.updateLocalstorage();
    }

    private updateLocalstorage() {
        localStorage.setItem("tasks",JSON.stringify(this.tasks))
    }

}
