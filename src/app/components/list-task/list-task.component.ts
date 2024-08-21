import { Component, OnInit } from '@angular/core';
import { SaveTaskService } from "../../services/save-task.service";
import { Tasks } from "../../interface/interface";
import { MatDialog } from '@angular/material/dialog';
import { RegisterTaskComponent } from '../register-task/register-task.component';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {
  tasks: Tasks[] = [];

  constructor(private saveTaskService: SaveTaskService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.tasks = this.saveTaskService.getTasks();
  }

  editTask(task: Tasks): void {
    this.saveTaskService.taskObservable = task;
    this.saveTaskService.edit = true;
    this.dialog.open(RegisterTaskComponent, {
      width: '400px'
    });
  }
}
