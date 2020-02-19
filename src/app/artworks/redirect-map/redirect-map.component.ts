import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: "ns-redirect-map",
  templateUrl: "./redirect-map.component.html",
  styleUrls: ["./redirect-map.component.scss"]
})
export class RedirectMapComponent implements OnInit {

  constructor(private routerExtensions: RouterExtensions) {
  }

  ngOnInit() {

      console.log('redirect component to map')
      this.routerExtensions.navigate(["/map"]).then();
  }

}
