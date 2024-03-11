import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Timeline } from 'src/app/modules/core/models/docs.model';
import { ScrollService } from 'src/app/modules/core/services/scroll.service';
import { timeline } from 'src/assets/docs/docs';

@Component({
  selector: 'app-history-details',
  templateUrl: './history-details.component.html',
  styleUrls: ['./history-details.component.scss'],
})
export class HistoryDetailsComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private scrollService: ScrollService
  ) {}
  timeline!: Timeline;
  id!: number;
  back() {
    this.router.navigate(['/historia']);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = Number(params.get('id'));
      this.timeline = timeline[this.id - 1];
      console.log(` id z ngOnInit ${this.id}`);
      console.log(this.timeline);
    });
    this.scrollService.stopScroll();
  }
  ngOnDestroy(): void {
    this.scrollService.startScroll()
  }
}
