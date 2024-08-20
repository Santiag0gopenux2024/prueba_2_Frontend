import { Component, OnInit } from '@angular/core';
import { SaveTaskService } from "../../services/save-task.service";
import { Tasks } from "../../interface/interface";
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  tasks: Tasks[] = [];

  constructor(private saveTaskService: SaveTaskService, private router: Router) { }

  ngOnInit(): void {
    this.tasks = this.saveTaskService.getTasks();
  }

  editTask(task: Tasks): void {
    this.saveTaskService.taskObservable = task;
    this.saveTaskService.editing = true;
    this.saveTaskService.openDialog();
  }
}
