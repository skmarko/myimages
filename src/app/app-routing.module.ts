import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { from } from 'rxjs';


const routes:Routes=[{
  path :'',loadChildren:'./home/home/home.module#HomeModule'
}]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
    
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
