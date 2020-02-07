import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { ListComponent } from './list/list.component';
import { Post20190913Component } from './post20190913/post20190913.component';
import { Post20200206Component } from './post20200206/post20200206.component';

@NgModule({
  declarations: [
    PostsComponent,
    ListComponent,
    Post20190913Component,
    Post20200206Component
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
