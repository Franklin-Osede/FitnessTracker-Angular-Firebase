import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { SignupComponent } from "./auth/signup/signup.component";
import { LoginComponent } from "./auth/login/login.component";
import { TrainingComponent } from "./training/training.component";


import { AppComponent } from "./app.component";
import { MaterialModule } from "./material.module";

@NgModule({
    declarations: [
    
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule
    ],
    providers: [],
    bootstrap: []
})

export class AppModule {}