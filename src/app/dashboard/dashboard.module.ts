import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const dashboardRoutes: Routes = [
  {path: '', component: DashboardComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(dashboardRoutes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class DashboardModule { 
  constructor(){
    console.log("Dashboard Module Loaded!");
    
  }
 }