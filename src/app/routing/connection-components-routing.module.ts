import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterTaskComponent } from '../components/register-task/register-task.component';
import { ListTaskComponent } from '../components/list-task/list-task.component';

const routes: Routes = [
  { path: 'register', component: RegisterTaskComponent },
  { path: 'list', component: ListTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ConnectionComponentsRoutingModule { }
