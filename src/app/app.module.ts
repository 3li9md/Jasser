import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Interceptors } from './core/interceptor/interceptor';
import { ContactSectionComponent } from './shared/components/contact-section/contact-section.component';
import { DownloadSectionComponent } from './shared/components/download-section/download-section.component';
import { FeaturesSectionComponent } from './shared/components/features-section/features-section.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeroComponent } from './shared/components/hero/hero.component';
import { JourneySectionComponent } from './shared/components/journey-section/journey-section.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    FeaturesSectionComponent,
    DownloadSectionComponent,
    JourneySectionComponent,
    ContactSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Interceptors],
  bootstrap: [AppComponent]
})
export class AppModule { }
