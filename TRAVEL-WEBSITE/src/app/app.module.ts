import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { ServicesComponent } from './component/services/services.component';
import { DistrictsComponent } from './component/districts/districts.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { FooterComponent } from './component/footer/footer.component';
import { CalicutComponent } from './districts/calicut/calicut.component';
import { KannurComponent } from './districts/kannur/kannur.component';
import { MalappuramComponent } from './districts/malappuram/malappuram.component';
import { KasargodComponent } from './districts/kasargod/kasargod.component';
import { WayanadComponent } from './districts/wayanad/wayanad.component';
import { KochiComponent } from './districts/kochi/kochi.component';
import { IdukkiComponent } from './districts/idukki/idukki.component';
import { TrissurComponent } from './districts/trissur/trissur.component';
import { KottayamComponent } from './districts/kottayam/kottayam.component';
import { PalakkadComponent } from './districts/palakkad/palakkad.component';
import { AlappuzhaComponent } from './districts/alappuzha/alappuzha.component';
import { TrivandrumComponent } from './districts/trivandrum/trivandrum.component';
import { KollamComponent } from './districts/kollam/kollam.component';
import { PathanamthittaComponent } from './districts/pathanamthitta/pathanamthitta.component';
import { PackagesComponent } from './component/packages/packages.component';
import { RouterModule } from '@angular/router';
import { HelpComponent } from './component/help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ServicesComponent,
    DistrictsComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    CalicutComponent,
    KannurComponent,
    MalappuramComponent,
    KasargodComponent,
    WayanadComponent,
    KochiComponent,
    IdukkiComponent,
    TrissurComponent,
    KottayamComponent,
    PalakkadComponent,
    AlappuzhaComponent,
    TrivandrumComponent,
    KollamComponent,
    PathanamthittaComponent,
    PackagesComponent,
    HelpComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
