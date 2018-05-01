import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { AngularFontAwesomeModule } from 'angular-font-awesome';


/*

    Components

*/
import { HomeComponent } from "./home.component";
import { SettingsModule } from "../settings/settings.module";


import { routes } from "./home.routing";
import { HeaderComponent } from "../components";
import { 
    ConsultationsComponent,
    PatientConsultationsComponent, 
    InfoContainerComponent,
    WaitingComponent,
    CallComponent,
    ChatComponent,
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
        ChatComponent,
    ],
    imports: [ 
        CommonModule,
        AngularFontAwesomeModule,
        SettingsModule,
        RouterModule.forChild(routes)
    ],
    providers: [],
})
export class HomeModule {}