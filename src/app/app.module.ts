import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { RegisterTaskComponent } from './components/register-task/register-task.component';
import { ListTaskComponent } from './components/list-task/list-task.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';

import { MaterialModule } from "./material/material.module";
import { SaveTaskService } from "./services/save-task.service";
import { ConnectionComponentsRoutingModule } from "./routing/connection-components-routing.module";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    RegisterTaskComponent,
    ListTaskComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ConnectionComponentsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [SaveTaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
