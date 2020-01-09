import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";

@Component({
  selector: "ns-choice",
  templateUrl: "./choice.component.html",
  styleUrls: ["./choice.component.scss"]
})
export class ChoiceComponent implements OnInit {

  @Input() checked = false;
  @Input() text = "";
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onTap() {
      this.toggle.emit();
  }
}
