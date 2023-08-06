import { Component } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})


export class AppComponent {
  addItem(description: string) {  // Fixed parameter name
    this.allItems.unshift({
      description,
      done: false
    });
  }

  title = 'todo';

  // ToDo: Eliminar esta lista al momento de integrar la API
  filter: "all" | "active" | "done" = "all";

  allItems = [
    { description: "Diseño de personajes Nacho", done: false },
    { description: "Desarrollo página Laboratorio", done: false },
    { description: "Storyboard Sena", done: false },
    { description: "Marca Chromatic Cakes", done: false },
    { description: "Curso Photoshop", done: true },
    { description: "Curso Illustrator", done: true },
  ];

  get items() {
    if (this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter((item) => {
      return this.filter === "done" ? item.done : !item.done;  // Added return statement
    });
  }

  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
  
}
