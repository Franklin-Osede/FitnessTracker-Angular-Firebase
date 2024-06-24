import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { AppRoutingModule } from './app/app-routing.module';

if (environment.production) {
    enableProdMode();
}

// Bootstrap the application and include the providers from the AppRoutingModule
bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(AppRoutingModule)]
}).catch(err => console.error(err));
