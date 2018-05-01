import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { routes } from "./settings.routing";
import { SettingsComponent } from "./settings.component";
import { 
    LazyTabsComponent,
 } from "../components";


@NgModule({
    declarations: [
        SettingsComponent,
        LazyTabsComponent,
    ],
    imports: [ 
        CommonModule,
        AngularFontAwesomeModule,
     ],
    exports: [
        SettingsComponent,
    ],
    providers: [],
})
export class SettingsModule {}