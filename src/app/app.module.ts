import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { SignupComponent } from "./auth/signup/signup.component";
import { LoginComponent } from "./auth/login/login.component";
import { TrainingComponent } from "./training/training.component";
import { CurrentTrainingComponent } from "./training/current-training/current-training.component";
import { NewTrainingComponent } from "./training/new-training/new-training.component";
import { PastTrainingComponent } from "./training/past-training/past-training.component";

import { AppComponent } from "./app.component";
import { MaterialModule } from "./material.module";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
    declarations: [
  
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        AppRoutingModule,
        AppComponent,
        SignupComponent,
        LoginComponent,
        TrainingComponent,
        CurrentTrainingComponent,
        NewTrainingComponent,
        PastTrainingComponent,
        
    ],
    providers: [],
    bootstrap: []
})

export class AppModule {}