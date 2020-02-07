import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  page= 1;
  itemPerPage: 30
  posts: Post[];
  constructor() { }

  ngOnInit() {
    this.posts = [
      {
        image: 'https://ik.imagekit.io/juncyboy/tr:ar-4-3,w-250,q-20/bealkha.com/meta_tags_I7AknlwPBz.jpg',
        title: 'Menambahkan dinamic title <br> dan meta tag di angular',
        created_date: '2019-09-11 13:24:26',
        link: '/blog/menambahkan-dinamic-title-meta-tag-angular'
      },
      {
        image: 'https://ik.imagekit.io/juncyboy/tr:ar-4-3,w-250,q-20/bealkha.com/raspberry-pi-access-point_uAsqcyR3Y.png',
        title: 'Membuat Raspberry PI <br> menjadi access point',
        created_date: '2020-02-06 13:24:26',
        link: '/blog/membuat-raspberry-pi-menjadi-access-point'
      },
    ]
  }
}

interface Post {
  image: string;
  title: string;
  created_date: string;
  link: string;
}
