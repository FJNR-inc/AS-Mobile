import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { Question } from "~/app/models/question";
import { AssessmentsService } from "~/app/services/assessments.service";
import { Assessment } from "~/app/models/assessment";

@Component({
    selector: "ns-result",
    templateUrl: "./result.component.html",
    styleUrls: [
        "./result.component.scss"
    ]
})

export class ResultComponent implements OnInit {

    assessment: Assessment;
    assessmentIndex: number = null;
    questions: Array<Question> = [];

    constructor(public routerExtensions: RouterExtensions,
                private activatedRoute: ActivatedRoute,
                private assessmentService: AssessmentsService,
                private router: Router) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.assessmentIndex = params.idQuizz;
            this.getQuestions(this.assessmentIndex);
            this.refreshAssessment();
        });
    }

    refreshAssessment() {
        this.assessmentService.get(this.assessmentIndex).subscribe(
            (assessment) => {
                this.assessment =  new Assessment(assessment);
            }
        );
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

    redirectToArtwork() {
        this.router.navigate(["/map/artworks/artwork/" + this.assessment.artwork.id]);
    }
}
