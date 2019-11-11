import { Component, Input } from "@angular/core";

@Component({
  selector: "TitleComponent",
  templateUrl: "./title.component.html",
  styleUrls: ["./title.component.scss"]
})
export class TitleComponent {
    @Input() type: string;
    @Input() text: string;
    @Input() textAlignment: "initial" | "left" | "center" | "right" = "left";
    @Input() textWrap: boolean = true;
}
