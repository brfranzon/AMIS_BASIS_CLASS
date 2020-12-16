import { TestView01Component } from './components/test-view01/test-view01.component';
import { NgModule, ViewChild } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ViewEditComponent } from './components/view-edit/view-edit.component';


const routes: Routes = [
  { path: 'test-view01', component: TestView01Component },
  { path: 'view-edit', component: ViewEditComponent },
  { path: 'view-edit/:id', component: ViewEditComponent }

];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
