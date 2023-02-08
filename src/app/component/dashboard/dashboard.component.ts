import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  taskObj : Task = new Task();
  taskIndex : number = 0

  taskArr : Task[] = [];

  addTaskValue : string = '';
  editTaskValue : string = '';

  constructor(private crudService : CrudService) { }

  ngOnInit(): void {
    this.editTaskValue = '';
    this.addTaskValue = '';
    this.taskObj = new Task();
    this.taskArr = [];
    this.getAllTask();
  }
  getAllTask() {
    this.taskArr =  this.crudService.getAllTask()
    console.log(this.taskArr);

  }

  addTask() {
    this.taskObj.task_name = this.addTaskValue;
    this.crudService.addTask(this.taskObj)
      this.ngOnInit();
   }

  editTask() {
    this.taskObj.task_name = this.editTaskValue;
    this.crudService.editTask(this.taskObj, this.taskIndex)
      this.ngOnInit();

  }

  deleteTask(etask : Task, index:number) {
    this.crudService.deleteTask(etask,index)
      this.ngOnInit();

  }

  call(etask : Task, index:number) {
     this.taskIndex =index
    this.taskObj = etask;
    this.editTaskValue = etask.task_name;
  }


}
