// src/app/todo/todo-list/todo-list.component.ts
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class ListComponent implements OnInit {
  tasks: any[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.todoService.getAllTasks().subscribe((data: any) => {
      this.tasks = data;
    });
  }
}
