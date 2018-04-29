import { Routes } from "@angular/router";

import { SignupComponent } from "./signup.component";
import { BasicInfoComponent } from "./basic-info/basic-info.component";
import { UploadPhotoComponent } from "./upload-photo/upload-photo.component";

export const routes: Routes = [
    { path: '', component: SignupComponent },
    { path: 'info', component: BasicInfoComponent },
    { path: 'upload-photo', component: UploadPhotoComponent }
]
