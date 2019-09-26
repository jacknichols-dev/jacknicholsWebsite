import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent {
  constructor(private httpClient: HttpClient) {}

  myData = { mynumber: 1 };

  makeitFive() {
    this.myData.mynumber = 5;
    this.httpClient
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .subscribe(data => {
        this.myData.mynumber = data as number;
      });
  }
}
