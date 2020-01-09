import { Component, Input, OnInit } from "@angular/core";
import { Assessment } from "~/app/models/assessment";

@Component({
  selector: "ns-list-quizz",
  templateUrl: "./list-quizz.component.html",
  styleUrls: ["./list-quizz.component.scss"]
})
export class ListQuizzComponent implements OnInit {

    @Input() assessments: Array<Assessment>;

    constructor() { }

    ngOnInit() {
    }

}
