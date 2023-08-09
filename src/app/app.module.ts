import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './todo-list/todo-list.component';
import { FormsModule } from './todo-form/todo-form.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ListComponent,
    FormsModule
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    ListComponent,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
