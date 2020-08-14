import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-post20200813',
  templateUrl: './post20200813.component.html',
  styleUrls: ['./post20200813.component.scss']
})
export class Post20200813Component implements OnInit {
  articleDate: string;
  constructor(private titleService: Title, private metaService: Meta) { }


  ngOnInit(): void {
    this.articleDate = '2020-08-15 05:00:00';
    this.titleService.setTitle('Backup dan Restore Mongodb Application Setting | Yuda | Blog');
    this.metaService.addTags([
      { name: 'title', content: 'Backup dan Restore Mongodb Application Setting | Yuda | Blog' },
      {
        name: 'description',
        content: 'Yuda Ferry Mahendra, Mongodb realm app berisi banyak konfigurasi, untuk mengamankan '+
                'konfigurasi tersebut ada feature backup dan restore yang bisa di manfaatkan'
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Yuda Ferry Mahendra' },
      { name: 'keywords', content: 'Yuda Ferry Mahendra, raspberry pi access poin, raspberry pi, access point' },
      { name: 'date', content: this.articleDate, scheme: 'YYYY-MM-DD HH:mm:ss' },
      { name: 'revisit-after', content: '7 days' },
      { httpEquiv: 'Content-Type', content: 'text/html' },
      { property: 'og:title', content: 'Backup dan Restore Mongodb Application Setting | Yuda | Blog' },
      { property: 'og:type', content: 'website' },
      { charset: 'UTF-8' }
    ], true);
  }
}
