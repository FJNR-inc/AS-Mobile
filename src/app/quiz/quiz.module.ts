import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SharedModule } from "~/app/shared/shared.module";
import { ModalDialogService } from "nativescript-angular";
import { QuestionComponent } from "~/app/quiz/question/question.component";
import { QuizRoutingModule } from "~/app/quiz/quiz-routing.module";
import { TNSCheckBoxModule } from "@nstudio/nativescript-checkbox/angular";
import { ChoiceComponent } from "./choice/choice.component";
import { ResultComponent } from './result/result.component';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        QuizRoutingModule,
        SharedModule,
        TNSCheckBoxModule,
        TranslateModule
    ],
    declarations: [
        QuestionComponent,
        ChoiceComponent,
        ResultComponent
    ],
    providers: [
        ModalDialogService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class QuizModule { }
