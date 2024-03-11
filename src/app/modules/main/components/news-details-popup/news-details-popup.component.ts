import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { News, NewsPopup } from 'src/app/modules/core/models/docs.model';
import { ScrollService } from 'src/app/modules/core/services/scroll.service';
import { NewsService } from 'src/app/modules/core/services/news.service';
import { news } from 'src/assets/docs/docs';
@Component({
  selector: 'app-news-details-popup',
  templateUrl: './news-details-popup.component.html',
  styleUrls: ['./news-details-popup.component.scss'],
})
export class NewsDetailsPopupComponent {
  constructor(
    private newsService: NewsService,
    private router: Router,
    private route: ActivatedRoute,
    private scrollService: ScrollService
  ) {}
  news!: News;
  imgObj!: NewsPopup[];
  ArrayLength!: number;
  id!: number;
  idNews!: number;
  src: string | undefined;
  path!: string;
  img!: NewsPopup;
  back() {
    this.router.navigate([`aktualnosci/${this.idNews}`]);
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.idNews = this.newsService.id;
      if (this.idNews === undefined) {
        this.router.navigate(['aktualnosci/']);
        return;
      }
      this.id = Number(params.get('id'));
      this.news = news[this.idNews - 1];
      this.imgObj = this.news.srcDetails;
      this.img = this.imgObj[this.id - 1];
      this.src = this.img.src;
      this.ArrayLength = this.imgObj.length;
      this.scrollService.stopScroll();
    });
  }
  ngOnDestroy(): void {
    if (this.idNews === undefined) {
      return;
    } else {
      this.scrollService.startScroll();
    }
  }
  backPopup() {
    this.router.navigate([`/aktualnosci/${this.idNews}/${this.id - 1}`]);
  }
  nextPopup() {
    this.router.navigate([`/aktualnosci/${this.idNews}/${this.id + 1}`]);
  }
}
