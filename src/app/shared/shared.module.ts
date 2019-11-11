import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { TitleComponent } from "./title/title.component";

@NgModule({
    imports: [],
    declarations: [
        TitleComponent
    ],
    exports: [
        TitleComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SharedModule { }
