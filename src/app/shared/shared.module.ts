import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SavePathPipe } from './pipes/save-path.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesSectionComponent } from './components/features-section/features-section.component';
import { DownloadSectionComponent } from './components/download-section/download-section.component';
import { JourneySectionComponent } from './components/journey-section/journey-section.component';

@NgModule({
  declarations: [
    SavePathPipe,
    NavbarComponent,
    HeroComponent,
    FeaturesSectionComponent,
    DownloadSectionComponent,
    JourneySectionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
