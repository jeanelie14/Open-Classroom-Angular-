import { LOCALE_ID, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { registerLocaleData } from '@angular/common'
import { CarouselModule } from 'ngx-bootstrap/carousel'
import * as fr from '@angular/common/locales/fr'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FaceSnapComponent } from './face-snap/face-snap.component'
import { NavComponent } from './components/nav/nav.component'
import { CarouselComponent } from './components/carousel/carousel.component';
import { FaceSnapListComponent } from './components/face-snap-list/face-snap-list.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './components/single-face-snap/single-face-snap.component'

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent,
    NavComponent,
    CarouselComponent,
    FaceSnapListComponent,
    LandingPageComponent,
    SingleFaceSnapComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CarouselModule.forRoot()],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default)
  }
}
