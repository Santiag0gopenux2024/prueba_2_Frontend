import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tasks } from "../../interface/interface";

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent {
  editForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { task: Tasks },
    private fb: FormBuilder
  ) {
    this.editForm = this.fb.group({
      name: [data.task.name, [Validators.required]],
      taskname: [data.task.taskname, [Validators.required]],
      assignedperson: [data.task.assignedperson, [Validators.required]]
    });
  }

  save(): void {
    if (this.editForm.valid) {
      const updateTask: Tasks = {
        ...this.data.task,
        ...this.editForm.value
      };
      this.dialogRef.close(updateTask);
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
