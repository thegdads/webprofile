import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-post20190913',
  templateUrl: './post20190913.component.html',
  styleUrls: ['./post20190913.component.scss']
})
export class Post20190913Component implements OnInit {
  articleDate: string;
  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit() {
    this.articleDate = '2019-09-16 13:09:02';

    this.titleService.setTitle('Menambahkan dinamic title dan meta tag di angular | Yuda | Blog');
    this.metaService.addTags([
      { name: 'title', content: 'Menambahkan dinamic title dan meta tag di angular | Yuda | Blog' },
      {
        name: 'description',
        content: 'Yuda Ferry Mahendra, Cara memudahkan search engine mencari website kita ada beberapa cara ' +
          'salah satu yang paling ampuh dan umum adalah dengan title web dan meta tag web yang ' +
          'bersahabat dengan search engine.'
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Yuda Ferry Mahendra' },
      { name: 'keywords', content: 'Yuda Ferry Mahendra, angular metadata, angular title, angular' },
      { name: 'date', content: this.articleDate, scheme: 'YYYY-MM-DD HH:mm:ss' },
      { name: 'revisit-after', content: '7 days' },
      { httpEquiv: 'Content-Type', content: 'text/html' },
      { property: 'og:title', content: 'Menambahkan dinamic title dan meta tag di angular | Yuda | Blog' },
      { property: 'og:type', content: 'website' },
      { charset: 'UTF-8' }
    ], true);
  }

}
