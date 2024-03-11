import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/modules/core/services/scroll.service';
import { news } from 'src/assets/docs/docs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  constructor(private scrollService: ScrollService) {}
  news = news
  ngOnInit(): void {
    setTimeout(() => {
      this.scrollService.scrollToSection();
    }, 200);
  }
}
