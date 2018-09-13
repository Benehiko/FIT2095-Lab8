import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = [];
  title = 'Week9';
  name = '';
  due = '';
  status = '';
  description = '';
  complete = 0;
  newItem() {
    this.data.push({'name': this.name, 'due': this.due, 'status': this.status, 'description': this.description});
    if (this.status == 'complete') {
      this.complete++;
    }
  }
  deleteItem(name) {
    for (let i = 0; i < this.data.length; i++) {
      const item = this.data[i];
      if (item.name === name) {
        if (item.status == 'complete') {
          this.complete--;
        }
        this.data.splice(i, 1);
        break;
      }
    }
  }
  deleteComplete() {
    const index = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].status == 'inProgress') {
        index.push(this.data[i]);
      } else {
        this.complete--;
      }
    }
    this.data = [];
    this.data = this.data.concat(index);
  }
}
