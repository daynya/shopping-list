import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-list';

  allItems = [
    { description: 'milk', done: false },
    { description: 'bread', done: false },
    { description: 'eggs', done: false },
    { description: 'beer', done: true }
  ]

  get items() {
    return this.allItems;
  }

  addItem(description: string) {
    if (description && description.length > 0) {
      this.allItems.push({
        description,
        done: false
      });
    }
  }

  remove(item: any) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }

}
