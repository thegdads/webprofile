import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { Post20190913Component } from './post20190913/post20190913.component';


const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'menambahkan-dinamic-title-meta-tag-angular', component: Post20190913Component },
  { path: '**', redirectTo: '/blog/list' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
