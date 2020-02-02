import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { MaincontainerComponent } from './maincontainer/maincontainer.component';
import {Routes, RouterModule} from '@angular/router';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { Editemployee1Component } from './editemployee1/editemployee1.component';
const appRoutes:Routes=[
  { path:'',component:MaincontainerComponent},
  { path:'addemployee',component:AddemployeeComponent},
  { path:'addemployee/:empname',component:AddemployeeComponent},
  { path:'editemployee',component:EditemployeeComponent},
  { path:'viewemployee',component:ViewemployeeComponent},
  { path:'deleteemployee',component:EditemployeeComponent},
  {path:'maincontainer',component:MaincontainerComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddemployeeComponent,
    ViewemployeeComponent,
    MaincontainerComponent,
    EditemployeeComponent,
    Editemployee1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
