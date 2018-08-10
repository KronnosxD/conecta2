
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ViewerComponent } from './components/viewer/viewer.component';


const routes: Routes = [
  { path: 'home', component: ViewerComponent},
 // { path: 'store/list', component: ProductListComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
  //{ path: '**', component: MissingComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }