import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import * as moment from 'moment';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit() {
    const date = moment().day(1).format('YYYY-MM-DD');
    this.titleService.setTitle('Yuda Ferry Mahendra | blog |bealkha.com');
    this.metaService.addTags([
      { name: 'title', content: 'Yuda Ferry Mahendra | blog | bealkha.com' },
      {
        name: 'description',
        content:  'Yuda Ferry Mahendra, blog pengalaman yang berhubungan dengan '+
                  'nodejs, angular, ionic, mongodb, dan lain-lain.'
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Yuda Ferry Mahendra' },
      { name: 'keywords', content: 'Yuda Ferry Mahendra, blog' },
      { name: 'date', content: date, scheme: 'YYYY-MM-DD' },
      { name: 'revisit-after', content: '7 days' },
      { httpEquiv: 'Content-Type', content: 'text/html' },
      { property: 'og:title', content: 'Yuda Ferry Mahendra | bealkha.com' },
      { property: 'og:type', content: 'website' },
      { charset: 'UTF-8' }
    ], true);
  }

}
