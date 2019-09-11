import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle('Yuda Ferry Mahendra | bealkha.com');
    this.metaService.addTags([
      { name: 'title', content: 'Yuda Ferry Mahendra | bealkha.com' },
      {
        name: 'description',
        content:  'Yuda Ferry Mahendra, seorang web programmer sejak '+
                  '2010. Saat ini mendalami nodejs, angular, ionic, dan mongodb.'
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Yuda Ferry Mahendra' },
      { name: 'keywords', content: 'Yuda Ferry Mahendra, Full stack programmer, Nodejs' },
      { name: 'date', content: '2019-09-02', scheme: 'YYYY-MM-DD' },
      { name: 'revisit-after', content: '7 days' },
      { httpEquiv: 'Content-Type', content: 'text/html' },
      { property: 'og:title', content: 'Yuda Ferry Mahendra | bealkha.com' },
      { property: 'og:type', content: 'website' },
      { charset: 'UTF-8' }
    ], true);
  }

}
