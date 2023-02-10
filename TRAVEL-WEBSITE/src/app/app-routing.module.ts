import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { HelpComponent } from './component/help/help.component';
import { HomeComponent } from './component/home/home.component';
import { ServicesComponent } from './component/services/services.component';
import { AlappuzhaComponent } from './districts/alappuzha/alappuzha.component';
import { CalicutComponent } from './districts/calicut/calicut.component';
import { IdukkiComponent } from './districts/idukki/idukki.component';
import { KannurComponent } from './districts/kannur/kannur.component';
import { KasargodComponent } from './districts/kasargod/kasargod.component';
import { KochiComponent } from './districts/kochi/kochi.component';
import { KollamComponent } from './districts/kollam/kollam.component';
import { KottayamComponent } from './districts/kottayam/kottayam.component';
import { MalappuramComponent } from './districts/malappuram/malappuram.component';
import { PalakkadComponent } from './districts/palakkad/palakkad.component';
import { PathanamthittaComponent } from './districts/pathanamthitta/pathanamthitta.component';
import { TrissurComponent } from './districts/trissur/trissur.component';
import { TrivandrumComponent } from './districts/trivandrum/trivandrum.component';
import { WayanadComponent } from './districts/wayanad/wayanad.component';

const routes: Routes = [ 
{path:'about',component: AboutComponent},
{path:'service',component:ServicesComponent},
{path:'help',component:HelpComponent},

{path:' ',component:HomeComponent},
{path:'kozhikkode',component:CalicutComponent},
{path:'kollam',component:KollamComponent},
{path:'pathanamthitta',component:PathanamthittaComponent},
{path:'idukki',component:IdukkiComponent},
{path:'kochi',component: KochiComponent},
{path:'trivandrum',component:TrivandrumComponent},
{path:'palakkad',component: PalakkadComponent},
{path:'wayanad',component: WayanadComponent},
{path:'trissur',component:TrissurComponent},
{path:'kannur',component: KannurComponent},
{path:'kottayam',component: KottayamComponent},
{path:'malappuram',component:MalappuramComponent},
{path:'kasargod',component:KasargodComponent},
{path:'alappuzha',component: AlappuzhaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
 export const routingComponents =[AboutComponent,ServicesComponent]
