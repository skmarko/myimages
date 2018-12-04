import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/header/header.component';
import { FooterComponent } from 'src/app/footer/footer.component';
import { HomepageComponent } from 'src/app/homepage/homepage.component';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
  
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    HeaderComponent,FooterComponent,HomepageComponent
  ]
})
export class HomeModule { }
