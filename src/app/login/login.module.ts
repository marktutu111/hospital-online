import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

/*

    Components

*/ 
import { LoginComponent } from "./login.component";

/*

    Routes

*/ 
import { routes } from "./login.routing";


@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [ 
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        LoginComponent
    ],
    providers: [],
})
export class LoginModule {}