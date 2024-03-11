import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { News} from 'src/app/modules/core/models/docs.model';
import { NewsService } from 'src/app/modules/core/services/news.service';
import { ScrollService } from 'src/app/modules/core/services/scroll.service';
import { news } from 'src/assets/docs/docs';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss'],
})
export class NewsDetailsComponent implements OnInit, OnDestroy {
  openModal(id: number, imgId:number) {
    this.newsService.openModal(id, imgId);
    console.log(id);
  }
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private scrollService: ScrollService,
    private newsService: NewsService
  ) {}
  news!: News;
  id!: number;
  back() {
    this.router.navigate(['/aktualnosci']);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = Number(params.get('id'));
      this.news = news[this.id - 1];
      console.log(params);
      console.log(` id z ngOnInit ${this.id}`);
      console.log(this.news);
    });
    this.scrollService.stopScroll();
  }
  ngOnDestroy(): void {
    this.scrollService.startScroll();
  }
}
