import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-post20200206',
  templateUrl: './post20200206.component.html',
  styleUrls: ['./post20200206.component.scss']
})
export class Post20200206Component implements OnInit {
  articleDate: string;
  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    this.articleDate = '2020-02-06 13:07:55';
    this.titleService.setTitle('Membuat Raspberry PI menjadi access point | Yuda | Blog');
    this.metaService.addTags([
      { name: 'title', content: 'Membuat Raspberry PI menjadi access point | Yuda | Blog' },
      {
        name: 'description',
        content: 'Yuda Ferry Mahendra, Raspberry PI adalah komputer mini yang serba guna, '+
                'salah satu cara memanfaatkan raspberry pi adalah menjadikannya sebagai access point'
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Yuda Ferry Mahendra' },
      { name: 'keywords', content: 'Yuda Ferry Mahendra, raspberry pi access poin, raspberry pi, access point' },
      { name: 'date', content: this.articleDate, scheme: 'YYYY-MM-DD HH:mm:ss' },
      { name: 'revisit-after', content: '7 days' },
      { httpEquiv: 'Content-Type', content: 'text/html' },
      { property: 'og:title', content: 'Membuat Raspberry PI menjadi access point | Yuda | Blog' },
      { property: 'og:type', content: 'website' },
      { charset: 'UTF-8' }
    ], true);
  }

}
