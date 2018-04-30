import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { AngularFontAwesomeModule } from 'angular-font-awesome';


/*

    Components

*/
import { HomeComponent } from "./home.component";
import { routes } from "./home.routing";
import { HeaderComponent } from "../components";
import { 
    ConsultationsComponent,
    PatientConsultationsComponent, 
    InfoContainerComponent,
    WaitingComponent,
    CallComponent,
} from "../components";


@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent,
        ConsultationsComponent,
        PatientConsultationsComponent,
        InfoContainerComponent,
        WaitingComponent,
        CallComponent,
    ],
    imports: [ 
        CommonModule,
        AngularFontAwesomeModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        HomeComponent,
        HeaderComponent,
        ConsultationsComponent,
        PatientConsultationsComponent,
        InfoContainerComponent,
        WaitingComponent,
        CallComponent,
    ],
    providers: [],
})
export class HomeModule {}