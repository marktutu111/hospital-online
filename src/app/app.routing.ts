import { Routes } from "@angular/router";

/*

    Components

*/ 

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    { path: 'home', loadChildren: './home/home.module#HomeModule' },
]