import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './profile/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(mod => mod.ProfileModule) },
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(mod => mod.BlogModule) },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
