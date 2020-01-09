import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { Question } from "~/app/models/question";
import { AssessmentsService } from "~/app/services/assessments.service";

@Component({
    selector: "ns-result",
    templateUrl: "./result.component.html",
    styleUrls: [
        "./result.component.scss"
    ]
})

export class ResultComponent implements OnInit {

    assessmentIndex: number = null;
    questions: Array<Question> = [];

    constructor(public routerExtensions: RouterExtensions,
                private activatedRoute: ActivatedRoute,
                private assessmentService: AssessmentsService) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.assessmentIndex = params.idQuizz;
            this.getQuestions(this.assessmentIndex);
        });
    }

    getQuestions(idAssessment: number) {
        this.assessmentService.listQuestionsOfAssessment(idAssessment).subscribe(
            (questions) => {
                this.questions = questions.results.map(
                    (item) => new Question(item)
                );
            }
        );
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    get percentage() {
        let total = 0;
        let success = 0;

        for (const question of this.questions) {
            total += 1;
            if (question.correctly_answered) {
                success += 1;
            }
        }

        return success / total * 100;
    }

    get welcomeText() {
        if (this.percentage > 50) {
            return "Bravo!";
        } else {
            return "Fini!";
        }
    }
}
