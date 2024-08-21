import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SaveTaskService } from "../../services/save-task.service";

@Component({
  selector: 'app-register-task',
  templateUrl: './register-task.component.html',
  styleUrls: ['./register-task.component.css']
})
export class RegisterTaskComponent implements OnInit {
  form!: FormGroup;
  formSubmitted = false;

  constructor(private saveTaskService: SaveTaskService) { }

  ngOnInit(): void {
    this.form = this.saveTaskService.initForm();
  }

  onSubmit(): void {
    this.saveTaskService.submit(this.form.value);
    this.resetForm();
    this.markFormTouched();
  }

  private resetForm(): void {
    this.formSubmitted = false;
    this.form.reset();
    Object.keys(this.form.controls).forEach(key => {
      const control = this.form.get(key);
      control?.setErrors(null);
      control?.markAsPristine({ onlySelf: true });
      control?.markAsUntouched({ onlySelf: true });
    });
  }

  private markFormTouched(): void {
    this.form.markAllAsTouched();
  }
}
