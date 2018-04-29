import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { 
    FontAwesomeModule, 
    FaIconComponent 
} from "@fortawesome/angular-fontawesome";

/*

    Components

*/ 
import { SignupComponent } from "./signup.component";
import { UploadPhotoComponent } from "./upload-photo/upload-photo.component";
import { BasicInfoComponent } from "./basic-info/basic-info.component";

/*

    Routes

*/ 
import { routes } from "./signup.routing";


@NgModule({
    declarations: [
        SignupComponent,
        BasicInfoComponent,
        UploadPhotoComponent
    ],
    imports: [ 
        CommonModule,
        FontAwesomeModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        SignupComponent,
        BasicInfoComponent,
        UploadPhotoComponent
    ],
    providers: [],
})
export class SignupModule {}