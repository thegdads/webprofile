import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/profile/home', pathMatch: 'full' },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(mod => mod.ProfileModule) },
  { path: '**', redirectTo: '/profile/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
