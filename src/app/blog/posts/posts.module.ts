import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { ListComponent } from './list/list.component';
import { Post20190913Component } from './post20190913/post20190913.component';
import { Post20200206Component } from './post20200206/post20200206.component';
import { Post20200813Component } from './post20200813/post20200813.component';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';


@NgModule({
  declarations: [
    PostsComponent,
    ListComponent,
    Post20190913Component,
    Post20200206Component,
    Post20200813Component
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ]
})
export class PostsModule { }
