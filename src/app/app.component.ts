import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  fromParent = "Hi from parent";
  public message = "";

  func(data: any) {
    console.log(data);
    this.message = data;
  }
}
