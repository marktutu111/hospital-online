import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";



import { AppComponent } from './app.component';


/*

  Router

*/ 
import { routes } from "./app.routing";
import { CallComponent } from './components/call/call.component';
import { WaitingComponent } from './components/waiting/waiting.component';



@NgModule({
  declarations: [
    AppComponent,
    CallComponent,
    WaitingComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
