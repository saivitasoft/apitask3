import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { SectionComponent } from './section/section.component';


const routes: Routes = [
  {path:'aside',component:AsideComponent},
  {path:'footer',component:FooterComponent},
  {path:'header',component:HeaderComponent},
  {path:'nav',component:NavComponent},
  {path:'section',component:SectionComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
