import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app/app-routing.module'; // Make sure this path is correct

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    AppRoutingModule,
    RouterModule// This should include your routing setup  ]
]}).catch(err => console.error(err));
