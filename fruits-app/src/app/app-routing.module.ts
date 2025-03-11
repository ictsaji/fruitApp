import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskAComponent } from './task-a/task-a.component';
import { TaskBComponent } from './task-b/task-b.component';

const routes: Routes = [
  {
    path : "taskA",
    component : TaskAComponent
  },
  
  {
    path : "taskB",
    component : TaskBComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
