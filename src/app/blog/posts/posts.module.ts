import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { ListComponent } from './list/list.component';
import { Post20190913Component } from './post20190913/post20190913.component';

@NgModule({
  declarations: [
    PostsComponent,
    ListComponent,
    Post20190913Component
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
