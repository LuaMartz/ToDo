// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './todo-list/todo-list.component';
import { FormsModule } from './todo-form/todo-form.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'add', component: FormsModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
