import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  // serviceURL: string;

  // constructor(private http: HttpClient) {
  //   this.serviceURL = "http://localhost:3000/tasks"
  // }

  // addTask(task : Task) : Observable<Task> {
  //   return this.http.post<Task>(this.serviceURL,task);
  // }

  // getAllTask() : Observable<Task[]> {
  //   return this.http.get<Task[]>(this.serviceURL);
  // }

  // deleteTask(task : Task) : Observable<Task> {
  //   return this.http.delete<Task>(this.serviceURL+'/'+task.id);
  // }

  // editTask(task : Task) : Observable<Task> {
  //   return this.http.put<Task>(this.serviceURL+'/'+task.id,task);
  // }

  addTask(task: Task) {
    let storedTasks = this.getAllTask();
    storedTasks.push(task);
    this.setTask(storedTasks);
  }

  getAllTask(): Task[] {
    var tasks: Task[]
    tasks = JSON.parse(String(localStorage.getItem('checkToDo')))?.tasks as Task[];
    if (tasks === null || tasks === undefined) {
      return []
    } else {
      return tasks
    }
  }

  deleteTask(task: Task, taskIndex: number) {
    let storedTasks = this.getAllTask()
    storedTasks.splice(taskIndex, 1)
    this.setTask(storedTasks);

  }

  editTask(task: Task, taskindex: number) {
    let storedTasks = this.getAllTask();
    storedTasks[taskindex] = task
    this.setTask(storedTasks);
  }


  setTask(task: Task[]) {
    var data = {
      tasks: task
    }
    localStorage.setItem('checkToDo', JSON.stringify(data));
  }


}
