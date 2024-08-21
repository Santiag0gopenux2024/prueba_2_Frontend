import { Injectable } from '@angular/core';
import { Tasks } from '../interface/interface';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import { BehaviorSubject } from 'rxjs';
import {MatDialog} from "@angular/material/dialog";
import {RegisterTaskComponent} from "../components/register-task/register-task.component";

@Injectable({
  providedIn: 'root'
})
export class SaveTaskService {
  form!: FormGroup;
  private taskSubject: BehaviorSubject<Tasks | null> = new BehaviorSubject<Tasks | null>(null);
  taskSubject$ = this.taskSubject.asObservable();

  editing: boolean = false;

  private tasks: Tasks[] = [];

  constructor(private fb: FormBuilder, public dialog: MatDialog) {}

  set taskObservable(value: Tasks) {
    this.taskSubject.next(value);
  }

  get tasksObservable(){
    return this.taskSubject.getValue();
  }

  getTasks(): Tasks[] {
    return this.tasks;
  }

  addTask(task: Tasks): void {
    const newId = this.tasks.length > 0 ? Math.max(...this.tasks.map(t => t.id || 0)) + 1 : 1;
    task.id = newId;
    this.tasks.push(task);
  }


  set edit(value:boolean){
    this.editing = value;
  }

  get edit(){
    return this.editing;
  }

  updateTask(id: number, updatedTask: Tasks): void {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index !== -1) {
      this.tasks[index] = { ...updatedTask, id };
    }
  }

  initForm(){
    return this.form = this.fb.group({
      name: [this.tasksObservable?.name || undefined, Validators.required],
      email: [this.tasksObservable?.email || undefined, Validators.required],
      taskname: [this.tasksObservable?.taskname || undefined, Validators.required],
      assignedperson: [this.tasksObservable?.assignedperson || undefined, Validators.required],
      selection: [this.tasksObservable?.selection || undefined, Validators.required],
    })
  }

  openDialog(){
    this.dialog.open(RegisterTaskComponent);
  }

  submit(task: Tasks): void {
    if (this.editing && task.id) {
      this.updateTask(task.id, task);
    } else {
      this.addTask(task);
    }
  }
}
