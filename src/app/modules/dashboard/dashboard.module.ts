import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimesheetComponent } from './components/timesheet/timesheet.component';
import { TaskComponent } from './components/task/task.component';
import { LeaveComponent } from './components/leave/leave.component';



@NgModule({
  declarations: [
    TimesheetComponent,
    TaskComponent,
    LeaveComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
