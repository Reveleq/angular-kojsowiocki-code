import { Component, OnInit } from '@angular/core';
import { HistoryDetailesService } from 'src/app/modules/core/services/history-detailes.service';
import { ScrollService } from 'src/app/modules/core/services/scroll.service';
import { timeline } from 'src/assets/docs/docs';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  clickLink(id: number) {
    this.historyService.clickLink(id)
  }
  constructor(
    private scrollService: ScrollService,
    private historyService: HistoryDetailesService
  ) {}
  timeline = timeline;
  ngOnInit(): void {
    setTimeout(() => {
      this.scrollService.scrollToSection();
    }, 200);
  }
}
