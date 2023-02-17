import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatMenuModule} from '@angular/material/menu';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { BlackadamComponent } from './page/blackadam/blackadam.component';
import { BlackpantherComponent } from './page/blackpanther/blackpanther.component';
import { MovieComponent } from './page/movie/movie.component';

import { Routes,RouterModule } from '@angular/router';
import { GreenbookComponent } from './page/greenbook/greenbook.component';
import { MainComponent } from './page/main/main.component';

const appRouter: Routes = [
  {path:'',component:MainComponent},
  {path:'movie',component:MovieComponent,children:[
    {path:'blackadam',component:BlackadamComponent,outlet:'movieoutlet'},
    {path:'blackpanther',component:BlackpantherComponent,outlet:'movieoutlet'},
    {path:'Greenbook',component:GreenbookComponent,outlet:'movieoutlet'}
  ]},

]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BlackadamComponent,
    BlackpantherComponent,
    MovieComponent,
    GreenbookComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatAutocompleteModule,
    MatMenuModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
