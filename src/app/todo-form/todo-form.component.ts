// src/app/todo/todo-form/todo-form.component.ts
import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class FormsModule {
  newTask: any = {};

  constructor(private todoService: TodoService) {}

  createTask() {
    this.todoService.createTask(this.newTask).subscribe(() => {
      this.newTask = {}; // Limpiar el formulario después de agregar la tarea
    });
  }
}
