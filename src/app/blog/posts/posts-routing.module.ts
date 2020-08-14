import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { Post20190913Component } from './post20190913/post20190913.component';
import { Post20200206Component } from './post20200206/post20200206.component';
import { Post20200813Component } from './post20200813/post20200813.component';

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'menambahkan-dinamic-title-meta-tag-angular', component: Post20190913Component },
  { path: 'membuat-raspberry-pi-menjadi-access-point', component:  Post20200206Component},
  { path: 'backup-restore-mongodb-realm-setting', component:  Post20200813Component},
  { path: '**', redirectTo: '/blog/list' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
