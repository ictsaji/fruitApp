import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskAComponent } from './task-a/task-a.component';
import { TaskBComponent } from './task-b/task-b.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskAComponent,
    TaskBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
