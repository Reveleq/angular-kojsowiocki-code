import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Achievement } from 'src/app/modules/core/models/docs.model';
import { ScrollService } from 'src/app/modules/core/services/scroll.service';
import { achievements } from 'src/assets/docs/docs';

@Component({
  selector: 'app-achievements-popup',
  templateUrl: './achievements-popup.component.html',
  styleUrls: ['./achievements-popup.component.scss'],
})
export class AchievementsPopupComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private scrollService: ScrollService
  ) {}
  achievement!: Achievement;
  id!: number;
  src: string | undefined;
  back() {
    this.router.navigate(['/trofea']);
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = Number(params.get('id'));
      this.achievement = achievements[this.id - 1];
      this.src = this.achievement.src;
      this.scrollService.stopScroll();
    });
  }
  ngOnDestroy(): void {
    this.scrollService.startScroll();
  }
  backPopup() {
    this.router.navigate([`/trofea/${this.id - 1}`]);
  }
  nextPopup() {
    this.router.navigate([`/trofea/${this.id + 1}`]);
  }
}
