import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'heroes', loadChildren: ()=> import('./heroes/heroes.module').then(m=>m.HeroesModule)},
  {path: 'detail/:id', loadChildren:()=>import('./hero-detail/hero-detail.module').then(m=>m.HeroDetailModule)},
  {path: 'dashboard', loadChildren: ()=> import('./dashboard/dashboard.module').then(m=>m.DashboardModule)},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
]

@NgModule({
 exports:[RouterModule],
 imports:[RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
