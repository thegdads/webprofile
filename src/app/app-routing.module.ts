import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './profile/home/home.component';

// const routes: Routes = [
//   { path: '', redirectTo: '/profile/home', pathMatch: 'full' },
//   { path: 'profile', loadChildren: () => import('./profile/profile.module').then(mod => mod.ProfileModule) },
//   { path: '**', redirectTo: '/profile/home' }
// ];
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(mod => mod.ProfileModule) },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
