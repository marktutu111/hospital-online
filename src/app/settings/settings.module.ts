import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { routes } from "./settings.routing";
import { SettingsComponent } from "./settings.component";
import { 
    LazyTabsComponent,
    ProfileComponent,
    PaymentMethodComponent
 } from "../components";


@NgModule({
    declarations: [
        SettingsComponent,
        LazyTabsComponent,
        ProfileComponent,
        PaymentMethodComponent,
    ],
    imports: [ 
        CommonModule,
        AngularFontAwesomeModule,
     ],
    exports: [
        SettingsComponent,
        ProfileComponent,
        PaymentMethodComponent,
    ],
    providers: [],
})
export class SettingsModule {}