import { Component, OnInit } from '@angular/core';
import { SaveTaskService } from "../../services/save-task.service";
import { Tasks } from "../../interface/interface";

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  tasks: Tasks[] = [];

  constructor(private saveTaskService: SaveTaskService) { }

  ngOnInit(): void {
    this.tasks = this.saveTaskService.getTasks();
  }

  editTask(task: Tasks): void {
    this.saveTaskService.addTask(task);
    this.tasks = this.saveTaskService.getTasks();
  }
}









// import { Component, OnInit } from '@angular/core';
// import { SaveTaskService } from "../../services/save-task.service";
// import { Tasks } from "../../interface/interface";
// import {EditTaskComponent} from "../edit-task/edit-task.component";
// import { MatDialog } from '@angular/material/dialog';
//
// @Component({
//   selector: 'app-list-task',
//   templateUrl: './list-task.component.html',
//   styleUrls: ['./list-task.component.css']
// })
// export class ListTaskComponent implements OnInit {
//
//   tasks: Tasks[] = [];
//
//   constructor(private saveTaskService: SaveTaskService, private dialog: MatDialog) { }
//
//   ngOnInit(): void {
//     this.tasks = this.saveTaskService.getTasks();
//   }
//
//   editTask(task: Tasks): void {
//     const dialogRef = this.dialog.open(EditTaskComponent, {
//       width: '400px',
//       data: { task: { ...task } }
//     });
//
//     dialogRef.afterClosed().subscribe((result: Tasks | undefined) => {
//       console.log('Dialog Result:', result);
//       if (result) {
//         const index = this.tasks.findIndex(i => i.email === result.email);
//         console.log('Task Index:', index);
//         if (index !== -1) {
//           this.tasks[index] = result;
//           console.log('Updated Items:', this.tasks);
//           this.saveTaskService.updateTask(result);
//         }
//       }
//     });
//   }
// }
