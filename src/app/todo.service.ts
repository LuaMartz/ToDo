// src/app/todo/todo.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private baseUrl = 'http://localhost:3005'; // URL de tu backend

  constructor(private http: HttpClient) {}

  getAllTasks() {
    return this.http.get(`${this.baseUrl}/api/tasks`);
  }

  getTaskById() {
    return this.http.get(`${this.baseUrl}/api/tasks/:id`)
  }

  createTask(taskData: any) {
    return this.http.post(`${this.baseUrl}/api/tasks`, taskData);
  }

  updateTask(taskData: any) {
    return this.http.patch(`${this.baseUrl}/api/update/:id`, taskData);
  }

  deleteTask(taskData: any) {
    return this.http.delete(`${this.baseUrl}/api/delete/:id`, taskData);
  }
}