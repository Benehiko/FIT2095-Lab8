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
  completeLength = 0;
  newItem() {
    this.data.push({'name': this.name, 'due': this.due, 'status': this.status, 'description': this.description});
    if (this.status === 'Complete') {
      this.completeLength++;
    }
  }
  deleteItem() {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].name === this.name) {
        this.data.splice(i, 1);
      }
    }
  }
  deleteComplete() {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].status === 'Complete') {
        this.data.splice(i, 1);
        this.completeLength--;
      }
    }
  }
}
