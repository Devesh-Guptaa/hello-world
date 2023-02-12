import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  constructor() {

  }

  ngOnInit() {
    // public hero = "";
  }

  @Input() public parentData: any;
  @Input('parentData') public data: any;

  @Output() public createEvent = new EventEmitter();

  public name = "Devesh";
  public order = false;
  public className = "temp";
  public className2 = "temp2";
  public output = "";
  public show = true;
  public color = "blue";
  public colors = ["red", "blue", "green"];

  //For pipes
  public Fullname = "Devesh gupta";
  public date = new Date();
  public number = 5.678;
  public obj = {
    firstname: "Devesh",
    lastname: "Gupta"
  }


  onclick() {
    console.log("Hello");
  }

  print(prop: any) {
    console.log(prop);
  }

  func() {
    this.createEvent.emit("message from child");
    console.log("Event Emitted");
  }
}
