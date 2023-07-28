import { Component } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
addItem(arg0: string) {
throw new Error('Method not implemented.');
}
  title = 'todo';

  // ToDo: Eliminar esta lista al momento de integrar la API
  filter: "all" | "active" | "done" = "all"

  allItems = [
    {description: "Diseño de personajes Nacho", done:false},
    {description: "Desarrollo página Laboratorio", done:false},
    {description: "Storyboard Sena", done:false},
    {description: "Marca Chromatic Cakes", done:false},
    {description: "Curso Photoshop", done:true},
    {description: "Curso Illustrator", done:true},
  ]

  get items() {
    if (this.filter === "all"){
      return this.allItems
    }
    return this.allItems.filter((item)=>{
      this.filter ==="done" ? item.done : !item.done
    })
  }
}