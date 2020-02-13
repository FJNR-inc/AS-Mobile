import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { RouterExtensions } from "nativescript-angular";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { AssessmentsService } from "~/app/services/assessments.service";
import { Assessment } from "~/app/models/assessment";
import { Page } from "~/app/models/page";
import { Question } from "~/app/models/question";

@Component({
  selector: "ns-question",
  templateUrl: "./question.component.html",
  styleUrls: [
      "./question.component.scss"
  ]
})
export class QuestionComponent implements OnInit {

    assessmentIndex: number = null;
    pageIndex: number = null;
    assessment: Assessment;
    page: Page;
    pages: Array<Page>;
    questions: Array<Question>;
    selectedChoices: Map<string, Array<string>> = new Map();

    constructor(public routerExtensions: RouterExtensions,
                private activatedRoute: ActivatedRoute,
                private assessmentService: AssessmentsService,
                private router: Router) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.assessmentIndex = params.idQuizz;
            this.pageIndex = params.idPage;
            this.refreshAssessment();
        });
    }

    refreshAssessment() {
        this.assessmentService.get(this.assessmentIndex).subscribe(
            (assessment) => {
                this.assessment =  new Assessment(assessment);
                this.getPage(this.pageIndex);
            }
        );
    }

    getPage(id: number) {
        let index = 0;
        if (id) {
            index = id;
        }
        this.assessmentService.listPagesOfAssessment(this.assessmentIndex).subscribe(
            (pages) => {
                this.pages = pages.results.map(
                    (item) => new Page(item)
                );
                this.page = this.pages[index];
                this.getQuestions(this.page.id);
            }
        );
    }

    getQuestions(idPage: number) {
        this.assessmentService.listQuestionsOfPage(idPage).subscribe(
            (questions) => {
                this.questions = questions.results.map(
                    (item) => new Question(item)
                );
                for (const question of this.questions) {
                    this.selectedChoices.set(question.url, []);
                }
            }
        );
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    goBack() {
        this.routerExtensions.back();
    }

    toggleChoice(question, choice) {
        if (question.type === "CB") {
            if (this.selectedChoices.get(question.url).lastIndexOf(choice.url) >= 0) {
                this.selectedChoices.get(question.url).splice(
                    this.selectedChoices.get(question.url).lastIndexOf(choice.url),
                    1
                );
            } else {
                this.selectedChoices.get(question.url).push(choice.url);
            }
        } else if (question.type === "RB") {
            if (this.selectedChoices.get(question.url).lastIndexOf(choice.url) >= 0) {
                this.selectedChoices.set(question.url, []);
            } else {
                this.selectedChoices.set(question.url, [choice.url]);
            }
        }
    }

    submitAnswer() {
        for (const question of this.questions) {
            const answer = {
                question: question.url,
                choices: this.selectedChoices.get(question.url)
            };

            this.assessmentService.submitAnswer(answer).subscribe(
                () => {
                    let index = 1;
                    if (this.pageIndex) {
                        index = this.pageIndex + 1;
                    }
                    if (this.pages.length > index) {
                        this.router.navigate(
                            ["/map/quiz/" + this.assessmentIndex + "/question/" + index]
                        );
                    } else {
                        this.router.navigate(["/map/quiz/" + this.assessmentIndex + "/results"]);
                    }
                }
            );
        }
    }

    isChecked(question, choice) {
        return this.selectedChoices.get(question.url).lastIndexOf(choice.url) >= 0;
    }
}
