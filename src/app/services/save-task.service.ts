import { Injectable } from '@angular/core';
import { Tasks } from "../interface/interface";

@Injectable({
  providedIn: 'root'
})
export class SaveTaskService {

  private tasks: Tasks[] = [];

  getTasks(): Tasks[] {
    return this.tasks;
  }

  addTask(task: Tasks) {
    this.tasks.push(task);
  }

  updateTask(updatedTask: Tasks): void {
    const index = this.tasks.findIndex(task => task.email === updatedTask.email);
    if (index !== -1) {
      this.tasks[index] = { ...this.tasks[index], ...updatedTask };
    }
  }

}
