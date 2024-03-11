import { Component, OnInit } from '@angular/core';

import { PopupService } from 'src/app/modules/core/services/popup.service';
import { ScrollService } from 'src/app/modules/core/services/scroll.service';
import { achievements } from 'src/assets/docs/docs';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss'],
})
export class AchievementsComponent implements OnInit{
  achievemets = achievements;
  achievements = achievements;
  constructor(
    private popupService: PopupService,
    private scrollService: ScrollService
  ) {}
  ngOnInit(): void {
    setTimeout(() => {
      this.scrollService.scrollToSection()
    }, 200);
  
    }
  openModal(id: number) {
    this.popupService.openModal(id);
  }
}
