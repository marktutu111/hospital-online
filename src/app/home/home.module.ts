import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

/*

    Components

*/
import { HomeComponent } from "./home.component";
import { routes } from "./home.routing";


@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [ 
        CommonModule, 
        RouterModule.forChild(routes)
    ],
    exports: [
        HomeComponent
    ],
    providers: [],
})
export class HomeModule {}