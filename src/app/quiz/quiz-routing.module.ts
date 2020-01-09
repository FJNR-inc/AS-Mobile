import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { QuestionComponent } from "~/app/quiz/question/question.component";
import { ResultComponent } from "~/app/quiz/result/result.component";

const routes: Routes = [
    { path: ":idQuizz", component: QuestionComponent },
    { path: ":idQuizz/question/:idPage", component: QuestionComponent },
    { path: ":idQuizz/results", component: ResultComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class QuizRoutingModule { }
