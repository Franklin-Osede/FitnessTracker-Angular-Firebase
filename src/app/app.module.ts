import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'


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