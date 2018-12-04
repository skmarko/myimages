import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/app/header/header.component';
import { HomepageComponent } from 'src/app/homepage/homepage.component';
import { FooterComponent } from 'src/app/footer/footer.component';

const routes:Routes =[
  {path:'',component:HomepageComponent ,children:
  [{path:'header',component:HeaderComponent},
{path:'footer',component:FooterComponent}]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class HomeRoutingModule { }
